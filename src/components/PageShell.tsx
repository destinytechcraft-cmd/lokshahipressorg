import React from 'react';
import { Header } from './Navigation';
import { Footer } from './Footer';
import type { DictKey } from '../types';

export function PageShell({
  children,
  currentPath,
  onNavigate,
}: {
  nameKey?: DictKey;
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}) {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F7F3EC] text-[#172A4A] flex flex-col font-sans selection:bg-[#E30620] selection:text-white">
      {/* Main Header / Navigation with official emblem */}
      <Header currentPath={currentPath} onNavigate={onNavigate} />

      {/* Page Content with warm editorial background */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden bg-[#F7F3EC]">
        {children}
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
