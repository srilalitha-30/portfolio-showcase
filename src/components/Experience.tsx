import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Infosys Springboard Internship",
    company: "Infosys Springboard",
    location: "Remote",
    period: "July 2026 – Present",
    project: "Sign Language Learning & Assessment Platform",
    points: [
      "Working on an AI-powered Sign Language Learning & Assessment Platform to assist users in learning sign language through interactive lessons and real-time gesture recognition.",
      "Developing intelligent assessment modules using Machine Learning and Computer Vision techniques to evaluate user performance and improve accessibility.",
      "Providing personalized learning feedback while collaborating within the Infosys Springboard learning ecosystem.",
    ],
    badge: "Current",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    accent: "border-green-500/50",
  },
  {
    role: "ServiceNow Virtual Internship – Cohort 3",
    company: "ServiceNow",
    location: "Remote",
    period: "2026 – Present",
    points: [
      "Gained hands-on experience with ServiceNow platform focusing on ITSM modules including Incident, Problem, and Change Management.",
      "Designed and configured custom forms, tables, and service catalogs for structured data handling.",
      "Implemented workflow automation using Business Rules, Client Scripts, and UI Policies.",
      "Simulated enterprise-grade ticketing systems to optimize service request lifecycle and resolution efficiency.",
    ],
    badge: "Completed",
    badgeColor: "bg-secondary text-muted-foreground border-border",
    accent: "border-primary/50",
  },
  {
    role: "Web Development Intern",
    company: "Prodigy Infotech",
    location: "Remote",
    period: "Jul 2023 – Aug 2023",
    points: [
      "Developed responsive web applications using HTML, CSS, and JavaScript following modern UI/UX practices.",
      "Built multiple projects including Portfolio Website, Weather Application, Landing Page, and interactive Tic-Tac-Toe game.",
      "Integrated REST APIs for real-time data rendering and dynamic content updates.",
      "Optimized performance and ensured cross-browser compatibility across all projects.",
    ],
    badge: "Completed",
    badgeColor: "bg-secondary text-muted-foreground border-border",
    accent: "border-purple-500/30",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-primary/30 ml-3 md:ml-6 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[21px] top-2 w-10 h-10 rounded-full bg-background border border-primary flex items-center justify-center shadow-lg shadow-primary/10">
                  <Briefcase className="text-primary w-4 h-4" />
                </div>

                <div className={`glassmorphism rounded-2xl p-6 md:p-8 border-l-4 ${exp.accent} hover:shadow-xl transition-all duration-300`}>
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.badgeColor}`}>
                          {exp.badge}
                        </span>
                      </div>
                      <div className="text-primary font-semibold">{exp.company}</div>
                      {exp.project && (
                        <div className="text-sm text-muted-foreground mt-1">
                          Project: <span className="text-foreground font-medium">{exp.project}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-row md:flex-col gap-3 md:gap-1 text-sm text-muted-foreground md:text-right shrink-0">
                      <div className="flex items-center gap-1.5 justify-start md:justify-end">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 justify-start md:justify-end">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
