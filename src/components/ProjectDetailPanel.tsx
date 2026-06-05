

import { useEffect } from 'react';
import { FaTimes, FaLink, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ProjectDetailPanelProps } from '../interface/interface'; 
import SafeImage from './SafeImage';

const backdropVariants = {
  visible: { opacity: 0.6, transition: { duration: 0.4 } },
  hidden: { opacity: 0, transition: { duration: 0.4 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const isRenderableSource = (src: string) => /^(https?:\/\/|\/|data:)/i.test(src.trim());

const isValidHref = (url: string) => /^(https?:\/\/|mailto:|tel:|\/)/i.test(url.trim());

const formatLinkLabel = (key: string) =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

const renderLink = (key: string, url: string): JSX.Element => {
  const icon =
    key.toLowerCase().includes('github') ? (
      <FaGithub className="mr-2 flex-shrink-0" />
    ) : (
      <FaLink className="mr-2 flex-shrink-0" />
    );
  const label = formatLinkLabel(key);

  if (!isValidHref(url)) {
    return (
      <span className="inline-flex items-center text-gray-400" aria-disabled="true">
        {icon} {label}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
    >
      {icon} {label}
    </a>
  );
};



// --- Fully Typed Component ---
const ProjectDetailPanel = ({ project, onClose }: ProjectDetailPanelProps) => {
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

  const links = Object.entries(project?.links ?? {});
  const highlightPhotos = (project?.highlightPhoto ?? []).filter(isRenderableSource);

  return (
    project ? (
      <>
        <motion.div
          className="fixed inset-0 bg-black z-40"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          onClick={onClose}
          aria-hidden="true"
        />

        <motion.div
          className="fixed top-0 right-0 w-full md:w-[90%] lg:w-4/5 h-full bg-white shadow-2xl z-50"
          variants={{
            visible: { x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } },
            hidden: { x: "100%", transition: { type: "spring", damping: 30, stiffness: 300 } }
          }}
          initial="hidden"
          animate="visible"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
        >
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-6 border-b flex-shrink-0">
              <h2 id="project-title" className="text-2xl md:text-3xl font-bold text-gray-800">
                {project.name}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                aria-label="Close project details"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <motion.div
              className="flex-grow p-8 overflow-y-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-gray-700 mb-2">
                    {project.organization || project.context}
                  </motion.h3>

                  <motion.div variants={fadeInUp}>
                    <h4 className="font-bold text-gray-600 mt-6 mb-3">Description</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 prose">
                      {project.description.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <h4 className="font-bold text-gray-600 mt-8 mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project['Programming language used or technology used'].map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div>
                  {links.length > 0 && (
                    <motion.div variants={fadeInUp}>
                      <h4 className="font-bold text-gray-600 mb-3">Links</h4>
                      <div className="space-y-3">
                        {links.map(([key, url]) => <div key={key}>{renderLink(key, url ?? '')}</div>)}
                      </div>
                    </motion.div>
                  )}

                  {highlightPhotos.length > 0 && (
                    <motion.div variants={fadeInUp} className="mt-8">
                      <h4 className="font-bold text-gray-600 mb-3">Highlights</h4>
                      <div className="space-y-4">
                        {highlightPhotos.map((photo, index) => (
                          <SafeImage
                            key={photo}
                            src={photo}
                            alt={`${project.name} highlight ${index + 1}`}
                            imgClassName="w-full h-auto rounded-lg shadow-md object-cover"
                            fallbackClassName="w-full min-h-48 rounded-lg shadow-md border border-gray-200 flex items-center justify-center bg-gray-50 text-gray-500 text-sm p-6 text-center"
                            fallbackLabel="Highlight unavailable"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </>
    ) : null
  );
};

export default ProjectDetailPanel;
