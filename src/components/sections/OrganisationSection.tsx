import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';

const tiers = [
  { mr: 'राष्ट्रीय स्तर', en: 'National Level' },
  { mr: 'राज्य स्तर', en: 'State Level' },
  { mr: 'विभागीय स्तर', en: 'Divisional Level' },
  { mr: 'जिल्हा स्तर', en: 'District Level' },
  { mr: 'तालुका स्तर', en: 'Taluka Level' },
  { mr: 'शहर / ग्रामीण स्तर', en: 'City / Rural Level' },
];

export function OrganisationSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="organisation" index="5" title={t('sec_org')}>
      <div className="flex flex-col items-center gap-2">
        {tiers.map((tier, idx) => (
          <div key={idx} className="flex w-full max-w-md flex-col items-center">
            <div className="w-full rounded-md border-2 border-neutral-300 bg-neutral-50 px-4 py-2.5 text-center text-sm font-semibold text-neutral-700 shadow-2xs hover:bg-neutral-100 hover:border-neutral-400 transition-colors">
              {tier[lang]}
            </div>
            {idx < tiers.length - 1 ? (
              <div className="my-1.5 h-4 w-0.5 bg-neutral-300" />
            ) : null}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
