export const resumeData = {
  personalInfo: {
    name: "Branden Nguyen",
    title: "Software Developer",
    clearance: "TS/SCI Clearance",
    clearanceBadge: "Active TS/SCI Security Clearance",
    email: "brandennguyenmd@gmail.com",
    location: "Washington DC / Baltimore Area (MD, VA)",
    linkedin: "https://www.linkedin.com/in/branden-nguyen/", // Editable placeholder/link
    github: "https://github.com/BrandenWin",
    summary: "Software Developer with an active TS/SCI clearance and a B.S. in Computer Science from the University of Maryland, College Park. Experienced in building robust backend Python services, data manipulation pipelines, full-stack React applications, AWS cloud infrastructure, Docker containerization, and network security analysis supporting defense and enterprise projects.",
  },
  highlights: [
    { label: "Security Clearance", value: "TS/SCI" },
    { label: "Backend & Data", value: "20+ Python Scripts & APIs" },
    { label: "Leadership", value: "20+ IT Technicians Led" },
    { label: "Athletics", value: "NCAA Division I Golfer" },
  ],
  experiences: [
    {
      id: "kbr",
      role: "Software Developer",
      company: "KBR, Inc.",
      location: "Arlington, VA",
      period: "August 2025 - Present",
      type: "Full-time",
      featured: true,
      description: "Government contractor supporting U.S. Air Force software systems, backend data pipelines, and API integrations.",
      highlights: [
        "Developed 20+ backend Python scripts to transform, clean, and manipulate data tables as a government contractor supporting U.S. Air Force projects, and wrote unit tests to validate data logic and ensure reliable backend workflows.",
        "Used Docker to containerize and configure applications, making consistent runtime development and testing environments across local and staging setups.",
        "Developed API schemas and endpoints to enable seamless communication between front-end and back-end systems for key project initiatives.",
        "Utilized pgAdmin to manage and query PostgreSQL databases, writing complex SQL queries to modify and maintain data tables supporting backend applications."
      ],
      skills: ["Python", "PostgreSQL", "Docker", "API Design", "Unit Testing", "SQL", "pgAdmin", "U.S. Air Force"]
    },
    {
      id: "Digiclarity",
      role: "Software Developer Intern",
      company: "Digiclarity",
      location: "Dallas, TX",
      period: "July 2024 - October 2024",
      type: "Internship",
      featured: true,
      description: "Front-end and cloud development delivering features for high-traffic enterprise applications.",
      highlights: [
        "Developed front-end features with AWS-based applications, improving user experience and responsiveness for an enterprise Application for Vodafone.",
        "Expanded cloud computing expertise through AWS Skill Builder, optimizing application performance for faster load times and enhanced cloud resource utilization.",
        "Collaborated closely with cross-functional agile teams using React to maintain web applications and introduce new scalable features for Vodafone."
      ],
      skills: ["React", "JavaScript", "AWS", "Cloud Computing", "Front-end Architecture", "Agile", "Vodafone"]
    },
    {
      id: "usaf-pcip",
      role: "Computer Scientist (PCIP Program)",
      company: "Air Force Civilian Services - Department of Defense",
      location: "Midwest City, OK",
      period: "May 2024 - July 2024",
      type: "Federal Internship",
      featured: true,
      description: "Premier Civilian Internship Program (PCIP) focusing on DoD network engineering, switch configuration, and traffic analysis.",
      highlights: [
        "Configured Cisco switches using Cisco Command Line Interface (CLI) for customized, mission-critical network setups.",
        "Acquired in-depth working knowledge in network engineering, including IP addressing (IPv4 & IPv6), DHCP, TCP, and ARP protocol operation.",
        "Created packet captures using Wireshark and analyzed switch traffic for network vulnerabilities and anomalies."
      ],
      skills: ["Cisco CLI", "Wireshark", "Network Security", "IPv4 & IPv6", "DHCP & TCP/ARP", "Packet Capture Analysis", "DoD"]
    },
    {
      id: "tenable",
      role: "Technical Support Engineer Intern",
      company: "Tenable",
      location: "Columbia, MD",
      period: "June 2023 - August 2023",
      type: "Internship",
      featured: false,
      description: "Customer solutions engineering and vulnerability management for Tenable Nessus enterprise deployments.",
      highlights: [
        "Managed 4 customer cases concurrently and delivered timely technical solutions to complex issues related to Tenable Nessus security scanners.",
        "Performed and analyzed vulnerability scans daily using Tenable Nessus Professional to identify Common Vulnerabilities and Exposures (CVEs).",
        "Implemented SSH and Linux commands to troubleshoot and resolve various network connectivity and host configuration issues."
      ],
      skills: ["Tenable Nessus", "Vulnerability Management", "Linux", "SSH", "Network Troubleshooting", "Customer Support"]
    },
    {
      id: "umd-it",
      role: "IT Service Desk Lead",
      company: "University of Maryland – IT Division",
      location: "College Park, MD",
      period: "August 2022 - May 2025",
      type: "Lead Role",
      featured: false,
      description: "Operations leadership and enterprise service management supporting over 50,000 campus users.",
      highlights: [
        "Provided enterprise IT support using ServiceNow to faculty, staff, and students across the University of Maryland, including credential resets, MFA multi-factor authentication setup, and IT troubleshooting.",
        "Led a team of 20+ service desk technicians to address customer needs through comprehensive technical training, workflow triage, and prompt delegation."
      ],
      skills: ["ServiceNow", "Team Leadership", "IT Service Management", "MFA/Identity Access", "Technical Training", "Customer Relations"]
    }
  ],
  education: [
    {
      institution: "University of Maryland, College Park",
      degree: "Bachelor of Science in Computer Science",
      period: "August 2022 - May 2025",
      graduated: "Graduated with Bachelors of Science, May 2025",
      location: "College Park, MD",
      notes: "Major in Computer Science"
    },
    {
      institution: "Towson University",
      degree: "Computer Science Major",
      period: "August 2020 - May 2022",
      graduated: "Completed coursework before transfer to UMD",
      location: "Towson, MD",
      notes: "Dean's List: Fall 2021 and Spring 2022"
    }
  ],
  coursework: [
    "Introduction to Cyber Security",
    "Data Structures & Algorithms",
    "Object Oriented Programming I & II",
    "Organization of Programming Languages",
    "Computer Systems & Architecture",
    "Database Design & SQL"
  ],
  skillCategories: {
    languages: [
      "Python", "Java", "JavaScript", "SQL", "CSS", "HTML", "Linux", "Bash", "Dart"
    ],
    frameworks: [
      "React", "Node.js", "Vue", "Flutter", "Tailwind CSS"
    ],
    devopsCloud: [
      "AWS", "Docker", "Linux", "Ubuntu", "Git/GitHub", "SSH"
    ],
    databasesTools: [
      "PostgreSQL", "pgAdmin", "MongoDB", "Jira", "Confluence", "ServiceNow"
    ],
    securityNetworking: [
      "Wireshark", "Tenable Nessus", "Networks", "Vulnerability Assessments", "Risk Management", "Cisco CLI", "IPv4 & IPv6 / DHCP / TCP / ARP"
    ]
  },
  memberships: [
    {
      title: "Towson University Men's Golf Team",
      organization: "NCAA Division I Athletics",
      period: "August 2020 - May 2022",
      description: "Student athlete competing for the Towson University Division I Men's Golf Team. Developed disciplined time management, teamwork, and high-pressure performance skills while balancing a demanding NCAA athletic schedule with rigorous Computer Science academics."
    }
  ]
};
