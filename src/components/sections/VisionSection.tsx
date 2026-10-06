import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';

const visionItems = [
  {
    num: '01',
    titleMr: 'पत्रकारांचे हक्क संरक्षण',
    titleEn: 'Journalists’ Rights Protection',
    descMr: 'पत्रकारांच्या न्याय्य हक्क, अधिकार आणि सन्मानासाठी संघटितपणे आवाज उठवणे.',
    descEn: 'Organized and resolute advocacy for journalists’ lawful rights, authority, and professional honor.',
  },
  {
    num: '02',
    titleMr: 'पत्रकारांची एकजूट',
    titleEn: 'Pan-India Journalist Unity',
    descMr: 'देशभरातील पत्रकारांना एका व्यापक व्यासपीठावर आणणे.',
    descEn: 'Uniting media practitioners across print, broadcast, and digital outlets on a common platform.',
  },
  {
    num: '03',
    titleMr: 'पत्रकार सुरक्षा व सन्मान',
    titleEn: 'Journalist Security & Dignity',
    descMr: 'पत्रकारांना काम करताना येणाऱ्या अडचणी आणि प्रश्नांसाठी संघटनात्मक पाठबळ निर्माण करणे.',
    descEn: 'Providing robust organizational support and safety shields for ground reporters facing threats.',
  },
  {
    num: '04',
    titleMr: 'लोकशाही मूल्यांचे संरक्षण',
    titleEn: 'Upholding Democratic Values',
    descMr: 'स्वातंत्र्य, समानता, न्याय आणि लोकशाही मूल्यांबाबत जनजागृती करणे.',
    descEn: 'Promoting constitutional awareness regarding liberty, equality, social justice, and free speech.',
  },
  {
    num: '05',
    titleMr: 'सर्वसामान्यांचा आवाज न्यायासाठी लढा',
    titleEn: 'Voice for the Common Citizen',
    descMr: 'महासंघाच्या माध्यमातून सर्वसामान्यांच्या प्रश्नांना वाचा फोडत, त्यांच्या हक्कांसाठी निर्भीडपणे आवाज उठवून न्याय मिळवून देणे.',
    descEn: 'Fearlessly voicing grassroots public grievances through responsible media to secure justice.',
  },
  {
    num: '06',
    titleMr: 'सामाजिक बांधिलकी',
    titleEn: 'Social Accountability',
    descMr: 'समाजातील गरजू आणि सर्वसामान्य नागरिकांच्या प्रश्नांसाठी सामाजिक उपक्रम राबवणे.',
    descEn: 'Undertaking impactful community initiatives and humanitarian programs for the underprivileged.',
  },
  {
    num: '07',
    titleMr: 'पत्रकारिता विकास',
    titleEn: 'Journalism Development & Upskilling',
    descMr: 'पत्रकारांना ज्ञान, प्रशिक्षण, मार्गदर्शन आणि आधुनिक पत्रकारितेच्या बदलत्या स्वरूपाशी जोडण्यासाठी प्रयत्न करणे.',
    descEn: 'Imparting continuous digital skills, technical literacy, and investigative training for evolving media.',
  },
];

export function VisionSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="vision" index="4" title={t('sec_vision')}>
      <div className="space-y-6 text-left">
        {/* Mission Statement */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-900 text-white p-6 sm:p-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">
            {lang === 'mr' ? 'ध्येय विधान' : 'Vision Statement'}
          </span>
          <p className="text-base sm:text-lg font-bold leading-relaxed">
            {lang === 'mr'
              ? 'भारतभरातील पत्रकारांना एकजूट, सक्षम, सुरक्षित आणि स्वाभिमानी संघटनात्मक व्यासपीठ उपलब्ध करून देणे.'
              : 'Providing an empowering, unified, secure, and dignified organizational platform for journalists across India.'}
          </p>
          <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {lang === 'mr'
              ? 'पत्रकारांच्या न्याय्य हक्कांसाठी लोकशाही आणि संविधानिक मार्गाने आवाज उठवणे तसेच पत्रकारितेच्या माध्यमातून सर्वसामान्य नागरिकांच्या प्रश्नांना प्रभावीपणे वाचा फोडण्यासाठी पत्रकारांना सक्षम करणे.'
              : 'Advocating through constitutional and democratic channels for media rights while empowering reporters to be the fearless champions of civic truth.'}
          </p>
        </div>

        {/* 7 Vision Items */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visionItems.map((item) => (
            <WFCard
              key={item.num}
              label={item.num}
              className="flex flex-col justify-between hover:border-neutral-500 transition-colors p-5"
            >
              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-2">
                  {lang === 'mr' ? item.titleMr : item.titleEn}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {lang === 'mr' ? item.descMr : item.descEn}
                </p>
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
