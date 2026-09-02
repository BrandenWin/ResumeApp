import React from 'react';
import { X, Printer } from 'lucide-react';
import ResumeDocument from './ResumeDocument';

export default function PrintResume({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="no-print fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-2 sm:p-4 md:p-6 flex items-start justify-center">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white text-black rounded-xl shadow-2xl overflow-hidden my-4">
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-brand-400" />
            <span className="font-semibold text-sm">Resume Document (1-Page Format)</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-xs font-semibold shadow transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Preview */}
        <div className="p-4 sm:p-8 bg-slate-200 max-h-[85vh] overflow-y-auto">
          <div className="bg-white shadow-xl border border-slate-300 rounded-sm p-6 sm:p-10 max-w-[800px] mx-auto">
            <ResumeDocument />
          </div>
        </div>
      </div>
    </div>
  );
}
