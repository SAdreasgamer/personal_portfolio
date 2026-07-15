import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/portfolioData";

const categoryIcons = {
  Languages: "💻",
  Frontend: "🎨",
  "Backend & Systems": "⚙️",
  "AI / ML": "🧠",
  "DevOps & Cloud": "☁️",
  Databases: "🗄️",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-mono text-xs tracking-widest uppercase">Skills</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-surface-100">
            Technologies I Work With
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{categoryIcons[category.category] || "📦"}</span>
                <h3 className="text-lg font-semibold text-surface-100">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => {
                  const name = typeof skill === "string" ? skill : skill.name;
                  const icon = typeof skill === "string" ? null : skill.icon;
                  return (
                    <motion.span
                      key={name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-surface-800/60 text-surface-300 border border-surface-700/50 hover:border-accent-500/30 hover:text-accent-400 hover:bg-accent-500/5 transition-all duration-300 cursor-default"
                    >
                      {icon && (
                        <img
                          src={icon}
                          alt={name}
                          className="w-4 h-4 shrink-0"
                          loading="lazy"
                        />
                      )}
                      {name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
