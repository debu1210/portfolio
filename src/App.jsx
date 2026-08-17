import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import TechMatrix from './components/TechMatrix.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <main className="min-h-screen bg-darkBg text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechMatrix />
      <Experience />
      <Contact />
    </main>
  );
}
