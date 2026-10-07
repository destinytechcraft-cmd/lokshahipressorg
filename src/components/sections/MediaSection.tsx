import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage } from '../ui/WireframePrimitives';

const mediaSectionsData = [
  {
    key: 'releases',
    titleMr: 'प्रेस प्रसिद्धीपत्रके',
    titleEn: 'Press Releases',
    descMr: 'महासंघाच्या अधिकृत पत्रकार परिषदा, निवेदने व प्रसिद्धीपत्रके.',
    descEn: 'Official press conferences, representations and press releases of the federation.',
  },
  {
    key: 'news',
    titleMr: 'बातम्या व अपडेट्स',
    titleEn: 'News & Updates',
    descMr: 'महासंघाच्या विविध उपक्रमांची आणि कार्याची माहिती.',
    descEn: 'Information regarding various initiatives and activities of the federation.',
  },
  {
    key: 'interviews',
    titleMr: 'मुलाखती व लेख',
    titleEn: 'Interviews & Articles',
    descMr: 'पदाधिकारी, पत्रकार आणि सामाजिक क्षेत्रातील व्यक्तींच्या मुलाखती व लेख.',
    descEn: 'Interviews and articles of office bearers, journalists, and personalities from social sectors.',
  },
  {
    key: 'speeches',
    titleMr: 'भाषणे व विचार',
    titleEn: 'Speeches & Addresses',
    descMr: 'महासंघाच्या प्रमुख पदाधिकाऱ्यांची भाषणे व विचार.',
    descEn: 'Speeches and thoughts of key office bearers of the federation.',
  },
  {
    key: 'photos',
    titleMr: 'फोटो गॅलरी',
    titleEn: 'Photo Gallery',
    descMr: 'कार्यक्रमांचे छायाचित्र संग्रह.',
    descEn: 'Photo collection of events and programs.',
  },
  {
    key: 'videos',
    titleMr: 'व्हिडिओ गॅलरी',
    titleEn: 'Video Gallery',
    descMr: 'महासंघाच्या कार्यक्रमांचे व्हिडिओ.',
    descEn: 'Videos of the federation’s programs.',
  },
];

export function MediaSection() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <SectionShell id="media" index="11" title={t('sec_media')}>
      <div className="space-y-6 text-left">
        {/* Category Pills from PDF */}
        <div className="flex flex-wrap gap-2">
          {mediaSectionsData.map((cat, idx) => {
            const isActive = activeFilter === idx;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveFilter(idx)}
                className={`rounded-full border-2 px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'border-[#172A4A] bg-[#172A4A] text-white shadow-xs'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-[#172A4A]'
                }`}
              >
                {lang === 'mr' ? cat.titleMr : cat.titleEn}
              </button>
            );
          })}
        </div>

        {/* Selected Category Description Highlight */}
        <div className="rounded-lg border-2 border-neutral-200 bg-neutral-50 p-4">
          <h4 className="text-sm font-bold text-neutral-900 mb-1">
            {lang === 'mr' ? mediaSectionsData[activeFilter].titleMr : mediaSectionsData[activeFilter].titleEn}
          </h4>
          <p className="text-xs sm:text-sm text-neutral-700">
            {lang === 'mr' ? mediaSectionsData[activeFilter].descMr : mediaSectionsData[activeFilter].descEn}
          </p>
        </div>

        {/* 6 Media Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mediaSectionsData.map((item, idx) => (
            <WFCard key={idx} className="p-4 hover:border-neutral-500 transition-colors flex flex-col justify-between">
              <div>
                <WFImage
                  label={lang === 'mr' ? item.titleMr : item.titleEn}
                  ratio="aspect-video"
                  className="mb-3"
                />
                <h4 className="text-sm font-bold text-neutral-800 mb-1">
                  {lang === 'mr' ? item.titleMr : item.titleEn}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {lang === 'mr' ? item.descMr : item.descEn}
                </p>
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
