import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage } from '../ui/WireframePrimitives';

const mediaSectionsData = [
  {
    key: 'releases',
    titleMr: 'प्रेस रिलीज (Press Releases)',
    titleEn: 'Press Releases',
    descMr: 'महासंघाच्या अधिकृत पत्रकार परिषदा, निवेदने व प्रसिद्धीपत्रके.',
    descEn: 'Official press declarations, press conferences, media briefings and memorandums.',
  },
  {
    key: 'news',
    titleMr: 'बातम्या व अपडेट्स (News & Updates)',
    titleEn: 'News & Updates',
    descMr: 'महासंघाच्या विविध उपक्रमांची आणि कार्याची अद्ययावत माहिती.',
    descEn: 'Latest news, organizational achievements, and district-level activities.',
  },
  {
    key: 'interviews',
    titleMr: 'मुलाखती व लेख (Interviews & Articles)',
    titleEn: 'Interviews & Articles',
    descMr: 'पदाधिकारी, पत्रकार आणि सामाजिक क्षेत्रातील मान्यवरांच्या मुलाखती व विचारप्रवर्तक लेख.',
    descEn: 'Interviews with veteran journalists, thought leadership columns, and editorial essays.',
  },
  {
    key: 'speeches',
    titleMr: 'भाषणे व विचार (Speeches)',
    titleEn: 'Speeches & Keynotes',
    descMr: 'महासंघाच्या प्रमुख पदाधिकाऱ्यांची मार्गदर्शक भाषणे व विचार.',
    descEn: 'Addresses by national office-bearers on freedom of expression and press reforms.',
  },
  {
    key: 'photos',
    titleMr: 'फोटो गॅलरी (Photo Gallery)',
    titleEn: 'Photo Gallery',
    descMr: 'महासंघाच्या राज्य व राष्ट्रीय कार्यक्रमांचे अधिकृत छायाचित्र संग्रह.',
    descEn: 'High-resolution photo archives of conventions, rallies, and felicitation events.',
  },
  {
    key: 'videos',
    titleMr: 'व्हिडिओ गॅलरी (Video Gallery)',
    titleEn: 'Video Gallery',
    descMr: 'महासंघाच्या विविध उपक्रमांचे व्हिडिओ कव्हरेज व डॉक्युमेंटरी.',
    descEn: 'Live broadcasts, convention recordings, interviews, and video coverage.',
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
                    ? 'border-neutral-800 bg-neutral-800 text-white shadow-xs'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500'
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
          <p className="text-xs text-neutral-600">
            {lang === 'mr' ? mediaSectionsData[activeFilter].descMr : mediaSectionsData[activeFilter].descEn}
          </p>
        </div>

        {/* 6 Media Cards Grid with real labels & info */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mediaSectionsData.map((item, idx) => (
            <WFCard key={idx} className="p-4 hover:border-neutral-500 transition-colors flex flex-col justify-between">
              <div>
                <WFImage
                  label={lang === 'mr' ? item.titleMr.split(' ')[0] : item.titleEn}
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

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-semibold">
                <span>LOKSHAHI PRESS</span>
                <span>{lang === 'mr' ? 'तपशील पहा →' : 'View Details →'}</span>
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
