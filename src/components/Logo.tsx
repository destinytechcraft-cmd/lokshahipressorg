import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 48 }: LogoProps) {
  const [imgSrc, setImgSrc] = useState('/logo.png');

  return (
    <img
      src={imgSrc}
      onError={() => {
        if (imgSrc === '/logo.png') {
          setImgSrc('/WhatsApp Image 2026-10-01 at 9.33.12 PM.jpeg');
        } else if (imgSrc.includes('WhatsApp')) {
          setImgSrc('/logo.jpg');
        } else {
          setImgSrc('/logo.svg');
        }
      }}
      alt="Lokshahi Patrakar Mahasangh Bharat Emblem"
      width={size}
      height={size}
      className={`shrink-0 select-none object-contain ${className}`}
      referrerPolicy="no-referrer"
    />
  );
}
