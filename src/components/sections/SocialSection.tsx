import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage } from '../ui/WireframePrimitives';

const socialWorkAreas = [
  { mr: 'जनजागृती', en: 'Public Awareness' },
  { mr: 'शिक्षण', en: 'Education Support' },
  { mr: 'सामाजिक मदत', en: 'Social Relief' },
  { mr: 'नागरिकांचे प्रश्न', en: 'Civic Grievances' },
  { mr: 'पर्यावरण', en: 'Environment Protection' },
  { mr: 'आरोग्यविषयक जनजागृती', en: 'Health Campaigns' },
  { mr: 'सामाजिक एकोपा', en: 'Social Harmony' },
  { mr: 'लोकशाही जनजागृती', en: 'Democratic Literacy' },
];

export function SocialSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="social" index="8" title={t('sec_social')}>
      <div className="space-y-6 text-left">
        {/* Main Text Content from PDF Page 10 */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-8">
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
              {lang === 'mr' ? 'पत्रकारितेसोबत सामाजिक बांधिलकी' : 'Commitment Beyond Headlines: Social Responsibility'}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारताचे कार्य केवळ पत्रकारांच्या प्रश्नांपुरते मर्यादित नाही. गेल्या अनेक वर्षांपासून महासंघाच्या माध्यमातून विविध समाजोपयोगी, जनजागृतीपर आणि सामाजिक बांधिलकीचे कार्यक्रम आयोजित करण्यात आले आहेत.'
                : 'The mission of Lokshahi Patrakar Mahasangh Bharat is not restricted solely to professional issues. For over 11 years, the federation has actively mobilized citizen welfare programs, awareness drives, and humanitarian aid.'}
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'समाजातील गरजू व्यक्ती, सामान्य नागरिक, महिला सक्षमीकरण, विद्यार्थी आणि विविध सामाजिक घटकांपर्यंत पोहोचून समाजहिताच्या उपक्रमांना प्रोत्साहन देणे हा महासंघाच्या कार्याचा महत्त्वाचा भाग आहे.'
                : 'Reaching out to marginalized communities, underprivileged children, women self-help collectives, and students to foster social empowerment is foundational to our existence.'}
            </p>

            <div className="rounded-lg border-2 border-neutral-300 bg-neutral-50 p-4">
              <span className="text-xs font-bold text-neutral-800 block mb-1">
                {lang === 'mr' ? 'महासंघाचा ठाम विश्वास :' : 'Our Fundamental Conviction :'}
              </span>
              <blockquote className="text-xs sm:text-sm font-semibold text-neutral-800 italic">
                {lang === 'mr'
                  ? '“हक्क आणि कर्तव्ये ही एकाच नाण्याच्या दोन बाजू आहेत.”'
                  : '“Rights and responsibilities are two sides of the same coin.”'}
              </blockquote>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                {lang === 'mr'
                  ? 'पत्रकारांच्या हितासोबतच समाजातील शोषित, वंचित आणि सामान्य नागरिकांचा आवाज प्रभावीपणे लोकांपर्यंत पोहोचवणे ही आमची सामाजिक जबाबदारी आहे. शासनाच्या विविध योजना, धोरणे आणि सार्वजनिक प्रश्नांवर वस्तुनिष्ठ माहिती समाजापर्यंत पोहोचवून लोकशाही अधिक सक्षम करण्यासाठी महासंघ सातत्याने प्रयत्नशील आहे.'
                : 'Uplifting the voice of the voiceless and disseminating objective facts on welfare policies ensures vibrant public scrutiny and strengthens Indian democracy.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <WFCard label={lang === 'mr' ? 'सामाजिक कार्याची प्रमुख क्षेत्रे' : 'Key Focus Domains'}>
              <div className="flex flex-wrap gap-2">
                {socialWorkAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border-2 border-neutral-300 bg-white px-3 py-1.5 text-xs font-bold text-neutral-700 shadow-2xs"
                  >
                    {area[lang]}
                  </span>
                ))}
              </div>
            </WFCard>
          </div>
        </div>

        {/* 4 Photo Placeholders */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
            {lang === 'mr' ? 'सामाजिक उपक्रम व कार्यक्रम छायाचित्रे' : 'Social Programs & Field Activities'}
          </h4>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <WFImage
                key={idx}
                label={`${t('image_ph')} ${idx + 1}`}
                ratio="aspect-square"
                className="shadow-2xs hover:border-neutral-400 transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
