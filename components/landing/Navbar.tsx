'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 max-w-5xl mx-auto rounded-full bg-white/70 dark:bg-background/70 backdrop-blur-xl border border-gray-200 dark:border-border shadow-lg">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 relative rounded bg-primary/10 border border-primary/20 p-1 overflow-hidden group-hover:shadow-[0_0_15px_#8A2BE280] transition-all">
          <Image src="/assets/logo.png" alt="Logo" fill sizes="32px" className="object-contain" />
        </div>
        <span className="text-sm font-medium tracking-tight font-orbitron text-gray-900 dark:text-white group-hover:text-primary transition-colors">ShadowGame</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-muted-foreground">
        <NavLink href="#features" label="Features" />
        <NavLink href="#modules" label="Missions" />
        <NavLink href="#leaderboard" label="Leaderboard" />
        <NavLink href="#faq" label="Intel" />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link href="/login" className="hidden sm:block text-xs font-bold font-mono tracking-widest text-gray-700 dark:text-gray-400 hover:text-primary transition-colors uppercase">
          [ ACCESS ]
        </Link>
        <MagneticButton>
          <Link href="/signup" className="px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-black tracking-widest hover:bg-primary hover:text-white transition-colors uppercase">
            INITIALIZE
          </Link>
        </MagneticButton>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string, label: string }) {
  return (
    <Link href={href} className="hover:text-primary transition-colors text-xs font-bold tracking-widest uppercase opacity-70 hover:opacity-100">
      {label}
    </Link>
  );
}
