import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFLine, WFTextBlock } from '../ui/WireframePrimitives';

export function GrievanceSection({ onSubmitIssueClick }: { onSubmitIssueClick?: () => void }) {
  const { t } = useLanguage();

  return (
    <SectionShell id="grievance" index="15" title={t('sec_grievance')}>
      <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
        <WFLine w="1/2" />
        <div className="w-full max-w-md">
          <WFTextBlock lines={2} />
        </div>
        <WFButton variant="solid" onClick={onSubmitIssueClick}>
          {t('btn_submit_issue')}
        </WFButton>
      </div>
    </SectionShell>
  );
}
