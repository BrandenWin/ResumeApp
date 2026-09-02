import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Affiliations from './components/Affiliations';
import ContactFooter from './components/ContactFooter';
import PrintResume from './components/PrintResume';
import ResumeDocument from './components/ResumeDocument';

export default function App() {
  const [printModalOpen, setPrintModalOpen] = useState(false);

  return (
    <>
      {/* On-screen Web Application View */}
      <div className="screen-only-view min-h-screen bg-slate-900 text-slate-100 selection:bg-brand-500 selection:text-white font-sans antialiased">
        <Navbar onPrintClick={() => setPrintModalOpen(true)} />
        <main>
          <Hero onPrintClick={() => setPrintModalOpen(true)} />
          <Experience />
          <Skills />
          <Education />
          <Affiliations />
        </main>
        <ContactFooter onPrintClick={() => setPrintModalOpen(true)} />
        <PrintResume 
          isOpen={printModalOpen} 
          onClose={() => setPrintModalOpen(false)} 
        />
      </div>

      {/* Direct Isolated 1-Page Print Container */}
      <div id="resume-pdf-document" className="print-only-view">
        <ResumeDocument />
      </div>
    </>
  );
}
