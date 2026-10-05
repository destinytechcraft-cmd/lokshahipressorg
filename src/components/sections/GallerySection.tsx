import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFImage } from '../ui/WireframePrimitives';

const galleryTabs = [
  { mr: 'फोटो', en: 'Photos' },
  { mr: 'व्हिडिओ', en: 'Videos' },
  { mr: 'कार्यक्रम', en: 'Events' },
  { mr: 'वृत्तपत्र कात्रणे', en: 'Press Clippings' },
];

export function GallerySection() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionShell id="gallery" title={t('sec_gallery')}>
      <div className="mb-6 flex flex-wrap gap-2">
        {galleryTabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`rounded-full border-2 px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                isActive
                  ? 'border-neutral-700 bg-neutral-700 text-white'
                  : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400'
              }`}
            >
              {tab[lang]}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <WFImage
            key={idx}
            label={`${t('image_ph')} ${idx + 1}`}
            ratio="aspect-square"
            className="shadow-2xs hover:border-neutral-400 transition-colors"
          />
        ))}
      </div>
    </SectionShell>
  );
}
