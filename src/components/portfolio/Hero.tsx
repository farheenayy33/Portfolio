import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Github, Mail, ArrowDown, Zap } from "lucide-react";

const ROLES = [
  "Frontend Developer",
  "React Engineer",
  "UI Craftsperson",
  "TypeScript Dev",
  "Web Builder",
];

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    cancelAnimationFrame(frameRef.current);
    const animate = () => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      if (iteration < text.length) {
        iteration += 0.4;
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [text, trigger]);

  return display;
}

function Particles() {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              p.id % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))",
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 500,
        height: 500,
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, hsl(var(--accent) / 0.06) 40%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
}

function MarqueeTicker() {
  const items = [
    "React JS",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Dev",
    "Open to Work",
    "JavaScript",
    "Responsive UI",
    "Clean Code",
    "React JS",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Dev",
    "Open to Work",
    "JavaScript",
    "Responsive UI",
    "Clean Code",
  ];

  return (
    <div className="w-full overflow-hidden border-y border-primary/20 bg-primary/5 py-3 my-10">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-bold text-primary/70 uppercase tracking-widest shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrambleTrigger, setScrambleTrigger] = useState(true);
  const scrambled = useScramble("FARHEEN LARAIB", scrambleTrigger);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  const handleNameHover = useCallback(() => setScrambleTrigger((v) => !v), []);

  const firstName = "FARHEEN".split("");
  const lastName = "LARAIB".split("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-0"
    >
      <CursorGlow />

      {/* Background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent) / 0.18) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.10) 0%, transparent 70%)",
          }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Particles />

      {/* Giant bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10">
        <span
          className="text-[22vw] font-black tracking-tighter text-foreground/[0.03] leading-none"
          aria-hidden
        >
          FL
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 text-sm font-semibold bg-card border border-primary/30 rounded-full px-5 py-2 shadow-lg shadow-primary/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-foreground/80">Available for work</span>
            <Zap className="w-3.5 h-3.5 text-accent" />
          </span>
        </motion.div>

        {/* Main name with flip-in per letter */}
        <div
          className="overflow-hidden mb-2 cursor-crosshair select-none"
          onMouseEnter={handleNameHover}
          title="hover for chaos"
        >
          <div className="flex justify-center flex-wrap gap-x-[0.12em]">
            {/* First name */}
            {firstName.map((char, i) => (
              <motion.span
                key={`f-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-[clamp(3.5rem,10vw,8rem)] font-black leading-none text-foreground"
                style={{ perspective: "400px" }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-x-[0.12em]">
            {/* Last name — gradient */}
            {lastName.map((char, i) => (
              <motion.span
                key={`l-${i}`}
                custom={i + firstName.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-[clamp(3.5rem,10vw,8rem)] font-black leading-none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:300%]"
                style={{
                  perspective: "400px",
                  backgroundPosition: `${i * 20}% 50%`,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Scrambled name hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.3em] uppercase mb-6"
        >
          {scrambled}
        </motion.p>

        {/* Cycling role */}
        <div className="h-10 flex items-center justify-center mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex items-center gap-3"
            >
              <span className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                {ROLES[roleIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8"
        >
          Turning ideas into{" "}
          <span className="text-primary font-semibold">
            beautiful interfaces
          </span>{" "}
          — from Vanilla JS games to full-stack React apps.{" "}
          <span className="text-accent font-semibold">Always building.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="relative group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base text-white overflow-hidden shadow-xl shadow-primary/30"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
            }}
            data-testid="btn-view-projects"
          >
            <span className="relative z-10">View Projects</span>
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))",
              }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base border-2 border-primary/40 hover:border-primary text-foreground hover:bg-primary/8 transition-all duration-300"
            data-testid="btn-contact"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.a
            href="https://github.com/farheenayy33"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-github"
          >
            <Github className="w-4 h-4" />
            GitHub
          </motion.a>
          <span className="h-4 w-px bg-border" />
          <motion.a
            href="mailto:farheenayy33@gmail.com"
            whileHover={{ y: -3, scale: 1.1 }}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors"
            data-testid="link-email"
          >
            <Mail className="w-4 h-4" />
            Email
          </motion.a>
        </motion.div>

        {/* Marquee */}
        <MarqueeTicker />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-primary transition-colors"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </section>
  );
}
