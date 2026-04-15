import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitPullRequest, GitBranch, Users, Bug } from "lucide-react";

export function OpenSource() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="opensource" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Community</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Open Source</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-card border border-primary/25 p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              data-testid="card-opensource"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <GitPullRequest className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-foreground">Open Source Contributor</h3>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-accent/15 text-accent border border-accent/25 rounded-full">
                      In Progress
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Submitted a Pull Request to an open source repository on GitHub — actively engaging
                    with the open source community as a new contributor. Reviewing the project codebase
                    and issue tracker to identify meaningful contributions as task assignments come through.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GitBranch className="w-4 h-4 text-primary" />
                      <span>Pull Request submitted</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-accent" />
                      <span>Community engaged</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-card border border-primary/25 p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              data-testid="card-opensource"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Bug className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-foreground">Bug Fixer - Frontend Project</h3>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-accent/15 text-accent border border-accent/25 rounded-full">
                      Active
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Contributing to an open source frontend project by identifying and fixing bugs. Debugged issues, implemented fixes, and collaborated with the community to improve code quality and user experience.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GitBranch className="w-4 h-4 text-primary" />
                      <span>Bugs fixed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-accent" />
                      <span>Code quality improved</span>
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
