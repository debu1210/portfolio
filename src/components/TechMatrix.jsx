import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export default function TechMatrix() {
  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-6">
      <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">03 // TECH MATRIX</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-10">
        ARCHITECTURAL MASTERY.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.techMatrix.map((item, idx) => (
          <div key={idx} className="border border-zinc-800 bg-cardBg/40 p-6 rounded-xl hover:border-zinc-600 transition">
            <h3 className="text-lg font-bold text-white mb-2">{item.category}</h3>
            <p className="text-xs text-zinc-400 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, sIdx) => (
                <span key={sIdx} className="text-xs font-mono border border-amber-500/20 bg-amber-500/5 text-amber-300 px-3 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
