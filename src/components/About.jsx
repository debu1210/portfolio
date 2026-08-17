import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export default function About() {
  const { personal, metrics } = portfolioData;

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6">
      <div className="border border-zinc-800 bg-cardBg/50 p-8 rounded-xl backdrop-blur-md">
        <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">01 // ABOUT ME</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
          {personal.bioHeading}
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-4xl mb-10">
          {personal.bioDescription}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((item, idx) => (
            <div key={idx} className="border border-zinc-800 bg-black/40 p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-extrabold text-amber-400">{item.value}</div>
              <div className="text-[11px] font-mono text-zinc-500 tracking-wider mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
