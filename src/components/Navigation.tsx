import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from './ui/WireframePrimitives';
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
        className="flex items-center gap-1.5 rounded-md border-2 border-neutral-400 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg
          className="h-4 w-4"
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
        <span>{current?.label}</span>
        <svg
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
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
          className="absolute right-0 z-50 mt-1 w-32 overflow-hidden rounded-md border-2 border-neutral-300 bg-white shadow-md animate-in fade-in zoom-in-95 duration-100"
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
                  'block w-full px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer',
                  lang === item.value
                    ? 'bg-neutral-100 text-neutral-900 font-semibold'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
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
    <header className="sticky top-0 z-40 border-b-2 border-neutral-300 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3">
        <button
          type="button"
          onClick={() => handleNavClick('/')}
          className="flex min-w-0 items-center gap-3 text-left cursor-pointer group"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-neutral-400 text-[9px] font-bold text-neutral-400 group-hover:border-neutral-700 group-hover:text-neutral-700 transition-colors">
            {t('logo')}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-neutral-700 group-hover:text-neutral-900 transition-colors">
              {t('brand')}
            </div>
            <div className="truncate text-[11px] text-neutral-500">
              {t('values')}
            </div>
          </div>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <LanguageDropdown />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-neutral-400 bg-white text-neutral-700 md:hidden cursor-pointer hover:bg-neutral-50 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden border-t-2 border-dashed border-neutral-200 md:block">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-x-1 gap-y-1 px-4 py-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer',
                  isActive
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800'
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
        <nav id="mobile-nav" className="border-t-2 border-dashed border-neutral-200 md:hidden bg-white">
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
                      'block w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer',
                      isActive
                        ? 'bg-neutral-800 text-white'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
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
    </header>
  );
}
