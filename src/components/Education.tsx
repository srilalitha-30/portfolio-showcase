import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "B.Tech CSE (AIML)",
    institution: "Mohan Babu University",
    year: "2023 - 2027",
    score: "CGPA: 9.66/10",
    status: "Currently pursuing"
  },
  {
    id: 2,
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    year: "2021 - 2023",
    score: "Score: 95%",
    status: "Completed"
  },
  {
    id: 3,
    degree: "SSC",
    institution: "Oxford English Medium School",
    year: "2021",
    score: "Score: 100%",
    status: "Completed"
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Journey</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Glowing Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 transform md:-translate-x-1/2 rounded-full opacity-30" />
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 transform md:-translate-x-1/2 rounded-full blur-md opacity-20" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className={`relative flex items-center md:justify-between flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 transform -translate-x-1/2 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}
                  >
                    <div className="glassmorphism p-6 rounded-2xl hover:-translate-y-1 transition-transform relative group">
                      <div className={`absolute top-1/2 w-6 h-0.5 bg-primary/30 hidden md:block ${isEven ? '-left-6' : '-right-6'}`} />
                      
                      <div className={`flex items-center gap-2 mb-3 text-sm font-medium text-primary ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                        <Calendar size={16} />
                        {item.year}
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs ml-2">
                          {item.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2 justify-start md:justify-end flex-row-reverse md:flex-row">
                        {item.degree}
                        <GraduationCap className="text-muted-foreground hidden md:block" size={20} />
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 font-medium flex items-center gap-2 justify-start md:justify-end flex-row-reverse md:flex-row">
                        {item.institution}
                        <MapPin size={16} className="text-muted-foreground hidden md:block" />
                      </p>
                      
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm`}>
                        <Award size={16} className="text-primary" />
                        {item.score}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
