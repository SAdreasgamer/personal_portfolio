import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo, socialLinks } from "../data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker, HiArrowRight } from "react-icons/hi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto link as a fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    { icon: FaGithub, href: socialLinks.github, label: "GitHub", color: "hover:text-surface-100" },
    { icon: SiLeetcode, href: socialLinks.leetcode, label: "LeetCode", color: "hover:text-yellow-400" },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  ].filter((s) => s.href);

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-mono text-xs tracking-widest uppercase">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-surface-100">
            Let's Work Together
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-accent-500 mx-auto rounded-full" />
          <p className="mt-6 text-surface-400 text-lg max-w-xl mx-auto">
            Have an exciting project or opportunity? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-500/10">
                  <HiOutlineMail className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-sm text-surface-500">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-surface-200 hover:text-accent-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-500/10">
                  <HiOutlineLocationMarker className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-sm text-surface-500">Location</p>
                  <p className="text-surface-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-sm text-surface-500 mb-4">Find me online</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-3 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-400 ${color} hover:border-accent-500/30 transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-surface-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-100 placeholder-surface-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-surface-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-100 placeholder-surface-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-surface-400 mb-2">Message</label>
                <textarea
                  id="contact-message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-100 placeholder-surface-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 rounded-xl bg-accent-600 text-white font-semibold hover:bg-accent-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-accent-600/10 disabled:opacity-60"
              >
                {submitted ? (
                  "✓ Opening mail client..."
                ) : (
                  <>
                    Send Message
                    <HiArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
