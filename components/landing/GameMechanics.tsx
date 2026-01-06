import { Trophy, Swords, Zap } from 'lucide-react';

export function GameMechanics() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
             Gamification Engine v4
           </div>
           <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-8 leading-tight">
             Addicted to <span className="text-gradient">Progress.</span>
           </h2>
           <p className="text-xl text-muted-foreground mb-12">
             We stole the best mechanics from your favorite RPGs and applied them to Software Engineering.
           </p>

           <div className="space-y-8">
             <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-2">Instant Dopamine Loops</h3>
                   <p className="text-muted-foreground">Get XP for every optimized function. Level up your "Memory Management" stat. See your progress visually.</p>
                </div>
             </div>
             <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <Swords size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-2">PvP Optimization Battles</h3>
                   <p className="text-muted-foreground">Challenge other players to refactor battles. Lowest time complexity wins the loot.</p>
                </div>
             </div>
             <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                  <Trophy size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-2">Legendary Artifacts</h3>
                   <p className="text-muted-foreground">Unlock rare IDE themes, profile badges, and verifiable certificates that actually look cool on LinkedIn.</p>
                </div>
             </div>
           </div>
        </div>
        
        <div className="relative">
           {/* Mockup of Game UI */}
           <div className="relative z-10 rounded-2xl bg-[#0F0F16] border border-white/10 p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary" />
                    <div>
                       <div className="font-bold text-white">PlayerOne</div>
                       <div className="text-xs text-secondary">Level 42 System Architect</div>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase">Next Level</div>
                    <div className="w-32 h-2 bg-white/10 rounded-full mt-1 overflow-hidden">
                       <div className="w-[75%] h-full bg-primary" />
                    </div>
                 </div>
              </div>
              
              <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                       <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded bg-${i === 1 ? 'yellow' : i === 2 ? 'purple' : 'blue'}-500/20`} />
                          <div className="text-sm font-bold text-gray-200">Quest: Fix Memory Leak</div>
                       </div>
                       <span className="text-xs font-mono text-green-400">+500 XP</span>
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10" />
        </div>
      </div>
    </section>
  );
}
