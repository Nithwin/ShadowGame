'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    // 1. Initial fake progress to show activity
    const timer = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 90) {
          clearInterval(timer);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    // 2. Real load detection
    const handleLoad = () => {
      clearInterval(timer);
      setLoadProgress(100);

      // Small delay to let the bar finish filling visually
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback in case load event fails or fired before hydration
      const backupTimer = setTimeout(handleLoad, 3000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(backupTimer);
        clearInterval(timer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-foreground"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "circIn" }}
        >
          <div className="font-mono text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-4 flex justify-center text-primary"
            >
              <Terminal size={48} />
            </motion.div>
            <div className="text-xl md:text-2xl font-bold tracking-widest text-primary mb-2">
              INITIALIZING...
            </div>
            <div className="h-1 w-64 bg-gray-800 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-primary shadow-[0_0_10px_rgba(138,43,226,0.8)]"
                animate={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="mt-2 text-xs text-gray-500 font-mono">
              {loadProgress}% COMPLETE
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
