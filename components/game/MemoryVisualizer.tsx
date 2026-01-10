'use client';

import { motion } from 'framer-motion';
import { Lock, Unlock, Box } from 'lucide-react';
import { useMemo } from 'react';

interface MemoryVisualizerProps {
  code: string;
  variableName: string; // e.g. "crate_id"
}

export default function MemoryVisualizer({ code, variableName }: MemoryVisualizerProps) {
  const isMutable = useMemo(() => {
    const mutRegex = new RegExp(`let\\s+mut\\s+${variableName}`);
    return mutRegex.test(code);
  }, [code, variableName]);

  const value = useMemo(() => {
    const assignRegex = new RegExp(`${variableName}\\s*=\\s*(\\d+)`);
    const match = code.match(assignRegex);
    return match ? match[1] : '500';
  }, [code, variableName]);

  return (
    <div className="bg-card/50 backdrop-blur-md border border-border rounded-xl p-6 h-full flex flex-col relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

      <h3 className="text-muted-foreground font-mono text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
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
            className={`w-48 h-48 border-2 rounded-2xl flex flex-col items-center justify-center relative bg-card transition-colors duration-500 ${isMutable ? 'border-green-500' : 'border-red-500'
              }`}
          >
            {/* Lock Icon */}
            <div className={`absolute -top-4 bg-background p-2 rounded-full border ${isMutable ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
              {isMutable ? <Unlock size={24} /> : <Lock size={24} />}
            </div>

            {/* Content */}
            <div className="text-center">
              <div className="text-xs text-muted-foreground font-mono mb-1">Address: 0x7F...</div>
              <div className="text-sm text-muted-foreground font-mono mb-2">Owner: main()</div>
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
      <div className="mt-4 p-3 bg-muted/50 rounded border border-border text-xs text-muted-foreground">
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
