type AnalyticsProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    plausible?: (name: string, options?: { props?: AnalyticsProps }) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Load GA4 only when a measurement id is configured. The event layer works
 * without it, so the site never depends on a third-party script to function.
 */
export const initAnalytics = () => {
  if (!measurementId || document.getElementById('ga4-script')) return;

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args as unknown as Record<string, unknown>);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: true });
};

/**
 * Emit one event to every analytics sink that happens to be present. The
 * CustomEvent is the debug hook: listen for `nevatal:analytics` in devtools.
 */
export const trackEvent = (name: string, props: AnalyticsProps = {}) => {
  const payload: AnalyticsProps = {
    ...props,
    page_location: window.location.href,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...payload });
  window.gtag?.('event', name, payload);
  window.plausible?.(name, { props: payload });
  window.dispatchEvent(
    new CustomEvent('nevatal:analytics', { detail: { name, props: payload } })
  );

  if (import.meta.env.DEV) {
    console.debug('[analytics]', name, payload);
  }
};

const isNevatalHost = (hostname: string) =>
  hostname === 'nevatal.id' || hostname.endsWith('.nevatal.id');

/**
 * One delegated listener catches every portfolio → Nevatal link, including
 * links added later by React, without each component remembering to tag it.
 */
export const initCrosslinkTracking = () => {
  const onClick = (event: MouseEvent) => {
    const element = event.target as Element | null;
    const anchor = element?.closest('a');
    if (!anchor?.href) return;

    let target: URL;
    try {
      target = new URL(anchor.href);
    } catch {
      return;
    }

    const external = target.origin !== window.location.origin;
    const tagged = target.searchParams.get('utm_source') === 'portfolio';
    const nevatal = isNevatalHost(target.hostname);
    if (!external || !(tagged || nevatal)) return;

    trackEvent('crosslink_click', {
      direction: 'portfolio→nevatal',
      campaign: target.searchParams.get('utm_campaign') ?? 'unknown',
      page_location: window.location.href,
    });
  };

  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
};
