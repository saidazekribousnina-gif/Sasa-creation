export interface WishlistStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface WishlistItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
}

const WISHLIST_STORAGE_KEY = 'sasa-creation-wishlist';

function isValidWishlistItem(item: unknown): item is WishlistItem {
  if (typeof item !== 'object' || item === null) return false;
  const it = item as Record<string, unknown>;
  return (
    typeof it.id === 'number' &&
    typeof it.slug === 'string' &&
    typeof it.name === 'string' &&
    typeof it.price === 'number' &&
    typeof it.image === 'string'
  );
}

export function getSafeWishlistStorage(): WishlistStorage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function loadWishlist(storage: WishlistStorage): WishlistItem[] {
  try {
    const raw = storage.getItem(WISHLIST_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidWishlistItem);
  } catch {
    return [];
  }
}

export function saveWishlist(
  storage: WishlistStorage,
  items: WishlistItem[]
): void {
  try {
    storage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Stockage indisponible (mode privé) — la liste reste en mémoire
  }
}

/** Ajoute si absent, retire si présent. Retourne [nouvelleListe, ajouté?] */
export function toggleWishlistItem(
  items: WishlistItem[],
  item: WishlistItem
): { items: WishlistItem[]; added: boolean } {
  const exists = items.some((w) => w.id === item.id);
  if (exists) {
    return {
      items: items.filter((w) => w.id !== item.id),
      added: false,
    };
  }
  return { items: [...items, item], added: true };
}
