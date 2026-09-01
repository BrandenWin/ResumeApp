import React from 'react';
import { X, Printer } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function PrintResume({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-start justify-center">
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-white text-black rounded-xl shadow-2xl overflow-hidden my-6">
        {/* Top Control Bar (Hidden when printed) */}
        <div className="no-print bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-brand-400" />
            <span className="font-semibold text-sm">Resume Print Preview</span>
            <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded ml-2">
              Ready to Save as PDF
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-xs font-semibold shadow transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 font-sans text-black bg-white max-w-[850px] mx-auto text-[13px] leading-normal print-page">
          {/* Header */}
          <div className="text-center pb-3 border-b-2 border-slate-800 mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase text-slate-900 mb-1">
              {resumeData.personalInfo.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-700 font-medium">
              <a href={`mailto:${resumeData.personalInfo.email}`} className="text-blue-700 underline">
                {resumeData.personalInfo.email}
              </a>
              <span>|</span>
              <span>{resumeData.personalInfo.phone}</span>
              <span>|</span>
              <a href={resumeData.personalInfo.linkedin} className="text-blue-700 underline">
                LinkedIn
              </a>
              <span>|</span>
              <span className="font-bold text-slate-900">{resumeData.personalInfo.clearance}</span>
            </div>
          </div>

          {/* EDUCATION */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>University of Maryland, College Park</span>
                  <span className="font-normal text-xs text-slate-700">August 2022 - May 2025</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-800 pl-1">
                  <li>Computer Science Major</li>
                  <li>Graduated with Bachelors of Science, May 2025</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>Towson University</span>
                  <span className="font-normal text-xs text-slate-700">August 2020 - May 2022</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-800 pl-1">
                  <li>Computer Science Major</li>
                  <li>Dean's List: Fall 2021 and Spring 2022</li>
                </ul>
              </div>

              <div className="pt-1">
                <span className="font-bold text-xs text-slate-900 italic">Related Coursework</span>
                <div className="grid grid-cols-2 gap-x-4 text-xs text-slate-800 pl-1 mt-0.5">
                  <div>• Introduction to Cyber Security</div>
                  <div>• Data Structure & Algorithms</div>
                  <div>• Object Oriented Programming I, II</div>
                  <div>• Organization of Programming Languages</div>
                </div>
              </div>
            </div>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2">
              Work Experience
            </h2>
            <div className="space-y-3">
              {resumeData.experiences.map((exp) => (
                <div key={exp.id} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{exp.role}</span>
                    <span className="text-xs text-slate-700 font-normal">{exp.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-xs text-slate-800 mb-1">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-800">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* TECHNICAL SKILLS/LANGUAGES */}
          <section className="mb-4 break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2">
              Technical Skills / Languages
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-800 pl-1">
              <li>
                <span className="font-bold">Technical skills: </span>
                Git/GitHub, Docker, pgAdmin, Confluence, Jira, AWS, Tenable Nessus, SSH, Networks, Vulnerability Assessments, Risk Management
              </li>
              <li>
                <span className="font-bold">Languages: </span>
                Python, Java, JavaScript, SQL, CSS, HTML, Linux, Bash, Wireshark, Vue, React, MongoDB, Ubuntu, Node.Js, Flutter, Dart
              </li>
            </ul>
          </section>

          {/* MEMBERSHIPS/AFFILIATIONS */}
          <section className="break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2">
              Memberships / Affiliations
            </h2>
            <div>
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Men's Golf Team</span>
                <span className="font-normal text-xs text-slate-700">August 2020 - May 2022</span>
              </div>
              <p className="text-xs text-slate-800 mt-0.5">
                Student athlete for the Towson University Division I Men's Golf Team
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
