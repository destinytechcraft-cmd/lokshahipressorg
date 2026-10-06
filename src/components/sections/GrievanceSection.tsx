import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton } from '../ui/WireframePrimitives';

const grievanceTopics = [
  { mr: 'नागरिकांचे प्रश्न', en: 'Citizen Grievances' },
  { mr: 'स्थानिक समस्या', en: 'Local Infrastructure Issues' },
  { mr: 'प्रशासनाशी संबंधित प्रश्न', en: 'Administrative Delays & Red Tape' },
  { mr: 'जनहिताचे मुद्दे', en: 'Public Interest Causes' },
];

export function GrievanceSection({ onSubmitIssueClick }: { onSubmitIssueClick?: () => void }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="grievance" index="15" title={t('sec_grievance')}>
      <div className="flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <span className="rounded-full border-2 border-neutral-300 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          {lang === 'mr' ? 'जन तक्रार निवारण कक्ष' : 'PUBLIC GRIEVANCE CELL'}
        </span>

        <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
          {lang === 'mr' ? 'जनतेच्या प्रश्नांना वाचा फोडण्यासाठी' : 'Amplifying Grassroots Citizens’ Voices'}
        </h3>

        <p className="max-w-2xl text-xs sm:text-sm text-neutral-700 leading-relaxed">
          {lang === 'mr'
            ? 'सर्वसामान्य नागरिकांच्या समस्या शासन आणि प्रशासनापर्यंत पोहोचविण्यासाठी महासंघ सामाजिक बांधिलकीच्या भूमिकेत कार्य करतो. जनतेच्या हक्कासाठी सत्य वार्तांकन आणि प्रशासकीय पाठपुरावा ही आमची जबाबदारी आहे.'
            : 'Lokshahi Patrakar Mahasangh Bharat actively intervenes on behalf of ordinary citizens to communicate public problems to relevant municipal, state, and central departments.'}
        </p>

        {/* Topics from PDF Page 15 */}
        <div className="flex flex-wrap justify-center gap-2 pt-1">
          {grievanceTopics.map((item, idx) => (
            <span
              key={idx}
              className="rounded-md border-2 border-neutral-300 bg-white px-3 py-1.5 text-xs font-bold text-neutral-700 shadow-2xs"
            >
              {item[lang]}
            </span>
          ))}
        </div>

        <div className="pt-3">
          <WFButton
            variant="solid"
            onClick={onSubmitIssueClick}
            className="px-8 py-3 text-sm font-bold bg-[#E30620] hover:bg-[#c7051b] shadow-md uppercase tracking-wider text-white"
          >
            {t('btn_submit_issue')}
          </WFButton>
        </div>
      </div>
    </SectionShell>
  );
}
