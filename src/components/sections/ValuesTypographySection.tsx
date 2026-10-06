import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface CoreValue {
  mr: string;
  en: string;
  num: string;
  dotColor: string;
  accentBorder: string;
}

const coreValues: CoreValue[] = [
  {
    mr: 'सत्य',
    en: 'Truth',
    num: '01',
    dotColor: 'bg-[#E30620]',
    accentBorder: 'hover:border-[#E30620]/60 hover:bg-[#E30620]/5',
  },
  {
    mr: 'न्याय',
    en: 'Justice',
    num: '02',
    dotColor: 'bg-[#E6530C]',
    accentBorder: 'hover:border-[#E6530C]/60 hover:bg-[#E6530C]/5',
  },
  {
    mr: 'लोकशाही',
    en: 'Democracy',
    num: '03',
    dotColor: 'bg-[#2855A5]',
    accentBorder: 'hover:border-[#2855A5]/60 hover:bg-[#2855A5]/5',
  },
  {
    mr: 'संविधान',
    en: 'Constitution',
    num: '04',
    dotColor: 'bg-[#2855A5]',
    accentBorder: 'hover:border-[#2855A5]/60 hover:bg-[#2855A5]/5',
  },
  {
    mr: 'स्वातंत्र्य',
    en: 'Freedom',
    num: '05',
    dotColor: 'bg-[#287A18]',
    accentBorder: 'hover:border-[#287A18]/60 hover:bg-[#287A18]/5',
  },
  {
    mr: 'समानता',
    en: 'Equality',
    num: '06',
    dotColor: 'bg-[#287A18]',
    accentBorder: 'hover:border-[#287A18]/60 hover:bg-[#287A18]/5',
  },
  {
    mr: 'सामाजिक बांधिलकी',
    en: 'Social Responsibility',
    num: '07',
    dotColor: 'bg-[#E6530C]',
    accentBorder: 'hover:border-[#E6530C]/60 hover:bg-[#E6530C]/5',
  },
  {
    mr: 'पत्रकारांचा सन्मान',
    en: 'Journalist Dignity',
    num: '08',
    dotColor: 'bg-[#E30620]',
    accentBorder: 'hover:border-[#E30620]/60 hover:bg-[#E30620]/5',
  },
  {
    mr: 'जनहित',
    en: 'Public Interest',
    num: '09',
    dotColor: 'bg-[#2855A5]',
    accentBorder: 'hover:border-[#2855A5]/60 hover:bg-[#2855A5]/5',
  },
  {
    mr: 'पारदर्शकता',
    en: 'Transparency',
    num: '10',
    dotColor: 'bg-[#287A18]',
    accentBorder: 'hover:border-[#287A18]/60 hover:bg-[#287A18]/5',
  },
];

export function ValuesTypographySection() {
  const { lang } = useLanguage();

  return (
    <section className="border-b border-[#172A4A]/20 bg-[#172A4A] text-white py-8 sm:py-10 relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#E30620]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-[#2855A5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-5xl px-4 text-center">
        {/* Compact, refined badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7F3EC] mb-3 backdrop-blur-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E30620]" />
          <span>OUR VALUES — {lang === 'mr' ? 'आमची मूल्ये' : 'CORE PRINCIPLES'}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#287A18]" />
        </div>

        {/* Clean, compact subtitle */}
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#F7F3EC] mb-6 max-w-3xl mx-auto leading-relaxed">
          {lang === 'mr'
            ? 'पत्रकारांच्या न्याय, हक्क आणि सन्मानासाठी… सर्वसामान्यांच्या न्यायासाठी… लोकशाहीच्या संरक्षणासाठी…'
            : 'For the rights, justice and dignity of journalists… For public justice… For safeguarding democracy…'}
        </h2>

        {/* Organized, compact 10-values grid: 2 columns mobile, 5 columns desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
          {coreValues.map((val) => (
            <div
              key={val.num}
              className={`group flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08] ${val.accentBorder}`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className={`h-1.5 w-1.5 rounded-full ${val.dotColor}`} />
                <span className="text-[10px] font-mono font-semibold text-white/40">
                  {val.num}
                </span>
              </div>
              <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#F7F3EC] transition-colors leading-tight">
                {lang === 'mr' ? val.mr : val.en}
              </span>
              <span className="text-[10px] font-medium text-white/50 tracking-wide uppercase mt-0.5">
                {lang === 'mr' ? val.en : val.mr}
              </span>
            </div>
          ))}
        </div>

        {/* Compact footer motto quote */}
        <div className="mt-6 pt-4 border-t border-white/10 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-[#F7F3EC]/80 font-medium italic">
            {lang === 'mr'
              ? '“सत्यासाठी लढणारा, अन्यायाला भिडणारा — लोकशाही पत्रकार महासंघ भारत”'
              : '“Fighting for Truth, Resisting Injustice — Lokshahi Patrakar Mahasangh Bharat”'}
          </p>
        </div>
      </div>
    </section>
  );
}
