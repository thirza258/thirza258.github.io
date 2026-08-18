import { useEffect, useState } from 'react';
import { FaTimes, FaLink, FaGithub, FaGlobe, FaImages, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ProjectDetailPanelProps } from '../interface/interface';
import SafeImage from './SafeImage';
import LivePreview from './LivePreview';

const backdropVariants = {
  visible: { opacity: 0.6, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const isRenderableSource = (src: string) => /^(https?:\/\/|\/|data:)/i.test(src.trim());
const isValidHref = (url: string) => /^(https?:\/\/|mailto:|tel:|\/)/i.test(url.trim());

const formatLinkLabel = (key: string) =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

const renderLink = (key: string, url: string): JSX.Element => {
  const isGithub = key.toLowerCase().includes('github');
  const isDemo = key.toLowerCase().includes('demo') || key.toLowerCase().includes('live');
  const label = formatLinkLabel(key);

  const icon = isGithub ? (
    <FaGithub className="mr-2 flex-shrink-0" />
  ) : isDemo ? (
    <FaGlobe className="mr-2 flex-shrink-0 text-emerald-600" />
  ) : (
    <FaLink className="mr-2 flex-shrink-0" />
  );

  if (!isValidHref(url)) {
    return (
      <span className="inline-flex items-center text-gray-400 text-sm" aria-disabled="true">
        {icon} {label}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
    >
      {icon} {label}
    </a>
  );
};

const getProjectLiveUrl = (project: ProjectDetailPanelProps['project']): string | undefined => {
  if (!project) return undefined;
  if (project.liveUrl && isValidHref(project.liveUrl)) return project.liveUrl;
  if (project.links?.demo && isValidHref(project.links.demo)) return project.links.demo;
  if (project.links?.live && isValidHref(project.links.live)) return project.links.live;
  if (project.links?.liveUrl && isValidHref(project.links.liveUrl)) return project.links.liveUrl;
  if (project.links?.website && isValidHref(project.links.website)) return project.links.website;
  return undefined;
};

const ProjectDetailPanel = ({ project, onClose }: ProjectDetailPanelProps) => {
  const liveUrl = getProjectLiveUrl(project);
  const highlightPhotos = (project?.highlightPhoto ?? []).filter(isRenderableSource);

  // Default active tab to 'preview' if liveUrl exists, otherwise 'highlights'
  const [activeTab, setActiveTab] = useState<'preview' | 'highlights'>(
    liveUrl ? 'preview' : 'highlights'
  );

  // Sync tab on project change
  useEffect(() => {
    if (liveUrl) {
      setActiveTab('preview');
    } else {
      setActiveTab('highlights');
    }
  }, [project, liveUrl]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const links = Object.entries(project.links ?? {});

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black z-40"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <motion.div
        className="fixed top-0 right-0 w-full md:w-[92%] lg:w-[85%] xl:w-[78%] h-full bg-white shadow-2xl z-50 overflow-hidden flex flex-col"
        variants={{
          visible: { x: 0, transition: { type: 'spring', damping: 28, stiffness: 220 } },
          hidden: { x: '100%', transition: { type: 'spring', damping: 28, stiffness: 300 } },
        }}
        initial="hidden"
        animate="visible"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50/80 backdrop-blur flex-shrink-0">
          <div className="flex items-center gap-3 truncate pr-4">
            <h2 id="project-title" className="text-xl md:text-2xl font-bold text-gray-900 truncate">
              {project.name}
            </h2>
            {liveUrl && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Demo
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                <span>Visit Site</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              aria-label="Close project details"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <motion.div
          className="flex-grow p-6 md:p-8 overflow-y-auto space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Organization / Context subtitle */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              {project.organization || project.context || project.affiliation || 'Project'}
            </span>
          </motion.div>

          {/* Interactive Live View & Highlights Section */}
          {(liveUrl || highlightPhotos.length > 0) && (
            <motion.div variants={fadeInUp} className="space-y-4">
              {/* Tab Switcher if both liveUrl and highlightPhotos exist */}
              {liveUrl && highlightPhotos.length > 0 && (
                <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      activeTab === 'preview'
                        ? 'bg-gray-900 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    <FaGlobe className="text-emerald-400" />
                    <span>Live Interactive View</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </button>

                  <button
                    onClick={() => setActiveTab('highlights')}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      activeTab === 'highlights'
                        ? 'bg-gray-900 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    <FaImages />
                    <span>Screenshots ({highlightPhotos.length})</span>
                  </button>
                </div>
              )}

              {/* View Content */}
              {liveUrl && activeTab === 'preview' ? (
                <div className="w-full">
                  <LivePreview url={liveUrl} title={project.name} />
                </div>
              ) : (
                highlightPhotos.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {highlightPhotos.map((photo, index) => (
                      <SafeImage
                        key={photo}
                        src={photo}
                        alt={`${project.name} screenshot ${index + 1}`}
                        imgClassName="w-full h-auto rounded-xl shadow-md object-cover border border-gray-200"
                        fallbackClassName="w-full min-h-48 rounded-xl shadow-md border border-gray-200 flex items-center justify-center bg-gray-50 text-gray-500 text-sm p-6 text-center"
                        fallbackLabel="Screenshot unavailable"
                      />
                    ))}
                  </div>
                )
              )}
            </motion.div>
          )}

          {/* Description, Tech Stack, Links grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-gray-100">
            {/* Left 2 columns: Description & Tech */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div variants={fadeInUp}>
                <h4 className="text-base font-bold text-gray-900 mb-3">About the Project</h4>
                <ul className="space-y-2.5 text-gray-600 text-sm leading-relaxed list-disc list-inside">
                  {project.description.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h4 className="text-base font-bold text-gray-900 mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {project['Programming language used or technology used'].map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right 1 column: Links */}
            <div className="space-y-6">
              {links.length > 0 && (
                <motion.div variants={fadeInUp} className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                  <h4 className="text-base font-bold text-gray-900 mb-3">Project Links</h4>
                  <div className="space-y-3">
                    {links.map(([key, url]) => (
                      <div key={key}>{renderLink(key, url ?? '')}</div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectDetailPanel;
