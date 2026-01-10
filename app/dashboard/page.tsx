import Link from 'next/link';
import { Terminal, Cpu, Database, LogOut, Shield } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';
import LogoutButton from '@/components/ui/LogoutButton';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Helper to get Icon based on category
const getIcon = (category: string) => {
  switch (category) {
    case 'OS': return <Cpu className="w-12 h-12 text-blue-500" />;
    case 'NETWORKING': return <Database className="w-12 h-12 text-green-500" />;
    default: return <Terminal className="w-12 h-12 text-[#DEA584]" />;
  }
}

const getColor = (category: string) => {
  switch (category) {
    case 'OS': return 'hover:border-blue-500 hover:bg-blue-500/10';
    case 'NETWORKING': return 'hover:border-green-500 hover:bg-green-500/10';
    default: return 'hover:border-[#DEA584] hover:bg-[#DEA584]/10';
  }
}

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-red-500 font-mono">
        ACCESS DENIED. PLEASE AUTHENTICATE.
      </div>
    );
  }

  // Fetch Missions
  const missions = await prisma.mission.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-gray-100 p-8 font-sans transition-colors duration-300">
      <header className="max-w-6xl mx-auto mb-12 border-b border-gray-200 dark:border-gray-800 pb-6 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CodeRealm
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Welcome, Operator <span className="text-gray-900 dark:text-white font-bold">{session.user?.name}</span></p>
        </div>
        <div className="flex gap-4 items-center">
          {session.user?.role === 'ADMIN' && (
            <Link href="/admin/dashboard" className="bg-red-900/20 border border-red-500/50 text-red-500 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-900/40 transition-colors">
              <Shield size={16} /> ADMIN
            </Link>
          )}
          <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
            <span className="text-gray-500 dark:text-gray-400 text-sm">LEVEL</span>
            <span className="ml-2 font-bold text-gray-900 dark:text-white">{session.user?.level || 1}</span>
          </div>
          <ThemeToggle />
          {/* Client Component for Logout */}
          <LogoutButton />
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {missions.length === 0 ? (
          <div className="col-span-3 text-center text-gray-500 py-20 border border-dashed border-gray-800 rounded-xl">
            NO MISSIONS DETECTED. SYSTEM STANDBY.
          </div>
        ) : (
          missions.map((mission) => (
            <Link
              href={`/game/${mission.slug}/1`}
              key={mission.id}
              className={`group bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 rounded-xl p-8 transition-all duration-300 shadow-sm hover:shadow-md ${getColor(mission.category)}`}
            >
              <div className="mb-6 bg-gray-100 dark:bg-gray-900/50 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(mission.category)}
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">{mission.difficulty}</span>
                <span className="text-xs font-mono text-yellow-500">+{mission.xpReward} XP</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{mission.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 line-clamp-2">
                {/* Strip markdown for card preview if needed, or just show raw text */}
                {mission.description.slice(0, 100)}...
              </p>
              <div className="mt-8 flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white">
                <span>START MISSION</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
