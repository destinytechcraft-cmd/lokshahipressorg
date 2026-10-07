import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Empty circle layout for logo across the website as requested.
 * The user will add the actual logo graphic later.
 */
export function Logo({ className = 'h-10 w-10', size }: LogoProps) {
  return (
    <div
      style={size ? { width: size, height: size } : undefined}
      className={`rounded-full border-2 border-dashed border-current/35 bg-current/5 shrink-0 transition-all ${className}`}
      aria-label="Logo placeholder (empty circle layout)"
      role="img"
    />
  );
}

