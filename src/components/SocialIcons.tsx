import React from 'react';

interface SocialIconProps {
  className?: string;
  size?: number;
}

export function FacebookIcon({ className = '', size = 20 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.12 12.72l.44-2.88h-2.76V8.04c0-.78.38-1.54 1.6-1.54h1.24V4.05s-1.12-.19-2.2-.19c-2.24 0-3.7 1.36-3.7 3.82v2.16H7.2v2.88h2.44V20h3.04v-7.28h2.44z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function InstagramIcon({ className = '', size = 20 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="3.2" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
      <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF" />
    </svg>
  );
}

export function YouTubeIcon({ className = '', size = 20 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path
        d="M20.2 8.3c-.2-.8-.8-1.4-1.6-1.6C17.2 6.3 12 6.3 12 6.3s-5.2 0-6.6.4c-.8.2-1.4.8-1.6 1.6C3.4 9.7 3.4 12 3.4 12s0 2.3.4 3.7c.2.8.8 1.4 1.6 1.6 1.4.4 6.6.4 6.6.4s5.2 0 6.6-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-3.7.4-3.7s0-2.3-.4-3.7z"
        fill="#FFFFFF"
      />
      <polygon points="10.2,14.5 14.8,12 10.2,9.5" fill="#FF0000" />
    </svg>
  );
}

export function XIcon({ className = '', size = 20 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="12" fill="#000000" />
      <path
        d="M16.5 6.5h1.9l-4.15 4.74 4.88 6.45h-3.82l-2.99-3.92-3.42 3.92H6.98l4.44-5.08L6.75 6.5h3.92l2.71 3.58 3.12-3.58zm-.67 9.87h1.05L8.74 7.64H7.62l8.21 8.73z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = '', size = 20 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#FFFFFF"
        d="M17.507 14.307c-.283-.141-1.674-.824-1.933-.918-.259-.095-.448-.142-.637.142-.19.283-.732.918-.897 1.106-.165.189-.33.212-.613.071-.283-.142-1.196-.44-2.278-1.403-.842-.751-1.41-1.68-1.575-1.963-.165-.283-.018-.436.124-.576.128-.127.283-.33.424-.495.142-.165.189-.283.283-.472.095-.189.047-.354-.024-.495-.07-.142-.637-1.533-.872-2.099-.23-.55-.46-.476-.637-.485-.165-.008-.354-.01-.543-.01-.189 0-.495.071-.755.354-.259.283-.99.967-.99 2.358s1.014 2.736 1.155 2.925c.142.189 1.996 3.047 4.835 4.274.675.291 1.203.465 1.614.595.678.215 1.295.185 1.783.112.544-.081 1.674-.684 1.91-1.344.236-.66.236-1.226.165-1.344-.07-.118-.259-.189-.542-.33zM12.012 4.148c-4.323 0-7.839 3.516-7.839 7.839 0 1.472.41 2.85 1.121 4.025l-.744 2.715 2.784-.73a7.807 7.807 0 0 0 4.678 1.517c4.323 0 7.839-3.516 7.839-7.839 0-4.323-3.516-7.827-7.839-7.827zm0 14.152a6.31 6.31 0 0 1-3.217-.883l-.23-.137-1.649.432.44-1.606-.15-.239a6.315 6.315 0 1 1 4.806 2.433z"
      />
    </svg>
  );
}

export function SocialLinksBar({ size = 22, className = '' }: { size?: number; className?: string }) {
  const socials = [
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com', bg: 'hover:border-[#1877F2]' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com', bg: 'hover:border-[#E1306C]' },
    { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com', bg: 'hover:border-[#FF0000]' },
    { name: 'X', icon: XIcon, href: 'https://x.com', bg: 'hover:border-black' },
    { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://whatsapp.com', bg: 'hover:border-[#25D366]' },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {socials.map((soc) => {
        const IconComponent = soc.icon;
        return (
          <a
            key={soc.name}
            href={soc.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Follow on ${soc.name}`}
            className={`flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white p-2 text-xs font-bold text-[#172A4A] shadow-2xs transition-all hover:scale-105 hover:shadow-sm ${soc.bg}`}
          >
            <IconComponent size={size} />
            <span className="hidden sm:inline font-semibold text-xs">{soc.name}</span>
          </a>
        );
      })}
    </div>
  );
}
