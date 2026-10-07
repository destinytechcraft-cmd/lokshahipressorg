import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage } from '../ui/WireframePrimitives';

const socialWorkAreas = [
  { mr: 'जनजागृती', en: 'Public Awareness' },
  { mr: 'शिक्षण', en: 'Education' },
  { mr: 'सामाजिक मदत', en: 'Social Relief' },
  { mr: 'नागरिकांचे प्रश्न', en: 'Citizens’ Issues' },
  { mr: 'पर्यावरण', en: 'Environment' },
  { mr: 'आरोग्यविषयक जनजागृती', en: 'Health Awareness' },
  { mr: 'सामाजिक एकोपा', en: 'Social Harmony' },
  { mr: 'लोकशाही जनजागृती', en: 'Democratic Awareness' },
];

export function SocialSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="social" index="8" title={t('sec_social')}>
      <div className="space-y-6 text-left">
        {/* Main Text Content strictly from PDF Page 10 */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-8">
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
              {lang === 'mr' ? 'पत्रकारितेसोबत सामाजिक बांधिलकी' : 'Social Responsibility Alongside Journalism'}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारताचे कार्य केवळ पत्रकारांच्या प्रश्नांपुरते मर्यादित नाही. गेल्या अनेक वर्षांपासून महासंघाच्या माध्यमातून विविध समाजोपयोगी, जनजागृतीपर आणि सामाजिक बांधिलकीचे कार्यक्रम आयोजित करण्यात आले आहेत.'
                : 'The work of Lokshahi Patrakar Mahasangh Bharat is not limited only to journalists’ issues. For several years, diverse public welfare, awareness, and social responsibility programs have been organized.'}
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'समाजातील गरजू व्यक्ती, सामान्य नागरिक, महिला सक्षमीकरण, विद्यार्थी आणि विविध सामाजिक घटकांपर्यंत पोहोचून समाजहिताच्या उपक्रमांना प्रोत्साहन देणे हा महासंघाच्या कार्याचा महत्त्वाचा भाग आहे.'
                : 'Reaching out to needy individuals, common citizens, women empowerment, students, and diverse social sections to promote public interest initiatives is an important part of the federation’s work.'}
            </p>

            <div className="rounded-lg border-2 border-neutral-300 bg-neutral-50 p-4">
              <p className="text-xs sm:text-sm font-semibold text-neutral-800 italic">
                {lang === 'mr'
                  ? 'महासंघाचा ठाम विश्वास आहे की "हक्क आणि कर्तव्ये ही एकाच नाण्याच्या दोन बाजू आहेत."'
                  : 'The federation firmly believes that "Rights and duties are two sides of the same coin."'}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {lang === 'mr'
                  ? 'पत्रकारांच्या हितासोबतच समाजातील शोषित, वंचित आणि सामान्य नागरिकांचा आवाज प्रभावीपणे लोकांपर्यंत पोहोचवणे ही आमची सामाजिक जबाबदारी आहे. शासनाच्या विविध योजना, धोरणे आणि सार्वजनिक प्रश्नांवर वस्तुनिष्ठ माहिती समाजापर्यंत पोहोचवून लोकशाही अधिक सक्षम करण्यासाठी महासंघ सातत्याने प्रयत्नशील आहे.'
                  : 'Along with journalists’ welfare, bringing the voice of exploited, underprivileged, and common citizens effectively to the public is our social responsibility. By delivering objective information on governmental schemes, policies, and public issues to society, the federation consistently strives to make democracy more robust.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <WFCard label={lang === 'mr' ? 'सामाजिक कार्याची प्रमुख क्षेत्रे' : 'Key Areas of Social Work'}>
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

        {/* Note from PDF Page 10: येथे प्रत्यक्ष घेतलेल्या कार्यक्रमांची नावे व फोटो जोडायचे आहेत */}
        <div className="pt-2">
          <div className="mb-3 rounded-lg border border-neutral-300 bg-neutral-100/70 p-3 text-center">
            <span className="text-xs font-bold text-neutral-800">
              {lang === 'mr'
                ? 'येथे प्रत्यक्ष घेतलेल्या कार्यक्रमांची नावे व फोटो जोडायचे आहेत'
                : 'Names and photos of actual programs held are to be added here'}
            </span>
          </div>
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
