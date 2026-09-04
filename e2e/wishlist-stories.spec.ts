import { test, expect } from '@playwright/test';

// Pattern Instagram — double-tap ajoute aux favoris, visibles dans le panier
test('double-tap sur un produit ajoute aux favoris et le cœur apparaît', async ({ page }) => {
  await page.goto('/');

  await page.locator('#products').scrollIntoViewIfNeeded();

  // Première carte produit — image
  const firstImage = page.locator('#products a[aria-label]').first();
  await firstImage.waitFor({ state: 'visible', timeout: 15_000 });

  // Double-tap
  await firstImage.dblclick();

  // Le mini-cœur (coin de l'image) apparaît sur cette carte
  const heartBadge = page.locator('#products a span.absolute.bottom-3, #products a span[class*="bottom-3"]').first();
  await expect(heartBadge).toBeVisible({ timeout: 5_000 });

  // Ouvre le panier → onglet Favoris
  const cartButton = page.locator('nav button[aria-label*="panier"], nav button[aria-label*="cart"], nav button[aria-label*="سلة"]').first();
  await cartButton.click();

  // Clique l'onglet favoris (cœur)
  await page.locator('[role="tab"]', { hasText: /favoris|favorites|المفضلة/i }).click();

  // L'article est listé
  await expect(page.locator('text=/luna|سوار|bracelet|necklace/i').first()).toBeVisible({ timeout: 5_000 });

  // Persistance au rechargement
  await page.reload();
  await page.waitForLoadState('domcontentloaded');
  await cartButton.click();
  await page.locator('[role="tab"]', { hasText: /favoris|favorites|المفضلة/i }).click();
  await expect(page.locator('text=/luna|سوار|bracelet|necklace/i').first()).toBeVisible({ timeout: 10_000 });
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
  await expect(viewer).toBeVisible({ timeout: 5_000 });

  // Barre de progression présente
  await expect(viewer.locator('div.h-\\[3px\\]').first()).toBeVisible();

  // Fermeture par X
  await viewer.locator('button[aria-label="Fermer"]').click();
  await expect(viewer).not.toBeVisible({ timeout: 3_000 });
});
