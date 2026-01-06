'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down';
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into words
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1, delayChildren: delay }}
        aria-hidden
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap overflow-hidden align-bottom mr-[0.2em] -mb-[0.1em] pb-[0.1em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%" },
                visible: { 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.33, 1, 0.68, 1] // "Zeit-like" cubic-bezier
                  }
                }
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}
