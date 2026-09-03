import { describe, it, expect, vi } from 'vitest';
import { hapticFeedback } from './haptics';

describe('hapticFeedback', () => {
  it('appelle navigator.vibrate avec la durée par défaut', () => {
    const spy = vi.fn();
    vi.stubGlobal('navigator', { vibrate: spy });

    hapticFeedback();
    expect(spy).toHaveBeenCalledWith(10);

    vi.unstubAllGlobals();
  });

  it('respecte la durée personnalisée', () => {
    const spy = vi.fn();
    vi.stubGlobal('navigator', { vibrate: spy });

    hapticFeedback(20);
    expect(spy).toHaveBeenCalledWith(20);

    vi.unstubAllGlobals();
  });

  it("ne lève pas d'erreur si l'API est absente", () => {
    vi.stubGlobal('navigator', {});
    expect(() => hapticFeedback()).not.toThrow();
    vi.unstubAllGlobals();
  });

  it("ne lève pas d'erreur si navigator est undefined", () => {
    vi.stubGlobal('navigator', undefined);
    expect(() => hapticFeedback()).not.toThrow();
    vi.unstubAllGlobals();
  });
});
