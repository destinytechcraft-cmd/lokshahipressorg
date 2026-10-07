import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFCard } from '../ui/WireframePrimitives';
import { GOOGLE_FORM_LINKS } from '../../config/forms';

const membershipCategories = [
  {
    titleMr: 'Journalist Membership',
    descMr: 'पत्रकारांसाठी',
    descEn: 'For Journalists',
  },
  {
    titleMr: 'Digital Journalist Membership',
    descMr: 'Digital/Online Media क्षेत्रातील पत्रकारांसाठी',
    descEn: 'For Journalists in Digital/Online Media Sector',
  },
  {
    titleMr: 'Social Worker Membership',
    descMr: 'सामाजिक क्षेत्रात कार्यरत व्यक्तींसाठी',
    descEn: 'For Individuals Active in Social Sector',
  },
  {
    titleMr: 'Associate Membership',
    descMr: 'संघटनेच्या कार्याशी सहकार्य करणाऱ्या व्यक्तींसाठी',
    descEn: 'For Individuals Cooperating with Organisation’s Work',
  },
];

export function MembershipSection({ onJoinClick }: { onJoinClick?: () => void }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="membership" index="13" title={t('sec_membership')}>
      <div className="space-y-6 text-left">
        {/* Intro from PDF Page 13 */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6 sm:p-8 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mb-2">
            {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारताचे सदस्य व्हा' : 'Become a Member of Lokshahi Patrakar Mahasangh Bharat'}
          </h3>
          <p className="text-sm sm:text-base font-bold text-neutral-800 italic mb-3">
            {lang === 'mr' ? 'एकजुटीतून शक्ती… संघटनेतून हक्क…' : 'Strength through unity… Rights through organisation…'}
          </p>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl">
            {lang === 'mr'
              ? 'पत्रकारिता क्षेत्रात कार्यरत असाल किंवा समाजहितासाठी काम करत असाल, महासंघाच्या संघटनात्मक कार्याशी जोडले जाण्यासाठी सदस्यत्वाचा पर्याय उपलब्ध आहे.'
              : 'If you are active in the field of journalism or working for public welfare, the option of membership is available to join the organizational work of the federation.'}
          </p>
        </div>

        {/* 4 Membership Categories from PDF Page 14 */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-600 mb-3">
            Membership Categories
          </h4>
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
                  <h4 className="text-sm font-bold text-neutral-900 leading-snug mb-2">
                    {cat.titleMr}
                  </h4>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {lang === 'mr' ? cat.descMr : cat.descEn}
                  </p>
                </div>
              </WFCard>
            ))}
          </div>
        </div>

        {/* Exact Button text from PDF Page 14 - Direct Google Form CTA Button */}
        <div className="mt-8 flex justify-center">
          <WFButton
            variant="solid"
            href={GOOGLE_FORM_LINKS.joinMembership}
            target="_blank"
            onClick={onJoinClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-black tracking-wide uppercase shadow-md bg-[#172A4A] hover:bg-[#0f1c32] text-white text-center"
          >
            {lang === 'mr' ? 'लोकशाही पत्रकार महासंघात सामील व्हा (Google Form) ↗' : 'JOIN LOKSHAHI PATRAKAR MAHASANGH (Google Form) ↗'}
          </WFButton>
        </div>
      </div>
    </SectionShell>
  );
}
