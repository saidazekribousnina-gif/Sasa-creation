type VibratePattern = number | number[];

/**
 * Retour haptique léger (Android / navigateurs supportant Vibration API).
 * Silencieux partout ailleurs — ne jamais throw, ne jamais logger.
 */
export function hapticFeedback(pattern: VibratePattern = 10): void {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  } catch {
    // API indisponible ou bloquée — ignorer silencieusement
  }
}
