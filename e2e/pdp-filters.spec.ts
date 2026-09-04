import { test, expect } from '@playwright/test';

// Parcours critique n°4 : PDP — badge, CTA WhatsApp direct avec URL exacte
test('la page produit affiche la pièce et propose la commande directe', async ({ page }) => {
  await page.goto('/produit/collier-luna-perle');

  // Le H1 de la page porte le nom du produit
  await expect(page.locator('h1')).toContainText(/Luna/i, { timeout: 15_000 });

  // Le badge « Pièce unique » est présent (Luna est unique) — locator par classe stable
  await expect(page.locator('.badge-unique').first()).toBeVisible();

  // CTA direct « Commander sur WhatsApp » — capture l'URL via stub
  await page.evaluate(() => {
    (window as unknown as { __capturedUrl?: string }).__capturedUrl = undefined;
    const originalOpen = window.open.bind(window);
    window.open = (...args: unknown[]) => {
      (window as unknown as { __capturedUrl?: string }).__capturedUrl = String(args[0]);
      return originalOpen('about:blank');
    };
  });

  const directOrder = page.locator('button', { hasText: /whatsapp|واتساب/i }).first();
  await expect(directOrder).toBeVisible();
  await directOrder.click();

  const captured = await page.evaluate(
    () => (window as unknown as { __capturedUrl?: string }).__capturedUrl
  );
  expect(captured).toBeDefined();
  expect(captured!).toContain('wa.me/21690271601');
  expect(captured!).toContain('text=');
});

// Parcours n°5 : filtres catégories depuis la page d'accueil
test('les filtres catégories affinent la grille', async ({ page }) => {
  await page.goto('/');

  await page.locator('#products').scrollIntoViewIfNeeded();

  // Nombre de cartes visibles au départ (catégorie « Tout »)
  const grid = page.locator('#products .grid > div');
  await grid.first().waitFor({ state: 'visible', timeout: 15_000 });
  const countAll = await grid.count();

  // Clique la catégorie « Bagues » (dernière)
  const ringFilter = page.locator('#products button', { hasText: /bagues|rings|خواتم/i }).first();
  await ringFilter.click();

  // La grille est plus restreinte (1 seule bague : Solstice)
  await page.waitForTimeout(300);
  const countRings = await grid.count();
  expect(countRings).toBeLessThan(countAll);
  expect(countRings).toBeGreaterThanOrEqual(1);
});
