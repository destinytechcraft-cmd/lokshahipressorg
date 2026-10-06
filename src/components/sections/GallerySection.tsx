import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFImage } from '../ui/WireframePrimitives';

const galleryTabs = [
  { mr: 'फोटो (Photos)', en: 'Photos' },
  { mr: 'व्हिडिओ (Videos)', en: 'Videos' },
  { mr: 'कार्यक्रम (Events)', en: 'Events' },
  { mr: 'वृत्तपत्र कात्रणे (Press Clippings)', en: 'Press Clippings' },
];

export function GallerySection() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionShell id="gallery" title={t('sec_gallery')}>
      <div className="space-y-6 text-left">
        <div className="flex flex-wrap gap-2">
          {galleryTabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#172A4A] bg-[#172A4A] text-white shadow-xs'
                    : 'border-[#172A4A]/20 bg-white text-[#172A4A] hover:border-[#E30620] hover:text-[#E30620]'
                }`}
              >
                {lang === 'mr' ? tab.mr : tab.en}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-xl border border-[#172A4A]/15 bg-white p-2 shadow-2xs hover:border-[#E30620] transition-colors"
            >
              <WFImage
                label={`${t('image_ph')} ${idx + 1}`}
                ratio="aspect-square"
                className="w-full bg-[#F7F3EC] group-hover:scale-[1.02] transition-transform duration-200"
              />
              <div className="mt-2 text-center text-[10px] font-bold text-[#172A4A]/60">
                LOKSHAHI ARCHIVE #{idx + 101}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
