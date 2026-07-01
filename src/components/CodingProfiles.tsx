import { motion } from "framer-motion";
import { SiGithub, SiLeetcode, SiHackerrank } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    handle: "@srilalitha-30",
    description: "Source code & projects",
    icon: SiGithub,
    url: "https://github.com/srilalitha-30",
    iconColor: "text-foreground",
    borderColor: "hover:border-zinc-400/50",
    glowColor: "group-hover:shadow-zinc-500/20",
  },
  {
    name: "LeetCode",
    handle: "@Srilalitha_30",
    description: "100+ problems solved",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/Srilalitha_30/",
    iconColor: "text-yellow-500",
    borderColor: "hover:border-yellow-500/50",
    glowColor: "group-hover:shadow-yellow-500/20",
  },
  {
    name: "HackerRank",
    handle: "@nadendlasrilali1",
    description: "Problem solving",
    icon: SiHackerrank,
    url: "https://www.hackerrank.com/profile/nadendlasrilali1",
    iconColor: "text-green-500",
    borderColor: "hover:border-green-500/50",
    glowColor: "group-hover:shadow-green-500/20",
  },
];

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-24 relative bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding Profiles</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Active on competitive programming platforms, consistently improving algorithmic and problem-solving skills.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target={profile.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group glassmorphism rounded-2xl p-6 flex flex-col items-center gap-3 min-w-[180px] border border-border ${profile.borderColor} hover:-translate-y-2 transition-all duration-300 hover:shadow-xl ${profile.glowColor} text-center`}
            >
              <div className={`text-4xl ${profile.iconColor} group-hover:scale-110 transition-transform`}>
                <profile.icon size={40} />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">{profile.name}</h3>
                <p className="text-xs font-medium text-muted-foreground">{profile.handle}</p>
                <p className="text-xs text-muted-foreground/70 mt-0.5">{profile.description}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                {profile.url !== "#" ? (
                  <>Open Profile <ExternalLink size={12} /></>
                ) : (
                  <span className="text-muted-foreground">Coming soon</span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
