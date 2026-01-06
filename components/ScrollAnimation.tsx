'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationPreset = 
  | 'fade' 
  | 'slide-up' 
  | 'slide-left' 
  | 'slide-right' 
  | 'zoom-in' 
  | 'zoom-out' 
  | 'blur'
  | 'rotate-up';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  preset?: AnimationPreset;
  viewportMargin?: string;
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.8,
  preset = 'slide-up',
  viewportMargin = "-10%"
}: ScrollAnimationProps) {
  
  const getVariants = (type: AnimationPreset) => {
    switch (type) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0 }
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'zoom-out':
        return {
          hidden: { opacity: 0, scale: 1.1 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'blur':
        return {
          hidden: { opacity: 0, filter: 'blur(20px)' },
          visible: { opacity: 1, filter: 'blur(0px)' }
        };
      case 'rotate-up':
        return {
          hidden: { opacity: 0, y: 50, rotateX: 15 },
          visible: { opacity: 1, y: 0, rotateX: 0 }
        };
      case 'slide-up':
      default:
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getVariants(preset);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={variants}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Smooth cinematic ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
