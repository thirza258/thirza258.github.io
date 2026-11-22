export type VisitorIntent = 'hiring' | 'studio';

const INTENT_KEY = 'thirza:visitor-intent';
const INTENT_EVENT = 'thirza:intent';

const storage = {
  get(): VisitorIntent | null {
    try {
      const value = window.sessionStorage.getItem(INTENT_KEY);
      if (value === 'hiring' || value === 'studio') return value;
    } catch {
      // Storage can be unavailable
    }

    if (typeof window !== 'undefined') {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        let intentParam = searchParams.get('intent');
        let campaign = searchParams.get('utm_campaign');

        // Check if query parameters were appended after the hash (e.g. #career?utm_campaign=for_recruiters)
        const hash = window.location.hash;
        if ((!intentParam || !campaign) && hash.includes('?')) {
          const hashQuery = hash.slice(hash.indexOf('?') + 1);
          const hashParams = new URLSearchParams(hashQuery);
          if (!intentParam) intentParam = hashParams.get('intent');
          if (!campaign) campaign = hashParams.get('utm_campaign');
        }

        if (intentParam === 'hiring' || campaign === 'for_recruiters') {
          storage.set('hiring');
          return 'hiring';
        }
        if (intentParam === 'studio') {
          storage.set('studio');
          return 'studio';
        }
      } catch {
        // ignore errors
      }
    }
    return null;
  },
  set(intent: VisitorIntent) {
    try {
      window.sessionStorage.setItem(INTENT_KEY, intent);
    } catch {
      // Private mode can reject storage; the in-page event still works.
    }
  },
};

export const getIntent = () => storage.get();

export const setIntent = (intent: VisitorIntent) => {
  storage.set(intent);
  document.documentElement.dataset.intent = intent;
  window.dispatchEvent(new CustomEvent<VisitorIntent>(INTENT_EVENT, { detail: intent }));
};

export const onIntentChange = (handler: (intent: VisitorIntent) => void) => {
  const listener = (event: Event) => {
    handler((event as CustomEvent<VisitorIntent>).detail);
  };
  window.addEventListener(INTENT_EVENT, listener);
  return () => window.removeEventListener(INTENT_EVENT, listener);
};

export const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
};
