import { Crown, Medal } from 'lucide-react';

export function LeaderboardPreview() {
   return (
      <section className="py-24 px-6 border-y border-gray-200 dark:border-white/5 bg-background dark:bg-[#0A0A0F]">
         <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 text-yellow-500">
               <Crown size={20} />
               <span className="font-bold tracking-widest uppercase">Elite Squad</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-12">Global Rankings</h2>

            <div className="bg-white dark:bg-[#151520] rounded-3xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-sm">
               <div className="grid grid-cols-12 gap-4 p-4 text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black/20">
                  <div className="col-span-1">Rank</div>
                  <div className="col-span-6 text-left">Player</div>
                  <div className="col-span-3">Title</div>
                  <div className="col-span-2">XP</div>
               </div>

               {[
                  { rank: 1, name: "NullPointerEx", title: "Kernel Lord", xp: "9,000,000", color: "text-yellow-400" },
                  { rank: 2, name: "RustEvangelist", title: "Memory Safe", xp: "8,450,200", color: "text-gray-300" },
                  { rank: 3, name: "SegFault", title: "Bug Hunter", xp: "8,100,500", color: "text-orange-400" },
                  { rank: 4, name: "You?", title: "Recruit", xp: "0", color: "text-gray-600 dark:text-gray-400" },
               ].map((player, i) => (
                  <div key={i} className={`grid grid-cols-12 gap-4 p-6 items-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${player.name === 'You?' ? 'bg-primary/10 border-l-4 border-primary' : ''}`}>
                     <div className={`col-span-1 font-bold ${player.color} text-xl font-mono`}>{player.rank}</div>
                     <div className="col-span-6 text-left flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full ${player.name === 'You?' ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} flex items-center justify-center text-white font-bold`}>
                           {player.name[0]}
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white text-lg">{player.name}</span>
                     </div>
                     <div className="col-span-3">
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs text-gray-600 dark:text-gray-300">
                           {player.title}
                        </span>
                     </div>
                     <div className="col-span-2 font-mono text-primary font-bold">{player.xp}</div>
                  </div>
               ))}
            </div>

            <p className="mt-8 text-muted-foreground text-sm">Rankings reset weekly. Top 3 players earn exclusive skins.</p>
         </div>
      </section>
   );
}
