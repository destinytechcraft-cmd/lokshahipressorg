import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 48 }: LogoProps) {
  const hasDimensions = className.includes('w-') && className.includes('h-');

  return (
    <div
      style={hasDimensions ? undefined : { width: size, height: size }}
      className={`shrink-0 rounded-full border-2 border-dashed border-[#172A4A]/35 bg-white/70 shadow-2xs ${className}`}
      aria-label="Logo placeholder"
    />
  );
}
