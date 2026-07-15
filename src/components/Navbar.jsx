import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, personalInfo, socialLinks } from "../data/portfolioData";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-md shadow-black/25"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-surface-100 font-bold text-sm group-hover:border-accent-500 group-hover:text-accent-400 group-hover:scale-105 transition-all duration-300">
              {personalInfo.name.charAt(0)}
            </div>
            <span className="text-lg font-semibold text-surface-100 hidden sm:block">
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent-500">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-accent-400 font-semibold"
                    : "text-surface-400 hover:text-surface-100"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-surface-800/80 border border-surface-700/60"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Social icons + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-400 hover:text-surface-100 transition-colors p-2 hover:bg-surface-800 rounded-lg"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {socialLinks.leetcode && (
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-400 hover:text-surface-100 transition-colors p-2 hover:bg-surface-800 rounded-lg"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
            )}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-medium rounded-lg bg-surface-800 border border-surface-700 text-surface-200 hover:text-white hover:border-accent-500 hover:bg-surface-850/80 transition-all duration-300 shadow-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-surface-300 hover:text-surface-100 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-surface-800"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-surface-300 hover:text-surface-100 hover:bg-surface-800/50 transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-surface-800">
                {socialLinks.github && (
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-surface-100 p-2">
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {socialLinks.leetcode && (
                  <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-surface-100 p-2">
                    <SiLeetcode className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
