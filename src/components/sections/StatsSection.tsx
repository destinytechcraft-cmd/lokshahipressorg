import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

const statsData = [
  {
    mr: '११+ वर्षे',
    en: '11+ Years',
    sub: { mr: 'वाटचाल', en: 'Journey' },
    color: 'text-[#E6530C]',
    bg: 'bg-[#E6530C]/5',
    border: 'border-[#E6530C]/20',
  },
  {
    mr: '७,६००+',
    en: '7,600+',
    sub: { mr: 'सदस्य', en: 'Members' },
    color: 'text-[#172A4A]',
    bg: 'bg-[#172A4A]/5',
    border: 'border-[#172A4A]/20',
  },
  {
    mr: '७८',
    en: '78',
    sub: { mr: 'समित्या', en: 'Committees' },
    color: 'text-[#2855A5]',
    bg: 'bg-[#2855A5]/5',
    border: 'border-[#2855A5]/20',
  },
  {
    mr: 'भारतभर',
    en: 'Pan-India',
    sub: { mr: 'कार्यक्षेत्र', en: 'Reach' },
    color: 'text-[#287A18]',
    bg: 'bg-[#287A18]/5',
    border: 'border-[#287A18]/20',
  },
];

export function StatsSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="stats" index="1" title={t('sec_stats')}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {statsData.map((item, idx) => (
          <WFCard
            key={idx}
            className={`text-center py-7 hover:border-current transition-all ${item.bg} ${item.border}`}
          >
            <div className={`text-3xl sm:text-4xl font-black tracking-tight ${item.color}`}>
              {item[lang]}
            </div>
            <div className="mt-2 text-xs font-bold text-[#172A4A] uppercase tracking-wider">
              {item.sub[lang]}
            </div>
          </WFCard>
        ))}
      </div>
    </SectionShell>
  );
}
