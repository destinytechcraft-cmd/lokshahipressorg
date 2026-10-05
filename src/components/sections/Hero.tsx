import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WFButton, WFImage, WFTextBlock } from '../ui/WireframePrimitives';

const heroBadges = [
  { mr: '११+ वर्षे', en: '11+ Years' },
  { mr: '७,६००+ सदस्य', en: '7,600+ Members' },
  { mr: '७८ समित्या', en: '78 Committees' },
  { mr: 'भारतभर', en: 'Pan-India' },
];

export function Hero({
  onJoinClick,
  onVoiceClick,
}: {
  onJoinClick?: () => void;
  onVoiceClick?: () => void;
}) {
  const { t, lang } = useLanguage();

  return (
    <section className="border-b-2 border-dashed border-neutral-300 py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full border-2 border-neutral-300 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Hero Section
          </span>

          <h1 className="text-2xl font-black leading-tight text-neutral-800 sm:text-3xl md:text-4xl">
            {t('tagline')}
          </h1>

          <div className="text-sm font-semibold text-neutral-500">
            <WFTextBlock lines={3} />
          </div>

          {/* Quick highlight tags */}
          <div className="flex flex-wrap gap-2">
            {heroBadges.map((badge, idx) => (
              <span
                key={idx}
                className="rounded-md border-2 border-neutral-300 bg-neutral-50 px-3 py-1.5 text-xs font-bold text-neutral-600 shadow-2xs"
              >
                {badge[lang]}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <WFButton variant="solid" onClick={onJoinClick}>
              {t('btn_join')}
            </WFButton>
            <WFButton variant="outline" onClick={onVoiceClick}>
              {t('btn_voice')}
            </WFButton>
          </div>
        </div>

        <WFImage
          label={t('image_ph')}
          ratio="aspect-[4/3]"
          className="w-full shadow-sm"
        />
      </div>
    </section>
  );
}
