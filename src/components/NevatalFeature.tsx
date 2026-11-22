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
      className={`scroll-mt-20 bg-[#FFC700] text-[#0B0B0D] ${
        hiringIntent ? 'ring-4 ring-inset ring-[#0B0B0D]' : ''
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B0B0D]">
            <span className="h-2 w-2 rounded-sm bg-[#0B0B0D]" aria-hidden="true" />
            INDEPENDENT AI STUDIO
          </p>

          <h2
            id="nevatal-heading"
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-[#0B0B0D] sm:text-5xl lg:text-6xl"
          >
            Nevatal: An Independent AI Studio
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0B0B0D]/85 sm:text-lg">
            {NEVATAL_METRICS.products} live products. {NEVATAL_METRICS.articles} published articles. Self-hosted infrastructure. Built and maintained alongside full-time studies and internships.
          </p>

          <dl className="mt-8 border-y border-[#0B0B0D]/20 py-6">
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-sm font-semibold uppercase tracking-wider text-[#0B0B0D]/75">
                Live Products (AI Tools Hub included)
              </dt>
              <dd className="text-5xl font-bold tracking-tight text-[#0B0B0D] sm:text-6xl">
                {NEVATAL_METRICS.products + 1}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={nevatalUrl('featured_section')}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B0B0D] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#1B1B20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B0B0D]"
            >
              Explore the full studio <span aria-hidden="true">→</span>
            </a>
            <a
              href={ARCHITECTURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0B0B0D] bg-transparent px-6 py-3.5 text-base font-semibold text-[#0B0B0D] transition-colors duration-200 hover:bg-[#0B0B0D] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B0B0D]"
            >
              Read the architecture <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-10 border-t border-[#0B0B0D]/20 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B0B0D]/65">
              Depth, not product count
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {NEVATAL_DEPTH_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-[#0B0B0D]/20 bg-white/70 p-4 shadow-sm transition-all duration-200 hover:border-[#0B0B0D] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B0B0D]"
                  >
                    <span className="flex items-center justify-between gap-2 text-sm font-bold text-[#0B0B0D]">
                      {link.name}
                      <span
                        aria-hidden="true"
                        className="text-[#0B0B0D] transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                    <span className="mt-2 block text-xs leading-relaxed text-[#0B0B0D]/80">
                      {link.descriptor}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-black/10 blur-xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#0B0B0D]/20 bg-white/90 p-2 shadow-2xl">
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
          <figcaption className="mt-4 text-center text-xs font-medium text-[#0B0B0D]/70">
            The Nevatal AI Hub — 17 focused tools, one workspace.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default NevatalFeature;
