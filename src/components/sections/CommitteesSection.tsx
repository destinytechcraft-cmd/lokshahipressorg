import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFLine } from '../ui/WireframePrimitives';

export function CommitteesSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="committees" index="6" title={t('sec_committees')}>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 rounded-md border-2 border-neutral-200 bg-white p-2.5 shadow-2xs hover:border-neutral-300 transition-colors"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-neutral-300 text-[10px] font-bold text-neutral-500">
              {idx + 1}
            </span>
            <WFLine w="3/4" />
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs font-semibold text-neutral-400">
        + 78 committees grid / list view
      </p>
    </SectionShell>
  );
}
