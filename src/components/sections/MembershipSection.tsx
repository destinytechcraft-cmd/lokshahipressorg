import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFCard } from '../ui/WireframePrimitives';

const membershipCategories = [
  {
    titleMr: 'पत्रकार सदस्यत्व',
    titleEn: 'Journalist Membership',
    subtitleMr: 'प्रिंट व टीव्ही पत्रकारांसाठी',
    subtitleEn: 'For Working Print & TV Journalists',
    descMr: 'प्रिंट मीडिया, वृत्तपत्रे, नियतकालिके व टीव्ही चॅनेल्समध्ये कार्यरत असलेल्या अधिकृत पत्रकारांसाठी राष्ट्रीय सभासदत्व.',
    descEn: 'Accredited and working reporters in print dailies, magazines, and TV news channels across India.',
  },
  {
    titleMr: 'डिजिटल पत्रकार सदस्यत्व',
    titleEn: 'Digital Journalist Membership',
    subtitleMr: 'डिजिटल व ऑनलाइन मीडिया क्षेत्रातील पत्रकारांसाठी',
    subtitleEn: 'For Digital & Online Media Journalists',
    descMr: 'डिजिटल न्यूज पोर्टल्स, यूट्यूब वृत्तवाहिन्या, सोशल मीडिया पत्रकार व वेब रिपोर्टर्ससाठी हक्काचे व्यासपीठ.',
    descEn: 'News portal editors, independent YouTubers, digital correspondents, and cyber journalists.',
  },
  {
    titleMr: 'सामाजिक कार्यकर्ता सदस्यत्व',
    titleEn: 'Social Worker Membership',
    subtitleMr: 'सामाजिक क्षेत्रात कार्यरत व्यक्तींसाठी',
    subtitleEn: 'For Social Reformers & Activists',
    descMr: 'समाजहितासाठी, मानवाधिकार रक्षणासाठी आणि लोककल्याणासाठी तळमळीने काम करणाऱ्या समाजसेवकांसाठी सहभाग.',
    descEn: 'Dedicated grassroots reformers, NGO coordinators, and human rights defenders.',
  },
  {
    titleMr: 'सहयोगी सदस्यत्व',
    titleEn: 'Associate Membership',
    subtitleMr: 'संघटनेच्या कार्याशी सहकार्य करणाऱ्या व्यक्तींसाठी',
    subtitleEn: 'For Associate Supporters & Patrons',
    descMr: 'महासंघाच्या लोकशाही व पत्रकारिता संरक्षणाच्या कार्याशी सहमत असलेले नागरिक, अभ्यासक व मार्गदर्शक.',
    descEn: 'Intellectuals, legal patrons, and civil society advocates supporting media democracy.',
  },
];

export function MembershipSection({ onJoinClick }: { onJoinClick?: () => void }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="membership" index="13" title={t('sec_membership')}>
      <div className="space-y-6 text-left">
        {/* Intro from PDF Page 13 */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6 sm:p-8 text-center sm:text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
            {lang === 'mr' ? 'सदस्य नोंदणी अभियान' : 'National Membership Drive'}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mb-2">
            {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारताचे सदस्य व्हा' : 'Become a Member of Lokshahi Patrakar Mahasangh Bharat'}
          </h3>
          <p className="text-sm sm:text-base font-bold text-neutral-800 italic mb-3">
            {lang === 'mr' ? '“एकजुटीतून शक्ती… संघटनेतून हक्क…”' : '“Strength Through Unity… Rights Through Organization…”'}
          </p>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl">
            {lang === 'mr'
              ? 'पत्रकारिता क्षेत्रात कार्यरत असाल किंवा समाजहितासाठी काम करत असाल, महासंघाच्या संघटनात्मक कार्याशी जोडले जाण्यासाठी सदस्यत्वाचा पर्याय उपलब्ध आहे. अधिकृत ओळखपत्र, कायदेशीर संरक्षण व देशव्यापी सहकार्य प्राप्त करा.'
              : 'Whether you are actively reporting from the field or working for civic justice, our federation offers institutional membership with legal backing, recognized press credentials, and nation-wide brotherhood.'}
          </p>
        </div>

        {/* 4 Membership Categories from PDF Page 14 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {membershipCategories.map((cat, idx) => (
            <WFCard
              key={idx}
              className="flex flex-col justify-between text-left p-5 hover:border-neutral-500 transition-colors bg-white shadow-2xs"
            >
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border-2 border-neutral-300 bg-neutral-100 text-neutral-600 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                  {lang === 'mr' ? cat.titleMr : cat.titleEn}
                </h4>
                <div className="text-xs font-semibold text-red-600 mt-1 mb-2">
                  {lang === 'mr' ? cat.subtitleMr : cat.subtitleEn}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {lang === 'mr' ? cat.descMr : cat.descEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={onJoinClick}
                  className="w-full text-center rounded-md border border-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-800 py-1.5 text-xs font-bold text-neutral-700 transition-colors cursor-pointer"
                >
                  {lang === 'mr' ? 'नोंदणी करा →' : 'Apply Now →'}
                </button>
              </div>
            </WFCard>
          ))}
        </div>

        {/* Exact Button text from PDF Page 14 */}
        <div className="mt-8 flex justify-center">
          <WFButton
            variant="solid"
            onClick={onJoinClick}
            className="px-8 py-3 text-sm font-bold tracking-wide uppercase shadow-md bg-neutral-900 hover:bg-black"
          >
            JOIN LOKSHAHI PATRAKAR MAHASANGH
          </WFButton>
        </div>
      </div>
    </SectionShell>
  );
}
