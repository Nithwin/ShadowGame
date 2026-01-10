import Link from 'next/link';
import { Shield, LayoutDashboard, Database, Users, Settings, LogOut } from 'lucide-react';
// Button component available if needed in future
// import { Button } from '@/components/ui/button';
import { getServerSession } from 'next-auth';
// You might need to import authOptions if you have them in a purely server context, 
// but for layout we can mostly rely on middleware or just check session here for UI customization.

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 flex font-mono transition-colors duration-300">
            {/* Sidebar */}
            <aside className="w-64 border-r border-gray-200 dark:border-red-900/20 bg-white dark:bg-[#050505] flex flex-col transition-colors duration-300">
                <div className="p-6 border-b border-gray-200 dark:border-red-900/10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-500 rounded flex items-center justify-center border border-red-200 dark:border-red-500/30">
                            <Shield size={18} />
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900 dark:text-white tracking-wider">OVERWATCH</h1>
                            <span className="text-[10px] text-red-600 dark:text-red-500 uppercase tracking-widest">Admin Panel</span>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                        <LayoutDashboard size={18} />
                        <span className="text-sm font-medium">Overview</span>
                    </Link>
                    <Link href="/admin/missions" className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                        <Database size={18} />
                        <span className="text-sm font-medium">Missions</span>
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                        <Users size={18} />
                        <span className="text-sm font-medium">Users</span>
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                        <Settings size={18} />
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-red-900/10">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Exit Admin</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}
