import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Header } from './Navigation';
import { Footer } from './Footer';
import type { DictKey } from '../types';

export function PageShell({
  nameKey,
  children,
  currentPath,
  onNavigate,
}: {
  nameKey: DictKey;
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-200">
      {/* Top wireframe label banner */}
      <div className="bg-neutral-900 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
        Wireframe — {t(nameKey)}
      </div>

      {/* Main Header / Navigation */}
      <Header currentPath={currentPath} onNavigate={onNavigate} />

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
