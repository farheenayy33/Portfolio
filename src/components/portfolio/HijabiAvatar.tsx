import { memo } from "react";
import { motion } from "framer-motion";

export const HijabiAvatar = memo(function HijabiAvatar() {
  return (
    <motion.div 
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute inset-4 bg-accent/20 dark:bg-accent/10 rounded-full blur-2xl"></div>
      
      <motion.svg 
        viewBox="0 0 400 400" 
        className="w-full h-full relative z-10 drop-shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="hijabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5d0b5" />
            <stop offset="100%" stopColor="#e3b491" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Body/Shoulders */}
        <path d="M100 400 C100 320, 150 280, 200 280 C250 280, 300 320, 300 400 Z" fill="url(#hijabGrad)" opacity="0.9" />
        
        {/* Neck/Under-scarf */}
        <path d="M170 250 Q200 290 230 250 L230 280 Q200 310 170 280 Z" fill="#2d2d2d" className="dark:fill-white/10" />

        {/* Face Oval (No features as requested) */}
        <ellipse cx="200" cy="180" rx="60" ry="75" fill="url(#skinGrad)" />

        {/* Hijab Main Drape */}
        <path d="M120 220 
                 C110 120, 150 70, 200 70 
                 C250 70, 290 120, 280 220 
                 C270 290, 230 330, 200 340 
                 C170 330, 130 290, 120 220 Z" 
              fill="url(#hijabGrad)" 
              style={{ mixBlendMode: "multiply" }} 
              className="dark:mix-blend-normal opacity-95" />
        
        {/* Hijab Folds/Details */}
        <path d="M200 70 C160 80, 130 140, 140 220 C150 270, 180 300, 200 310" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M200 70 C240 80, 270 140, 260 220 C250 270, 220 300, 200 310" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M160 110 Q200 130 240 110" stroke="white" strokeWidth="1.5" fill="none" opacity="0.2" />

      </motion.svg>
    </motion.div>
  );
});

