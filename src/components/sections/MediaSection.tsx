import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';

const EMBED_URL = 'https://sites.google.com/view/lokshahipressorg/home';

export function MediaSection() {
  const { t, lang } = useLanguage();
  const [loading, setLoading] = useState(true);

  return (
    <SectionShell id="media" index="11" title={t('sec_media')}>
      <div className="space-y-6 text-left">
        {/* Clean Header Bar */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#172A4A]/15 bg-white shadow-xs">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620]">
              {lang === 'mr' ? 'अधिकृत डिजिटल न्यूज व मीडिया पोर्टल' : 'OFFICIAL DIGITAL NEWS PORTAL'}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Live Portal</span>
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
            {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत — ताज्या बातम्या व प्रसिद्धीपत्रके' : 'Lokshahi Patrakar Mahasangh Bharat — News & Media Portal'}
          </h3>
        </div>

        {/* Auto Layout Embedded Container */}
        <div className="rounded-3xl border-2 border-[#172A4A]/20 bg-white overflow-hidden shadow-md">
          {/* Browser-style address bar header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#172A4A] text-white/90 border-b border-[#172A4A]/20 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
              </span>
              <span className="text-[11px] font-bold text-white/60 ml-2 hidden sm:inline">
                🔒 HTTPS Secure
              </span>
            </div>

            {/* URL pill */}
            <div className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-lg text-[11px] text-white/80 font-mono max-w-xs sm:max-w-md truncate">
              <span>🌐</span>
              <span className="truncate">{EMBED_URL}</span>
            </div>

            <a
              href={EMBED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white hover:text-amber-300 font-bold hidden sm:inline"
            >
              sites.google.com ↗
            </a>
          </div>

          {/* Iframe Viewport */}
          <div className="relative w-full bg-neutral-100">
            {/* Loading indicator overlay */}
            {loading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 p-6 space-y-3">
                <div className="h-10 w-10 border-4 border-[#172A4A]/20 border-t-[#E30620] rounded-full animate-spin" />
                <p className="text-xs sm:text-sm font-bold text-[#172A4A]">
                  {lang === 'mr'
                    ? 'लोकशाही पत्रकार महासंघ भारत पोर्टल लोड होत आहे...'
                    : 'Loading Lokshahi Patrakar Mahasangh Bharat portal...'}
                </p>
              </div>
            )}

            <iframe
              src="/api/embed-site"
              title="Lokshahi Press Org Portal"
              onLoad={() => setLoading(false)}
              className="w-full border-0 h-[850px] sm:h-[950px] md:h-[1050px] transition-all duration-300"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
