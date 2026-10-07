import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton } from '../ui/WireframePrimitives';
import { GOOGLE_FORM_LINKS } from '../../config/forms';

const grievanceTopics = [
  { mr: 'नागरिकांचे प्रश्न', en: 'Citizens’ Issues' },
  { mr: 'स्थानिक समस्या', en: 'Local Problems' },
  { mr: 'प्रशासनाशी संबंधित प्रश्न', en: 'Administration-related Issues' },
  { mr: 'जनहिताचे मुद्दे', en: 'Public Interest Issues' },
];

export function GrievanceSection({ onSubmitIssueClick }: { onSubmitIssueClick?: () => void }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="grievance" index="15" title={t('sec_grievance')}>
      <div className="flex flex-col items-center gap-5 rounded-2xl border-2 border-neutral-300 bg-neutral-50 p-6 sm:p-10 text-center max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
          {lang === 'mr' ? 'जनतेच्या प्रश्नांना वाचा फोडण्यासाठी' : 'Voicing the Issues of the Public'}
        </h3>

        <p className="max-w-2xl text-xs sm:text-sm text-neutral-700 leading-relaxed">
          {lang === 'mr'
            ? 'सर्वसामान्य नागरिकांच्या समस्या शासन आणि प्रशासनापर्यंत पोहोचविण्यासाठी महासंघ सामाजिक बांधिलकीच्या भूमिकेत कार्य करतो.'
            : 'The federation works in the role of social commitment to bring the problems of common citizens to the government and administration.'}
        </p>

        <div className="pt-2">
          <span className="text-xs font-bold text-neutral-800 block mb-2">
            {lang === 'mr' ? 'तुमचा प्रश्न आम्हाला कळवा' : 'Let us know your issue'}
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {grievanceTopics.map((item, idx) => (
              <span
                key={idx}
                className="rounded-md border-2 border-neutral-300 bg-white px-3 py-1.5 text-xs font-bold text-neutral-700 shadow-2xs"
              >
                {item[lang]}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <WFButton
            variant="solid"
            href={GOOGLE_FORM_LINKS.raiseVoice}
            target="_blank"
            onClick={onSubmitIssueClick}
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-black bg-[#E30620] hover:bg-[#c7051b] shadow-md uppercase tracking-wider text-white"
          >
            {lang === 'mr' ? 'आपला प्रश्न नोंदवा (Google Form) ↗' : 'SUBMIT YOUR ISSUE (Google Form) ↗'}
          </WFButton>
        </div>
      </div>
    </SectionShell>
  );
}
