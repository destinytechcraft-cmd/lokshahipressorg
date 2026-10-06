import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { navItems } from './Navigation';
import { Logo } from './Logo';
import { FacebookIcon, InstagramIcon, YouTubeIcon, XIcon, WhatsAppIcon } from './SocialIcons';

const footerValues = {
  mr: [
    'सत्य',
    'न्याय',
    'लोकशाही',
    'संविधान',
    'स्वातंत्र्य',
    'समानता',
    'सामाजिक बांधिलकी',
    'पत्रकारांचा सन्मान',
    'जनहित',
    'पारदर्शकता',
  ],
  en: [
    'Truth',
    'Justice',
    'Democracy',
    'Constitution',
    'Freedom',
    'Equality',
    'Social Accountability',
    'Journalist Dignity',
    'Public Interest',
    'Transparency',
  ],
};

const footerSocials = [
  { name: 'Facebook', short: 'FB', bg: 'hover:bg-[#2855A5]' },
  { name: 'Instagram', short: 'IG', bg: 'hover:bg-[#E30620]' },
  { name: 'YouTube', short: 'YT', bg: 'hover:bg-[#E30620]' },
  { name: 'X', short: 'X', bg: 'hover:bg-black' },
  { name: 'WhatsApp', short: 'WA', bg: 'hover:bg-[#287A18]' },
];

export function Footer({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-[#172A4A] py-12 text-[#F7F3EC] border-t-4 border-[#E30620]">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Core Values Strip as requested in PDF Page 17 */}
        <div className="mb-10 pb-8 border-b border-white/10 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30620] block mb-3">
            OUR VALUES — {lang === 'mr' ? 'आमची मूल्ये' : 'CORE PRINCIPLES'}
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
            {footerValues[lang].map((val, idx) => (
              <React.Fragment key={val}>
                <span className="text-xs sm:text-sm font-bold text-[#F7F3EC] hover:text-[#E30620] transition-colors">
                  {val}
                </span>
                {idx < footerValues[lang].length - 1 && (
                  <span className="text-[#E6530C] select-none font-bold">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid gap-8 md:grid-cols-12 text-left">
          {/* Brand Info & Motto from PDF Page 17 */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <Logo size={52} className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 drop-shadow-md" />
              <div>
                <span className="text-sm font-black text-white tracking-wide block">
                  LOKSHAHI PATRAKAR MAHASANGH BHARAT
                </span>
                <span className="text-[11px] font-bold text-[#E30620]">
                  {t('brand')}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F7F3EC]/90 leading-relaxed font-semibold pt-1">
              {lang === 'mr'
                ? 'पत्रकारांच्या न्याय, हक्क आणि सन्मानासाठी… सर्वसामान्यांच्या न्यायासाठी… लोकशाहीच्या संरक्षणासाठी…'
                : 'For the rights, justice and honor of journalists… For public justice… For safeguarding democracy…'}
            </p>

            <p className="text-[11px] text-[#F7F3EC]/60">
              {t('values')}
            </p>

            <div className="pt-2 text-xs text-[#F7F3EC]/80">
              <span className="font-bold text-white block mb-0.5">National Central Office:</span>
              <span>Mumbai</span>
            </div>
          </div>

          {/* Quick Links from PDF Page 18 */}
          <div className="md:col-span-4">
            <div className="mb-3 text-[10px] font-black uppercase tracking-widest text-[#E30620]">
              Quick Links
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => {
                    onNavigate?.(item.href);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-[#F7F3EC]/80 hover:text-white hover:underline transition-colors cursor-pointer text-left truncate"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Social Channels & Contact */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#E30620]">
              Social Media
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#1877F2] transition-all hover:scale-110 shadow-2xs cursor-pointer"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#E1306C] transition-all hover:scale-110 shadow-2xs cursor-pointer"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#FF0000] transition-all hover:scale-110 shadow-2xs cursor-pointer"
              >
                <YouTubeIcon size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                title="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-black transition-all hover:scale-110 shadow-2xs cursor-pointer"
              >
                <XIcon size={20} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-[#25D366] transition-all hover:scale-110 shadow-2xs cursor-pointer"
              >
                <WhatsAppIcon size={20} />
              </a>
            </div>
            <p className="text-[11px] text-[#F7F3EC]/70 pt-1 leading-relaxed">
              Email:{' '}
              <a href="mailto:help@lokshahipressorg.com" className="text-white hover:underline font-semibold">
                help@lokshahipressorg.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Line from PDF Page 18 */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#F7F3EC]/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Lokshahi Patrakar Mahasangh Bharat. All Rights Reserved.</span>
          <span className="text-[11px] text-[#F7F3EC]/40">
            A collective voice for journalists, citizens and democratic values.
          </span>
        </div>
      </div>
    </footer>
  );
}
