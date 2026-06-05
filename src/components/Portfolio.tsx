import { useEffect, useState, useMemo } from 'react';
import { thirzaAhmadTsaqifEnglish, thirzaAhmadTsaqifIndonesia, thirzaAhmadTsaqifJapanese } from '../cv/cv';
import ProjectDetailPanel from './ProjectDetailPanel';
import { Project } from '../interface/interface';
import { useLanguage } from '../context/LanguageContext';
import SafeImage from './SafeImage';

// ── Keyword pill ──────────────────────────────────────────────────────────────
type PillProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

const Pill = ({ label, active, onClick }: PillProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 whitespace-nowrap
      ${active
        ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
      }`}
  >
    {label}
  </button>
);

// ── Project card ──────────────────────────────────────────────────────────────
type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <article
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
    aria-label={`View details for ${project.name}`}
  >
    {/* Thumbnail */}
    <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
      <SafeImage
        src={project.mainPhoto}
        alt={project.name}
        imgClassName="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        fallbackClassName="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-500 text-sm text-center px-4"
        fallbackLabel="Preview unavailable"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-grow p-5 gap-3">
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
          {project.organization || project.context}
        </p>
        <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
          {project.name}
        </h3>
      </div>

      <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed flex-grow">
        {project.description[0]}
      </p>

      {/* Tech tags — show first 4 */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-gray-100">
        {project['Programming language used or technology used'].slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-md"
          >
            {tech}
          </span>
        ))}
        {project['Programming language used or technology used'].length > 4 && (
          <span className="text-xs text-gray-400 self-center">
            +{project['Programming language used or technology used'].length - 4} more
          </span>
        )}
      </div>
    </div>
  </article>
);

const PAGE_SIZE = 6;

// ── Pagination bar ─────────────────────────────────────────────────────────────
type PaginationProps = {
  current: number;
  total: number;
  onChange: (page: number) => void;
};

const Pagination = ({ current, total, onChange }: PaginationProps) => {
  if (total <= 1) return null;

  // Build page number list with ellipsis
  const pages: (number | '…')[] = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 3) pages.push('…');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
    if (current < total - 2) pages.push('…');
    pages.push(total);
  }

  const btnBase =
    'flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-all duration-150 select-none';

  return (
    <nav className="flex items-center gap-1 mt-10 justify-center" aria-label="Pagination">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className={`${btnBase} border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed`}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="w-9 text-center text-gray-400 text-sm select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            aria-current={p === current ? 'page' : undefined}
            className={`${btnBase} border ${
              p === current
                ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                : 'border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className={`${btnBase} border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed`}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
};

// ── Main portfolio ─────────────────────────────────────────────────────────────
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [search, setSearch] = useState('');
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useLanguage();

  const projects: Project[] =
    language === 'ID'
      ? thirzaAhmadTsaqifIndonesia.projects
      : language === 'EN'
        ? thirzaAhmadTsaqifEnglish.projects
        : thirzaAhmadTsaqifJapanese.projects;

  // Reset on language change
  useEffect(() => {
    setSearch('');
    setActiveKeyword(null);
    setSelectedProject(null);
    setCurrentPage(1);
  }, [language]);

  // Collect unique tech keywords across all projects
  const allKeywords = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) =>
      p['Programming language used or technology used'].forEach((t) => set.add(t))
    );
    return Array.from(set).sort();
  }, [projects]);

  // Filter logic
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesKeyword =
        !activeKeyword ||
        p['Programming language used or technology used']
          .map((t) => t.toLowerCase())
          .includes(activeKeyword.toLowerCase());

      if (!q) return matchesKeyword;

      const inName = p.name.toLowerCase().includes(q);
      const inDesc = p.description.some((d) => d.toLowerCase().includes(q));
      const inTech = p['Programming language used or technology used'].some((t) =>
        t.toLowerCase().includes(q)
      );
      const inOrg = (p.organization || p.context || '').toLowerCase().includes(q);

      return matchesKeyword && (inName || inDesc || inTech || inOrg);
    });
  }, [projects, search, activeKeyword]);

  // Reset to page 1 whenever filters change
  useEffect(() => { setCurrentPage(1); }, [filtered]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handlePillClick = (kw: string) =>
    setActiveKeyword((prev) => (prev === kw ? null : kw));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 " id="portfolio">
      <div className="z-10 mb-6 p-6">
        <h2 className="font-bold text-5xl md:text-6xl">Selected Works</h2>
        <p className="text-lg text-gray-600 mt-2">
          Every project has challenges, and every project has its rewards.
        </p>
        <p className="text-sm text-gray-500 mt-1">— Stephen Schwartz</p>
      </div>

      {/* Search bar */}
      <div className="relative mb-4">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects, technologies, organizations…"
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
          aria-label="Search projects"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Keyword pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {allKeywords.map((kw) => (
          <Pill
            key={kw}
            label={kw}
            active={activeKeyword === kw}
            onClick={() => handlePillClick(kw)}
          />
        ))}
        {activeKeyword && (
          <button
            onClick={() => setActiveKeyword(null)}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50 transition"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="text-sm text-gray-400 mb-4">
        {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
        {totalPages > 1 && ` · page ${currentPage} of ${totalPages}`}
      </p>

      {/* Grid */}
      {paginated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center text-gray-400">
          <svg className="w-12 h-12 mb-4 opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <p className="text-lg font-medium">No projects match your search.</p>
          <p className="text-sm mt-1">Try a different keyword or clear the filter.</p>
        </div>
      )}

      {/* Pagination */}
      <Pagination current={currentPage} total={totalPages} onChange={handlePageChange} />

      {/* Detail panel */}
      {selectedProject && (
        <ProjectDetailPanel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;