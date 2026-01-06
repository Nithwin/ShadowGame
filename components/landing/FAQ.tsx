'use client';

import { useState } from 'react';
import { Plus, Minus, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    { q: "Is this actually a game or just a gamified course?", a: "It's a game first. You control a spaceship, hack terminals, and fight bosses. The 'ammo' you use is real Rust code." },
    { q: "Can I get a job with this?", a: "Yes. We focus on Systems Engineering (Rust, OS, DBs). These are high-paying, hard-to-fill roles. Your profile acts as a verified portfolio." },
    { q: "Do I need to know Rust beforehand?", a: "No. Level 1 starts with basic variables. By Level 50, you'll be writing memory-safe concurrency patterns." },
    { q: "Is it free?", a: "The first campaing 'The Cargo Hold' is 100% free. Advanced specialized raids (Kernel, DB) require a Pro License." }
  ];

  return (
    <section className="py-24 px-6 bg-[#050508] relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute -left-20 top-40 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">System Queries</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-4">
           {faqItems.map((item, i) => (
             <div key={i} className={`group rounded-2xl border transition-all duration-300 ${activeIndex === i ? 'bg-white/5 border-purple-500/30' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                <div className="flex items-center justify-between p-6">
                   <div className="flex items-center gap-4">
                       <Terminal className={`transition-colors ${activeIndex === i ? 'text-purple-400' : 'text-gray-600'}`} size={20} />
                       <h3 className={`text-lg font-bold font-orbitron transition-colors ${activeIndex === i ? 'text-white' : 'text-gray-300'}`}>
                         {item.q}
                       </h3>
                   </div>
                   
                   {/* 
                       Button Controls Expansion
                       Restricted onClick ONLY to this button as requested.
                   */}
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       toggleFAQ(i);
                     }}
                     className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                        activeIndex === i 
                            ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]' 
                            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                     }`}
                   >
                      {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                   </button>
                </div>

                <AnimatePresence>
                    {activeIndex === i && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-6 pl-[4.5rem] text-gray-400 leading-relaxed text-sm md:text-base border-t border-dashed border-white/5 pt-4">
                                {item.a}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
