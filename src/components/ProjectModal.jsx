import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";

export default function ProjectModal({ project, onClose }) {
  // Lock body scroll & handle Escape key
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Blurred overlay */}
        <div className="absolute inset-0 bg-surface-950/80 backdrop-blur-sm" />

        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-900 border border-surface-700/50 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-surface-800/80 border border-surface-700/50 text-surface-400 hover:text-surface-100 hover:bg-surface-700 transition-all duration-200"
          >
            <HiX className="w-5 h-5" />
          </button>

          {/* Video or cover image */}
          <div className="relative w-full bg-surface-950 rounded-t-2xl overflow-hidden">
            {project.demoVideo ? (
              <video
                src={project.demoVideo}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full max-h-[420px] object-contain bg-black"
              />
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[420px] object-cover"
              />
            ) : (
              <div className="h-48 flex items-center justify-center">
                <div className="text-6xl font-bold text-surface-600 opacity-30">
                  {project.title.charAt(0)}
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-surface-100 mb-3">
              {project.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-accent-500/10 text-accent-400 border border-accent-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Full description */}
            <p className="text-surface-300 leading-relaxed text-base mb-8">
              {project.longDescription}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-800 border border-surface-700 text-surface-200 hover:bg-surface-700 hover:text-surface-100 transition-all duration-200 text-sm font-medium"
              >
                <FaGithub className="w-4 h-4" />
                View Source Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-600 border border-accent-500 text-white hover:bg-accent-500 transition-all duration-200 text-sm font-medium"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
