import { test, expect } from '@playwright/test';

// Parcours critique n°1 : ajouter au panier, compteur visible, persistance
test('ajouter au panier met à jour le compteur et persiste au rechargement', async ({ page }) => {
  await page.goto('/');

  await page.locator('#products').scrollIntoViewIfNeeded();

  const addButton = page.locator('#products button', { hasText: /panier|سلة|cart/i }).first();
  await addButton.waitFor({ state: 'visible', timeout: 15_000 });
  await addButton.click();

  // Le badge compteur (quantité totale) apparaît dans la navigation
  const cartBadge = page.locator('nav button span.absolute, nav button [class*="rounded-full"]').first();
  await expect(cartBadge).toBeVisible({ timeout: 5_000 });

  // Persistance localStorage au rechargement
  await page.reload();
  await page.waitForLoadState('domcontentloaded');
  const badgeAfterReload = page.locator('nav button span.absolute, nav button [class*="rounded-full"]').first();
  await expect(badgeAfterReload).toBeVisible({ timeout: 10_000 });
});

// Parcours critique n°2 : panier → clic Commander → URL WhatsApp exacte
// Chromium abort la navigation externe en test ; on stub window.open pour
// capturer l'URL construite — le test unitaire couvre déjà le format du message.
test('le bouton Commander construit l\'URL WhatsApp du numéro tunisien', async ({ page }) => {
  await page.goto('/');

  // Stub window.open AVANT l'interaction — capture l'URL cible
  await page.evaluate(() => {
    (window as unknown as { __capturedUrl?: string }).__capturedUrl = undefined;
    const originalOpen = window.open.bind(window);
    window.open = (...args: unknown[]) => {
      (window as unknown as { __capturedUrl?: string }).__capturedUrl = String(args[0]);
      return originalOpen('about:blank');
    };
  });

  // Ajoute un article
  await page.locator('#products').scrollIntoViewIfNeeded();
  const addButton = page.locator('#products button', { hasText: /panier|سلة|cart/i }).first();
  await addButton.waitFor({ state: 'visible', timeout: 15_000 });
  await addButton.click();

  // Ouvre le panier
  const cartButton = page.locator('nav button[aria-label*="panier"], nav button[aria-label*="cart"], nav button[aria-label*="سلة"]').first();
  await cartButton.click();

  // Clique Commander sur WhatsApp
  const orderButton = page.locator('button', { hasText: /whatsapp|واتساب/i }).first();
  await orderButton.waitFor({ state: 'visible', timeout: 5_000 });
  await orderButton.click();

  // Lit l'URL capturée
  const captured = await page.evaluate(
    () => (window as unknown as { __capturedUrl?: string }).__capturedUrl
  );
  expect(captured).toBeDefined();
  expect(captured!).toContain('wa.me/21690271601');
  expect(captured!).toContain('text=');
});
