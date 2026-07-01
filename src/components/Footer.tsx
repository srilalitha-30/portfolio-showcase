import { SiLeetcode } from "react-icons/si";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nadendlasrilalitha/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/srilalitha-30", label: "GitHub" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/Srilalitha_30/", label: "LeetCode" },
    { icon: Mail, href: "mailto:nadendlasrilalitha@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-[#050509] text-white py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
              NS
            </span>
            <p className="text-zinc-400 text-sm text-center md:text-left max-w-xs">
              Building scalable software solutions, automating workflows, and solving real-world problems through code.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all text-zinc-400 hover:-translate-y-1"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 my-8" />

        <div className="flex items-center justify-center text-sm text-zinc-500">
          <p>© 2026 Nadendla Srilalitha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
