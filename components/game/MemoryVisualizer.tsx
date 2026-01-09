'use client';

import { motion } from 'framer-motion';
import { Lock, Unlock, Box } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MemoryVisualizerProps {
  code: string;
  variableName: string; // e.g. "crate_id"
}

export default function MemoryVisualizer({ code, variableName }: MemoryVisualizerProps) {
  const [isMutable, setIsMutable] = useState(false);
  const [value, setValue] = useState('500');

  useEffect(() => {
    // Run effect only when code or variableName changes
    useEffect(() => {
      const mutRegex = new RegExp(`let\\s+mut\\s+${variableName}`);
      const mutable = mutRegex.test(code);
      setIsMutable(mutable);
    }, [code, variableName]);

    // Derived state or further effects
    const cells = Array.from({ length: 8 }, (_, i) => ({
      address: `0x${(7000 + i * 4).toString(16).toUpperCase()}`,
      value: i === 0 ? (isMutable ? '501' : '500') : '00',
      isTarget: i === 0,
      changed: i === 0 && isMutable
    }));
    const assignRegex = new RegExp(`${variableName}\\s*=\\s*(\\d+)`);
    const match = code.match(assignRegex);
    if (match) {
      setValue(match[1]);
    }
  } else {
    setValue('500');
  }
  }, [code, variableName, isMutable]);

return (
  <div className="bg-[#0F0F13] border border-gray-800 rounded-xl p-6 h-full flex flex-col relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

    <h3 className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
      <Box size={14} /> Memory Visualizer: Stack Frame
    </h3>

    <div className="flex-1 flex items-center justify-center">
      <div className="relative">
        {/* Crate Visual */}
        <motion.div
          animate={{
            scale: isMutable ? 1.05 : 1,
            borderColor: isMutable ? '#10B981' : '#EF4444',
            boxShadow: isMutable ? '0 0 20px rgba(16, 185, 129, 0.2)' : '0 0 0px rgba(0,0,0,0)'
          }}
          className={`w-48 h-48 border-2 rounded-2xl flex flex-col items-center justify-center relative bg-[#1A1A23] transition-colors duration-500 ${isMutable ? 'border-green-500' : 'border-red-500'
            }`}
        >
          {/* Lock Icon */}
          <div className={`absolute -top-4 bg-[#0F0F13] p-2 rounded-full border ${isMutable ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
            {isMutable ? <Unlock size={24} /> : <Lock size={24} />}
          </div>

          {/* Content */}
          <div className="text-center">
            <div className="text-xs text-gray-500 font-mono mb-1">Address: 0x7F...</div>
            <div className="text-sm text-gray-400 font-mono mb-2">Owner: main()</div>
            <motion.div
              key={value}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-4xl font-bold font-mono ${isMutable ? 'text-green-400' : 'text-red-400'}`}
            >
              {value}
            </motion.div>
          </div>

          {/* Mutability Badge */}
          <div className={`absolute bottom-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${isMutable ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
            }`}>
            {isMutable ? 'Mutable' : 'Immutable'}
          </div>
        </motion.div>

        {/* Connection Line (simulating reference/ownership) */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-800" />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-xs text-gray-600 font-mono">
          stack pointer
        </div>
      </div>
    </div>

    {/* Legend / Status */}
    <div className="mt-4 p-3 bg-black/30 rounded border border-gray-800 text-xs text-gray-400">
      <div className="flex justify-between mb-1">
        <span>Variable:</span>
        <span className="text-white font-mono">{variableName}</span>
      </div>
      <div className="flex justify-between">
        <span>Status:</span>
        <span className={isMutable ? 'text-green-400' : 'text-red-400'}>
          {isMutable ? 'Read/Write' : 'Read Only'}
        </span>
      </div>
    </div>
  </div>
);
}
