import { personalInfo, socialLinks } from "../data/portfolioData";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const socials = [
    { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
    { icon: SiLeetcode, href: socialLinks.leetcode, label: "LeetCode" },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  ].filter((s) => s.href);

  return (
    <footer className="relative py-10 border-t border-surface-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-surface-200 font-bold text-xs">
              {personalInfo.name.charAt(0)}
            </div>
            <span className="text-surface-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-surface-500 hover:text-surface-200 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-xs text-surface-500">
            Built with <FaHeart className="w-3 h-3 text-red-500 animate-pulse" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
