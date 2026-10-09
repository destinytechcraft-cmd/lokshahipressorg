import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFCard } from '../ui/WireframePrimitives';

const rightsPoints = [
  {
    mr: 'पत्रकारांच्या प्रश्नांना संघटनात्मक व्यासपीठ',
    en: 'An organized, sovereign national platform for resolving journalist challenges',
  },
  {
    mr: 'पत्रकारांच्या न्याय्य मागण्यांसाठी निवेदने व पाठपुरावा',
    en: 'Systematic legal representations and regular follow-ups for legitimate demands',
  },
  {
    mr: 'पत्रकारांवरील अन्यायाच्या प्रश्नांकडे संबंधित यंत्रणेचे लक्ष वेधणे',
    en: 'Drawing immediate attention of authorities to any harassment or unjust attacks',
  },
  {
    mr: 'पत्रकारांच्या व्यावसायिक सन्मानासाठी प्रयत्न',
    en: 'Continuous institutional campaigns to elevate journalists’ professional prestige',
  },
  {
    mr: 'पत्रकारांच्या हक्कांबाबत जनजागृती',
    en: 'Educating working journalists on their labor rights, press card validity, and legal shields',
  },
  {
    mr: 'पत्रकारांसाठी मार्गदर्शन व संघटनात्मक सहकार्य',
    en: 'Expert counsel, legal guidance, and mutual solidarity during professional crisis',
  },
  {
    mr: 'पत्रकारांच्या प्रश्नांसाठी शासन-प्रशासनाशी संवाद',
    en: 'Constructive dialogue with district magistrates, police departments, and state ministries',
  },
];

export function RightsSection({ onHelpdeskClick }: { onHelpdeskClick?: () => void }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="rights" index="7" title={t('sec_rights')}>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start text-left">
        {/* Left Column: Context & Bullet Points from PDF Page 9 */}
        <div className="space-y-4 lg:col-span-7">
          <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
              {lang === 'mr'
                ? 'पत्रकारांचे न्याय, हक्क आणि अधिकार'
                : 'Journalists’ Rights, Legal Protections & Constitutional Freedom'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
              {lang === 'mr'
                ? 'पत्रकार हा लोकशाही व्यवस्थेतील अत्यंत महत्त्वाचा घटक आहे. बातमीच्या माध्यमातून समाजातील प्रश्न शासन-प्रशासन आणि जनतेसमोर आणताना पत्रकारांना अनेक व्यावसायिक, सामाजिक आणि कार्यक्षेत्रातील आव्हानांना सामोरे जावे लागते.'
                : 'The journalist is the indispensable torchbearer of the democratic system. While highlighting civic issues and administrative lapses, reporters frequently encounter workplace pressures, legal threats, and ground hazards.'}
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारत पत्रकारांच्या न्याय हक्कांसाठी संविधानिक, कायदेशीर आणि लोकशाही मार्गाने आवाज उठविण्याच्या भूमिकेत सातत्याने कार्यरत आहे.'
                : 'Lokshahi Patrakar Mahasangh Bharat is steadfastly committed to defending journalists through constitutional, legal, and democratic representation.'}
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              {lang === 'mr' ? 'महासंघाचे प्रमुख प्रयत्न :' : 'Core Advocacy Focus Areas :'}
            </h4>
            {rightsPoints.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-3 shadow-2xs hover:border-neutral-400 transition-colors"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#172A4A] text-[11px] font-bold text-amber-400 mt-0.5 shadow-2xs">
                  ★
                </span>
                <p className="text-xs sm:text-sm font-medium text-neutral-800">
                  {item[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: CTA Box from PDF Page 9 */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-8 shadow-xs text-center flex flex-col items-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#172A4A]/5 text-2xl border border-[#172A4A]/15 shadow-2xs">
              ⚖️
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#E30620] block mb-1">
              CTA
            </span>
            <h4 className="text-base sm:text-lg font-black text-[#172A4A] mb-2">
              {lang === 'mr' ? 'तातडीची मदत व कायदेशीर पाठबळ' : 'Emergency Assistance & Legal Aid'}
            </h4>
            <blockquote className="text-xs sm:text-sm font-bold text-[#172A4A] italic mb-6 leading-relaxed max-w-sm">
              {lang === 'mr'
                ? '“तुमच्या पत्रकारिता क्षेत्रातील प्रश्नासाठी आमच्याशी संपर्क साधा.”'
                : '“Contact us for issues related to your journalism field.”'}
            </blockquote>
            <button
              type="button"
              onClick={onHelpdeskClick}
              className="w-full sm:w-auto rounded-xl bg-[#E30620] hover:bg-[#c7051b] text-white px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              JOURNALIST HELP DESK
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
