'use client';

import Link from 'next/link';
import Image from 'next/image';
// import { ThemeToggle } from '@/components/ThemeToggle'; // Removed
import { MagneticButton } from '@/components/MagneticButton';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 max-w-5xl mx-auto rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 relative rounded bg-primary/10 border border-primary/20 p-1 overflow-hidden group-hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-all">
           <Image src="/assets/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <span className="text-sm font-medium tracking-tight font-orbitron text-gray-900 dark:text-white group-hover:text-primary transition-colors">ShadowCode</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-muted-foreground">
        <NavLink href="#features" label="Features" />
        <NavLink href="#modules" label="Missions" />
        <NavLink href="#leaderboard" label="Leaderboard" />
        <NavLink href="#faq" label="Intel" />
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
          Login
        </Link>
        <MagneticButton>
            <Link href="/signup" className="px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold tracking-wider hover:bg-primary hover:text-white transition-colors">
            JOIN_BETA
            </Link>
        </MagneticButton>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string, label: string }) {
    return (
        <Link href={href} className="hover:text-primary transition-colors relative group">
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </Link>
    );
}
