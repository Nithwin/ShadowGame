'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Lock, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GameLobby() {
  const params = useParams();
  const slug = params.slug as string;

  // Mock Data - in real app, fetch from DB based on slug
  const levels = [
    { id: '1', title: 'The Cargo Hold', desc: 'Variables & Mutability', unlocked: true, completed: false },
    { id: '2', title: 'The Borrow Checker', desc: 'Ownership & References', unlocked: false, completed: false },
    { id: '3', title: 'Struct-ure Damage', desc: 'Structs & Enums', unlocked: false, completed: false },
  ];

  const gameTitle = slug === 'rust' ? 'RustVoyage' : slug === 'os' ? 'KernelPanic' : 'QueryMaster';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-sans p-8 transition-colors duration-300">
      <Link href="/dashboard" className="inline-flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft className="mr-2" size={20} /> Back to Hub
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          {gameTitle}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">Select a module to begin your training.</p>

        <div className="grid gap-4">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className={`p-6 rounded-xl border flex items-center justify-between transition-all ${level.unlocked
                  ? 'bg-white dark:bg-[#0A0A0A] border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm'
                  : 'bg-gray-100 dark:bg-black/50 border-gray-200 dark:border-gray-900 opacity-50 cursor-not-allowed'
                }`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${level.completed ? 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-500' :
                    level.unlocked ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-500' : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-600'
                  }`}>
                  {level.completed ? <CheckCircle size={24} /> : index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{level.title}</h3>
                  <p className="text-gray-500 dark:text-gray-500">{level.desc}</p>
                </div>
              </div>

              {level.unlocked ? (
                <Link
                  href={`/game/${slug}/${level.id}`}
                  className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <Play size={16} fill="currentColor" /> Play
                </Link>
              ) : (
                <Lock className="text-gray-700 mr-4" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
