import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFLine } from '../ui/WireframePrimitives';

export function LeadershipSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="leadership" index="16" title={t('sec_leadership')}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <WFCard
            key={idx}
            className="flex flex-col items-center gap-3 text-center p-6 hover:border-neutral-400 transition-colors"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neutral-300 bg-neutral-100 text-neutral-400">
              <svg className="h-10 w-10 text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <WFLine w="3/4" />
            <WFLine w="1/2" />
          </WFCard>
        ))}
      </div>
    </SectionShell>
  );
}
