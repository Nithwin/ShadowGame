'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "INITIALIZING SHADOWCODE PROTOCOL...";

  useEffect(() => {
    // Faster typing effect
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex += 2; // Double speed
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 400); // Faster exit
      }
    }, 30); // Faster interval

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="font-mono text-center">
            <motion.div 
               initial={{ scale: 0 }} 
               animate={{ scale: 1 }} 
               className="mb-4 flex justify-center text-primary"
            >
               <Terminal size={48} />
            </motion.div>
            <div className="text-xl md:text-2xl font-bold tracking-widest text-primary">
              {text}
              <span className="animate-pulse">_</span>
            </div>
            <div className="mt-4 h-1 w-64 bg-gray-800 rounded-full mx-auto overflow-hidden">
               <motion.div 
                 className="h-full bg-primary"
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
               />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
