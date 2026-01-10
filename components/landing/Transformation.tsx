import { ArrowRight } from 'lucide-react';

export function Transformation() {
   return (
      <section className="py-32 px-6 bg-background dark:bg-[#030014]">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-16">Choose Your Character Class</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
               {/* BEFORE */}
               <div className="p-10 rounded-3xl bg-muted/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 opacity-80 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-4">Level 1: The Script Kiddie</h3>
                  <ul className="text-left space-y-4 text-gray-600 dark:text-muted-foreground mb-8">
                     <li>❌ Copies code from StackOverflow</li>
                     <li>❌ Scared of Pointers and Memory</li>
                     <li>❌ Thinks 'O(n^2)' is a Star Wars droid</li>
                     <li>❌ Stuck in Tutorial Hell</li>
                  </ul>
                  <div className="text-4xl">💩</div>
               </div>

               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(138,43,226,0.5)]">
                     <ArrowRight className="text-white" />
                  </div>
               </div>

               {/* AFTER */}
               <div className="p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/50 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white">Level 99: The Arch-Mage</h3>
                  <ul className="text-left space-y-4 text-gray-700 dark:text-gray-200 mb-8">
                     <li>✅ Writes Rust Memory-Safe Code</li>
                     <li>✅ Builds Custom OS Schedulers</li>
                     <li>✅ Optimizes DB Queries for Fun</li>
                     <li>✅ Gets Hired by FAANG/HFT Specs</li>
                  </ul>
                  <div className="text-4xl animate-bounce">👑</div>
               </div>
            </div>
         </div>
      </section>
   );
}
