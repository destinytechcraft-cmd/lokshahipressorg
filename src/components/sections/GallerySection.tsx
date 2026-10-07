import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFImage } from '../ui/WireframePrimitives';

const galleryTabs = [
  { mr: 'फोटो गॅलरी', en: 'Photo Gallery', descMr: 'कार्यक्रमांचे छायाचित्र संग्रह.', descEn: 'Official photography archive of conventions, campaigns, and events.' },
  { mr: 'व्हिडिओ गॅलरी', en: 'Video Gallery', descMr: 'महासंघाच्या कार्यक्रमांचे व्हिडिओ.', descEn: 'Video coverage of press addresses, award ceremonies, and media conventions.' },
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

        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
          <p className="text-xs font-semibold text-neutral-700">
            {lang === 'mr' ? galleryTabs[activeTab].descMr : galleryTabs[activeTab].descEn}
          </p>
        </div>

        <div className="mb-2 rounded-lg border border-neutral-300 bg-neutral-100/70 p-3 text-center">
          <span className="text-xs font-bold text-neutral-800">
            {lang === 'mr'
              ? 'येथे प्रत्यक्ष घेतलेल्या कार्यक्रमांची नावे व फोटो जोडायचे आहेत'
              : 'Names and photos of actual programs held are to be added here'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl border border-[#172A4A]/15 bg-white p-2 shadow-2xs hover:border-[#E30620] transition-colors"
            >
              <WFImage
                label={`${lang === 'mr' ? galleryTabs[activeTab].mr : galleryTabs[activeTab].en} ${idx + 1}`}
                ratio="aspect-square"
                className="w-full bg-white"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
