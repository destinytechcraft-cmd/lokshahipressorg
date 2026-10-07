import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from './ui/WireframePrimitives';
import { Logo } from './Logo';
import type { DictKey, Language } from '../types';

export interface NavItemDef {
  key: DictKey;
  href: string;
}

export const navItems: NavItemDef[] = [
  { key: 'nav_home', href: '/' },
  { key: 'nav_about', href: '/about' },
  { key: 'nav_org', href: '/organisation' },
  { key: 'nav_rights', href: '/rights' },
  { key: 'nav_social', href: '/social-work' },
  { key: 'nav_media', href: '/media' },
  { key: 'nav_events', href: '/events' },
  { key: 'nav_membership', href: '/membership' },
  { key: 'nav_helpdesk', href: '/help-desk' },
  { key: 'nav_gallery', href: '/gallery' },
  { key: 'nav_contact', href: '/contact' },
];

const languages: { value: Language; label: string }[] = [
  { value: 'mr', label: 'मराठी' },
  { value: 'en', label: 'English' },
];

export function LanguageDropdown() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = languages.find((l) => l.value === lang);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        className="flex items-center gap-1 sm:gap-1.5 rounded-lg border border-[#172A4A]/25 bg-white px-2 sm:px-3 py-1.5 text-xs font-bold text-[#172A4A] hover:border-[#E30620] hover:text-[#E30620] transition-colors cursor-pointer shadow-2xs"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg
          className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#2855A5] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
        <span className="hidden sm:inline">{current?.label}</span>
        <span className="sm:hidden text-[11px] font-black uppercase">{lang === 'mr' ? 'मराठी' : 'EN'}</span>
        <svg
          className={cn('h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 shrink-0', open && 'rotate-180')}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute right-0 z-50 mt-1 w-32 overflow-hidden rounded-xl border border-[#172A4A]/20 bg-white shadow-lg animate-in fade-in zoom-in-95 duration-100"
          role="listbox"
        >
          {languages.map((item) => (
            <li key={item.value} role="option" aria-selected={lang === item.value}>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setLang(item.value);
                  setOpen(false);
                }}
                className={cn(
                  'block w-full px-3.5 py-2 text-left text-xs font-bold transition-colors cursor-pointer',
                  lang === item.value
                    ? 'bg-[#172A4A] text-white'
                    : 'text-[#172A4A] hover:bg-[#F7F3EC] hover:text-[#E30620]'
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header({
  currentPath,
  onNavigate,
}: {
  currentPath: string;
  onNavigate: (path: string) => void;
}) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#172A4A]/20 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Tricolor top indicator band */}
      <div className="h-1 w-full flex">
        <div className="h-full flex-1 bg-[#E6530C]" />
        <div className="h-full flex-1 bg-white" />
        <div className="h-full flex-1 bg-[#287A18]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2.5">
        <button
          type="button"
          onClick={() => handleNavClick('/')}
          className="flex min-w-0 items-center gap-2 sm:gap-2.5 text-left cursor-pointer group flex-1"
        >
          <Logo size={48} className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs" />
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-base md:text-lg font-black tracking-tight text-[#172A4A] group-hover:text-[#E30620] transition-colors leading-tight line-clamp-2">
              {t('brand')}
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold text-[#E30620] flex items-center gap-1.5 leading-tight truncate">
              <span>{t('values')}</span>
            </div>
          </div>
        </button>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
          <LanguageDropdown />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#172A4A]/30 bg-white text-[#172A4A] md:hidden cursor-pointer hover:bg-[#F7F3EC] active:bg-[#172A4A]/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden border-t border-[#172A4A]/10 bg-[#F7F3EC]/70 md:block">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-x-1 gap-y-1 px-4 py-1.5">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-bold transition-all cursor-pointer select-none',
                  isActive
                    ? 'bg-[#172A4A] text-white shadow-2xs'
                    : 'text-[#172A4A]/80 hover:bg-[#172A4A]/10 hover:text-[#E30620]'
                )}
              >
                {t(item.key)}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" className="border-t border-[#172A4A]/15 md:hidden bg-white shadow-xl animate-in slide-in-from-top-2 duration-150 max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'block w-full text-left rounded-lg px-3.5 py-2.5 text-sm font-bold transition-colors cursor-pointer',
                      isActive
                        ? 'bg-[#172A4A] text-white'
                        : 'text-[#172A4A] hover:bg-[#F7F3EC] hover:text-[#E30620]'
                    )}
                  >
                    {t(item.key)}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Tricolor bottom indicator band - consistently visible across entire page scroll */}
      <div className="h-1 sm:h-1.5 w-full flex shrink-0 shadow-xs">
        <div className="h-full flex-1 bg-[#E6530C]" />
        <div className="h-full flex-1 bg-white border-y border-black/5" />
        <div className="h-full flex-1 bg-[#287A18]" />
      </div>
    </header>
  );
}
