import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about, personalInfo } from "../data/portfolioData";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-mono text-xs tracking-widest uppercase">About Me</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-surface-100">
            Get to know me
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-8">
              {/* Avatar or initial */}
              <div className="w-44 h-44 mx-auto mb-6 rounded-full bg-surface-800 border border-surface-700 flex items-center justify-center text-5xl font-bold text-surface-100 shadow-md overflow-hidden">
                {personalInfo.avatarUrl ? (
                  <img src={personalInfo.avatarUrl} alt={personalInfo.name} className="w-full h-full object-cover rounded-full" />
                ) : (
                  personalInfo.name.split(" ").map((n) => n.charAt(0)).join("")
                )}
              </div>

              <h3 className="text-xl font-bold text-surface-100 text-center mb-1">{personalInfo.name}</h3>
              <p className="text-accent-400 text-center font-medium mb-4">{personalInfo.title}</p>

              <div className="space-y-3 text-sm text-surface-400">
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker className="w-4 h-4 text-accent-500" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMail className="w-4 h-4 text-accent-500" />
                  {personalInfo.email}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {about.highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="text-center p-3 rounded-xl bg-surface-800/50 border border-surface-700/50"
                  >
                    <div className="text-2xl font-bold gradient-text">{h.value}</div>
                    <div className="text-xs text-surface-500 mt-1">{h.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-lg text-surface-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Terminal-style code block */}
            <div className="mt-8 glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-800/80 border-b border-surface-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-surface-500">about.js</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div><span className="text-primary-400">const</span> <span className="text-accent-400">developer</span> = {"{"}</div>
                <div className="pl-6"><span className="text-surface-400">name:</span> <span className="text-yellow-300">"{personalInfo.name}"</span>,</div>
                <div className="pl-6"><span className="text-surface-400">role:</span> <span className="text-yellow-300">"{personalInfo.title}"</span>,</div>
                <div className="pl-6"><span className="text-surface-400">location:</span> <span className="text-yellow-300">"{personalInfo.location}"</span>,</div>
                <div className="pl-6"><span className="text-surface-400">passions:</span> [<span className="text-yellow-300">"AI"</span>, <span className="text-yellow-300">"Systems"</span>, <span className="text-yellow-300">"Open Source"</span>],</div>
                <div className="pl-6"><span className="text-surface-400">currentFocus:</span> <span className="text-yellow-300">"Building impactful software"</span>,</div>
                <div>{"};"}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
