import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage } from '../ui/WireframePrimitives';
import { sampleEvents } from '../../data/pdfContent';

export function EventsSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="events" index="12" title={t('sec_events')}>
      <div className="space-y-6 text-left">
        {/* Intro from PDF Page 13 */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
            {lang === 'mr' ? 'कार्यक्रम आणि उपक्रम' : 'Events & Organizational Programs'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'महासंघाच्या माध्यमातून आयोजित करण्यात आलेल्या पत्रकारिता, सामाजिक, जनजागृती आणि संघटनात्मक कार्यक्रमांची माहिती येथे उपलब्ध आहे.'
              : 'Discover upcoming and completed conferences, training workshops, journalist defense rallies, and civic welfare camps hosted nationwide.'}
          </p>
        </div>

        {/* Event Cards with all items required in PDF Page 13 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleEvents.map((event) => (
            <WFCard key={event.id} className="p-4 hover:border-neutral-500 transition-colors flex flex-col justify-between">
              <div>
                <WFImage
                  label={lang === 'mr' ? 'कार्यक्रम छायाचित्र' : 'EVENT PHOTO'}
                  ratio="aspect-video"
                  className="mb-3.5"
                />

                <h4 className="text-base font-bold text-neutral-900 leading-snug mb-3">
                  {lang === 'mr' ? event.titleMr : event.titleEn}
                </h4>

                {/* Empty layout box (content removed as requested) */}
                <div className="mb-4 min-h-[80px] bg-neutral-50/70 rounded-md border border-neutral-200" />

                <div className="text-xs text-neutral-700 leading-relaxed mb-4">
                  <span className="font-bold text-neutral-800 block mb-1">📝 {lang === 'mr' ? 'कार्यक्रमाची माहिती :' : 'Program Details :'}</span>
                  {lang === 'mr' ? event.descMr : event.descEn}
                </div>
              </div>

              {/* Media Links: Photo & Video as per PDF */}
              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 cursor-pointer">
                  📷 {lang === 'mr' ? 'फोटो पहा' : 'Photos'}
                </span>
                <span className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 cursor-pointer">
                  🎥 {lang === 'mr' ? 'व्हिडिओ पहा' : 'Videos'}
                </span>
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
