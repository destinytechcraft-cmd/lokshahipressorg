import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

const tiers = [
  { mr: 'राष्ट्रीय स्तर', en: 'National Level' },
  { mr: 'राज्य स्तर', en: 'State Level' },
  { mr: 'विभागीय स्तर', en: 'Divisional Level' },
  { mr: 'जिल्हा स्तर', en: 'District Level' },
  { mr: 'तालुका स्तर', en: 'Taluka Level' },
  { mr: 'शहर / ग्रामीण स्तर', en: 'City / Rural Level' },
  { mr: 'राष्ट्र, राज्य, व स्थानिक पातळीवरील समित्या', en: 'National, State, and Local Level Committees' },
];

const dashboardRows = [
  { levelMr: 'राष्ट्रीय', levelEn: 'National', infoMr: 'राष्ट्रीय समिती', infoEn: 'National Committee' },
  { levelMr: 'राज्य', levelEn: 'State', infoMr: 'राज्य समित्या', infoEn: 'State Committees' },
  { levelMr: 'विभाग', levelEn: 'Division', infoMr: 'विभागीय समित्या', infoEn: 'Divisional Committees' },
];

export function OrganisationSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="organisation" index="5" title={t('sec_org')}>
      <div className="space-y-8 text-left">
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
            {lang === 'mr' ? 'संघटनेची रचना' : 'Organisation Structure'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'लोकशाही पत्रकार महासंघ भारताने आपल्या कार्याची व्याप्ती वाढवण्यासाठी विविध स्तरांवर संघटनात्मक रचना उभी केली आहे.'
              : 'Lokshahi Patrakar Mahasangh Bharat has set up an organizational structure at various levels to expand the scope of its work.'}
          </p>
        </div>

        {/* Vertical Hierarchy Tiers */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
            {lang === 'mr' ? 'संघटनात्मक स्तर' : 'Organisational Levels'}
          </span>
          {tiers.map((tier, idx) => (
            <div key={idx} className="flex w-full max-w-lg flex-col items-center">
              <div className="w-full rounded-lg border-2 border-neutral-300 bg-white p-3 text-center shadow-xs hover:border-neutral-500 hover:bg-neutral-50 transition-colors">
                <div className="text-sm font-bold text-neutral-800">
                  {tier[lang]}
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
        <WFCard label={lang === 'mr' ? 'डॅशबोर्ड (Dashboard)' : 'Dashboard'}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-neutral-700 border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-300 bg-neutral-100 text-neutral-900 font-bold uppercase text-[11px] tracking-wider">
                  <th className="py-2.5 px-4 w-1/3">{lang === 'mr' ? 'स्तर' : 'Level'}</th>
                  <th className="py-2.5 px-4">{lang === 'mr' ? 'माहिती' : 'Info'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {dashboardRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-neutral-900">{row[lang === 'mr' ? 'levelMr' : 'levelEn']}</td>
                    <td className="py-3 px-4">{row[lang === 'mr' ? 'infoMr' : 'infoEn']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-neutral-600">
            {lang === 'mr'
              ? 'यासोबतच महासंघाच्या कार्यासाठी 78 विविध समित्या कार्यरत आहेत.'
              : 'Along with this, 78 various committees are active for the federation’s work.'}
          </p>
        </WFCard>
      </div>
    </SectionShell>
  );
}
