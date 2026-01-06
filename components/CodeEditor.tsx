'use client';

import Editor, { OnMount } from '@monaco-editor/react';
import { useRef } from 'react';

interface CodeEditorProps {
  initialCode: string;
  onChange?: (value: string | undefined) => void;
  language?: string;
  theme?: 'vs-dark' | 'light';
}

export default function CodeEditor({ initialCode, onChange, language = 'rust', theme = 'vs-dark' }: CodeEditorProps) {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    
    // Define a custom theme if needed, or use default
    monaco.editor.defineTheme('code-realm-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#0A0A0A',
      },
    });
    
    monaco.editor.setTheme('code-realm-dark');
  };

  return (
    <div className="h-full w-full relative group">
      {/* Decorative Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="h-full w-full border border-gray-800 rounded-lg overflow-hidden bg-[#0A0A0A] relative z-10 box-decoration-clone">
        <Editor
          height="100%"
          defaultLanguage={language}
          defaultValue={initialCode}
          theme={theme}
          onMount={handleEditorDidMount}
          onChange={onChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: 'JetBrains Mono, monospace', 
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 16 },
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            smoothScrolling: true
          }}
        />
      </div>
    </div>
  );
}
