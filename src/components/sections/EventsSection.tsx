import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage, WFLine, WFTextBlock } from '../ui/WireframePrimitives';

export function EventsSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="events" index="12" title={t('sec_events')}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <WFCard key={idx} className="p-3 hover:border-neutral-400 transition-colors">
            <WFImage label={t('image_ph')} ratio="aspect-video" />
            <div className="mt-3 space-y-2.5">
              <WFLine w="3/4" />
              <div className="flex gap-2">
                <span className="rounded border-2 border-neutral-200 px-2 py-0.5 text-[10px] font-semibold text-neutral-500">
                  Date
                </span>
                <span className="rounded border-2 border-neutral-200 px-2 py-0.5 text-[10px] font-semibold text-neutral-500">
                  Venue
                </span>
              </div>
              <WFTextBlock lines={2} />
            </div>
          </WFCard>
        ))}
      </div>
    </SectionShell>
  );
}
