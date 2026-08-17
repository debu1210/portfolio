import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Transmitting...');
    const formData = new FormData(e.target);
    formData.append("access_key", portfolioData.contact.web3formsKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then(res => res.json());

      if (res.success) {
        setStatus('Transmission Received.');
        e.target.reset();
      } else {
        setStatus('Transmission Failed. Try again.');
      }
    } catch (error) {
      setStatus('Network Error. Try again.');
    }
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-6">
      <div className="border border-zinc-800 bg-cardBg/80 p-8 rounded-xl">
        <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">05 // CONTACT</span>
        <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">INITIALIZE TRANSMISSION.</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mt-6">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">CALLSIGN / NAME</label>
            <input name="name" required className="w-full bg-black/60 border border-zinc-800 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">TRANSMISSION FREQUENCY / EMAIL</label>
            <input type="email" name="email" required className="w-full bg-black/60 border border-zinc-800 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">DISPATCH CONTENT / MESSAGE</label>
            <textarea name="message" rows="4" required className="w-full bg-black/60 border border-zinc-800 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500" />
          </div>
          <button type="submit" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded text-xs tracking-wider transition">
            EXECUTE DISPATCH <Send size={14} />
          </button>
          {status && <p className="text-xs font-mono text-amber-400 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
