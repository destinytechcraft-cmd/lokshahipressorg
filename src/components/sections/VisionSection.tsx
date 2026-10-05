import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFLine, WFTextBlock } from '../ui/WireframePrimitives';

export function VisionSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="vision" index="4" title={t('sec_vision')}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 7 }).map((_, idx) => (
          <WFCard key={idx} label={`0${idx + 1}`} className="hover:border-neutral-400 transition-colors">
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
