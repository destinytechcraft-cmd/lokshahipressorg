import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage } from '../ui/WireframePrimitives';

const networkStats = [
  { mr: '२८ राज्ये', en: '28 States' },
  { mr: '८ केंद्रशासित प्रदेश', en: '8 UTs' },
  { mr: '७८ समित्या', en: '78 Committees' },
  { mr: '७,६००+ सदस्य', en: '7,600+ Members' },
];

export function OrgNetworkSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="org-network" title={t('sec_org_network')}>
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <WFImage
          label={lang === 'mr' ? 'भारताचा नकाशा' : 'INDIA MAP'}
          ratio="aspect-[4/3]"
          className="shadow-xs"
        />

        <div className="grid grid-cols-2 gap-4">
          {networkStats.map((item, idx) => (
            <WFCard key={idx} className="text-center py-6 hover:border-neutral-400 transition-colors">
              <div className="text-xl sm:text-2xl font-black text-neutral-800">
                {item[lang]}
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
