import { motion } from "framer-motion";
import { Trophy, Code, Award, Target, Star, Shield } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "100+ Coding Problems Solved",
    description: "Actively solving algorithmic challenges on LeetCode and HackerRank to sharpen logical thinking and problem-solving abilities.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Award,
    title: "ServiceNow CSA Certified",
    description: "Earned the ServiceNow Certified System Administrator certification, validating enterprise ITSM platform expertise.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Star,
    title: "ServiceNow CAD Certified",
    description: "Earned the ServiceNow Certified Application Developer certification, demonstrating advanced ServiceNow development skills.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "ServiceNow CIS-DF Certified",
    description: "Earned the Certified Implementation Specialist – Data Foundations (CMDB & CSDM), validating expertise in data management on the ServiceNow platform.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Target,
    title: "CGPA 9.66 / 10",
    description: "Maintained exceptional academic performance throughout B.Tech CSE (AI & ML) at Mohan Babu University.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    description: "Participated in the Vertex Hackathon, building innovative solutions under time constraints through collaborative teamwork.",
    color: "from-pink-500 to-rose-500",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Achievements</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div
                className={`absolute -right-8 -top-8 w-28 h-28 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
              />
              <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
