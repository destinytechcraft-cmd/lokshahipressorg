import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage } from '../ui/WireframePrimitives';

const networkStats = [
  { mr: '७,६००+ सदस्य', en: '7,600+ Members', subMr: 'सदस्यांचे राष्ट्रीय जाळे', subEn: 'National Network', color: 'text-[#172A4A]', bg: 'bg-[#172A4A]/5', border: 'border-[#172A4A]/20' },
  { mr: '७८ समित्या', en: '78 Committees', subMr: 'राष्ट्रीय, राज्य व स्थानिक समित्या', subEn: 'National, State & Local', color: 'text-[#2855A5]', bg: 'bg-[#2855A5]/5', border: 'border-[#2855A5]/20' },
  { mr: '११+ वर्षे', en: '11+ Years', subMr: 'सामाजिक व पत्रकारिता क्षेत्रातील वाटचाल', subEn: 'Journey in Media & Social Work', color: 'text-[#E6530C]', bg: 'bg-[#E6530C]/5', border: 'border-[#E6530C]/20' },
  { mr: 'भारतभर', en: 'Pan-India', subMr: 'राष्ट्रीय कार्यक्षेत्र', subEn: 'National Reach', color: 'text-[#287A18]', bg: 'bg-[#287A18]/5', border: 'border-[#287A18]/20' },
];

export function OrgNetworkSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="org-network" title={t('sec_org_network')}>
      <div className="space-y-6 text-left">
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'महासंघाचे कार्यक्षेत्र संपूर्ण भारतभर विस्तारलेले असून विविध राज्ये, विभाग, जिल्हे आणि स्थानिक स्तरांवर संघटनात्मक जाळे उभारण्याचे कार्य सातत्याने सुरू आहे. गेल्या ११ वर्षांपासून पत्रकारिता, सामाजिक बांधिलकी आणि लोकशाही मूल्यांच्या संरक्षणासाठी लोकशाही परिवाराच काम सुरू असून शासनमान्य नोंदणी मात्र अलीकडच्या काळात झाली आहे.'
              : 'The federation’s reach is spread across India and the work of building an organizational network across states, divisions, districts and local levels is ongoing.'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="relative">
            <WFImage
              label={lang === 'mr' ? 'भारतभर संघटनात्मक जाळे' : 'PAN-INDIA NETWORK'}
              ratio="aspect-[4/3]"
              className="shadow-sm border-2 border-[#172A4A]/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {networkStats.map((item, idx) => (
              <WFCard
                key={idx}
                className={`text-center py-6 shadow-xs hover:border-current transition-colors ${item.bg} ${item.border}`}
              >
                <div className={`text-xl sm:text-2xl font-black ${item.color}`}>
                  {item[lang]}
                </div>
                <div className="mt-1 text-[11px] font-bold text-[#172A4A]/80">
                  {lang === 'mr' ? item.subMr : item.subEn}
                </div>
              </WFCard>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
