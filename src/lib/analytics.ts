// ─── Analytics — événements métier, privacy-first ─────────────────────────────
//
// Conçu pour Vercel Analytics (script <Analytics />) mais indépendant :
// les événements sont poussés via va.track() si présent, sans jamais throw.
// Aucune donnée personnelle n'est collectée (pas d'IP stockée, pas de cookie).

export type AnalyticsEventName =
  | 'add_to_cart'
  | 'add_to_wishlist'
  | 'whatsapp_order_click'
  | 'whatsapp_contact_click'
  | 'language_switch'
  | 'category_filter'
  | 'newsletter_submit'
  | 'craft_step_viewed'
  | 'story_view';

export interface AnalyticsEventProperties {
  [key: string]: string | number | boolean | undefined;
}

interface VercelAnalytics {
  track?: (event: string, properties?: AnalyticsEventProperties) => void;
}

declare global {
  interface Window {
    va?: VercelAnalytics;
  }
}

/**
 * Émet un événement analytics. Silencieux si l'API est absente
 * (dev local, bloqueur de script, nav privé) — ne jamais throw.
 */
export function trackEvent(
  event: AnalyticsEventName,
  properties?: AnalyticsEventProperties
): void {
  try {
    if (typeof window !== 'undefined' && window.va?.track) {
      window.va.track(event, properties);
    }
  } catch {
    // Tracking indisponible — l'UX ne doit jamais dépendre de l'analytique
  }
}
