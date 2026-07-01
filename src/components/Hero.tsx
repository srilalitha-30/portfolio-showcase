import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import profilePhoto from "@assets/photo_1.png";

const titles = [
  "Software Developer",
  "Full Stack Developer",
  "AI Enthusiast",
  "ServiceNow Developer",
];

const floatingTechs = ["Java", "Python", "HTML", "CSS", "JS", "SN", "Git"];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(
          currentTitle.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nadendlasrilalitha/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/srilalitha-30", label: "GitHub" },
    { icon: Mail, href: "mailto:nadendlasrilalitha@gmail.com", label: "Email" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/Srilalitha_30/", label: "LeetCode" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                Nadendla <br className="hidden lg:block" />
                <span className="text-gradient">Srilalitha</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm md:text-base font-medium text-muted-foreground mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Final Year B.Tech CSE (AI & ML)</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">ServiceNow CSA & CAD Certified</span>
              </div>
              <div className="h-8 md:h-10 text-xl md:text-2xl font-medium text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                I am a{" "}
                <span className="text-foreground min-w-[220px] text-left typing-cursor">{currentText}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I am a Final Year B.Tech Computer Science (AI & ML) student passionate about Software Development, Full Stack Development, AI-powered applications, and ServiceNow Development. I enjoy building scalable software solutions, solving real-world problems, and continuously improving my technical skills. I am currently seeking Software Engineer opportunities where I can contribute, learn, and grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#resume"
                className="px-6 py-3 rounded-full bg-gradient-accent text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-1"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5 pt-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glassmorphism text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right – Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
              {/* Inner rotating ring */}
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Profile photo */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Nadendla Srilalitha"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              {floatingTechs.slice(0, 3).map((tech, i) => {
                const positions = [
                  "absolute -left-6 top-1/4",
                  "absolute -right-6 top-2/3",
                  "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                ];
                const delays = ["1s", "0.5s", "1.5s"];
                const animations = ["animate-float", "animate-float-reverse", "animate-float"];
                return (
                  <div
                    key={tech}
                    className={`${positions[i]} px-4 py-2 glassmorphism rounded-full font-mono font-semibold text-sm ${animations[i]} shadow-lg`}
                    style={{ animationDelay: delays[i] }}
                  >
                    {tech}
                  </div>
                );
              })}

              {/* CGPA badge */}
              <div
                className="absolute -bottom-2 right-1/4 px-4 py-2 glassmorphism rounded-full font-medium text-sm animate-float border border-primary/30"
                style={{ animationDelay: "2s" }}
              >
                CGPA 9.66
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
