import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface GameLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function GameLayout({ title, subtitle, children }: GameLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 flex flex-col font-sans">
      {/* Header */}
      <header className="h-16 border-b border-gray-800 flex items-center px-6 justify-between bg-[#0A0A0A]">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-bold text-lg leading-tight">{title}</h1>
            <p className="text-xs text-gray-400">{subtitle}</p>
          </div>
        </div>
        
        <div className="flex gap-4 text-sm font-mono">
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-green-500">SYSTEM ONLINE</span>
           </div>
        </div>
      </header>

      {/* Main Content (Split View usually handled by children) */}
      <main className="flex-1 overflow-hidden relative">
        {children}
      </main>
    </div>
  );
}
