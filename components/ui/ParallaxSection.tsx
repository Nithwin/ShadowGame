'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  id?: string;
}

export function ParallaxSection({ children, offset = 50, className = "", id }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [offset, -offset]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, opacity }} className="relative z-10 h-full">
        {children}
      </motion.div>
    </div>
  );
}
