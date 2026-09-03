import { describe, it, expect, vi, afterEach } from 'vitest';
import { trackEvent } from './analytics';

describe('trackEvent', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('appelle va.track avec le nom d\'événement et les propriétés', () => {
    const spy = vi.fn();
    vi.stubGlobal('window', { va: { track: spy } });

    trackEvent('add_to_cart', { product_id: 1, price: 220 });
    expect(spy).toHaveBeenCalledWith('add_to_cart', {
      product_id: 1,
      price: 220,
    });
  });

  it('appelle va.track sans propriétés si aucune fournie', () => {
    const spy = vi.fn();
    vi.stubGlobal('window', { va: { track: spy } });

    trackEvent('whatsapp_order_click');
    expect(spy).toHaveBeenCalledWith('whatsapp_order_click', undefined);
  });

  it("ne lève pas d'erreur si va est absent", () => {
    vi.stubGlobal('window', {});
    expect(() => trackEvent('add_to_cart')).not.toThrow();
  });

  it("ne lève pas d'erreur si window est undefined", () => {
    vi.stubGlobal('window', undefined);
    expect(() => trackEvent('add_to_cart')).not.toThrow();
  });

  it("ne lève pas d'erreur si track throw (bloqueur)", () => {
    vi.stubGlobal('window', {
      va: {
        track: () => {
          throw new Error('blocked');
        },
      },
    });
    expect(() => trackEvent('add_to_cart')).not.toThrow();
  });
});
