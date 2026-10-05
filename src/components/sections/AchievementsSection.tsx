import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

const achievementsData = [
  { mr: '११+ वर्षे', en: '11+ Years' },
  { mr: '७,६००+ सदस्य', en: '7,600+ Members' },
  { mr: '७८ समित्या', en: '78 Committees' },
  { mr: 'शेकडो उपक्रम', en: '100s of Programs' },
  { mr: 'भारतभर कार्यक्षेत्र', en: 'Pan-India Reach' },
];

export function AchievementsSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="achievements" index="9" title={t('sec_achievements')}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {achievementsData.map((item, idx) => (
          <WFCard key={idx} className="text-center py-6 hover:border-neutral-400 transition-colors">
            <div className="text-lg font-black text-neutral-800">
              {item[lang]}
            </div>
          </WFCard>
        ))}
      </div>
    </SectionShell>
  );
}
