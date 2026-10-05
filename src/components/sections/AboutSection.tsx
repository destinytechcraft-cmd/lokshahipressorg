import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFImage, WFTextBlock } from '../ui/WireframePrimitives';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="about" index="2" title={t('sec_about')}>
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <WFTextBlock lines={5} />
          <WFTextBlock lines={3} />
        </div>
        <WFImage label={t('image_ph')} ratio="aspect-[4/3]" className="shadow-xs" />
      </div>
    </SectionShell>
  );
}
