import { useState } from 'react';
import {
  FaExternalLinkAlt,
  FaRedo,
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
  FaLock,
  FaExpand,
  FaCompress,
  FaCheck,
  FaCopy,
} from 'react-icons/fa';

type Viewport = 'desktop' | 'tablet' | 'mobile';

interface LivePreviewProps {
  url: string;
  title: string;
  className?: string;
}

const LivePreview = ({ url, title, className = '' }: LivePreviewProps) => {
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReload = () => {
    setIsLoading(true);
    setReloadKey((prev) => prev + 1);
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const viewportContainerClasses: Record<Viewport, string> = {
    desktop: 'w-full',
    tablet: 'max-w-[768px] mx-auto border-x border-slate-200 dark:border-slate-700 shadow-2xl',
    mobile: 'max-w-[390px] mx-auto border-x border-slate-200 dark:border-slate-700 shadow-2xl',
  };

  const heightClass = isExpanded ? 'h-[75vh]' : 'h-[480px] md:h-[580px]';

  return (
    <div
      className={`flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Browser chrome header */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700 text-slate-300 select-none">
        {/* Window controls */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-sm" />
          <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        {/* URL Bar */}
        <div className="flex-1 min-w-[200px] max-w-xl mx-2 flex items-center justify-between px-3 py-1.5 bg-slate-900/90 rounded-lg text-xs font-mono text-slate-300 border border-slate-700/80 shadow-inner">
          <div className="flex items-center gap-2 truncate">
            <FaLock className="text-emerald-400 text-[10px] flex-shrink-0" />
            <span className="truncate text-slate-200">{url}</span>
          </div>
          <div className="flex items-center gap-1.5 pl-2 flex-shrink-0">
            <button
              onClick={handleCopyUrl}
              className="p-1 text-slate-400 hover:text-white rounded transition-colors"
              title="Copy URL"
              aria-label="Copy URL"
            >
              {copied ? (
                <FaCheck className="text-emerald-400 text-[11px]" />
              ) : (
                <FaCopy className="text-[11px]" />
              )}
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-slate-400 hover:text-white rounded transition-colors"
              title="Open in new tab"
              aria-label="Open live site in new tab"
            >
              <FaExternalLinkAlt className="text-[11px]" />
            </a>
          </div>
        </div>

        {/* Tools and Viewport controls */}
        <div className="flex items-center gap-1">
          {/* Reload button */}
          <button
            onClick={handleReload}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
            title="Reload frame"
            aria-label="Reload frame"
          >
            <FaRedo className={`text-xs ${isLoading ? 'animate-spin text-blue-400' : ''}`} />
          </button>

          {/* Viewport mode switcher */}
          <div className="hidden sm:flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-700">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded text-xs transition-colors ${
                viewport === 'desktop'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Desktop view"
              aria-label="Desktop view"
            >
              <FaDesktop />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded text-xs transition-colors ${
                viewport === 'tablet'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Tablet view"
              aria-label="Tablet view"
            >
              <FaTabletAlt />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded text-xs transition-colors ${
                viewport === 'mobile'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Mobile view"
              aria-label="Mobile view"
            >
              <FaMobileAlt />
            </button>
          </div>

          {/* Expand / fullscreen toggle */}
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
            title={isExpanded ? 'Collapse view' : 'Expand view'}
            aria-label={isExpanded ? 'Collapse view' : 'Expand view'}
          >
            {isExpanded ? <FaCompress className="text-xs" /> : <FaExpand className="text-xs" />}
          </button>
        </div>
      </div>

      {/* Frame container */}
      <div className={`relative w-full bg-slate-950 flex items-center justify-center ${heightClass} overflow-hidden`}>
        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-sm text-slate-300">
            <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-3" />
            <p className="text-sm font-medium text-slate-200">Connecting to {title}…</p>
            <p className="text-xs text-slate-400 mt-1">{url}</p>
          </div>
        )}

        {/* The Live Iframe */}
        <div className={`h-full transition-all duration-300 bg-white ${viewportContainerClasses[viewport]}`}>
          <iframe
            key={reloadKey}
            src={url}
            title={`Live Interactive View of ${title}`}
            className="w-full h-full border-0 bg-white"
            onLoad={() => setIsLoading(false)}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            loading="lazy"
          />
        </div>
      </div>

      {/* Info / Fallback footer bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2 bg-slate-800 border-t border-slate-700 text-xs text-slate-400">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
          <span className="truncate">Interactive live view embedded directly from the production server</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium hover:underline flex-shrink-0"
        >
          <span>Open live in full tab</span>
          <FaExternalLinkAlt className="text-[10px]" />
        </a>
      </div>
    </div>
  );
};

export default LivePreview;
