'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Zap, Play, Terminal } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { RetroGrid } from '@/components/ui/RetroGrid';
import { TextReveal } from '@/components/ui/TextReveal';

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Smooth stagger entrance
    tl.from('.hero-element', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    });

  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gray-50 dark:bg-[#020005] pt-32 pb-12 md:pt-32 md:pb-20"
    >
      {/* 
         BACKGROUND: STATIC CYBER HEXAGONS
         - Replaced animated RetroGrid with a clean, static CSS pattern
         - Pattern opacity adjusted for light/dark modes
      */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#020005]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 dark:opacity-100" />
        <div className="hidden dark:block absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 flex flex-col items-center justify-center h-full">

        <div className="hero-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400 mb-6 backdrop-blur-md shadow-lg mx-auto transform scale-90 md:scale-100">
          <Zap size={12} className="fill-current animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">System Override: v2.0 Live</span>
        </div>

        <div className="mb-6 leading-[0.95] tracking-tighter drop-shadow-2xl">
          <div className="text-4xl sm:text-6xl md:text-8xl font-black font-orbitron text-gray-900 dark:text-white">
            <TextReveal text="STOP GRINDING" />
          </div>
          <div className="text-4xl sm:text-6xl md:text-8xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
            <TextReveal text="START PLAYING" delay={0.2} />
          </div>
        </div>

        <div className="hero-element text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed font-light px-4">
          <TextReveal text="Burn your textbooks. ShadowGame turns Systems Engineering into an addictive MMORPG." className="text-center" delay={0.4} />
        </div>

        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton>
            <Link href="/signup" className="group relative px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-black text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3">
              <span className="relative flex items-center gap-3">
                ENTER SIMULATION <ArrowRight size={24} />
              </span>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link href="#demo" className="px-8 py-5 text-gray-900 dark:text-white font-bold hover:text-primary transition-colors flex items-center gap-3 border border-gray-200 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/10 backdrop-blur-md">
              <Play size={20} /> WATCH TRAILER
            </Link>
          </MagneticButton>
        </div>

        <div className="hero-element mt-20 flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-500 font-mono">
          <Terminal size={14} />
          <span className="opacity-50">INIT_SEQUENCE_COMPLETE</span>
        </div>

      </div>
    </section>
  );
}
