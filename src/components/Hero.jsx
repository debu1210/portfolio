import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
          className="lg:col-span-7 z-10"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {personal.roles.map((role, idx) => (
              <span key={idx} className="text-[11px] font-mono tracking-widest border border-amber-500/30 bg-amber-500/10 text-amber-400 px-3 py-1 rounded">
                {role}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none mb-6">
            {personal.title}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            {personal.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded text-xs tracking-wider transition">
              EXPLORE MY WORK <ArrowUpRight size={16} />
            </a>
            <a href={personal.resumeUrl} className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 px-6 py-3 rounded text-xs tracking-wider transition">
              DOWNLOAD RESUME <Download size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative border border-amber-500/30 bg-cardBg/40 backdrop-blur-sm p-4 rounded-xl amber-glow">
            <img 
              src={personal.heroImage} 
              alt={personal.name} 
              className="w-full max-w-sm rounded-lg object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
