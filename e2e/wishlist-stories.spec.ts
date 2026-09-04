import { test, expect } from '@playwright/test';

// Pattern Instagram — double-tap ajoute aux favoris, visibles dans le panier
test('double-tap sur un produit ajoute aux favoris et le cœur apparaît', async ({ page }) => {
  // Coupe les animations pour un ciblage stable en CI
  await page.addInitScript(() => {
    const style = document.createElement('style');
    style.textContent = '*, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }';
    document.head.appendChild(style);
  });

  await page.goto('/');
  await page.locator('#products').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800); // laisse les reveals d'entrée aboutir

  // Première carte produit — image
  const firstImage = page.locator('#products a[aria-label]').first();
  await firstImage.waitFor({ state: 'visible', timeout: 15_000 });

  // Double-tap
  await firstImage.dblclick();

  // Le mini-cœur (coin de l'image) apparaît sur cette carte
  const heartBadge = firstImage.locator('span[aria-hidden="true"]').last();
  await expect(heartBadge).toBeVisible({ timeout: 8_000 });

  // Ouvre le panier → onglet Favoris
  const cartButton = page
    .locator('nav button[aria-label*="panier"], nav button[aria-label*="cart"], nav button[aria-label*="سلة"]')
    .first();
  await cartButton.click();
  await page.locator('[role="tab"]', { hasText: /favoris|favorites|المفضلة/i }).click();

  // L'article est listé dans les favoris (nom d'un produit réel)
  const favNames = ['Luna', 'Aurora', 'Terra', 'Solstice', 'Ivy', 'Mira', 'Éclat'];
  const favList = page.locator('[role="tabpanel"], .overflow-y-auto').last();
  let found = false;
  for (const name of favNames) {
    if (await favList.getByText(name, { exact: false }).first().isVisible().catch(() => false)) {
      found = true;
      break;
    }
  }
  expect(found).toBe(true);
});

// Pattern Instagram — stories
test('les stories sont visibles et ouvrent le viewer plein écran', async ({ page }) => {
  await page.goto('/');

  // La rangée de stories est sous le hero
  const firstStory = page.locator('section[aria-label*="Stories"] button').first();
  await firstStory.waitFor({ state: 'visible', timeout: 15_000 });

  // Le viewer s'ouvre
  await firstStory.click();
  const viewer = page.locator('[role="dialog"]');
  await expect(viewer).toBeVisible({ timeout: 8_000 });

  // Barre de progression présente (une par slide)
  const progressBars = viewer.locator('span, div').filter({ hasText: /^$/ }).locator('div.rounded-full');
  expect(await progressBars.count()).toBeGreaterThanOrEqual(1);

  // Fermeture par X
  await viewer.locator('button[aria-label="Fermer"]').click();
  await expect(viewer).not.toBeVisible({ timeout: 3_000 });
});
