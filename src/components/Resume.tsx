import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

// Resume PDF path via the @assets alias (src/assets directory)
const RESUME_URL = new URL(
  "../assets/srilalitha_resume.pdf",
  import.meta.url
).href;

export function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-[2px] overflow-hidden"
          >
            {/* Spinning gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 animate-[spin_4s_linear_infinite]" />
            <div className="absolute inset-[2px] bg-card rounded-[calc(1.5rem-2px)] z-10" />

            <div className="relative z-20 p-10 md:p-16 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <FileText size={38} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
                Get a comprehensive overview of my education, technical skills, projects, certifications, and professional experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href={RESUME_URL}
                  download="Nadendla_Srilalitha_Resume.pdf"
                  className="px-8 py-4 rounded-full bg-gradient-accent text-white font-bold text-base flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1 w-full sm:w-auto"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-base flex items-center justify-center gap-3 hover:bg-secondary/80 transition-all hover:-translate-y-1 border border-border w-full sm:w-auto"
                >
                  <Eye size={20} />
                  Preview PDF
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                PDF format • Nadendla Srilalitha • B.Tech CSE (AI & ML) 2023–2027
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
