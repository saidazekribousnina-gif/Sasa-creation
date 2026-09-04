import { describe, it, expect } from 'vitest';
import {
  loadWishlist,
  saveWishlist,
  toggleWishlistItem,
  type WishlistStorage,
  type WishlistItem,
} from './wishlist';

function createMemoryStorage(initial: Record<string, string> = {}): WishlistStorage {
  const store = { ...initial };
  return {
    getItem: (key: string) => (key in store ? store[key] : null),
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
  };
}

const luna: WishlistItem = {
  id: 1,
  slug: 'collier-luna-perle',
  name: 'Collier Luna Perlé',
  price: 220,
  image: '/images/product-1.webp',
};

describe('saveWishlist / loadWishlist', () => {
  it('sauvegarde puis recharge une liste intacte', () => {
    const storage = createMemoryStorage();
    const items = [luna];

    saveWishlist(storage, items);
    expect(loadWishlist(storage)).toEqual(items);
  });

  it('retourne une liste vide sans donnée', () => {
    expect(loadWishlist(createMemoryStorage())).toEqual([]);
  });

  it('rejette silencieusement un JSON invalide', () => {
    const storage = createMemoryStorage({ 'sasa-creation-wishlist': '{invalide' });
    expect(loadWishlist(storage)).toEqual([]);
  });

  it('filtre les éléments malformés et garde les valides', () => {
    const storage = createMemoryStorage({
      'sasa-creation-wishlist': JSON.stringify([
        luna,
        { id: 'texte', slug: 'x', name: 'y', price: 10, image: '/z' },
        null,
      ]),
    });
    const result = loadWishlist(storage);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });
});

describe('toggleWishlistItem', () => {
  it('ajoute un item absent', () => {
    const { items, added } = toggleWishlistItem([], luna);
    expect(added).toBe(true);
    expect(items).toHaveLength(1);
    expect(items[0].slug).toBe('collier-luna-perle');
  });

  it('retire un item déjà présent (toggle)', () => {
    const { items, added } = toggleWishlistItem([luna], luna);
    expect(added).toBe(false);
    expect(items).toHaveLength(0);
  });

  it('ne touche pas les autres items au retrait', () => {
    const solstice: WishlistItem = {
      id: 4,
      slug: 'bague-solstice',
      name: 'Bague Solstice',
      price: 160,
      image: '/images/product-4.webp',
    };
    const { items } = toggleWishlistItem([luna, solstice], solstice);
    expect(items).toHaveLength(1);
    expect(items[0].id).toBe(1);
  });
});
