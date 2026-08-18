import { useState, useEffect, useRef } from 'react';
import SafeImage from './SafeImage';
import { Project } from '../interface/interface';

interface LiveThumbnailProps {
  src: string;
  alt: string;
  liveUrl?: string;
  className?: string;
}

export const getProjectLiveUrl = (project?: Project | null): string | undefined => {
  if (!project) return undefined;
  const candidate =
    project.liveUrl ||
    project.links?.demo ||
    project.links?.live ||
    project.links?.liveUrl ||
    project.links?.website;

  if (candidate && /^(https?:\/\/|\/)/i.test(candidate.trim())) {
    return candidate.trim();
  }
  return undefined;
};

const LiveThumbnail = ({
  src,
  alt,
  liveUrl,
  className = '',
}: LiveThumbnailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.3);
  const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>(
    liveUrl ? 'loading' : 'idle'
  );
  const [isInView, setIsInView] = useState(false);

  // ResizeObserver to calculate scale for 1280x720 iframe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const width = el.clientWidth;
      if (width > 0) {
        setScale(width / 1280);
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    resizeObserver.observe(el);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // IntersectionObserver to only load iframe when approaching viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !liveUrl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: '250px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [liveUrl]);

  // Timeout fallback in case iframe fails to load or hangs
  useEffect(() => {
    if (!liveUrl || !isInView || status !== 'loading') return;

    const timer = setTimeout(() => {
      // If still loading after 7 seconds, fall back to error/static image
      setStatus((prev) => (prev === 'loading' ? 'error' : prev));
    }, 7000);

    return () => clearTimeout(timer);
  }, [liveUrl, isInView, status]);

  // Reset state if liveUrl changes
  useEffect(() => {
    if (liveUrl) {
      setStatus('loading');
    } else {
      setStatus('idle');
    }
  }, [liveUrl]);

  const showIframe = Boolean(liveUrl && isInView && status !== 'error');

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video overflow-hidden bg-slate-900 select-none ${className}`}
    >
      {/* Background Layer: Static Photo (SafeImage) */}
      <SafeImage
        src={src}
        alt={alt}
        imgClassName={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
          status === 'loaded' ? 'opacity-0 scale-95' : 'opacity-100 group-hover:scale-105'
        }`}
        fallbackClassName="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-500 text-sm text-center px-4"
        fallbackLabel="Preview unavailable"
      />

      {/* Live Iframe Layer */}
      {showIframe && (
        <div
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ overflow: 'hidden' }}
        >
          <iframe
            src={liveUrl}
            title={`Live thumbnail for ${alt}`}
            loading="lazy"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
            style={{
              width: '1280px',
              height: '720px',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              border: 0,
              pointerEvents: 'none',
              backgroundColor: '#ffffff',
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="accelerometer; encrypted-media; gyroscope"
          />
        </div>
      )}

      {/* Status Badges */}
      {liveUrl && status === 'loaded' && (
        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/85 text-white backdrop-blur-md border border-slate-700/80 shadow-md pointer-events-none transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live View</span>
        </div>
      )}

      {liveUrl && status === 'loading' && (
        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900/75 text-slate-300 backdrop-blur-md border border-slate-700/60 shadow-sm pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          <span>Connecting…</span>
        </div>
      )}

      {/* Hover Overlay Hint */}
      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end justify-center pb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-slate-900/90 text-white backdrop-blur border border-slate-700 shadow-lg">
          {liveUrl && status === 'loaded'
            ? 'Click to open live interactive view'
            : 'Click to view project details'}
        </span>
      </div>
    </div>
  );
};

export default LiveThumbnail;
