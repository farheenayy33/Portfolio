import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Code2, Rocket, BookOpen } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Builder Mindset",
    desc: "I believe in learning by building — every project is a chance to go deeper.",
  },
  {
    icon: Lightbulb,
    title: "Curious & Driven",
    desc: "Always exploring new technologies, from TypeScript to Java for Android.",
  },
  {
    icon: Rocket,
    title: "Shipping Things",
    desc: "From fun Vanilla JS games to deployed full-stack quiz apps — I ship.",
  },
  {
    icon: BookOpen,
    title: "6th Semester BSSE",
    desc: "Combining academic foundations with real-world project experience.",
  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Who I Am</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Frontend-focused developer currently in my{" "}
                <span className="text-primary font-semibold">6th semester of BSSE</span>,
                passionate about building clean, responsive web interfaces.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I enjoy turning ideas into working projects from fun games with Vanilla JS
                to full-stack quiz apps with React. Actively expanding into{" "}
                <span className="text-accent font-semibold">TypeScript</span>, and currently
                exploring Java for Android development.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe in{" "}
                <span className="text-primary font-semibold">learning by building</span>{" "}
                and am always working on something new.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="group p-5 rounded-2xl bg-card border border-card-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  data-testid={`card-trait-${i}`}
                >
                  <trait.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-sm text-foreground mb-1">{trait.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

