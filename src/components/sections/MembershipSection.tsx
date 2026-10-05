import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFCard, WFTextBlock } from '../ui/WireframePrimitives';

const membershipCategories = [
  { mr: 'पत्रकार सदस्यत्व', en: 'Journalist Membership' },
  { mr: 'डिजिटल पत्रकार', en: 'Digital Journalist' },
  { mr: 'सामाजिक कार्यकर्ता', en: 'Social Worker' },
  { mr: 'सहयोगी सदस्यत्व', en: 'Associate Membership' },
];

export function MembershipSection({ onJoinClick }: { onJoinClick?: () => void }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="membership" index="13" title={t('sec_membership')}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {membershipCategories.map((cat, idx) => (
          <WFCard key={idx} className="flex flex-col gap-3 text-center p-6 hover:border-neutral-400 transition-colors">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-neutral-300 bg-neutral-50 text-neutral-400">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="text-sm font-bold text-neutral-700">
              {cat[lang]}
            </div>
            <WFTextBlock lines={2} />
          </WFCard>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <WFButton variant="solid" onClick={onJoinClick} className="px-6 py-2.5">
          {t('btn_join_member')}
        </WFButton>
      </div>
    </SectionShell>
  );
}
