import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage } from '../ui/WireframePrimitives';

const networkStats = [
  { mr: '२८ राज्ये', en: '28 States', color: 'text-[#E6530C]', bg: 'bg-[#E6530C]/5', border: 'border-[#E6530C]/20' },
  { mr: '८ केंद्रशासित प्रदेश', en: '8 UTs', color: 'text-[#172A4A]', bg: 'bg-[#172A4A]/5', border: 'border-[#172A4A]/20' },
  { mr: '७८ समित्या', en: '78 Committees', color: 'text-[#2855A5]', bg: 'bg-[#2855A5]/5', border: 'border-[#2855A5]/20' },
  { mr: '७,६००+ सदस्य', en: '7,600+ Members', color: 'text-[#287A18]', bg: 'bg-[#287A18]/5', border: 'border-[#287A18]/20' },
];

export function OrgNetworkSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="org-network" title={t('sec_org_network')}>
      <div className="grid gap-6 md:grid-cols-2 md:items-center text-left">
        <div className="relative">
          <WFImage
            label={lang === 'mr' ? 'भारताचा नकाशा — राष्ट्रव्यापी जाळे' : 'INDIA NETWORK MAP'}
            ratio="aspect-[4/3]"
            className="shadow-sm border-2 border-[#172A4A]/20"
          />
          <div className="absolute bottom-3 left-3 bg-[#172A4A] text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm">
            Pan-India Presence
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {networkStats.map((item, idx) => (
            <WFCard
              key={idx}
              className={`text-center py-7 shadow-xs hover:border-current transition-colors ${item.bg} ${item.border}`}
            >
              <div className={`text-2xl sm:text-3xl font-black ${item.color}`}>
                {item[lang]}
              </div>
              <div className="mt-1 text-xs font-bold text-[#172A4A]/70 uppercase tracking-wide">
                {lang === 'mr' ? 'सक्रिय सहभाग' : 'Active Footprint'}
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
