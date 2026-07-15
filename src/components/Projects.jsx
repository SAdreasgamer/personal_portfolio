import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, index, isInView }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Generate a gradient based on index
  const gradients = [
    "from-zinc-800/40 to-zinc-900/60",
  ];

  const borderGlow = [
    "hover:shadow-accent-500/5",
  ];

  const accentColors = [
    "text-surface-300",
  ];

  const grad = gradients[0];
  const glow = borderGlow[0];
  const accent = accentColors[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-card rounded-2xl overflow-hidden group ${glow}`}
    >
      {/* Image area / Gradient placeholder */}
      <div className={`relative h-48 bg-gradient-to-br ${grad} flex items-center justify-center overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-center">
            <div className={`text-5xl font-bold ${accent} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}>
              {project.title.charAt(0)}
            </div>
            <div className="text-xs text-surface-500 mt-2 font-mono">Add project screenshot</div>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/25 text-accent-300 text-xs font-semibold backdrop-blur-sm">
            ⭐ Featured
          </div>
        )}

        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-surface-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-surface-800/80 border border-surface-600 text-surface-100 hover:bg-accent-600 hover:border-accent-500 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-5 h-5" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface-800/80 border border-surface-600 text-surface-100 hover:bg-accent-600 hover:border-accent-500 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-surface-100 group-hover:text-accent-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-surface-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Expandable details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-surface-400 text-sm leading-relaxed mb-4 border-t border-surface-700/50 pt-4">
                {project.longDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-surface-800/60 text-surface-400 border border-surface-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-surface-700/30">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-surface-500 hover:text-accent-400 transition-colors flex items-center gap-1"
          >
            {isExpanded ? "Show less" : "Read more"}
            {isExpanded ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-1 group/link"
          >
            View Code
            <HiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent-400 font-mono text-xs tracking-widest uppercase">Portfolio</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-surface-100">
            Featured Projects
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-accent-500 mx-auto rounded-full" />
          <p className="mt-6 text-surface-400 text-lg max-w-2xl mx-auto">
            A curated collection of projects showcasing my skills in software engineering, AI/ML, and full-stack development.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize ${
                filter === f
                  ? "bg-accent-500/10 text-accent-400 border border-accent-500/20"
                  : "text-surface-400 hover:text-surface-200 border border-surface-700/50 hover:border-surface-600"
              }`}
            >
              {f === "all" ? "All Projects" : "⭐ Featured"}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
