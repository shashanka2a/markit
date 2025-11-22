'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();
    const children = heroRef.current.children;

    tl.from(Array.from(children), {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="text-center max-w-3xl mx-auto mb-20 hero-content relative z-10" ref={heroRef}>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-mono mb-8 backdrop-blur-sm hover:scale-105 transition-transform cursor-default">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Unified Workspace v2.0
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-sm">
        One hub, many<br className="hidden md:block" /> SaaS tools.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
        Replace your fragmented stack with a single, powerful workspace for forms, QR codes, and video generation.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-electric text-white font-semibold hover:bg-blue-600 shadow-[0_0_20px_-5px_rgba(45,127,249,0.4)] hover:shadow-[0_0_30px_-5px_rgba(45,127,249,0.6)] transition-all duration-300 text-sm relative overflow-hidden group">
          <span className="relative z-10">Get Started Free</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
        </button>
        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-2 backdrop-blur-sm">
          <i className="fa-regular fa-circle-play"></i> Watch Demo
        </button>
      </div>
    </div>
  );
}

