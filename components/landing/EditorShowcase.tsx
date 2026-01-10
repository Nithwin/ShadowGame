import { Terminal, Code2, Play } from 'lucide-react';

export function EditorShowcase() {
   return (
      <section className="py-24 px-6 border-y border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#050508]">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-orbitron">Don&apos;t just read code. <span className="text-blue-500">Master it.</span></h2>
               <p className="text-lg text-muted-foreground mb-8">
                  This isn't a multiple-choice quiz. You're getting a full-blown Cloud IDE with LSP support, terminal access, and real-time compilation.
               </p>

               <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-gray-200 dark:border-transparent">
                     <Terminal className="text-primary mb-3" />
                     <div className="font-bold text-gray-900 dark:text-white">WASM Powered</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-gray-200 dark:border-transparent">
                     <Code2 className="text-secondary mb-3" />
                     <div className="font-bold text-gray-900 dark:text-white">Monaco Editor</div>
                  </div>
               </div>
            </div>

            <div className="flex-1 w-full">
               <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1e1e1e] font-mono text-sm relative">
                  <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                     </div>
                     <div className="text-gray-400 text-xs">main.rs</div>
                  </div>
                  <div className="p-6 text-gray-300 font-mono text-sm leading-relaxed">
                     <div className="flex"><span className="text-gray-500 w-8 select-none">1</span><span><span className="text-pink-400">fn</span> <span className="text-yellow-300">main</span>() {'{'}</span></div>
                     <div className="flex"><span className="text-gray-500 w-8 select-none">2</span><span className="text-gray-500 pl-4">// Your journey begins here</span></div>
                     <div className="flex"><span className="text-gray-500 w-8 select-none">3</span><span className="pl-4"><span className="text-blue-400">let</span> <span className="text-orange-400">mut</span> skills = <span className="text-green-400">Level::Zero</span>;</span></div>
                     <div className="flex"><span className="text-gray-500 w-8 select-none">4</span><span className="pl-4"><span className="text-yellow-300">upgrade_career</span>(&<span className="text-orange-400">mut</span> skills);</span></div>
                     <div className="flex"><span className="text-gray-500 w-8 select-none">5</span><span>{'}'}</span></div>
                  </div>
                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                     <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white scale-0 hover:scale-110 transition-transform duration-300 group-hover:scale-100">
                        <Play fill="currentColor" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
