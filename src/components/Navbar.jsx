import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0C]/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono font-bold tracking-widest text-amber-500">
          {portfolioData.personal.name.toUpperCase()}
        </span>
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-wider text-zinc-400">
          <a href="#about" className="hover:text-amber-400 transition">ABOUT</a>
          <a href="#projects" className="hover:text-amber-400 transition">PROJECTS</a>
          <a href="#skills" className="hover:text-amber-400 transition">SKILLS</a>
          <a href="#experience" className="hover:text-amber-400 transition">EXPERIENCE</a>
          <a href="#contact" className="hover:text-amber-400 transition">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}
