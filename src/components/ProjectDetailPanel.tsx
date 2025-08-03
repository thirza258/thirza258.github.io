// /components/ProjectDetailPanel.tsx

import React from 'react'; // Import React for FC type
import { FaTimes, FaLink, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../interface/interface'; // Adjust the import path as needed

// --- Animation Variants (Unchanged) ---
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

// --- Typed Helper Function ---
const renderLink = (key: string, url: string): JSX.Element => {
    let icon: JSX.Element = <FaLink className="mr-2 flex-shrink-0" />;
    if (key.toLowerCase().includes('github')) {
        icon = <FaGithub className="mr-2 flex-shrink-0" />;
    }
    const label: string = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
            {icon} {label}
        </a>
    );
};

// --- Typed Component Props ---
interface ProjectDetailPanelProps {
  project: Project | null;
  onClose: () => void;
}

// --- Fully Typed Component ---
const ProjectDetailPanel: React.FC<ProjectDetailPanelProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            aria-hidden="true"
          ></motion.div>

          {/* Panel */}
          <motion.div
            className="fixed top-0 right-0 w-full md:w-[90%] lg:w-4/5 h-full bg-white shadow-2xl z-50"
            variants={{
              visible: { x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } },
              hidden: { x: "100%", transition: { type: "spring", damping: 30, stiffness: 300 } }
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b flex-shrink-0">
                <h2 id="project-title" className="text-2xl md:text-3xl font-bold text-gray-800">
                  {project.name}
                </h2>
                <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors" aria-label="Close project details">
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Animateable Content Area */}
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
                          <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div>
                    {/* Optional Chaining `?.` is used for safety with optional properties */}
                    {project.links && Object.keys(project.links).length > 0 && (
                      <motion.div variants={fadeInUp}>
                        <h4 className="font-bold text-gray-600 mb-3">Links</h4>
                        <div className="space-y-3">{Object.entries(project.links).map(([key, url]) => <div key={key}>{renderLink(key, url)}</div>)}</div>
                      </motion.div>
                    )}
                    {project.highlightPhoto?.length && (
                      <motion.div variants={fadeInUp} className="mt-8">
                        <h4 className="font-bold text-gray-600 mb-3">Highlights</h4>
                        <div className="space-y-4">
                          {project.highlightPhoto.map((photo, index) => (
                            <img key={index} src={photo} alt={`${project.name} highlight ${index + 1}`} className="w-full h-auto rounded-lg shadow-md object-cover" />
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
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailPanel;