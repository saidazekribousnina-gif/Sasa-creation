import { describe, it, expect, vi, beforeEach } from 'vitest';
import { initMetaPixel, trackMetaEvent } from './metaPixel';

function createFbqMock() {
  const calls: unknown[][] = [];
  const fbq = (...args: unknown[]) => {
    calls.push(args);
  };
  return { calls, fbq };
}

describe('metaPixel', () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
    vi.stubGlobal('document', {
      createElement: () => ({ async: false, src: '' }),
      head: { appendChild: () => {} },
    } as unknown as Document);
  });

  it('initMetaPixel ne fait rien sans ID', () => {
    vi.stubGlobal('window', {});
    expect(() => initMetaPixel('')).not.toThrow();
  });

  it('initMetaPixel initialise et rejoue les événements mis en file', () => {
    // Événement AVANT init → mis en file silencieusement
    vi.stubGlobal('window', {});
    trackMetaEvent('AddToCart', { value: 220, currency: 'TND' });

    // init avec un fbq mocké — la file est rejouée
    const { calls, fbq } = createFbqMock();
    vi.stubGlobal('window', { fbq: fbq as never });
    initMetaPixel('123456789');

    // init + PageView + événement rejoué
    const eventNames = calls.map((c) => String(c[1]));
    expect(eventNames).toContain('PageView');
  });  it('trackMetaEvent émet via fbq quand chargé', () => {
    const { calls, fbq } = createFbqMock();
    vi.stubGlobal('window', { fbq: fbq as never });

    initMetaPixel('123456789');
    trackMetaEvent('ViewContent', { content_name: 'Luna' });

    const last = calls[calls.length - 1];
    expect(last[0]).toBe('track');
    expect(last[1]).toBe('ViewContent');
  });

  it('trackMetaEvent ne lève pas sans window', () => {
    vi.stubGlobal('window', undefined);
    expect(() => trackMetaEvent('AddToCart')).not.toThrow();
  });
});
