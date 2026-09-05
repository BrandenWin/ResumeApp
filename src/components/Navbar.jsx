import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  FileDown,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  Mail,
  Printer
} from 'lucide-react';
import { TurtleIcon, TigerGolfIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Navbar({ onPrintClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: ShieldCheck },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Athletics', href: '#affiliations', icon: TigerGolfIcon },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600/30 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform group-hover:border-emerald-400">
            <TurtleIcon className="w-7 h-7" />
          </div>
          <div>
            <div className="font-bold text-slate-100 group-hover:text-brand-400 transition-colors tracking-tight flex items-center gap-2">
              <span>{resumeData.personalInfo.name}</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> TS/SCI
              </span>
            </div>
            <div className="text-xs text-slate-400">{resumeData.personalInfo.title}</div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-800/60 border border-slate-700/60 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-700/70 transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onPrintClick}
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-sm active:scale-95"
            title="Open printable view or save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-brand-400" />
            <span>Print / PDF</span>
          </button>
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-md shadow-brand-500/20 transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-2">
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Active TS/SCI Security Clearance
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white p-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-800"
                >
                  <Icon className="w-4 h-4 text-brand-400" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-3 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPrintClick();
              }}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
            >
              <Printer className="w-4 h-4 text-brand-400" />
              <span>Print / PDF</span>
            </button>
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-brand-600 text-white"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
