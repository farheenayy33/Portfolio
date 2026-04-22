import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Contact</h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Currently open to new opportunities. Whether you have a question, a project, or just want to connect — reach out.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="grid gap-4">
              <motion.a
                href="mailto:farheenayy33@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-card border border-card-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                data-testid="link-contact-email"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">Email</p>
                  <p className="font-semibold text-foreground truncate">farheenayy33@gmail.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </motion.a>

              <motion.a
                href="https://github.com/farheenayy33"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-card border border-card-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                data-testid="link-contact-github"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">GitHub</p>
                  <p className="font-semibold text-foreground truncate">github.com/farheenayy33</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-5 p-6 rounded-2xl bg-muted/50 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">Location</p>
                  <p className="font-semibold text-foreground">Pakistan</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-center mt-10"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full font-semibold px-10 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
                data-testid="btn-send-email"
              >
                <a href="mailto:farheenayy33@gmail.com">Say Hello</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
