import React from 'react';

export interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'auto' | 'marathi' | 'empty';
  title?: string;
}

/**
 * Universal Empty Circle Logo placeholder.
 * Replaces the logo graphic with a clean circular placeholder.
 */
export function Logo({
  className = 'h-10 w-10',
  size,
  title,
}: LogoProps) {
  return (
    <div
      style={size ? { width: size, height: size } : undefined}
      className={`rounded-full border-2 border-dashed border-current/40 bg-current/5 shrink-0 transition-all ${className}`}
      aria-label={title || 'Logo placeholder (empty circle)'}
      role="img"
    />
  );
}

export function MarathiLogoGraphic(props: LogoProps) {
  return <Logo {...props} />;
}
