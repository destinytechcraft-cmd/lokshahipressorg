import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage, WFLine } from '../ui/WireframePrimitives';

const mediaCategories = [
  { mr: 'प्रेस रिलीज', en: 'Press Releases' },
  { mr: 'बातम्या', en: 'News & Updates' },
  { mr: 'मुलाखती व लेख', en: 'Interviews & Articles' },
  { mr: 'भाषणे', en: 'Speeches' },
  { mr: 'फोटो गॅलरी', en: 'Photo Gallery' },
  { mr: 'व्हिडिओ गॅलरी', en: 'Video Gallery' },
];

export function MediaSection() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <SectionShell id="media" index="11" title={t('sec_media')}>
      <div className="mb-6 flex flex-wrap gap-2">
        {mediaCategories.map((cat, idx) => {
          const isActive = selectedCategory === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedCategory(idx)}
              className={`rounded-full border-2 px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                isActive
                  ? 'border-neutral-700 bg-neutral-700 text-white'
                  : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400'
              }`}
            >
              {cat[lang]}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <WFCard key={idx} className="p-3 hover:border-neutral-400 transition-colors">
            <WFImage label={t('image_ph')} ratio="aspect-video" />
            <div className="mt-3 space-y-2">
              <WFLine w="3/4" />
              <WFLine w="1/2" />
            </div>
          </WFCard>
        ))}
      </div>
    </SectionShell>
  );
}
