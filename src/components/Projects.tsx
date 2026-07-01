import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2 } from "lucide-react";
import { useRef, MouseEvent } from "react";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "Full-stack AI-based Resume Analyzer using FastAPI and Python. Integrated LLMs for ATS score prediction, skill gap analysis, and personalized roadmap generation. Scalable architecture handles multiple resume inputs efficiently.",
    tech: ["FastAPI", "Python", "HTML", "CSS", "JavaScript", "LLM", "Resume Parsing", "ATS Score"],
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Sign Language Learning & Assessment Platform",
    description:
      "AI-powered platform to assist users in learning sign language through interactive lessons and real-time gesture recognition. Developed intelligent assessment modules using ML and Computer Vision to evaluate user performance.",
    tech: ["AI", "Python", "Machine Learning", "Computer Vision", "Web Technologies"],
    color: "from-purple-600 to-violet-600",
  },
  {
    title: "Weather Application",
    description:
      "Real-time weather application with dynamic UI updates using the OpenWeatherMap API. Displays live weather conditions, forecasts, and location-based data with a clean, responsive interface.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Responsive Landing Page",
    description:
      "Modern, responsive landing page built following best-in-class UI/UX practices. Implemented smooth animations, cross-browser compatibility, and fully optimized performance.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-emerald-500 to-teal-500",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col cursor-default"
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2.5 rounded-lg bg-gradient-to-br ${project.color} text-white shadow-md`}>
            <Code2 size={20} />
          </div>
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
        </div>

        <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
