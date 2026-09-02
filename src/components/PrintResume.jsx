import React from 'react';
import { X, Printer } from 'lucide-react';
import { resumeData } from '../data/resumeData';

function ResumeDocument() {
  return (
    <div 
      id="resume-pdf-document" 
      className="bg-white text-black font-serif px-6 sm:px-10 py-5 max-w-[850px] mx-auto text-[9.2pt] leading-[1.26] select-text"
      style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
    >
      {/* Header */}
      <div className="text-center mb-1.5">
        <h1 className="text-[20pt] font-bold text-black tracking-normal leading-tight mb-0.5">
          Branden Nguyen
        </h1>
        <div className="text-[9.5pt] text-black space-x-1.5">
          <a 
            href={`mailto:${resumeData.personalInfo.email}`} 
            className="text-blue-800 underline hover:text-blue-900"
          >
            {resumeData.personalInfo.email}
          </a>
          <span className="text-black">|</span>
          <a 
            href={resumeData.personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-800 underline hover:text-blue-900"
          >
            LinkedIn
          </a>
          <span className="text-black">|</span>
          <span className="font-normal text-black">TS/SCI Clearance</span>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="mb-2">
        <div className="text-center font-bold text-[10pt] uppercase tracking-wider border-t border-b border-black py-[1px] mb-1">
          EDUCATION
        </div>
        
        <div className="space-y-1">
          <div>
            <div className="flex justify-between items-baseline font-bold text-black">
              <span>University of Maryland, College Park</span>
              <span className="font-normal text-[9pt] italic">August 2022 - May 2025</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-black space-y-[1px]">
              <li>Computer Science Major</li>
              <li>Graduated with Bachelors of Science, May 2025</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline font-bold text-black">
              <span>Towson University</span>
              <span className="font-normal text-[9pt] italic">August 2020 - May 2022</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-black space-y-[1px]">
              <li>Computer Science Major</li>
              <li>Dean’s List: Fall 2021 and Spring 2022</li>
            </ul>
          </div>

          <div>
            <div className="font-bold italic text-black">
              Related Coursework
            </div>
            <div className="grid grid-cols-2 gap-x-6 text-black pl-5 pt-[1px]">
              <div>• Introduction to Cyber Security</div>
              <div>• Data Structure & Algorithms</div>
              <div>• Object Oriented Programming I, II</div>
              <div>• Organization of Programming Languages</div>
            </div>
          </div>
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <div className="mb-2">
        <div className="text-center font-bold text-[10pt] uppercase tracking-wider border-t border-b border-black py-[1px] mb-1">
          WORK EXPERIENCE
        </div>

        <div className="space-y-1.5">
          {/* KBR */}
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-black">Software Developer</span>
              <span className="font-normal text-[9pt] italic">August 2025-Present</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[9pt] text-black mb-[1px]">
              <span>KBR, Inc.</span>
              <span>Arlington, VA</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-black space-y-[1px]">
              <li>Developed 20+ backend Python scripts to transform, clean, and manipulate data tables as a government contractor supporting U.S. Air Force projects, and wrote unit tests to validate data logic and ensure reliable backend workflows</li>
              <li>Used Docker to containerize and configure applications, making consistent runtime development/testing</li>
              <li>Developed API schemas/calls to enable communication between front-end and back-end systems for project initiatives</li>
              <li>Utilized pgAdmin to manage and query PostgreSQL databases, writing SQL queries to modify and maintain data tables supporting backend applications</li>
            </ul>
          </div>

          {/* Digiclarity */}
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-black">Software Developer Intern</span>
              <span className="font-normal text-[9pt] italic">July 2024-October 2024</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[9pt] text-black mb-[1px]">
              <span>Digiclarity</span>
              <span>Dallas, TX</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-black space-y-[1px]">
              <li>Develop front-end features with AWS-based applications, improving user experience for an Application for Vodafone</li>
              <li>Expand cloud computing expertise through AWS Skill Builder, optimizing application performance for faster load times</li>
              <li>Collaborate with cross-functional teams using React to maintain web applications and introduce new features for Vodafone</li>
            </ul>
          </div>

          {/* DoD PCIP */}
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-black">Computer Scientist PCIP Program</span>
              <span className="font-normal text-[9pt] italic">May 2024-July 2024</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[9pt] text-black mb-[1px]">
              <span>Air Force Civilian Services- Department of Defense</span>
              <span>Midwest City, OK</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-black space-y-[1px]">
              <li>Configured Cisco switches using Cisco Command Line Interface (CLI) for a customized network setup</li>
              <li>Acquired knowledge in networking, including IP addressing (IPv4 & IPv6), DHCP, TCP, and ARP protocols</li>
              <li>Created packet captures using Wireshark and analyzed switches for network vulnerabilities</li>
            </ul>
          </div>

          {/* Tenable */}
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-black">Technical Support Engineer Intern</span>
              <span className="font-normal text-[9pt] italic">June 2023-August 2023</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[9pt] text-black mb-[1px]">
              <span>Tenable</span>
              <span>Columbia, MD</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-black space-y-[1px]">
              <li>Managed 4 customer cases and provided solutions to issues related to Tenable Nessus</li>
              <li>Performed and analyzed vulnerability scans daily using Tenable Nessus Professional</li>
              <li>Implemented SSH, Linux commands, and troubleshooted various networking issues</li>
            </ul>
          </div>

          {/* UMD IT */}
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-black">IT Service Desk Lead</span>
              <span className="font-normal text-[9pt] italic">August 2022-May 2025</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[9pt] text-black mb-[1px]">
              <span>University of Maryland – IT Division</span>
              <span>College Park, MD</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-black space-y-[1px]">
              <li>Provide IT support using ServiceNow to faculty, staff, and students at the University of Maryland including resetting passwords, implementing multi factor authentication, and other IT related issues</li>
              <li>Lead a team of 20+ service desk technicians to address customer needs through training and prompt delegation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TECHNICAL SKILLS/LANGUAGES */}
      <div className="mb-2">
        <div className="text-center font-bold text-[10pt] uppercase tracking-wider border-t border-b border-black py-[1px] mb-1">
          TECHNICAL SKILLS/LANGUAGES
        </div>
        <ul className="list-disc list-outside ml-5 text-black space-y-[1px]">
          <li>
            <span className="font-bold">Technical skills:</span> Git/GitHub, Docker, pgAdmin, Confluence, Jira, AWS, Tenable Nessus, SSH, Networks, Vulnerability Assessments, Risk Management
          </li>
          <li>
            <span className="font-bold">Languages:</span> Python, Java, JavaScript, SQL, CSS, HTML, Linux, Bash, Wireshark, Vue, React, MongoDB, Ubuntu, Node.Js, Flutter, Dart
          </li>
        </ul>
      </div>

      {/* MEMBERSHIPS/AFFILIATIONS */}
      <div>
        <div className="text-center font-bold text-[10pt] uppercase tracking-wider border-t border-b border-black py-[1px] mb-1">
          MEMBERSHIPS/AFFILIATIONS
        </div>
        <div>
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-black">Men’s Golf Team</span>
            <span className="font-normal text-[9pt] italic">August 2020-May 2022</span>
          </div>
          <div className="text-black pl-0">
            Student athlete for the Towson University Division I Men’s Golf Team
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PrintResume({ isOpen, onClose }) {
  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) {
    return (
      <div className="hidden print:block">
        <ResumeDocument />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-2 sm:p-4 md:p-6 flex items-start justify-center">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white text-black rounded-xl shadow-2xl overflow-hidden my-4">
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-brand-400" />
            <span className="font-semibold text-sm">Resume PDF Document (1-Page Format)</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-xs font-semibold shadow transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF (1 Page)</span>
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

        {/* Printable 1-Page Exact PDF Layout */}
        <div className="p-4 sm:p-8 bg-slate-100 max-h-[85vh] overflow-y-auto">
          <div className="bg-white shadow-lg border border-slate-300 rounded-sm">
            <ResumeDocument />
          </div>
        </div>
      </div>
    </div>
  );
}
