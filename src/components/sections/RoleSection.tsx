import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

const rolePoints = [
  {
    mr: 'पत्रकारांच्या प्रश्नांना संघटित व्यासपीठ उपलब्ध करून देतो.',
    en: 'Provides a structured, collective platform for addressing journalists’ professional challenges.',
  },
  {
    mr: 'सर्वसामान्य नागरिक व पत्रकारांच्या न्याय्य मागण्यांसाठी आवाज उठवतो.',
    en: 'Raises a powerful voice for the legitimate rights and demands of citizens and media professionals.',
  },
  {
    mr: 'पत्रकारांच्या हक्क आणि अधिकारांबाबत जनजागृती करतो.',
    en: 'Spreads constitutional and legal awareness regarding freedom of the press and press privileges.',
  },
  {
    mr: 'शासन प्रशासनापुढे सर्वसामान्य जनता व पत्रकारांचे प्रश्न मांडतो.',
    en: 'Presents grassroots grievances and media issues directly before government administrations.',
  },
  {
    mr: 'समाजातील जनहिताचे प्रश्न संबंधित यंत्रणांपर्यंत पोहोचविण्यासाठी प्रयत्न करतो.',
    en: 'Ensures public interest matters are escalated to the relevant state and central authorities.',
  },
  {
    mr: 'सामाजिक बांधिलकीच्या विविध उपक्रमांत सहभागी होतो.',
    en: 'Actively participates in public welfare, health camps, relief drives, and social causes.',
  },
  {
    mr: 'पत्रकार आणि सर्वसामान्य नागरिक यांच्यातील संवाद अधिक प्रभावी करण्यासाठी कार्य करतो.',
    en: 'Builds deeper, constructive communication bridges between journalists and civil society.',
  },
];

export function RoleSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="role" index="3" title={t('sec_role')}>
      <div className="space-y-6 text-left">
        {/* Role Headline & Intro */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
            {lang === 'mr' ? 'प्रमुख उद्दिष्ट' : 'Core Objective'}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
            {lang === 'mr' ? 'शासन – प्रशासन – सर्वसामान्य जनता यांच्यातील दुवा' : 'The Vital Bridge: Government, Administration & the Public'}
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-4xl">
            {lang === 'mr'
              ? 'लोकशाही व्यवस्थेत पत्रकारिता ही समाजाचा आरसा आणि लोकशाहीचा महत्त्वाचा आधारस्तंभ आहे. समाजातील प्रश्न प्रशासनापर्यंत पोहोचवणे आणि प्रशासनाच्या योजनांची माहिती जनतेपर्यंत पोहोचवणे या प्रक्रियेत पत्रकारांची भूमिका अत्यंत महत्त्वाची आहे. या भूमिकेला अधिक सक्षम करण्यासाठी लोकशाही पत्रकार महासंघ भारत कार्ये करते:'
              : 'In a constitutional democracy, journalism serves as the mirror of society and its fourth pillar. Conveying public grievances to authorities and bringing welfare schemes to citizens relies crucially on active journalism. Lokshahi Patrakar Mahasangh Bharat empowers this role through:'}
          </p>
        </div>

        {/* Role Points Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rolePoints.map((point, idx) => (
            <WFCard key={idx} className="flex items-start gap-3 p-4 hover:border-neutral-500 transition-colors">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[11px] font-bold text-white mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                {point[lang]}
              </p>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
