import { describe, it, expect } from 'vitest';
import { loadCart, saveCart, type CartStorage } from './cartStorage';

function createMemoryStorage(initial: Record<string, string> = {}): CartStorage {
  const store = { ...initial };
  return {
    getItem: (key: string) => (key in store ? store[key] : null),
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
  };
}

describe('saveCart / loadCart', () => {
  it('sauvegarde puis recharge un panier intact', () => {
    const storage = createMemoryStorage();
    const items = [
      { id: 1, name: 'Collier Luna', price: 220, quantity: 2, image: '/images/product-1.png' },
      { id: 4, name: 'Bague Solstice', price: 160, quantity: 1, image: '/images/product-4.jpg' },
    ];

    saveCart(storage, items);
    expect(loadCart(storage)).toEqual(items);
  });

  it('retourne un tableau vide si aucune donnée', () => {
    const storage = createMemoryStorage();
    expect(loadCart(storage)).toEqual([]);
  });

  it('rejette silencieusement un JSON invalide', () => {
    const storage = createMemoryStorage({ 'sasa-creation-cart': '{invalide' });
    expect(loadCart(storage)).toEqual([]);
  });

  it('filtre les éléments malformés et garde les valides', () => {
    const storage = createMemoryStorage({
      'sasa-creation-cart': JSON.stringify([
        { id: 1, name: 'Valide', price: 220, quantity: 1, image: '/images/a.png' },
        { id: 'pas-un-nombre', name: 'Invalide', price: 10, quantity: 1, image: '/images/b.png' },
        null,
        'du texte',
      ]),
    });

    const result = loadCart(storage);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Valide');
  });

  it('retourne un tableau vide si la donnée n\'est pas un tableau', () => {
    const storage = createMemoryStorage({
      'sasa-creation-cart': JSON.stringify({ id: 1 }),
    });
    expect(loadCart(storage)).toEqual([]);
  });
});
