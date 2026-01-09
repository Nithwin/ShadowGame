'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Lock, Key, Terminal } from 'lucide-react';
import { signIn } from 'next-auth/react';

gsap.registerPlugin(useGSAP);

export default function LoginPage() {
  const container = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useGSAP(() => {
    gsap.from('.login-card', {
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.1
    });
  }, { scope: container });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Access Denied: Invalid Credentials');
        setLoading(false);
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('System Failure');
      setLoading(false);
    }
  };

  return (
    <div ref={container} className="min-h-screen bg-[#050005] text-white flex items-center justify-center p-4 font-mono relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05),transparent_70%)]" />

      <div className="login-card w-full max-w-[380px] bg-black/60 backdrop-blur-xl border border-purple-500/20 p-6 rounded-xl shadow-2xl relative z-10">

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-400 mb-2">
            <Key size={18} />
          </div>
          <h1 className="text-xl font-bold font-orbitron text-white tracking-wide">SYSTEM ACCESS</h1>
          <p className="text-[10px] text-purple-500/60 uppercase tracking-widest">Restricted Area</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-3">
          {error && (
            <div className="text-red-500 text-xs text-center border border-red-900/50 bg-red-950/30 p-2 rounded">
              {error}
            </div>
          )}
          <div className="space-y-1">
            <label className="text-[10px] uppercase text-purple-500 font-bold ml-1">Operator ID</label>
            <div className="relative group">
              <Terminal className="absolute left-3 top-2.5 text-purple-800 group-focus-within:text-purple-400 transition-colors" size={14} />
              <input name="email" type="email" required className="w-full bg-[#050510] border border-purple-900/30 rounded px-9 py-2 text-xs text-purple-100 placeholder:text-purple-900/40 focus:border-purple-500/50 outline-none transition-all h-9" placeholder="UNIT_ID" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] uppercase text-purple-500 font-bold">Passcode</label>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-2.5 text-purple-800 group-focus-within:text-purple-400 transition-colors" size={14} />
              <input name="password" type="password" required className="w-full bg-[#050510] border border-purple-900/30 rounded px-9 py-2 text-xs text-purple-100 placeholder:text-purple-900/40 focus:border-purple-500/50 outline-none transition-all h-9" placeholder="••••••••" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-900/20 border border-purple-500/30 hover:bg-purple-500 hover:text-black text-purple-400 font-bold py-2.5 rounded transition-all mt-4 flex justify-center items-center gap-2 text-xs uppercase tracking-widest group shadow-[0_0_20px_rgba(147,51,234,0.1)]"
          >
            {loading ? 'VERIFYING...' : <>GRANT ACCESS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></>}
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px]">
          <Link href="#" className="text-purple-700 hover:text-purple-400 uppercase tracking-wider transition-colors">Recovery</Link>
          <Link href="/signup" className="text-purple-400 hover:text-white uppercase tracking-wider font-bold transition-colors">New Recruit</Link>
        </div>
      </div>
    </div>
  );
}
