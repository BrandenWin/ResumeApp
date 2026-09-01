import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Affiliations from './components/Affiliations';
import ContactFooter from './components/ContactFooter';
import PrintResume from './components/PrintResume';

export default function App() {
  const [printModalOpen, setPrintModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-brand-500 selection:text-white font-sans antialiased">
      {/* Top Navbar */}
      <Navbar onPrintClick={() => setPrintModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onPrintClick={() => setPrintModalOpen(true)} />
        <Experience />
        <Skills />
        <Education />
        <Affiliations />
      </main>

      {/* Footer */}
      <ContactFooter onPrintClick={() => setPrintModalOpen(true)} />

      {/* Printable / PDF Export Modal */}
      <PrintResume 
        isOpen={printModalOpen} 
        onClose={() => setPrintModalOpen(false)} 
      />
    </div>
  );
}
