import React from 'react';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">02 // FEATURED WORK</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-10">
        SELECTED WORKS. ENGINEERED VALUE.
      </h2>

      <div className="space-y-6">
        {portfolioData.projects.map((proj) => (
          <div key={proj.id} className="border border-zinc-800 hover:border-amber-500/50 transition-all bg-cardBg/70 p-6 md:p-8 rounded-xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <span className="text-xs font-mono text-amber-400/80">{proj.id} // {proj.category}</span>
              <a href={proj.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-1 text-xs font-mono mt-2 md:mt-0">
                VIEW REPO <ExternalLink size={14} />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{proj.title}</h3>
            <p className="text-zinc-400 text-sm max-w-2xl mb-6">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.techStack.map((tech, i) => (
                <span key={i} className="text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
