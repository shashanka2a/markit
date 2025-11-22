'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Grid Entrance Animation
    gsap.from(".bento-card", {
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 95%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: "opacity, transform"
    });

    // Spotlight Effect
    const handleSpotlight = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const cards = gridRef.current.getElementsByClassName("bento-card");

      for (const card of Array.from(cards) as HTMLElement[]) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    // Parallax Effect (Desktop)
    if (window.matchMedia("(min-width: 768px)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        handleSpotlight(e);

        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        gsap.to(".bento-card", {
          duration: 1,
          x: mouseX * 8,
          y: mouseY * 8,
          rotationY: mouseX * 2,
          rotationX: -mouseY * 2,
          ease: "power2.out",
          stagger: 0.02
        });
      };

      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    } else {
      document.addEventListener("mousemove", handleSpotlight);
      return () => document.removeEventListener("mousemove", handleSpotlight);
    }
  }, []);

  return (
    <div className="bento-grid w-full relative z-10" ref={gridRef}>
      {/* Cell 1: FormEase (Large) */}
      <a
        href="https://formease.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="bento-card span-large group relative overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
        aria-label="Go to FormEase"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)",
          backgroundColor: "#13162D",
          backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 card-icon transition-transform duration-300">
                <i className="fa-solid fa-chart-simple"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  FormEase
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-50"></i>
                </h3>
                <p className="text-xs text-purple-300 font-mono mt-0.5">ANALYTICS DASHBOARD</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-lg bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-medium flex items-center gap-1.5">
              <i className="fa-solid fa-arrow-trend-up text-[10px]"></i>
              128% YoY
            </div>
          </div>

          {/* Chart Visual */}
          <div className="flex-1 relative w-full flex items-end justify-between gap-2 sm:gap-4 px-2">
            <div className="absolute left-0 bottom-0 w-full h-px bg-white/10"></div>

            <div className="w-full bg-white/5 rounded-t sm:rounded-t-md h-[35%] chart-bar relative" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-full bg-white/5 rounded-t sm:rounded-t-md h-[50%] chart-bar relative" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-full bg-white/5 rounded-t sm:rounded-t-md h-[45%] chart-bar relative" style={{ animationDelay: '0.3s' }}></div>

            {/* Highlight Bar */}
            <div className="w-full bg-gradient-to-t from-electric/50 to-electric rounded-t sm:rounded-t-md h-[85%] chart-bar relative shadow-[0_0_20px_rgba(45,127,249,0.3)]" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-midnight border border-white/20 px-2 py-1 rounded text-xs font-mono whitespace-nowrap opacity-100">
                4.2k
              </div>
            </div>

            <div className="w-full bg-white/5 rounded-t sm:rounded-t-md h-[60%] chart-bar relative" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </a>

      {/* Cell 2: QRBee (Medium) */}
      <a
        href="https://qrbee.io"
        target="_blank"
        rel="noopener noreferrer"
        className="bento-card span-medium group relative cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
        aria-label="Go to QRBee"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)",
          backgroundColor: "#13162D"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full"></div>

        <div className="p-6 h-full flex flex-col relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 card-icon transition-transform duration-300">
              <i className="fa-solid fa-qrcode"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                QRBee
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-50"></i>
              </h3>
              <p className="text-xs text-cyan-300 font-mono mt-0.5">DYNAMIC GENERATOR</p>
            </div>
          </div>

          {/* Styled QR Widget */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-white p-3 rounded-2xl shadow-xl relative group-hover:scale-105 transition-transform duration-300">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://qrbee.io&color=0A0A23&bgcolor=FFFFFF&margin=2"
                alt="QRBee Link"
                className="w-32 h-32 rounded-lg mix-blend-multiply opacity-90"
              />
            </div>
            <div className="mt-6 w-full px-2">
              <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-2 uppercase tracking-wider">
                <span>Daily Scans</span>
                <span className="text-white">1,240</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[75%] animate-[pulse_3s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Cell 3: AdVerse (Small) */}
      <a
        href="https://adverse.media"
        target="_blank"
        rel="noopener noreferrer"
        className="bento-card p-6 flex flex-col justify-between group relative overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
        aria-label="Go to AdVerse"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)",
          backgroundColor: "#13162D"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="flex justify-between items-start relative z-10">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 card-icon transition-transform duration-300">
            <i className="fa-solid fa-clapperboard"></i>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] font-mono text-red-400 uppercase">Rec</span>
          </div>
        </div>

        {/* Timeline UI */}
        <div className="mt-6 relative z-10">
          <h3 className="text-lg font-bold text-white mb-0.5 flex items-center gap-2">
            AdVerse
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-50"></i>
          </h3>
          <p className="text-xs text-red-300 font-mono mb-4">AI VIDEO STUDIO</p>

          <div className="glass-panel p-2 rounded-lg flex items-center gap-2 group-hover:bg-white/10 transition-colors">
            <div className="w-6 h-6 rounded-full bg-white text-midnight flex items-center justify-center text-[10px]">
              <i className="fa-solid fa-play ml-0.5"></i>
            </div>
            <div className="flex-1 h-8 flex gap-0.5 overflow-hidden opacity-60">
              <div className="w-1/3 h-full bg-white/20 rounded-sm"></div>
              <div className="w-1/4 h-full bg-red-500/40 rounded-sm"></div>
              <div className="w-full h-full bg-white/10 rounded-sm"></div>
            </div>
          </div>
        </div>
      </a>

      {/* Cell 4: Stack (Small) */}
      <div
        className="bento-card p-6 flex flex-col items-center justify-center relative overflow-hidden hover:shadow-2xl hover:shadow-white/5 transition-all duration-500"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)",
          backgroundColor: "#13162D"
        }}
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <i className="fa-solid fa-puzzle-piece text-9xl text-white"></i>
        </div>
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center -space-x-3 mb-4 float">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
              alt="Slack"
              className="w-10 h-10 rounded-full bg-gray-800 p-1 border-2 border-midnight shadow-lg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              className="w-10 h-10 rounded-full bg-gray-800 p-1.5 border-2 border-midnight shadow-lg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-10 h-10 rounded-full bg-white p-1.5 border-2 border-midnight shadow-lg"
            />
            <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-midnight flex items-center justify-center text-[10px] font-bold text-white">
              +20
            </div>
          </div>
          <h4 className="text-sm font-medium text-gray-300">Seamless Integrations</h4>
        </div>
      </div>
    </div>
  );
}
