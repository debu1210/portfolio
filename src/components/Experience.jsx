import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-6">
      <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">04 // EXPERIENCE</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-10">
        EXPERIENCE & MILESTONES.
      </h2>

      <div className="border-l border-zinc-800 pl-6 space-y-8 relative ml-3">
        {portfolioData.timeline.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_8px_#f59e0b]" />
            <span className="text-xs font-mono text-zinc-500">{item.year}</span>
            <h3 className="text-xl font-bold text-white mt-1">{item.role}</h3>
            <div className="text-amber-400/90 text-xs font-mono mb-2">{item.company}</div>
            <p className="text-zinc-400 text-sm">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
