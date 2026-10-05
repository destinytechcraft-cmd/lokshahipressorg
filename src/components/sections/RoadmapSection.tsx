import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFLine, WFTextBlock } from '../ui/WireframePrimitives';

export function RoadmapSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="roadmap" index="10" title={t('sec_roadmap')}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <WFCard
            key={idx}
            label={`PHASE 0${idx + 1}`}
            className="hover:border-neutral-400 transition-colors"
          >
            <WFLine w="3/4" />
            <div className="mt-3">
              <WFTextBlock lines={2} />
            </div>
          </WFCard>
        ))}
      </div>
    </SectionShell>
  );
}
