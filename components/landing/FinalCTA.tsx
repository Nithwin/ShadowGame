import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden bg-[#0A0515]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-6 text-white tracking-tight">
          Ready to Begin?
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
          Join 10,000+ others who are mastering their craft through the Shadowgame. The arena awaits.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:flex-1 h-12 rounded-full bg-white/5 border border-white/10 px-6 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="h-12 px-8 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors w-full sm:w-auto mt-3 sm:mt-0">
                Join Free
            </button>
        </div>
      </div>
    </section>
  );
}
