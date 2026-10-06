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
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[10px] font-bold text-white mt-0.5">
                  ✓
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
          <WFCard className="border-2 border-neutral-400 bg-neutral-900 text-white p-6 shadow-md text-center flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl border border-white/20">
              ⚖️
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              {lang === 'mr' ? 'तातडीची मदत व कायदेशीर पाठबळ' : 'Emergency Assistance & Legal Aid'}
            </h4>
            <blockquote className="text-xs sm:text-sm text-neutral-300 italic mb-5 leading-relaxed">
              {lang === 'mr'
                ? '“तुमच्या पत्रकारिता क्षेत्रातील प्रश्नासाठी आमच्याशी संपर्क साधा.”'
                : '“Reach out to us for any professional grievances or threats in your journalistic work.”'}
            </blockquote>
            <WFButton
              variant="solid"
              onClick={onHelpdeskClick}
              className="bg-white text-neutral-900 hover:bg-neutral-100 font-bold px-6 py-2.5 text-xs sm:text-sm shadow-sm"
            >
              {t('btn_helpdesk')}
            </WFButton>
          </WFCard>

          <WFCard label={lang === 'mr' ? '२४/७ हेल्पलाइन व विधी कक्ष' : '24/7 Helpline & Legal Cell'} className="bg-neutral-50">
            <p className="text-xs text-neutral-600 leading-relaxed">
              {lang === 'mr'
                ? 'स्थानिक पोलिस स्टेशन, प्रशासन अथवा संस्थेकडून पत्रकारितेवर गदा आल्यास आमची विधी सल्लागार समिती विनामूल्य मार्गदर्शन व मदत करते.'
                : 'Our legal cell provides immediate counseling, documentation assistance, and public representations whenever journalists face harassment.'}
            </p>
          </WFCard>
        </div>
      </div>
    </SectionShell>
  );
}
