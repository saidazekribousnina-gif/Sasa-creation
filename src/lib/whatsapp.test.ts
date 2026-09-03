import { describe, it, expect } from 'vitest';
import {
  normalizePhoneNumber,
  formatPrice,
  buildOrderMessage,
  buildWhatsAppUrl,
} from './whatsapp';
import type { WhatsAppTexts } from './whatsapp';

const frTexts: WhatsAppTexts = {
  orderGreeting: 'Bonjour Sasa Creation ! Je souhaite passer une commande :',
  orderTotalLabel: 'Total',
  orderOutro: 'Merci de confirmer ma commande. 🙏',
};

describe('normalizePhoneNumber', () => {
  it('retire tous les caractères non numériques', () => {
    expect(normalizePhoneNumber('+216 90 271 601')).toBe('21690271601');
  });

  it('retourne une chaîne vide pour une entrée vide', () => {
    expect(normalizePhoneNumber('')).toBe('');
  });
});

describe('formatPrice', () => {
  it('formate un prix avec deux décimales et DT', () => {
    expect(formatPrice(220)).toBe('220.00 DT');
    expect(formatPrice(140.5)).toBe('140.50 DT');
  });
});

describe('buildOrderMessage', () => {
  it('construit un message complet avec articles, total et formules de politesse', () => {
    const message = buildOrderMessage(
      [
        { name: 'Collier Luna Perlé', quantity: 2, price: 220 },
        { name: 'Bracelet Terra', quantity: 1, price: 120 },
      ],
      frTexts
    );

    expect(message).toContain(frTexts.orderGreeting);
    expect(message).toContain('- Collier Luna Perlé × 2 — 440.00 DT');
    expect(message).toContain('- Bracelet Terra × 1 — 120.00 DT');
    expect(message).toContain('Total : 560.00 DT');
    expect(message).toContain(frTexts.orderOutro);
  });

  it('utilise les textes fournis (i18n)', () => {
    const enTexts: WhatsAppTexts = {
      orderGreeting: 'Hello Sasa Creation! I would like to order:',
      orderTotalLabel: 'Total',
      orderOutro: 'Please confirm my order. 🙏',
    };
    const message = buildOrderMessage(
      [{ name: 'Terra Bracelet', quantity: 1, price: 120 }],
      enTexts
    );
    expect(message).toContain('Hello Sasa Creation!');
    expect(message).toContain('Total : 120.00 DT');
  });

  it('gère un panier vide', () => {
    const message = buildOrderMessage([], frTexts);
    expect(message).toContain('Total : 0.00 DT');
  });
});

describe('buildWhatsAppUrl', () => {
  it('construit une URL wa.me avec le numéro normalisé et le message encodé', () => {
    const url = buildWhatsAppUrl('+216 90 271 601', 'Bonjour, je voudrais commander');
    expect(url).toBe(
      'https://wa.me/21690271601?text=' +
        encodeURIComponent('Bonjour, je voudrais commander')
    );
  });

  it('encode correctement les caractères spéciaux', () => {
    const url = buildWhatsAppUrl('+21690271601', 'É à ç — 🙏');
    expect(url).toContain(encodeURIComponent('É à ç — 🙏'));
  });

  it('encode l\'arabe sans perte', () => {
    const url = buildWhatsAppUrl('+21690271601', 'مرحباً، أريد طلب قطعة');
    expect(url).toContain(encodeURIComponent('مرحباً، أريد طلب قطعة'));
  });
});
