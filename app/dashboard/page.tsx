import Link from 'next/link';
import { Terminal, Cpu, Database } from 'lucide-react';

export default function Home() {
  const games = [
    {
      slug: 'rust',
      title: 'RustVoyage',
      description: 'Master the Rust programming language through an epic space survival RPG.',
      icon: <Terminal className="w-12 h-12 text-[#DEA584]" />, // Rust color-ish
      color: 'hover:border-[#DEA584]',
      bg: 'hover:bg-[#DEA584]/10'
    },
    {
      slug: 'os',
      title: 'KernelPanic',
      description: 'Build your own Operating System from scratch. Manage processes and memory.',
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      color: 'hover:border-blue-500',
      bg: 'hover:bg-blue-500/10'
    },
    {
      slug: 'dbms',
      title: 'QueryMaster',
      description: 'Optimize queries and manage massive datasets in a cyberpunk database sys.',
      icon: <Database className="w-12 h-12 text-green-500" />,
      color: 'hover:border-green-500',
      bg: 'hover:bg-green-500/10'
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-gray-100 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-12 border-b border-gray-800 pb-6 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CodeRealm
          </h1>
          <p className="text-gray-400 mt-2">Interactive Game-Based Learning Platform</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
            <span className="text-gray-400 text-sm">LEVEL</span>
            <span className="ml-2 font-bold text-white">1</span>
          </div>
          <div className="bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
            <span className="text-gray-400 text-sm">XP</span>
            <span className="ml-2 font-bold text-yellow-500">0</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <Link 
            href={`/game/${game.slug}`} 
            key={game.slug}
            className={`group bg-[#0A0A0A] border border-gray-800 rounded-xl p-8 transition-all duration-300 ${game.color} ${game.bg}`}
          >
            <div className="mb-6 bg-gray-900/50 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              {game.icon}
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{game.title}</h2>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
              {game.description}
            </p>
            <div className="mt-8 flex items-center text-sm font-medium text-gray-500 group-hover:text-white">
              <span>START ADVENTURE</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
