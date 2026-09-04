import { test, expect } from '@playwright/test';

// Parcours critique n°3 : switch de langue → RTL complet en arabe
test('le switch vers l\'arabe active dir=rtl et traduit le hero', async ({ page }) => {
  await page.goto('/');

  // Attend que le hero soit rendu (animation d'entrée)
  await page.waitForSelector('h1', { timeout: 15_000 });

  // Langue initiale : LTR
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');

  // Clique le sélecteur arabe (ع)
  const arButton = page.locator('nav button[aria-label="العربية"]');
  await arButton.click();

  // Le document passe en RTL et la langue change
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');

  // Le title de l'onglet est traduit
  await expect(page).toHaveTitle(/ساسا كريشن|حلي/);

  // Le numéro de téléphone reste LTR (anti-miroir bidi)
  const phoneLink = page.locator('a[href*="tel:"]').first();
  await expect(phoneLink).toHaveAttribute('dir', 'ltr');
});

test('le switch vers l\'anglais traduit le hero et reste LTR', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('h1', { timeout: 15_000 });

  await page.locator('nav button[aria-label="English"]').click();

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  await expect(page).toHaveTitle(/Handmade Jewelry/);
});
