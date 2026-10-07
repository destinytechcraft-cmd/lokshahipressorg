import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';
import { FacebookIcon, InstagramIcon, YouTubeIcon, XIcon, WhatsAppIcon } from './SocialIcons';
import type { DictKey } from '../types';

const footerValues = [
  { mr: 'सत्य', en: 'Truth' },
  { mr: 'न्याय', en: 'Justice' },
  { mr: 'लोकशाही', en: 'Democracy' },
  { mr: 'संविधान', en: 'Constitution' },
  { mr: 'स्वातंत्र्य', en: 'Liberty' },
  { mr: 'समानता', en: 'Equality' },
  { mr: 'सामाजिक बांधिलकी', en: 'Social Commitment' },
  { mr: 'पत्रकारांचा सन्मान', en: "Journalists' Dignity" },
  { mr: 'जनहित', en: 'Public Interest' },
  { mr: 'पारदर्शकता', en: 'Transparency' },
];

const quickLinks: { key: DictKey; href: string }[] = [
  { key: 'nav_about', href: '/about' },
  { key: 'nav_org', href: '/organisation' },
  { key: 'nav_rights', href: '/rights' },
  { key: 'nav_social', href: '/social-work' },
  { key: 'nav_events', href: '/events' },
  { key: 'nav_membership', href: '/membership' },
  { key: 'nav_media', href: '/media' },
  { key: 'nav_helpdesk', href: '/help-desk' },
  { key: 'nav_contact', href: '/contact' },
];

export function Footer({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-[#172A4A] py-12 text-[#F7F3EC] border-t-4 border-[#E30620]">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Core Values Strip strictly as requested in PDF Page 17 */}
        <div className="mb-10 pb-8 border-b border-white/10 text-center">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#E30620] block mb-3">
            {lang === 'mr' ? 'OUR VALUES — आमची मूल्ये' : 'OUR VALUES — CORE ETHICAL PILLARS'}
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
            {footerValues.map((val, idx) => (
              <React.Fragment key={val.en}>
                <span className="text-xs sm:text-sm font-bold text-[#F7F3EC] hover:text-[#E30620] transition-colors">
                  {val[lang]}
                </span>
                {idx < footerValues.length - 1 && (
                  <span className="text-[#E6530C] select-none font-bold">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer main grid as per PDF Page 17 & 18 */}
        <div className="grid gap-8 md:grid-cols-12 text-left">
          {/* Brand & Motto from PDF Page 17 */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <Logo size={40} className="h-10 w-10 text-white border-white/40 bg-white/5 shrink-0" />
              <span className="text-sm sm:text-base font-black text-white tracking-wide block">
                LOKSHAHI PATRAKAR MAHASANGH BHARAT
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F7F3EC]/90 leading-relaxed font-semibold">
              {lang === 'mr'
                ? 'पत्रकारांच्या न्याय, हक्क आणि सन्मानासाठी…सर्वसामान्यांच्या न्यायासाठी…लोकशाहीच्या संरक्षणासाठी…'
                : 'For journalists’ justice, rights and dignity… For citizens’ justice… In defense of democracy…'}
            </p>

            <div className="pt-2 text-xs sm:text-sm text-[#F7F3EC]/90 font-bold flex items-center gap-1.5">
              <span>{lang === 'mr' ? '📍 राष्ट्रीय कार्यालय : मुंबई' : '📍 National Office : Mumbai'}</span>
            </div>
          </div>

          {/* Quick Links strictly from PDF Page 18:
              About Us | Organisation | Journalists’ Rights | Social Work | Events | Membership | Media | Help Desk | Contact */}
          <div className="md:col-span-4">
            <div className="mb-3 text-xs font-black uppercase tracking-widest text-[#E30620]">
              {lang === 'mr' ? 'महत्त्वाचे दुवे' : 'Quick Links'}
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {quickLinks.map((item) => (
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

          {/* Social Media from PDF Page 17 */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-[#E30620]">
              Social Media
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-[#1877F2] transition-all cursor-pointer"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-[#E1306C] transition-all cursor-pointer"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-[#FF0000] transition-all cursor-pointer"
              >
                <YouTubeIcon size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                title="X"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-black transition-all cursor-pointer"
              >
                <XIcon size={16} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-[#25D366] transition-all cursor-pointer"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line strictly from PDF Page 18:
            © 2026 Lokshahi Patrakar Mahasangh Bharat. All Rights Reserved. */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#F7F3EC]/70">
          © 2026 Lokshahi Patrakar Mahasangh Bharat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
