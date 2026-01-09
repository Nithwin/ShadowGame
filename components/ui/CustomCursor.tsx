'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;
    
    // Initial position off-screen to avoid jump
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const moveCursor = (e: MouseEvent) => {
      // Inner dot moves instantly
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // Outer ring follows with lag/damping
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15, // Physics-like lag
        ease: 'power2.out',
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for clickable elements
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.tagName.toLowerCase() === 'input' ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, { scope: cursorRef, dependencies: [mounted] });

  // Manage body cursor style
  useEffect(() => {
    if (!mounted) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Only engage custom cursor on non-touch devices
    if (!isTouchDevice) {
        document.body.style.cursor = 'none';
        const allElements = document.querySelectorAll('*');
        allElements.forEach((el) => {
            (el as HTMLElement).style.cursor = 'none';
        });
    }

    return () => {
        document.body.style.cursor = 'auto';
        const allElements = document.querySelectorAll('*');
        allElements.forEach((el) => {
            (el as HTMLElement).style.cursor = 'auto';
        });
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <style jsx global>{`
        /* Force hide cursor everywhere when this component is mounted */
        @media (pointer: fine) {
            body, a, button, input, [role="button"] {
                cursor: none !important;
            }
        }
      `}</style>
      
      {/* Shadow Katana Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 z-[9999] pointer-events-none drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            /* 
               Offset by -4px because the path starts at M4 4.
               This aligns the visual tip exactly with the mouse (0,0).
            */
            className={`transition-transform duration-200 origin-top-left -translate-x-[4px] -translate-y-[4px] ${isHovering ? '-rotate-12 scale-110' : 'rotate-0 scale-100'}`}
        >
            {/* Blade Glow Area */}
            <path 
                d="M4 4 L18 18" 
                stroke="#A855F7" 
                strokeWidth="6" 
                strokeLinecap="round" 
                className="opacity-40 blur-[3px]"
            />
            
            {/* Handle */}
            <path d="M16 16 L24 24" stroke="#4B5563" strokeWidth="4" strokeLinecap="square" />
            <path d="M19 19 L21 21" stroke="#1F2937" strokeWidth="4" />
            
            {/* Guard */}
            <path d="M14 18 L18 14" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
            
            {/* Sharp Energy Blade */}
            <path 
                d="M2 2 L16 16" 
                stroke="url(#bladeGradient)" 
                strokeWidth="3" 
                strokeLinecap="round" 
            />
            
            <defs>
                <linearGradient id="bladeGradient" x1="2" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E879F9" />
                    <stop offset="0.5" stopColor="#C084FC" />
                    <stop offset="1" stopColor="#A855F7" />
                </linearGradient>
            </defs>
        </svg>
      </div>

      {/* Trailing Energy Slash (Optional, simplified for performance) */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-500 rounded-full z-[9998] pointer-events-none opacity-50 blur-sm mix-blend-screen"
      />
    </>
  );
}
