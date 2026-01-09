'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
    return (
        <button onClick={() => signOut()} className="text-gray-500 hover:text-white transition-colors">
            <LogOut size={20} />
        </button>
    );
}
