import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

const statsData = [
  { mr: '११+ वर्षे', en: '11+ Years', sub: { mr: 'वाटचाल', en: 'Journey' } },
  { mr: '७,६००+', en: '7,600+', sub: { mr: 'सदस्य', en: 'Members' } },
  { mr: '७८', en: '78', sub: { mr: 'समित्या', en: 'Committees' } },
  { mr: 'भारतभर', en: 'Pan-India', sub: { mr: 'कार्यक्षेत्र', en: 'Reach' } },
];

export function StatsSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="stats" index="1" title={t('sec_stats')}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {statsData.map((item, idx) => (
          <WFCard key={idx} className="text-center py-6 hover:border-neutral-400 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-neutral-800 tracking-tight">
              {item[lang]}
            </div>
            <div className="mt-1 text-xs font-semibold text-neutral-500 uppercase tracking-wide">
              {item.sub[lang]}
            </div>
          </WFCard>
        ))}
      </div>
    </SectionShell>
  );
}
