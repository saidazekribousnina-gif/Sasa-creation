// ─── Meta Pixel — chargement conditionnel + queue ────────────────────────────
//
// Le Pixel ne charge QUE si VITE_META_PIXEL_ID est défini (variable
// d'environnement Vercel). Les événements émis avant chargement sont mis en
// file et rejoués dès que fbq est prêt. Jamais de throw.

export type MetaEventName =
  | 'PageView'
  | 'ViewContent'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'Contact'
  | 'Subscribe';

export interface MetaEventParams {
  content_name?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

type FbqFn = (...args: unknown[]) => void;

interface FbqStub extends FbqFn {
  queue?: unknown[];
  callMethod?: FbqFn;
  loaded?: boolean;
  version?: string;
  push?: unknown;
}

declare global {
  interface Window {
    fbq?: FbqStub;
    _fbq?: FbqStub;
  }
}

const queue: Array<{ event: MetaEventName; params?: MetaEventParams }> = [];
let loaded = false;

/** Injecte le script Meta Pixel — appelé une seule fois au démarrage */
export function initMetaPixel(id: string): void {
  if (loaded || !id || typeof window === 'undefined') return;

  if (!window.fbq) {
    const fbq: FbqStub = function fbqStub(...args: unknown[]) {
      if (window.fbq?.callMethod) {
        window.fbq.callMethod(...args);
      } else {
        window.fbq?.queue?.push(args);
      }
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = '2.0';
    window.fbq = fbq;
    window._fbq = window.fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }

  window.fbq('init', id);
  window.fbq('track', 'PageView');
  loaded = true;

  // Rejoue les événements émis avant l'initialisation
  for (const { event, params } of queue.splice(0)) {
    window.fbq('track', event, params);
  }
}

/**
 * Émet un événement Meta (standard e-commerce).
 * Silencieux si le Pixel n'est pas configuré — file bornée à 50.
 */
export function trackMetaEvent(
  event: MetaEventName,
  params?: MetaEventParams
): void {
  try {
    if (typeof window === 'undefined') return;

    if (!loaded || !window.fbq) {
      if (queue.length < 50) queue.push({ event, params });
      return;
    }

    window.fbq('track', event, params);
  } catch {
    // Analytique ne doit jamais casser l'UX
  }
}
