'use client';

import Link from 'next/link';
import { Home, Trophy, Book, Shield, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MagneticButton } from '@/components/MagneticButton';

export function GameHUD() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-6">
      {/* TOP HUD: Status Bar */}
      <div className="flex justify-between items-start">
        {/* Top Left: Player Status (Simulated) */}
        <div className="pointer-events-auto flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center backdrop-blur-md">
                <Shield size={20} className="text-primary animate-pulse" />
            </div>
            <div className="hidden md:block">
                <div className="text-xs text-muted-foreground font-mono">OPERATOR</div>
                <div className="text-sm font-bold font-orbitron tracking-widest text-primary">GUEST_UNIT</div>
                <div className="h-1 w-24 bg-gray-800 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-primary w-[30%]" />
                </div>
            </div>
        </div>

        {/* Top Right: System Stats + Theme */}
        <div className="pointer-events-auto flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end font-mono text-xs text-muted-foreground/50">
                <span>FPS: 60</span>
                <span>PING: 24ms</span>
                <span>VER: 2.0.4</span>
            </div>
            <ThemeToggle />
        </div>
      </div>

      {/* BOTTOM HUD: Navigation Dock */}
      <div className="flex justify-center items-end pb-4">
        <div className="pointer-events-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-8 shadow-2xl">
           <NavIcon icon={<Home size={24} />} label="BASE" href="/" active />
           <NavIcon icon={<Book size={24} />} label="MISSIONS" href="#modules" />
           <NavIcon icon={<Trophy size={24} />} label="RANK" href="#leaderboard" />
           
           <div className="h-8 w-px bg-white/10 mx-2" />
           
           <MagneticButton>
            <Link href="/login" className="px-6 py-2 bg-primary text-black font-bold font-orbitron text-sm rounded hover:bg-white transition-colors">
                LOGIN
            </Link>
           </MagneticButton>
        </div>
      </div>
    </div>
  );
}

function NavIcon({ icon, label, href, active }: { icon: any, label: string, href: string, active?: boolean }) {
    return (
        <Link href={href} className={`group flex flex-col items-center gap-1 transition-all ${active ? 'text-primary' : 'text-gray-500 hover:text-white'}`}>
            <div className={`p-2 rounded-lg transition-all ${active ? 'bg-primary/20 shadow-[0_0_15px_rgba(138,43,226,0.3)]' : 'group-hover:bg-white/5'}`}>
                {icon}
            </div>
            <span className="text-[10px] font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-black border border-white/10 px-2 py-1 rounded">
                {label}
            </span>
        </Link>
    );
}
