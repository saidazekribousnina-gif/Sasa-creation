export interface CartStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface StoredCartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CART_STORAGE_KEY = 'sasa-creation-cart';

function isValidCartItem(item: unknown): item is StoredCartItem {
  if (typeof item !== 'object' || item === null) return false;
  const it = item as Record<string, unknown>;
  return (
    typeof it.id === 'number' &&
    typeof it.name === 'string' &&
    typeof it.price === 'number' &&
    typeof it.quantity === 'number' &&
    typeof it.image === 'string'
  );
}

export function getSafeStorage(): CartStorage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function loadCart(storage: CartStorage): StoredCartItem[] {
  try {
    const raw = storage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidCartItem);
  } catch {
    return [];
  }
}

export function saveCart(storage: CartStorage, items: StoredCartItem[]): void {
  try {
    storage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Stockage indisponible (mode privé) — le panier reste en mémoire
  }
}
