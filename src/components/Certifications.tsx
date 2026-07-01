import { motion } from "framer-motion";
import { BadgeCheck, Award } from "lucide-react";

const certifications = [
  {
    title: "Certified System Administrator",
    issuer: "ServiceNow",
    badge: "CSA",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Certified Application Developer",
    issuer: "ServiceNow",
    badge: "CAD",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "CIS-DF — Certified Implementation Specialist, Data Foundations (CMDB & CSDM)",
    issuer: "ServiceNow",
    badge: "CIS-DF",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Network Academy",
    badge: "CISCO",
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Career Edge – Young Professional",
    issuer: "TCS iON",
    badge: "TCS",
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Hackathon Participant",
    issuer: "Vertex",
    badge: "HACK",
    color: "from-pink-500 to-rose-600",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl p-[1px] overflow-hidden"
            >
              {/* Animated gradient border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative h-full bg-card rounded-[calc(1rem-1px)] p-6 flex flex-col gap-4">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-lg shrink-0`}>
                    <Award size={22} />
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white tracking-wider shrink-0`}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Title & issuer */}
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-1 leading-snug group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">{cert.issuer}</p>
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full self-start border border-green-500/20">
                  <BadgeCheck size={14} />
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
