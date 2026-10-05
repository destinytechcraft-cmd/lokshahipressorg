import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WFImage } from '../ui/WireframePrimitives';

export function MediaCoverage() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320 * direction, behavior: 'smooth' });
    }
  };

  const items = Array.from({ length: 8 });

  return (
    <section id="media-coverage" className="border-b-2 border-dashed border-neutral-300 bg-neutral-50 py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-neutral-400 px-2 text-xs font-bold text-neutral-500">
            ★
          </span>
          <h2 className="text-lg font-bold tracking-tight text-neutral-700 sm:text-xl">
            {t('sec_media_coverage')}
          </h2>

          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-400 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-400 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:thin] scroll-smooth"
        >
          {items.map((_, idx) => (
            <figure key={idx} className="w-72 shrink-0 snap-start bg-white p-2.5 rounded-lg border-2 border-neutral-200">
              <WFImage
                label={`${t('image_ph')} ${idx + 1}`}
                ratio="aspect-[4/3]"
                className="w-full"
              />
              <figcaption className="mt-2 space-y-1.5">
                <div className="h-2.5 w-2/3 rounded bg-neutral-200" />
                <div className="h-2.5 w-1/2 rounded bg-neutral-200" />
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-2 text-[11px] text-neutral-400 select-none">
          ← {t('sec_media_coverage')} — horizontal image scroller (news clippings / press photos) →
        </p>
      </div>
    </section>
  );
}
