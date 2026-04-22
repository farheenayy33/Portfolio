import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Data Structures",
  "Object-Oriented Programming",
  "Web Technologies",
  "Database Management",
  "Software Engineering",
];

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Background</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Education</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
              data-testid="card-education"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent" />

              <div className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground">
                        Bachelor of Science in Software Engineering
                      </h3>
                      <span className="px-2.5 py-0.5 text-xs font-semibold bg-primary/15 text-primary border border-primary/25 rounded-full">
                        6th Semester
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-1">Pakistan</p>
                    <p className="text-sm text-muted-foreground mb-6">Currently in progress</p>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">Relevant Coursework</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


