import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFCard, WFLine, WFTextBlock } from '../ui/WireframePrimitives';

export function RightsSection({ onHelpdeskClick }: { onHelpdeskClick?: () => void }) {
  const { t } = useLanguage();

  return (
    <SectionShell id="rights" index="7" title={t('sec_rights')}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-3.5 justify-center">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="h-3 w-3 shrink-0 rounded-full bg-neutral-400" />
              <WFLine w="3/4" />
            </div>
          ))}
        </div>

        <WFCard className="flex flex-col items-start justify-center gap-4 bg-neutral-50 p-6 border-neutral-300">
          <WFLine w="1/2" />
          <WFTextBlock lines={2} />
          <WFButton variant="solid" onClick={onHelpdeskClick}>
            {t('btn_helpdesk')}
          </WFButton>
        </WFCard>
      </div>
    </SectionShell>
  );
}
