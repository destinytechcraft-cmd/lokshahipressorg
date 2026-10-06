import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

const tiers = [
  { mr: 'राष्ट्रीय स्तर', en: 'National Level', unitMr: 'राष्ट्रीय समिती व केंद्रीय कार्यकारिणी', unitEn: 'National Committee & Apex Council' },
  { mr: 'राज्य स्तर', en: 'State Level', unitMr: 'सर्व राज्यांतील प्रदेश कार्यकारिणी समित्या', unitEn: 'State Executive Committees across all States' },
  { mr: 'विभागीय स्तर', en: 'Divisional Level', unitMr: 'विभागीय समन्वयक व विभागीय कार्यकारिणी', unitEn: 'Divisional Coordinators & Regional Wings' },
  { mr: 'जिल्हा स्तर', en: 'District Level', unitMr: 'जिल्हा कार्यकारणी, कोर कमिटी व पत्रकार सेल', unitEn: 'District Executive, Core Committee & Press Cells' },
  { mr: 'तालुका स्तर', en: 'Taluka Level', unitMr: 'तालुका अध्यक्ष, सचिव व स्थानिक समन्वय कक्ष', unitEn: 'Taluka Presidents, Secretaries & Grievance Desks' },
  { mr: 'शहर / ग्रामीण स्तर', en: 'City / Rural Level', unitMr: 'शहर, गाव व स्थानिक पातळीवरील शाखा व प्रतिनिधी', unitEn: 'City & Rural Grassroots Branches & Field Correspondents' },
];

export function OrganisationSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="organisation" index="5" title={t('sec_org')}>
      <div className="space-y-8 text-left">
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'लोकशाही पत्रकार महासंघ भारताने आपल्या कार्याची व्याप्ती वाढवण्यासाठी विविध स्तरांवर संघटनात्मक रचना उभी केली आहे. देश, राज्य, विभाग, जिल्हा आणि तालुका पातळीवर सशक्त समन्वय साधत पत्रकारांच्या हक्कांचे संरक्षण केले जाते.'
              : 'Lokshahi Patrakar Mahasangh Bharat has established a structured multi-tiered organizational framework to scale outreach and coordinate legal and professional support from grassroots villages to national capitals.'}
          </p>
        </div>

        {/* Vertical Hierarchy Tiers */}
        <div className="flex flex-col items-center gap-2">
          {tiers.map((tier, idx) => (
            <div key={idx} className="flex w-full max-w-lg flex-col items-center">
              <div className="w-full rounded-lg border-2 border-neutral-300 bg-white p-3.5 text-center shadow-xs hover:border-neutral-500 hover:bg-neutral-50 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-0.5">
                  {lang === 'mr' ? `स्तर ०${idx + 1}` : `LEVEL 0${idx + 1}`}
                </span>
                <div className="text-sm font-bold text-neutral-800">
                  {tier[lang]}
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  {lang === 'mr' ? tier.unitMr : tier.unitEn}
                </div>
              </div>
              {idx < tiers.length - 1 ? (
                <div className="flex flex-col items-center my-1 text-neutral-400">
                  <div className="h-3 w-0.5 bg-neutral-300" />
                  <span className="text-xs leading-none">↓</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Dashboard Table requested on Page 6 of the PDF */}
        <WFCard label={lang === 'mr' ? 'संघटनात्मक रचना डॅशबोर्ड (Organisational Dashboard)' : 'Organisational Hierarchy Dashboard'}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-700 border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-300 bg-neutral-100 text-neutral-900 font-bold uppercase text-[11px] tracking-wider">
                  <th className="py-2.5 px-4 w-1/3">{lang === 'mr' ? 'स्तर' : 'Level'}</th>
                  <th className="py-2.5 px-4">{lang === 'mr' ? 'माहिती / रचना' : 'Details / Structure'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {tiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-neutral-900">{tier[lang]}</td>
                    <td className="py-3 px-4">{lang === 'mr' ? tier.unitMr : tier.unitEn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-neutral-500 italic">
            {lang === 'mr'
              ? 'यासोबतच महासंघाच्या कार्यासाठी ७८ विविध विकास समित्या देशभरात कार्यरत आहेत.'
              : 'Additionally, 78 specialized development committees operate actively across India.'}
          </p>
        </WFCard>
      </div>
    </SectionShell>
  );
}
