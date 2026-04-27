import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Brain, Zap } from "lucide-react";

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Credentials</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Certifications</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-card border border-card-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 p-8"
              data-testid="card-certification"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent to-primary flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-foreground">GrowthSchool</h3>
                  </div>
                  <p className="text-accent font-semibold mb-3">AI Mastermind Sessions</p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Attended AI Mastermind sessions focused on effective prompting techniques and
                    building real-world projects using AI tools. Gained hands-on experience integrating
                    AI into development workflows and productivity systems.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Brain className="w-4 h-4 text-accent shrink-0" />
                      <span>Effective AI prompting techniques</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary shrink-0" />
                      <span>Real-world AI project building</span>
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


