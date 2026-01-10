'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Lock, User, Mail, Shield, Scan, Cpu } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function SignupPage() {
  const container = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useGSAP(() => {
    gsap.from('.signup-card', {
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.1
    });
  }, { scope: container });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/login');
      } else {
        setError(data.message || 'Initialization Failed');
        setLoading(false);
      }
    } catch (err) {
      setError('Network Link Error');
      setLoading(false);
    }
  };

  return (
    <div ref={container} className="min-h-screen bg-gray-50 dark:bg-[#020005] text-gray-900 dark:text-white flex items-center justify-center p-4 font-mono relative overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05),transparent_70%)]" />

      <div className="signup-card w-full max-w-[380px] bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-gray-200 dark:border-purple-500/20 p-6 rounded-xl shadow-2xl relative z-10 transition-colors duration-300">

        {/* Header */}
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 mb-2">
            <Cpu size={18} className="animate-pulse" />
          </div>
          <h1 className="text-xl font-bold font-orbitron text-gray-900 dark:text-white tracking-wide">NEW RECRUIT</h1>
          <p className="text-[10px] text-gray-500 dark:text-purple-500/60 uppercase tracking-widest">Register Neural Link</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-3">
          {error && (
            <div className="text-red-500 text-xs text-center border border-red-900/50 bg-red-950/30 p-2 rounded">
              {error}
            </div>
          )}
          <div className="space-y-1">
            <label className="text-[10px] uppercase text-purple-600 dark:text-purple-600 font-bold ml-1">Unit Designation</label>
            <div className="relative group">
              <User className="absolute left-3 top-2.5 text-gray-400 dark:text-purple-800 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors" size={14} />
              <input name="name" type="text" required className="w-full bg-gray-50 dark:bg-[#050510] border border-gray-200 dark:border-purple-900/30 rounded px-9 py-2 text-xs text-gray-900 dark:text-purple-100 placeholder:text-gray-400 dark:placeholder:text-purple-900/40 focus:border-purple-500/50 outline-none transition-all h-9" placeholder="USERNAME" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase text-purple-600 dark:text-purple-600 font-bold ml-1">Comms Uplink</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-2.5 text-gray-400 dark:text-purple-800 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors" size={14} />
              <input name="email" type="email" required className="w-full bg-gray-50 dark:bg-[#050510] border border-gray-200 dark:border-purple-900/30 rounded px-9 py-2 text-xs text-gray-900 dark:text-purple-100 placeholder:text-gray-400 dark:placeholder:text-purple-900/40 focus:border-purple-500/50 outline-none transition-all h-9" placeholder="EMAIL_ADDRESS" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase text-purple-600 dark:text-purple-600 font-bold ml-1">Encryption Key</label>
            <div className="relative group">
              <Lock className="absolute left-3 top-2.5 text-gray-400 dark:text-purple-800 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors" size={14} />
              <input name="password" type="password" required className="w-full bg-gray-50 dark:bg-[#050510] border border-gray-200 dark:border-purple-900/30 rounded px-9 py-2 text-xs text-gray-900 dark:text-purple-100 placeholder:text-gray-400 dark:placeholder:text-purple-900/40 focus:border-purple-500/50 outline-none transition-all h-9" placeholder="••••••••" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600/10 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/30 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-black text-purple-700 dark:text-purple-400 font-bold py-2.5 rounded transition-all mt-4 flex justify-center items-center gap-2 text-xs uppercase tracking-widest group"
          >
            {loading ? 'INITIALIZING...' : <>INITIALIZE <Scan size={14} className="group-hover:translate-x-1 transition-transform" /></>}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link href="/login" className="text-[10px] text-purple-600 dark:text-purple-700 hover:text-purple-800 dark:hover:text-purple-400 uppercase tracking-widest transition-colors">[ Access Existing Unit ]</Link>
        </div>
      </div>
    </div>
  );
}
