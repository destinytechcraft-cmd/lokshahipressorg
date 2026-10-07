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
            {lang === 'mr' ? 'कार्यक्रम आणि उपक्रम' : 'Events and Programs'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'महासंघाच्या माध्यमातून आयोजित करण्यात आलेल्या पत्रकारिता, सामाजिक, जनजागृती आणि संघटनात्मक कार्यक्रमांची माहिती येथे उपलब्ध असेल.'
              : 'Information about journalism, social, awareness, and organizational programs organized through the federation will be available here.'}
          </p>
        </div>

        {/* Note from PDF Page 13 */}
        <div className="text-xs font-semibold text-neutral-500">
          {lang === 'mr' ? 'प्रत्येक Event Card मध्ये :' : 'Each Event Card includes :'}
        </div>

        {/* Event Cards with exact items required in PDF Page 13 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleEvents.map((event, idx) => (
            <WFCard key={event.id || idx} className="p-4 hover:border-neutral-500 transition-colors flex flex-col justify-between">
              <div>
                <WFImage
                  label={lang === 'mr' ? '📷 फोटो' : '📷 Photo'}
                  ratio="aspect-video"
                  className="mb-3.5"
                />

                <h4 className="text-base font-bold text-neutral-900 leading-snug mb-3">
                  {lang === 'mr' ? 'कार्यक्रमाचे नाव' : 'Event Name'}
                </h4>

                <div className="space-y-2 text-xs text-neutral-700 mb-4 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center gap-1.5">
                    <span>📍</span>
                    <span className="font-semibold">{lang === 'mr' ? 'ठिकाण' : 'Location'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>📅</span>
                    <span className="font-semibold">{lang === 'mr' ? 'दिनांक' : 'Date'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>👥</span>
                    <span className="font-semibold">{lang === 'mr' ? 'आयोजक / समिती' : 'Organizer / Committee'}</span>
                  </div>
                  <div className="pt-1.5 border-t border-neutral-200">
                    <span className="font-semibold block mb-0.5">📝 {lang === 'mr' ? 'कार्यक्रमाची माहिती' : 'Program Details'}</span>
                  </div>
                </div>
              </div>

              {/* Media links: Photo & Video as per PDF */}
              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1 text-neutral-600">
                  📷 {lang === 'mr' ? 'फोटो' : 'Photo'}
                </span>
                <span className="flex items-center gap-1 text-neutral-600">
                  🎥 {lang === 'mr' ? 'व्हिडिओ' : 'Video'}
                </span>
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
