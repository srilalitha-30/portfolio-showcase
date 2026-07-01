import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

function Counter({ end, suffix = "+", label, duration = 2 }: { end: number; suffix?: string; label: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="glassmorphism p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function About() {
  const highlights = [
    "Final Year B.Tech CSE (AI & ML)",
    "Passionate Software Developer",
    "ServiceNow CSA & CAD Certified",
    "Strong Foundation in Java & Python",
    "Data Structures & Algorithms",
    "Full Stack Development Enthusiast",
    "Analytical Problem Solver",
    "Quick Learner",
    "Team Collaboration",
    "Building Real World Applications",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-3xl p-8 md:p-10 border-l-4 border-l-primary"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-primary">&lt;</span>
              Who I am
              <span className="text-primary">/&gt;</span>
            </h3>

            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              I am a Final Year B.Tech Computer Science (AI & ML) student with a strong interest in Software Development and Full Stack Development. I enjoy building real-world applications and continuously improving my technical skills through hands-on projects and problem-solving. I have a solid foundation in Java, Python, HTML, CSS, JavaScript, SQL, and Data Structures & Algorithms. Along with my ServiceNow CSA & CAD certifications, I am passionate about learning modern technologies, writing clean code, and developing scalable software solutions. I am an analytical thinker, quick learner, and collaborative team player seeking opportunities to contribute, learn, and grow as a Software Engineer.
            </p>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Professional Highlights</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 text-foreground text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { end: 4, label: "Projects" },
              { end: 6, label: "Certifications" },
              { end: 5, label: "Tech Skills" },
              { end: 100, label: "Problems Solved" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Counter end={stat.end} label={stat.label} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
