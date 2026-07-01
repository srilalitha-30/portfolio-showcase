import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Wrench, Cpu, BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["Java", "Python (Intermediate)", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-purple-500 to-pink-500",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: ["REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-yellow-500 to-orange-500",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-red-500 to-rose-500",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Platforms",
    icon: Cpu,
    color: "from-teal-500 to-emerald-500",
    skills: ["ServiceNow"],
  },
  {
    title: "Core Subjects",
    icon: BookOpen,
    color: "from-indigo-500 to-purple-500",
    skills: ["OOP", "Computer Networks", "Data Structures", "Algorithms", "Operating Systems", "DBMS"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glassmorphism rounded-2xl p-6 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`}
              />
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                  <category.icon size={20} />
                </div>
                <h3 className="font-semibold text-base">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border group-hover:border-primary/30 transition-colors hover:bg-primary/10 hover:text-primary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
