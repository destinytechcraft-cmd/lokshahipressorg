import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFCard } from '../ui/WireframePrimitives';
import { GOOGLE_FORM_LINKS } from '../../config/forms';

const membershipCategories = [
  {
    badgeMr: 'प्रिंट व इलेक्ट्रॉनिक',
    badgeEn: 'Print & Broadcast',
    titleMr: 'पत्रकार सदस्यत्व',
    titleEn: 'Journalist Membership',
    descMr: 'प्रिंट मीडिया, वर्तमानपत्रे, नियतकालिके, टीव्ही चॅनेल्स, वृत्तसंस्था आणि अधिकृत बातमीदारांसाठी प्राथमिक सभासदत्व.',
    descEn: 'Official primary membership for journalists, reporters, and correspondents working across print media, newspapers, periodicals, and TV news agencies.',
    featuresMr: ['प्रेस ओळखपत्र व प्रमाणपत्र', 'कायदेशीर संरक्षण व संघटनात्मक मदत', 'राज्य व राष्ट्रीय अधिवेशने'],
    featuresEn: ['Official Press ID & Certificate', 'Legal Aid & Organisational Support', 'State & National Conventions'],
  },
  {
    badgeMr: 'डिजिटल व ऑनलाइन',
    badgeEn: 'Digital & Online',
    titleMr: 'डिजिटल पत्रकार सदस्यत्व',
    titleEn: 'Digital Journalist Membership',
    descMr: 'वेब न्यूज पोर्टल्स, यूट्यूब न्यूज चॅनेल्स, डिजिटल मीडिया, पॉडकास्ट आणि स्वतंत्र ऑनलाइन वार्ताहरांसाठी.',
    descEn: 'Dedicated membership for digital news creators, web portal editors, YouTube news channels, and online journalists.',
    featuresMr: ['डिजिटल मीडिया मान्यता', 'तथ्य पडताळणी व सायबर सुरक्षा', 'डिजिटल पत्रकार प्रशिक्षण'],
    featuresEn: ['Digital Media Accreditation', 'Fact-Checking & Cyber Security', 'Digital Journalism Workshops'],
  },
  {
    badgeMr: 'समाजकार्य व जनहित',
    badgeEn: 'Social Welfare',
    titleMr: 'समाजसेवक सदस्यत्व',
    titleEn: 'Social Worker Membership',
    descMr: 'समाजहित, मानवाधिकार, जनसमस्या निवारण आणि लोकशाही मूल्यांच्या रक्षणासाठी सक्रिय समाजसेवकांसाठी.',
    descEn: 'For dedicated community leaders, human rights defenders, public welfare activists, and grassroots social workers.',
    featuresMr: ['सामाजिक सहकार्य व्यासपीठ', 'जनहित अभियान समन्वय', 'समाजभूषण सन्मान व गौरव'],
    featuresEn: ['Civil Society Network', 'Public Campaign Coordination', 'Social Honors & Recognition'],
  },
  {
    badgeMr: 'सहयोगी व मार्गदर्शक',
    badgeEn: 'Associate & Ally',
    titleMr: 'सहयोगी सदस्यत्व',
    titleEn: 'Associate Membership',
    descMr: 'महासंघाच्या सामाजिक, शैक्षणिक व जनहित उपक्रमांशी सहकार्य करणाऱ्या हितचिंतक नागरिकांसाठी.',
    descEn: 'For civic allies, mentors, patrons, and contributing citizens actively cooperating with the federation’s public mission.',
    featuresMr: ['सल्लागार व मार्गदर्शक सहभाग', 'वार्षिक उपक्रम आमंत्रण', 'लोकशाही परिवार जोडणी'],
    featuresEn: ['Advisory & Mentor Role', 'Annual Event Invitations', 'Lokshahi Family Linkage'],
  },
];

export function MembershipSection({ onJoinClick }: { onJoinClick?: () => void }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="membership" title={t('sec_membership')}>
      <div className="space-y-6 text-left">
        {/* Intro from PDF Page 13 */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-5 sm:p-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2">
            <h3 className="text-lg sm:text-xl font-black text-neutral-900">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारताचे सदस्य व्हा' : 'Become a Member of Lokshahi Patrakar Mahasangh Bharat'}
            </h3>
            <span className="inline-block self-start sm:self-auto text-[11px] font-black px-2.5 py-0.5 rounded-md bg-[#E30620]/10 text-[#E30620] border border-[#E30620]/20 uppercase tracking-wide">
              {lang === 'mr' ? 'अधिकृत नोंदणी' : 'Official Enrollment'}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#172A4A] mb-2">
            {lang === 'mr' ? 'एकजुटीतून शक्ती… संघटनेतून हक्क…' : 'Strength through unity… Rights through organisation…'}
          </p>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'पत्रकारिता क्षेत्रात कार्यरत असाल किंवा समाजहितासाठी काम करत असाल, महासंघाच्या संघटनात्मक कार्याशी जोडले जाण्यासाठी सदस्यत्वाचा पर्याय उपलब्ध आहे. संपूर्ण देशभरातील पत्रकारांच्या हक्कांचे संरक्षण, सहकार्य आणि सन्मानासाठी लोकशाही परिवार सदैव कटिबद्ध आहे.'
              : 'If you are active in journalism or public welfare, membership connects you with our nationwide framework dedicated to journalists’ rights, security, and professional empowerment.'}
          </p>
        </div>

        {/* 4 Membership Categories */}
        <div>
          <div className="flex items-center justify-between mb-3.5">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#172A4A]">
              {lang === 'mr' ? 'सदस्यत्व श्रेणी व प्रकार' : 'Membership Categories'}
            </h4>
            <span className="text-xs font-semibold text-neutral-500">
              {lang === 'mr' ? '४ मुख्य श्रेणी' : '4 Core Categories'}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {membershipCategories.map((cat, idx) => (
              <WFCard
                key={idx}
                className="flex flex-col justify-between text-left p-4 sm:p-5 hover:border-[#172A4A] transition-all bg-white shadow-xs rounded-xl border border-neutral-200 h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 font-black text-xs">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#172A4A]/5 text-[#172A4A] border border-[#172A4A]/10">
                      {lang === 'mr' ? cat.badgeMr : cat.badgeEn}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black text-[#172A4A] leading-snug mb-2">
                    {lang === 'mr' ? cat.titleMr : cat.titleEn}
                  </h4>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-3.5">
                    {lang === 'mr' ? cat.descMr : cat.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 mt-auto">
                  <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                    {lang === 'mr' ? 'समाविष्ट सुविधा :' : 'Key Benefits :'}
                  </span>
                  <ul className="space-y-1 text-[11px] text-neutral-700 font-medium">
                    {(lang === 'mr' ? cat.featuresMr : cat.featuresEn).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <span className="text-[#287A18] font-bold shrink-0">✓</span>
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </WFCard>
            ))}
          </div>
        </div>

        {/* Exact Button text from PDF Page 14 - Direct Form CTA Button */}
        <div className="mt-8 flex justify-center">
          <WFButton
            variant="solid"
            href={GOOGLE_FORM_LINKS.joinMembership}
            target="_blank"
            onClick={onJoinClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-black tracking-wide uppercase shadow-md bg-[#172A4A] hover:bg-[#0f1c32] text-white text-center"
          >
            {lang === 'mr' ? 'लोकशाही पत्रकार महासंघात सामील व्हा (फॉर्म) ↗' : 'JOIN LOKSHAHI PATRAKAR MAHASANGH (FORM) ↗'}
          </WFButton>
        </div>
      </div>
    </SectionShell>
  );
}
