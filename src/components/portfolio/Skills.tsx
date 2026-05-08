import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    color: "primary",
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript ES6+", "TypeScript", "React JS"],
  },
  {
    label: "Languages",
    color: "accent",
    skills: ["JavaScript", "TypeScript", "Python", "Java (Android)"],
  },
  {
    label: "Tools",
    color: "primary",
    skills: ["Git", "GitHub", "Vercel","Netlify ", "VS Code", "npm"],
  },
  {
    label: "UI & Design",
    color: "accent",
    skills: ["Responsive Design", "Flexbox", "CSS Grid", "Mobile-First", "Dark/Light Mode"],
  },
  {
    label: "Currently Learning",
    color: "primary",
    skills: ["Java (Android Studio)", "Advanced TypeScript", "Full Stack Patterns"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Technical Stack</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Skills</h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="group"
                data-testid={`skill-group-${gi}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-2 rounded-full ${group.color === "primary" ? "bg-primary" : "bg-accent"}`} />
                  <h3 className="text-sm font-bold text-muted-foreground tracking-widest uppercase">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-default hover:scale-105 ${
                        group.color === "primary"
                          ? "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40"
                          : "bg-accent/10 border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/40"
                      }`}
                      data-testid={`skill-badge-${skill.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}




