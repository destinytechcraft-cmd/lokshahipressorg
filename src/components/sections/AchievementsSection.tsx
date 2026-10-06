import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

const achievementsList = [
  {
    metricMr: '११+ वर्षे',
    metricEn: '11+ Years',
    descMr: 'पत्रकारिता आणि सामाजिक क्षेत्रातील सातत्यपूर्ण कार्य',
    descEn: 'Uninterrupted commitment to media rights and social welfare',
  },
  {
    metricMr: '७,६००+ सदस्य',
    metricEn: '7,600+ Members',
    descMr: 'राज्यासह देशभरातील पत्रकार आणि सामाजिक कार्यकर्त्यांचा सहभाग',
    descEn: 'Active journalists & activists affiliated across all Indian states',
  },
  {
    metricMr: '७८ समित्या',
    metricEn: '78 Committees',
    descMr: 'विविध स्तरांवरील संघटनात्मक कार्य',
    descEn: 'Dedicated functional committees spanning civic & sector domains',
  },
  {
    metricMr: 'शेकडो उपक्रम',
    metricEn: '100s of Programs',
    descMr: 'पत्रकारिता, सामाजिक आणि जनहिताचे विविध कार्यक्रम',
    descEn: 'Conventions, legal workshops, medical camps & press freedom drives',
  },
  {
    metricMr: 'भारतभर कार्यक्षेत्र',
    metricEn: 'Pan-India Reach',
    descMr: 'संघटनेच्या कार्याचा राष्ट्रीय विस्तार',
    descEn: 'Grassroots reach across districts, divisions, and state capitals',
  },
];

export function AchievementsSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="achievements" index="9" title={t('sec_achievements')}>
      <div className="space-y-6 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {achievementsList.map((item, idx) => (
            <WFCard
              key={idx}
              className="text-center p-5 flex flex-col justify-between hover:border-neutral-500 transition-colors bg-white shadow-xs"
            >
              <div>
                <div className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                  {item[lang === 'mr' ? 'metricMr' : 'metricEn']}
                </div>
                <div className="mt-2 text-xs font-semibold text-neutral-600 leading-snug">
                  {item[lang === 'mr' ? 'descMr' : 'descEn']}
                </div>
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
