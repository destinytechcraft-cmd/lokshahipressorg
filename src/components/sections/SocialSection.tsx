import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFImage, WFTextBlock } from '../ui/WireframePrimitives';

export function SocialSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="social" index="8" title={t('sec_social')}>
      <div className="mb-6 max-w-3xl">
        <WFTextBlock lines={3} />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <WFImage
            key={idx}
            label={t('image_ph')}
            ratio="aspect-square"
            className="shadow-2xs hover:border-neutral-400 transition-colors"
          />
        ))}
      </div>
    </SectionShell>
  );
}
