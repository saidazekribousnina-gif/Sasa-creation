import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Uniquement les tests unitaires — E2E (Playwright) exclus
    include: ['src/**/*.test.ts'],
    exclude: ['e2e/**', 'node_modules/**', 'dist/**'],
  },
});
