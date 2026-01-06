import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Github, Cpu, Disc, FileCode, Shield, Terminal, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="dark:bg-[#050508] bg-gray-50 border-t dark:border-purple-900/20 border-gray-200 pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Background decoration - Visible only in dark mode */}
      <div className="hidden dark:block absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col justify-between h-full">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                  <div className="w-8 h-8 relative rounded bg-primary/10 border border-primary/20 p-1 overflow-hidden group-hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-all">
                     <Image src="/assets/logo.png" alt="Logo" fill className="object-contain" />
                  </div>
                  <span className="text-lg font-bold tracking-tight font-orbitron text-gray-900 dark:text-white">ShadowGame</span>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  The first MMORPG that lands you a job. Master low-level systems through high-stakes simulation.
              </p>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed max-w-xs mb-6">
                Stop grinding. <span className="text-cyan-600 dark:text-cyan-400">Start playing.</span>
              </p>
            </div>
            
            <div className="flex items-center gap-4">
                <Link href="#" className="w-8 h-8 rounded-full dark:bg-white/5 bg-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-600 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all border border-transparent hover:border-cyan-500/30">
                  <Twitter size={16} />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full dark:bg-white/5 bg-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-600 hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 transition-all border border-transparent hover:border-purple-500/30">
                  <Github size={16} />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full dark:bg-white/5 bg-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-600 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all border border-transparent hover:border-indigo-500/30">
                  <Disc size={16} />
                </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:pl-20">
            <div>
                <h4 className="dark:text-white text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Terminal size={14} className="text-purple-500" /> Platform
                </h4>
                <ul className="space-y-4 text-sm dark:text-gray-400 text-gray-600">
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"/> Mission Control</Link></li>
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"/> Skill Trees</Link></li>
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"/> Global Leaderboard</Link></li>
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 hover:opacity-100 transition-opacity"/> Neural Upgrades</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="dark:text-white text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Zap size={14} className="text-yellow-600 dark:text-yellow-500" /> Resources
                </h4>
                <ul className="space-y-4 text-sm dark:text-gray-400 text-gray-600">
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Documentation</Link></li>
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">API Reference</Link></li>
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Community Hub</Link></li>
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">System Status</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="dark:text-white text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Shield size={14} className="text-green-600 dark:text-green-500" /> Legal
                </h4>
                <ul className="space-y-4 text-sm dark:text-gray-400 text-gray-600">
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacy Protocol</Link></li>
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                    <li><Link href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-white/5 border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs dark:text-gray-600 text-gray-500 font-mono">
              © 2026 ShadowGame Systems. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs dark:text-gray-600 text-gray-500">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Systems Operational
            </div>
        </div>
      </div>
    </footer>
  );
}
