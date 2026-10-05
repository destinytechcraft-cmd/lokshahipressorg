import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { navItems } from './Navigation';

const footerValues = {
  mr: ['सत्य', 'न्याय', 'लोकशाही', 'संविधान', 'स्वातंत्र्य', 'समानता', 'पारदर्शकता', 'जनहित'],
  en: ['Truth', 'Justice', 'Democracy', 'Constitution', 'Freedom', 'Equality', 'Transparency', 'Public Interest'],
};

const footerSocials = ['FB', 'IG', 'YT', 'X', 'WA'];

export function Footer({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-neutral-800 py-10 text-neutral-300">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Core Values / Ideals */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
          {footerValues[lang].map((val, idx) => (
            <span key={val} className="text-lg font-bold sm:text-2xl text-neutral-100 flex items-center">
              {val}
              {idx < footerValues[lang].length - 1 ? (
                <span className="ml-4 text-neutral-600">•</span>
              ) : null}
            </span>
          ))}
        </div>

        {/* 3 Columns */}
        <div className="grid gap-8 border-t border-neutral-700 pt-8 md:grid-cols-3">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-neutral-600 text-[9px] font-bold text-neutral-400">
                {t('logo')}
              </div>
              <span className="text-sm font-bold text-neutral-100">{t('brand')}</span>
            </div>
            <p className="mt-3 text-xs text-neutral-400 leading-relaxed">{t('tagline')}</p>
            <p className="mt-2 text-[11px] text-neutral-500">{t('values')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Quick Links
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => {
                    onNavigate?.(item.href);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer text-left"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Social
            </div>
            <div className="flex flex-wrap gap-2">
              {footerSocials.map((platform) => (
                <span
                  key={platform}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-600 text-[10px] font-bold text-neutral-400 hover:border-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                  title={platform}
                >
                  {platform}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-neutral-500">
              {lang === 'mr' ? 'सोशल मीडियावर आमच्याशी जुडा' : 'Connect with us on social media'}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-neutral-700 pt-4 text-center text-[11px] text-neutral-500">
          © 2026 Lokshahi Patrakar Mahasangh Bharat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
