import { useEffect, useRef, useState } from 'react';
import {
  NEVATAL_DEPTH_LINKS,
  NEVATAL_METRICS,
  campaignUrl,
  nevatalUrl,
} from '../lib/nevatal';
import { trackEvent } from '../lib/analytics';
import { getIntent, onIntentChange } from '../lib/intent';

const ARCHITECTURE_URL = campaignUrl(
  'https://github.com/thirza258/nevatal',
  'featured_section',
  'architecture'
);

const metrics = [
  { value: NEVATAL_METRICS.products, label: 'Products' },
  { value: NEVATAL_METRICS.aiTools, label: 'AI Tools in the Hub' },
  { value: NEVATAL_METRICS.articles, label: 'Articles' },
  { value: NEVATAL_METRICS.proxmoxClouds, label: 'Bare-Metal Proxmox Cloud' },
];

const updatedLabel = (() => {
  const date = new Date(`${NEVATAL_METRICS.updated}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(date);
})();

const NevatalFeature = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hiringIntent, setHiringIntent] = useState(() => getIntent() === 'hiring');

  useEffect(() => onIntentChange((intent) => setHiringIntent(intent === 'hiring')), []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === 'undefined') return;

    const seenKey = 'thirza:featured-section-view';
    try {
      if (window.sessionStorage.getItem(seenKey)) return;
    } catch {
      // Storage can be unavailable; the observer still fires once per mount.
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        try {
          window.sessionStorage.setItem(seenKey, '1');
        } catch {
          // Ignore storage failures.
        }
        trackEvent('featured_section_view');
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nevatal"
      ref={sectionRef}
      aria-labelledby="nevatal-heading"
      className={`scroll-mt-20 bg-[#0b1220] text-white ${
        hiringIntent ? 'ring-2 ring-inset ring-[#0069d6]' : ''
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
            <span className="h-2 w-2 rounded-sm bg-[#0069d6]" aria-hidden="true" />
            INDEPENDENT AI STUDIO
          </p>

          <h2
            id="nevatal-heading"
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Nevatal: An Independent AI Studio
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {NEVATAL_METRICS.products} live products. {NEVATAL_METRICS.articles} published
            articles. Self-hosted infrastructure. Built and maintained alongside full-time studies
            and internships.
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-y border-white/15 py-7 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse gap-1">
                <dt className="text-xs leading-snug text-white/65">{metric.label}</dt>
                <dd className="text-4xl font-bold tracking-tight text-[#3b82f6] sm:text-5xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          {updatedLabel && (
            <p className="mt-3 text-xs text-white/45">Metrics updated {updatedLabel}</p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={nevatalUrl('featured_section')}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0069d6] px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#0055ad] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore the full studio <span aria-hidden="true">→</span>
            </a>
            <a
              href={ARCHITECTURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Read the architecture <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Depth, not product count
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {NEVATAL_DEPTH_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg border border-white/10 p-4 transition-colors duration-200 hover:border-[#0069d6] hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="flex items-center justify-between gap-2 text-sm font-semibold text-white">
                      {link.name}
                      <span
                        aria-hidden="true"
                        className="text-[#3b82f6] transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                    <span className="mt-2 block text-xs leading-relaxed text-white/60">
                      {link.descriptor}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#0069d6]/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl">
            <img
              src="/images/nevatal/ai-hub.webp"
              alt="Nevatal AI Hub interface showing 17 AI tools"
              width={1280}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
          <figcaption className="mt-4 text-center text-xs text-white/50">
            The Nevatal AI Hub — {NEVATAL_METRICS.aiTools} focused tools, one workspace.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default NevatalFeature;
