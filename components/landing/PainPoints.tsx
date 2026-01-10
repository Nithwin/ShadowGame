import { XCircle } from 'lucide-react';

export function PainPoints() {
  return (
    <section className="py-24 px-6 bg-muted/30 dark:bg-black/50 border-y border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 dark:text-gray-400">&quot;Why does my code fork bomb?&quot;</p>
          <p className="text-gray-600 dark:text-gray-500 text-sm mt-2">&quot;I hate C segmentation faults&quot;</p>
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-6 text-foreground">Why You Quit Coding Courses</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The traditional education system is broken. It's designed for robots, not humans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-card dark:bg-[#0A0A0F] border border-gray-200 dark:border-white/5 hover:border-red-500/30 transition-colors group shadow-sm">
            <XCircle className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Passive Consumption</h3>
            <p className="text-muted-foreground">Watching 40 hours of video lectures without typing a single line of code is not learning. It's sleeping.</p>
          </div>
          <div className="p-8 rounded-3xl bg-card dark:bg-[#0A0A0F] border border-gray-200 dark:border-white/5 hover:border-red-500/30 transition-colors group shadow-sm">
            <XCircle className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Zero Stakes</h3>
            <p className="text-muted-foreground">No consequences for bad code. No rewards for optimization. Just endless "Hello World" tutorials.</p>
          </div>
          <div className="p-8 rounded-3xl bg-card dark:bg-[#0A0A0F] border border-gray-200 dark:border-white/5 hover:border-red-500/30 transition-colors group shadow-sm">
            <XCircle className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Lonely Grind</h3>
            <p className="text-muted-foreground">Coding alone in a dark room is the fastest way to burnout. Where is your squad? Where is the competition?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
