'use client';

export function RetroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:200px]">
      {/* Grid Floor */}
      <div 
        className="absolute inset-0 [transform:rotateX(35deg)]"
        style={{
          background: `
            linear-gradient(to bottom, transparent 40%, rgba(138, 43, 226, 0.3) 100%),
            linear-gradient(rgba(138, 43, 226, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138, 43, 226, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 20s linear infinite',
        }}
      />
      
      {/* Horizon Glow */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-[#020005] via-[#020005] to-transparent z-10" />

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: rotateX(35deg) translateY(0); }
          100% { transform: rotateX(35deg) translateY(40px); }
        }
      `}</style>
    </div>
  );
}
