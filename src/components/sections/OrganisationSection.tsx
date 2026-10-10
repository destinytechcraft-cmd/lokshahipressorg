import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

interface TierItem {
  id: string;
  titleMr: string;
  titleEn: string;
  descMr: string;
}

const organizationalTiers: TierItem[] = [
  {
    id: 'national',
    titleMr: 'राष्ट्रीय स्तर',
    titleEn: 'National Level',
    descMr: 'सर्वोच्च राष्ट्रीय परिषद • Apex National Body',
  },
  {
    id: 'state',
    titleMr: 'राज्य स्तर',
    titleEn: 'State Level',
    descMr: 'राज्य कार्यकारणी • State Executive Committee',
  },
  {
    id: 'divisional',
    titleMr: 'विभागीय स्तर',
    titleEn: 'Divisional Level',
    descMr: 'महसूल विभाग स्तर • Revenue Divisional Level',
  },
  {
    id: 'district',
    titleMr: 'जिल्हा स्तर',
    titleEn: 'District Level',
    descMr: 'जिल्हा कार्यकारणी • District Executive Committee',
  },
  {
    id: 'taluka',
    titleMr: 'तालुका स्तर',
    titleEn: 'Taluka Level',
    descMr: 'तालुका समिती • Taluka Working Committee',
  },
  {
    id: 'city_rural',
    titleMr: 'शहर / ग्रामीण स्तर',
    titleEn: 'City / Rural Level',
    descMr: 'स्थानिक गाव, शहर व वाडी वस्ती पातळी • Grassroots & Local Level',
  },
  {
    id: 'committees',
    titleMr: 'राष्ट्र, राज्य, व स्थानिक पातळीवरील समित्या',
    titleEn: 'National, State, and Local Level Committees',
    descMr: '७८ विविध विषय व विकास समित्या • 78 Specialized Subject Committees',
  },
];

const dashboardRows = [
  {
    levelMr: 'राष्ट्रीय',
    levelEn: 'National',
    infoMr: 'राष्ट्रीय समिती व केंद्रीय सल्लागार मंडळ',
    infoEn: 'National Committee & Advisory Board',
  },
  {
    levelMr: 'राज्य',
    levelEn: 'State',
    infoMr: 'राज्य कार्यकारणी व राज्यस्तरीय समन्वय कक्ष',
    infoEn: 'State Executive Committees & Liaison Cell',
  },
  {
    levelMr: 'विभाग',
    levelEn: 'Division',
    infoMr: 'विभागीय समन्वय समित्या (कोकण, पुणे, नाशिक, संभाजीनगर, अमरावती, नागपूर)',
    infoEn: 'Divisional Committees (Konkan, Pune, Nashik, Sambhajinagar, Amravati, Nagpur)',
  },
];

export function OrganisationSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="organisation" index="5" title={t('sec_org')}>
      <div className="space-y-8 text-left">
        {/* Intro Banner */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
            {lang === 'mr'
              ? 'संघटनेची रचना व अधिकार स्तर'
              : 'Organisational Structure & Hierarchy'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'लोकशाही पत्रकार महासंघ भारताने देशातील पत्रकारांच्या हक्कांचे संरक्षण, सक्षमीकरण आणि जबाबदार पत्रकारितेच्या प्रसारासाठी राष्ट्रीय पातळीपासून गावपातळीपर्यंत एक मजबूत, पारदर्शक आणि लोकशाहीवादी संरचना उभी केली आहे.'
              : 'Lokshahi Patrakar Mahasangh Bharat has instituted a robust, decentralized democratic structure ranging from apex national policymaking bodies to grassroots rural networks, ensuring nationwide press defense and empowerment.'}
          </p>
        </div>

        {/* Vertical Hierarchy Block Diagram */}
        <div className="py-2">
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
              {lang === 'mr' ? 'संघटनात्मक स्तर रचना आकृती' : 'ORGANISATIONAL HIERARCHY BLOCK DIAGRAM'}
            </span>
          </div>

          <div className="flex flex-col items-center max-w-xl mx-auto space-y-0">
            {organizationalTiers.map((tier, idx) => (
              <React.Fragment key={tier.id}>
                {/* Block Card */}
                <div className="w-full rounded-xl border-2 border-neutral-300 bg-white p-4 sm:p-5 text-center shadow-xs hover:border-[#172A4A] transition-colors">
                  <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                    {lang === 'mr' ? tier.titleMr : tier.titleEn}
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 font-medium">
                    {tier.descMr}
                  </p>
                </div>

                {/* Connecting Down Arrow */}
                {idx < organizationalTiers.length - 1 && (
                  <div className="flex items-center justify-center my-2 text-neutral-400 font-black">
                    <span className="text-xl leading-none select-none">↓</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3-Row Dashboard Table */}
        <WFCard>
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-bold text-neutral-900">
              {lang === 'mr' ? 'स्तरनिहाय कार्यमंडळ आढावा' : 'Tier-Wise Executive Committee Overview'}
            </h4>
          </div>

          <div className="overflow-x-auto rounded-lg border border-neutral-200">
            <table className="w-full text-left text-xs sm:text-sm text-neutral-700 border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100 text-neutral-900 font-bold uppercase text-[11px] tracking-wider">
                  <th className="py-2.5 px-4 w-1/4 sm:w-1/5">{lang === 'mr' ? 'स्तर' : 'Level'}</th>
                  <th className="py-2.5 px-4">{lang === 'mr' ? 'माहिती व कार्यकक्षा' : 'Committee Information & Jurisdiction'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {dashboardRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-neutral-900">
                      {row[lang === 'mr' ? 'levelMr' : 'levelEn']}
                    </td>
                    <td className="py-3 px-4 font-medium text-neutral-800">
                      {row[lang === 'mr' ? 'infoMr' : 'infoEn']}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
            <div className="text-xs font-semibold text-neutral-800">
              {lang === 'mr'
                ? 'यासोबतच महासंघाच्या व्यापक कार्यासाठी ७८ विविध विषय समित्या कार्यरत आहेत.'
                : 'Along with this, 78 specialized subject committees are actively functional across India.'}
            </div>
            <a
              href="#committees"
              className="text-xs font-bold text-[#172A4A] hover:underline"
            >
              {lang === 'mr' ? '७८ समित्या पहा →' : 'View 78 Committees →'}
            </a>
          </div>
        </WFCard>
      </div>
    </SectionShell>
  );
}
