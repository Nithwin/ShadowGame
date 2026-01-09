'use client';

import { useState } from 'react';
import GameLayout from '@/components/game/GameLayout';
import CodeEditor from '@/components/game/CodeEditor';
import MemoryVisualizer from '@/components/game/MemoryVisualizer';
import { Play, CheckCircle, XCircle } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_CODE = `fn main() {
    let crate_id = 500;
    println!("Loading crate: {}", crate_id);

    // TODO: The manifest says the ID should be 501.
    // Change the crate_id variable to 501.
    
    crate_id = 501;
    println!("Corrected crate: {}", crate_id);
}`;

export default function LevelPage() {
  const [code, setCode] = useState(INITIAL_CODE);
  const [output, setOutput] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const router = useRouter();

  const runCode = () => {
    setOutput(['> Compiling cargo_hold.rs...', '> Running target/debug/cargo_hold']);

    setTimeout(() => {
      // Mock Compilation Check
      if (!code.includes('let mut crate_id')) {
        setOutput(prev => [
          ...prev,
          'error[E0384]: cannot assign twice to immutable variable `crate_id`',
          ' --> src/main.rs:8:5',
          '  |',
          '2 |     let crate_id = 500;',
          '  |         -------- first assignment to `crate_id`',
          '...',
          '8 |     crate_id = 501;',
          '  |     ^^^^^^^^^^^^^^ cannot assign twice to immutable variable',
          '  |',
          '  = help: make this binding mutable: `mut crate_id`'
        ]);
        setStatus('error');
      } else {
        setOutput(prev => [
          ...prev,
          'Loading crate: 500',
          'Corrected crate: 501',
          'Process finished with exit code 0'
        ]);
        setStatus('success');
      }
    }, 1000);
  };

  return (
    <GameLayout title="RustVoyage" subtitle="Level 1: The Cargo Hold">
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Left: Story & Instructions */}
        <div className="w-1/4 bg-[#0E0E0E] border-r border-gray-800 p-6 overflow-y-auto font-sans flex flex-col">
          <div className="mb-6 flex-1">
            <h2 className="text-xl font-bold text-gray-100 mb-4 font-orbitron">MISSION BRIEF</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              <span className="text-blue-400 font-bold">Unit 734</span>, our sensors detect a crate with an outdated manifest ID.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Standard Rust Protocol enforces <strong>Immutability</strong>. You cannot change a value once set, unless you explicitly override the safety lock.
            </p>

            <div className="mt-6 bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
              <h3 className="text-blue-400 text-xs font-bold uppercase mb-2">Objective</h3>
              <ul className="list-disc list-inside text-gray-300 text-xs space-y-2">
                <li>Add <code className="text-green-400">mut</code> keyword.</li>
                <li>Reassign <code className="text-orange-400">crate_id</code> to 501.</li>
              </ul>
            </div>
          </div>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl text-center"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white mb-1">SYSTEM SYNCED</h3>
                <button
                  onClick={() => router.push('/')}
                  className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm transition-colors w-full mt-2"
                >
                  Continuum Link &rarr;
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Middle: Code Editor */}
        <div className="flex-1 flex flex-col bg-[#050505] relative z-10 border-r border-gray-800">
          <CodeEditor
            initialCode={code}
            onChange={(val) => setCode(val || '')}
          />
          <button
            onClick={runCode}
            className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg shadow-blue-500/20 flex items-center gap-2 font-bold transition-all z-20 hover:scale-105"
          >
            <Play size={18} fill="currentColor" /> EXECUTE
          </button>
        </div>

        {/* Right: Visualizer & Output */}
        <div className="w-1/4 bg-[#0A0A0A] flex flex-col border-l border-gray-800">
          <div className="flex-1 p-4">
            <h3 className="text-gray-500 text-xs font-bold mb-4 uppercase">Neural Link / Visualizer</h3>
            <MemoryVisualizer code={code} variableName="crate_id" />
          </div>

          <div className="h-1/3 bg-black border-t border-gray-800 p-4 font-mono text-xs overflow-y-auto">
            <div className="text-gray-500 mb-2 border-b border-gray-800 pb-1">TERMINAL OUTPUT</div>
            <div className="space-y-1">
              {output.length === 0 && <span className="text-gray-700 italic">Finding connection...</span>}
              {output.map((line, i) => (
                <div key={i} className={`${line.includes('error') ? 'text-red-400' : 'text-gray-300'}`}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
