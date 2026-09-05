import React from 'react';

export function TurtleIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle cx="12" cy="4.5" r="2.5" fill="#34d399" />
      
      {/* Front Flippers */}
      <path d="M7 6.5C5 5.5 3 6.5 2.5 8C2 9.5 3.5 11 5.5 10.5L7.5 9" fill="#10b981" stroke="#059669" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M17 6.5C19 5.5 21 6.5 21.5 8C22 9.5 20.5 11 18.5 10.5L16.5 9" fill="#10b981" stroke="#059669" strokeWidth="0.5" strokeLinecap="round" />
      
      {/* Back Flippers */}
      <path d="M7 17.5C5.5 18.5 4.5 20 5 21C5.5 22 7.5 21.5 8.5 20L8 18" fill="#10b981" stroke="#059669" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M17 17.5C18.5 18.5 19.5 20 19 21C18.5 22 16.5 21.5 15.5 20L16 18" fill="#10b981" stroke="#059669" strokeWidth="0.5" strokeLinecap="round" />
      
      {/* Tail */}
      <path d="M12 19.5L11.2 22C11.5 22.3 12.5 22.3 12.8 22L12 19.5Z" fill="#34d399" />
      
      {/* Shell Body */}
      <ellipse cx="12" cy="13.5" rx="6" ry="7" fill="#059669" stroke="#047857" strokeWidth="1" />
      
      {/* Shell Inner Patterns */}
      <path d="M12 9.5L15 11.5V14.5L12 16.5L9 14.5V11.5L12 9.5Z" fill="#10b981" stroke="#047857" strokeWidth="0.8" />
      <path d="M12 9.5V6.8" stroke="#047857" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M15 11.5L17.5 10" stroke="#047857" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M15 14.5L17.8 15.5" stroke="#047857" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M12 16.5V20.2" stroke="#047857" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M9 14.5L6.2 15.5" stroke="#047857" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M9 11.5L6.5 10" stroke="#047857" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function TigerGolfIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crossed Golf Club (Behind) */}
      <line x1="4" y1="20" x2="19" y2="4" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="4" y1="20" x2="6.5" y2="17.5" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18.5 3.5L21.5 5.5L20 8.5L17.5 7L18.5 3.5Z" fill="#94a3b8" stroke="#64748b" strokeWidth="0.8" />

      {/* Tiger Ears */}
      <circle cx="6.5" cy="7.5" r="3" fill="#f59e0b" stroke="#d97706" strokeWidth="0.6" />
      <circle cx="6.5" cy="7.5" r="1.6" fill="#1e293b" />
      <circle cx="17.5" cy="7.5" r="3" fill="#f59e0b" stroke="#d97706" strokeWidth="0.6" />
      <circle cx="17.5" cy="7.5" r="1.6" fill="#1e293b" />

      {/* Tiger Head Base (Yellow/Gold) */}
      <path 
        d="M5 11C5 7.5 8 5.5 12 5.5C16 5.5 19 7.5 19 11C19 15.5 16 18.5 12 18.5C8 18.5 5 15.5 5 11Z" 
        fill="#fbbf24" 
        stroke="#d97706" 
        strokeWidth="1" 
      />

      {/* Tiger Forehead & Side Stripes (Black/Navy) */}
      <path d="M12 5.8V8.2" stroke="#1e293b" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 6.6L11 8.2" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M14 6.6L13 8.2" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Cheek Stripes */}
      <path d="M5.6 11.5L7.8 12" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M5.8 13.5L7.5 13.7" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M18.4 11.5L16.2 12" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M18.2 13.5L16.5 13.7" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="9" cy="11" rx="1.2" ry="1.4" fill="#1e293b" />
      <ellipse cx="15" cy="11" rx="1.2" ry="1.4" fill="#1e293b" />
      <circle cx="8.6" cy="10.6" r="0.4" fill="#ffffff" />
      <circle cx="14.6" cy="10.6" r="0.4" fill="#ffffff" />

      {/* Muzzle (White/Cream) */}
      <ellipse cx="12" cy="14.5" rx="3.4" ry="2.3" fill="#fef3c7" />

      {/* Nose (Black) & Mouth */}
      <path d="M11 13.6H13L12 14.8Z" fill="#1e293b" />
      <path d="M12 14.8V15.8M10.8 15.6C11.2 16.2 12 16.2 12 16.2C12 16.2 12.8 16.2 13.2 15.6" stroke="#1e293b" strokeWidth="0.8" strokeLinecap="round" />
      
      {/* Whiskers */}
      <circle cx="10" cy="14.5" r="0.35" fill="#1e293b" />
      <circle cx="10.6" cy="15.1" r="0.35" fill="#1e293b" />
      <circle cx="14" cy="14.5" r="0.35" fill="#1e293b" />
      <circle cx="13.4" cy="15.1" r="0.35" fill="#1e293b" />

      {/* Golf Ball (Foreground accent) */}
      <circle cx="19.5" cy="19.5" r="2" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.6" />
      <circle cx="19" cy="19" r="0.25" fill="#cbd5e1" />
      <circle cx="20" cy="19" r="0.25" fill="#cbd5e1" />
      <circle cx="19.5" cy="20" r="0.25" fill="#cbd5e1" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
