import React from 'react';
import { resumeData } from '../data/resumeData';

export default function ResumeDocument() {
  return (
    <div 
      className="bg-white text-black font-serif select-text"
      style={{ 
        fontFamily: '"Times New Roman", Times, Georgia, serif',
        color: '#000000'
      }}
    >
      {/* Header */}
      <div className="text-center mb-1">
        <h1 className="text-[20pt] font-bold text-black tracking-normal leading-none mb-1">
          Branden Nguyen
        </h1>
        <div className="text-[9pt] text-black space-x-1.5 leading-none">
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
      <div className="mb-1.5">
        <div className="text-center font-bold text-[9.5pt] uppercase tracking-wider border-t border-b border-black py-[0.5px] mb-1">
          EDUCATION
        </div>
        
        <div className="space-y-1">
          <div>
            <div className="flex justify-between items-baseline font-bold text-[9pt] text-black leading-tight">
              <span>University of Maryland, College Park</span>
              <span className="font-normal italic">August 2022 - May 2025</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-[8.8pt] text-black space-y-[0.5px] leading-tight">
              <li>Computer Science Major</li>
              <li>Graduated with Bachelors of Science, May 2025</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline font-bold text-[9pt] text-black leading-tight">
              <span>Towson University</span>
              <span className="font-normal italic">August 2020 - May 2022</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-[8.8pt] text-black space-y-[0.5px] leading-tight">
              <li>Computer Science Major</li>
              <li>Dean’s List: Fall 2021 and Spring 2022</li>
            </ul>
          </div>

          <div>
            <div className="font-bold italic text-[8.8pt] text-black leading-tight">
              Related Coursework
            </div>
            <div className="grid grid-cols-2 gap-x-6 text-[8.8pt] text-black pl-4 pt-[0.5px] leading-tight">
              <div>• Introduction to Cyber Security</div>
              <div>• Data Structure & Algorithms</div>
              <div>• Object Oriented Programming I, II</div>
              <div>• Organization of Programming Languages</div>
            </div>
          </div>
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <div className="mb-1.5">
        <div className="text-center font-bold text-[9.5pt] uppercase tracking-wider border-t border-b border-black py-[0.5px] mb-1">
          WORK EXPERIENCE
        </div>

        <div className="space-y-1.5">
          {/* KBR */}
          <div>
            <div className="flex justify-between items-baseline text-[9pt] leading-tight">
              <span className="font-bold text-black">Software Developer</span>
              <span className="font-normal italic">August 2025-Present</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[8.8pt] text-black leading-tight mb-[1px]">
              <span>KBR, Inc.</span>
              <span>Arlington, VA</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-[8.8pt] text-black space-y-[0.5px] leading-[1.22]">
              <li>Developed 20+ backend Python scripts to transform, clean, and manipulate data tables as a government contractor supporting U.S. Air Force projects, and wrote unit tests to validate data logic and ensure reliable backend workflows</li>
              <li>Used Docker to containerize and configure applications, making consistent runtime development/testing</li>
              <li>Developed API schemas/calls to enable communication between front-end and back-end systems for project initiatives</li>
              <li>Utilized pgAdmin to manage and query PostgreSQL databases, writing SQL queries to modify and maintain data tables supporting backend applications</li>
            </ul>
          </div>

          {/* Digiclarity */}
          <div>
            <div className="flex justify-between items-baseline text-[9pt] leading-tight">
              <span className="font-bold text-black">Software Developer Intern</span>
              <span className="font-normal italic">July 2024-October 2024</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[8.8pt] text-black leading-tight mb-[1px]">
              <span>Digiclarity</span>
              <span>Dallas, TX</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-[8.8pt] text-black space-y-[0.5px] leading-[1.22]">
              <li>Develop front-end features with AWS-based applications, improving user experience for an Application for Vodafone</li>
              <li>Expand cloud computing expertise through AWS Skill Builder, optimizing application performance for faster load times</li>
              <li>Collaborate with cross-functional teams using React to maintain web applications and introduce new features for Vodafone</li>
            </ul>
          </div>

          {/* DoD PCIP */}
          <div>
            <div className="flex justify-between items-baseline text-[9pt] leading-tight">
              <span className="font-bold text-black">Computer Scientist PCIP Program</span>
              <span className="font-normal italic">May 2024-July 2024</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[8.8pt] text-black leading-tight mb-[1px]">
              <span>Air Force Civilian Services- Department of Defense</span>
              <span>Midwest City, OK</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-[8.8pt] text-black space-y-[0.5px] leading-[1.22]">
              <li>Configured Cisco switches using Cisco Command Line Interface (CLI) for a customized network setup</li>
              <li>Acquired knowledge in networking, including IP addressing (IPv4 & IPv6), DHCP, TCP, and ARP protocols</li>
              <li>Created packet captures using Wireshark and analyzed switches for network vulnerabilities</li>
            </ul>
          </div>

          {/* Tenable */}
          <div>
            <div className="flex justify-between items-baseline text-[9pt] leading-tight">
              <span className="font-bold text-black">Technical Support Engineer Intern</span>
              <span className="font-normal italic">June 2023-August 2023</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[8.8pt] text-black leading-tight mb-[1px]">
              <span>Tenable</span>
              <span>Columbia, MD</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-[8.8pt] text-black space-y-[0.5px] leading-[1.22]">
              <li>Managed 4 customer cases and provided solutions to issues related to Tenable Nessus</li>
              <li>Performed and analyzed vulnerability scans daily using Tenable Nessus Professional</li>
              <li>Implemented SSH, Linux commands, and troubleshooted various networking issues</li>
            </ul>
          </div>

          {/* UMD IT */}
          <div>
            <div className="flex justify-between items-baseline text-[9pt] leading-tight">
              <span className="font-bold text-black">IT Service Desk Lead</span>
              <span className="font-normal italic">August 2022-May 2025</span>
            </div>
            <div className="flex justify-between items-baseline italic text-[8.8pt] text-black leading-tight mb-[1px]">
              <span>University of Maryland – IT Division</span>
              <span>College Park, MD</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-[8.8pt] text-black space-y-[0.5px] leading-[1.22]">
              <li>Provide IT support using ServiceNow to faculty, staff, and students at the University of Maryland including resetting passwords, implementing multi factor authentication, and other IT related issues</li>
              <li>Lead a team of 20+ service desk technicians to address customer needs through training and prompt delegation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TECHNICAL SKILLS/LANGUAGES */}
      <div className="mb-1.5">
        <div className="text-center font-bold text-[9.5pt] uppercase tracking-wider border-t border-b border-black py-[0.5px] mb-1">
          TECHNICAL SKILLS/LANGUAGES
        </div>
        <ul className="list-disc list-outside ml-4 text-[8.8pt] text-black space-y-[0.5px] leading-[1.22]">
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
        <div className="text-center font-bold text-[9.5pt] uppercase tracking-wider border-t border-b border-black py-[0.5px] mb-1">
          MEMBERSHIPS/AFFILIATIONS
        </div>
        <div>
          <div className="flex justify-between items-baseline text-[9pt] leading-tight">
            <span className="font-bold text-black">Men’s Golf Team</span>
            <span className="font-normal italic">August 2020-May 2022</span>
          </div>
          <div className="text-[8.8pt] text-black leading-tight">
            Student athlete for the Towson University Division I Men’s Golf Team
          </div>
        </div>
      </div>
    </div>
  );
}
