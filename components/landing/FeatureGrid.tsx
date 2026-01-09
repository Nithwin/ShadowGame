'use client';

import Image from 'next/image';
import { Terminal, Cpu, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function FeatureGrid() {
  return (
    <section id="modules" className="px-6 max-w-7xl mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        
        {/* Main Card - Rust */}
        <div className="md:col-span-2 group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"/>
          <Image src="/assets/feature_rust.png" alt="Rust" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 p-8 z-20">
             <h3 className="text-2xl font-bold mb-2 font-orbitron">RustVoyage</h3>
             <p className="text-muted-foreground max-w-md">Systems programming reimagined. Master memory safety and ownership through puzzle-based space exploration.</p>
          </div>
        </div>

        {/* Secondary Card - Editor */}
        <div className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
             <Terminal size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2 font-orbitron">Browser IDE</h3>
          <p className="text-muted-foreground text-sm">Full LSP support. Run Rust code instantly without installation.</p>
        </div>

        {/* Third Card - OS */}
        <div className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors p-8">
           <div className="absolute top-8 right-8 text-muted-foreground/20">
             <Cpu size={48} />
           </div>
           <h3 className="text-xl font-bold mb-2 mt-auto pt-32 font-orbitron">KernelPanic</h3>
           <p className="text-muted-foreground text-sm mb-4">OS Architecture simulation.</p>
           <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
             <div className="w-1/3 h-full bg-primary"/>
           </div>
           <p className="text-xs text-muted-foreground mt-2">Module In Development</p>
        </div>

        {/* Fourth Card - Certs */}
        <div className="md:col-span-2 group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors flex items-center p-8">
           <div className="flex-1">
             <h3 className="text-2xl font-bold mb-2 font-orbitron">Verifiable Skills</h3>
             <p className="text-muted-foreground max-w-md">Earn cryptographic proof of your engineering capabilities. Syncs with GitHub and LinkedIn.</p>
             <div className="flex gap-2 mt-6">
               {[1, 2, 3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                   <ShieldCheck size={16} className="text-primary" />
                 </div>
               ))}
             </div>
           </div>
           <div className="hidden md:block w-1/3 h-full relative">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent rounded-l-3xl"/>
           </div>
        </div>

      </div>
    </section>
  );
}
