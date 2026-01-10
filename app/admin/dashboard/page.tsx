import { Users, Activity, Key, BarChart } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function AdminDashboard() {
    return (
        <div className="p-8 bg-gray-50 dark:bg-[#0a0a0f] min-h-screen transition-colors duration-300">
            <header className="mb-8 flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-widest mb-2">DASHBOARD</h1>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">System Overview & Analytics</p>
                </div>
                <ThemeToggle />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <StatCard
                    icon={<Users size={20} />}
                    value="1,248"
                    label="Active Units"
                    color="text-red-500"
                />
                <StatCard
                    icon={<Activity size={20} />}
                    value="98.2%"
                    label="System Integrity"
                    color="text-yellow-500"
                />
                <StatCard
                    icon={<Key size={20} />}
                    value="450"
                    label="Auth Events"
                    color="text-blue-500"
                />
                <StatCard
                    icon={<BarChart size={20} />}
                    value="Levels"
                    label="Game Stats"
                    color="text-green-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl text-gray-900 dark:text-white font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        Live Operations
                    </h2>
                    <div className="bg-white dark:bg-[#0A0505] border border-gray-200 dark:border-white/5 rounded-xl overflow-hidden shadow-sm transition-colors duration-300">
                        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                            <thead className="bg-gray-100 dark:bg-white/5 text-xs uppercase tracking-wider text-gray-600 dark:text-gray-300">
                                <tr>
                                    <th className="px-6 py-4">User</th>
                                    <th className="px-6 py-4">Role</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                                <tr>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">shadowgame@gmail.com</td>
                                    <td className="px-6 py-4"><span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded text-[10px] border border-red-200 dark:border-red-900/50">ADMIN</span></td>
                                    <td className="px-6 py-4 text-green-500 dark:text-green-400">Online</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, value, label, color }: { icon: React.ReactNode, value: string, label: string, color: string }) {
    return (
        <div className="bg-white dark:bg-[#0A0505] border border-gray-200 dark:border-white/5 p-6 rounded-lg hover:border-purple-500/20 dark:hover:border-white/10 transition-colors shadow-sm">
            <div className={`${color} mb-2`}>{icon}</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</div>
        </div>
    );
}
