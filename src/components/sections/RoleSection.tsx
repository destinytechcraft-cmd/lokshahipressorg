import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFLine } from '../ui/WireframePrimitives';

export function RoleSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="role" index="3" title={t('sec_role')}>
      <div className="grid gap-3 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-md border-2 border-neutral-200 bg-white p-3 shadow-2xs hover:border-neutral-300 transition-colors"
          >
            <span className="h-4 w-4 shrink-0 rounded-full border-2 border-neutral-400" />
            <WFLine w="3/4" />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
