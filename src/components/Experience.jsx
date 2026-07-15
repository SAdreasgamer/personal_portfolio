import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience, education } from "../data/portfolioData";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-mono text-xs tracking-widest uppercase">Journey</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-surface-100">
            Experience & Education
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl bg-accent-500/10 border border-accent-500/20">
                <HiOutlineBriefcase className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-surface-100">Work Experience</h3>
            </motion.div>

            <div className="relative pl-8 border-l-2 border-surface-700/50 space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full bg-accent-500 border-2 border-surface-950 shadow-lg shadow-accent-500/30" />

                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-bold text-surface-100">{exp.role}</h4>
                      <span className="text-xs font-mono text-accent-400 mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-accent-300 font-medium text-sm mb-3">{exp.company}</p>
                    <p className="text-surface-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface-800/60 text-surface-400 border border-surface-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl bg-accent-500/10 border border-accent-500/20">
                <HiOutlineAcademicCap className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-surface-100">Education</h3>
            </motion.div>

            <div className="relative pl-8 border-l-2 border-surface-700/50 space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full bg-accent-500 border-2 border-surface-950 shadow-lg shadow-accent-500/30" />

                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-bold text-surface-100">{edu.degree}</h4>
                      <span className="text-xs font-mono text-accent-400 mt-1 sm:mt-0">{edu.period}</span>
                    </div>
                    <p className="text-accent-300 font-medium text-sm mb-2">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-surface-500 text-sm">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
