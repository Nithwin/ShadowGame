'use client';

import Link from 'next/link';
import { Shield, Key, Users, Activity, BarChart, ArrowLeft } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function AdminDashboard() {
    return (
        <main className="min-h-screen bg-black text-gray-100 p-8 font-mono">
            <header className="max-w-7xl mx-auto mb-12 border-b border-red-900/30 pb-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-900/20 border border-red-500 text-red-500 rounded-lg flex items-center justify-center">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-widest">OVERWATCH</h1>
                        <p className="text-red-500/60 uppercase text-xs tracking-[0.2em]">Administrative Control</p>
                    </div>
                </div>

                <Link href="/dashboard" className="text-gray-500 hover:text-white flex items-center gap-2 text-xs uppercase tracking-widest transition-colors">
                    <ArrowLeft size={16} /> Return to Grid
                </Link>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-[#0A0505] border border-red-900/20 p-6 rounded-lg">
                    <div className="text-red-500 mb-2"><Users size={20} /></div>
                    <div className="text-2xl font-bold text-white mb-1">1,248</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Active Units</div>
                </div>
                <div className="bg-[#0A0505] border border-red-900/20 p-6 rounded-lg">
                    <div className="text-yellow-500 mb-2"><Activity size={20} /></div>
                    <div className="text-2xl font-bold text-white mb-1">98.2%</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">System Integrity</div>
                </div>
                <div className="bg-[#0A0505] border border-red-900/20 p-6 rounded-lg">
                    <div className="text-blue-500 mb-2"><Key size={20} /></div>
                    <div className="text-2xl font-bold text-white mb-1">450</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Auth Events</div>
                </div>
                <div className="bg-[#0A0505] border border-red-900/20 p-6 rounded-lg">
                    <div className="text-green-500 mb-2"><BarChart size={20} /></div>
                    <div className="text-2xl font-bold text-white mb-1">Levels</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Game Stats</div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12">
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
                                <th className="px-6 py-4">Last Active</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="px-6 py-4 text-white">shadowgame@gmail.com</td>
                                <td className="px-6 py-4"><span className="bg-red-900/30 text-red-400 px-2 py-1 rounded text-[10px] border border-red-900/50">ADMIN</span></td>
                                <td className="px-6 py-4 text-green-400">Online</td>
                                <td className="px-6 py-4">Now</td>
                            </tr>
                            {/* Placeholder data */}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
