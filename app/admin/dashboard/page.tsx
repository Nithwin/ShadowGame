import { Users, Activity, Key, BarChart } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="p-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-widest mb-2">DASHBOARD</h1>
                <p className="text-gray-500 text-sm uppercase tracking-wider">System Overview & Analytics</p>
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
                    <h2 className="text-xl text-white font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        Live Operations
                    </h2>
                    <div className="bg-[#0A0505] border border-white/5 rounded-xl overflow-hidden">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="bg-white/5 text-xs uppercase tracking-wider text-gray-300">
                                <tr>
                                    <th className="px-6 py-4">User</th>
                                    <th className="px-6 py-4">Role</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="px-6 py-4 text-white">shadowgame@gmail.com</td>
                                    <td className="px-6 py-4"><span className="bg-red-900/30 text-red-400 px-2 py-1 rounded text-[10px] border border-red-900/50">ADMIN</span></td>
                                    <td className="px-6 py-4 text-green-400">Online</td>
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
        <div className="bg-[#0A0505] border border-white/5 p-6 rounded-lg hover:border-white/10 transition-colors">
            <div className={`${color} mb-2`}>{icon}</div>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</div>
        </div>
    );
}
