import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { realPressClippings, PressArticle } from '../../data/newsAndEditorial';

export function MediaCoverage() {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 2.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardStep = 330; // card width + gap

        if (scrollLeft >= maxScroll - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardStep, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 330 * direction, behavior: 'smooth' });
    }
  };

  return (
    <section id="media-coverage" className="border-b border-[#172A4A]/10 bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4 text-left">
        {/* Section Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E30620] text-white text-xs font-black">
                ★
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#E30620]">
                {lang === 'mr' ? 'वृत्तपत्र व मीडिया कव्हरेज' : 'PRESS & MEDIA COVERAGE'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#172A4A]">
              {lang === 'mr' ? 'प्रमुख वृत्तपत्रांमधील बातम्या व प्रसिद्धी' : 'Leading News Outlets on Lokshahi Press Federation'}
            </h2>
            <p className="mt-1 text-xs text-[#172A4A]/70 font-medium">
              {lang === 'mr'
                ? 'देशभरातील प्रतिष्ठित वृत्तपत्रे, वृत्तसंस्था व वृत्तवाहिन्यांनी घेतलेली महासंघाच्या कार्याची दखल.'
                : 'National and regional press coverage chronicling our campaigns, conventions, and media rights advocacy.'}
            </p>
          </div>

          {/* Carousel Navigation Buttons & Autoscroll Status */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous articles"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#172A4A]/20 bg-[#F7F3EC] text-[#172A4A] hover:bg-[#172A4A] hover:text-white transition-all cursor-pointer shadow-2xs"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next articles"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#172A4A]/20 bg-[#F7F3EC] text-[#172A4A] hover:bg-[#172A4A] hover:text-white transition-all cursor-pointer shadow-2xs"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Auto-Scroller of Cards: Only Date, Empty Box, and Savistar Batmi Vacha */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:thin] scroll-smooth"
        >
          {realPressClippings.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="w-72 sm:w-80 h-72 sm:h-80 shrink-0 snap-start bg-[#F7F3EC] p-5 rounded-2xl border-2 border-[#172A4A]/15 shadow-xs hover:border-[#E30620] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* 1. Only Date at top */}
              <div className="flex items-center justify-between pb-3 border-b border-[#172A4A]/10 text-xs">
                <span className="inline-flex items-center gap-1.5 font-bold text-[#172A4A]">
                  <span className="text-sm">📅</span>
                  <span>{lang === 'mr' ? article.dateMr : article.dateEn}</span>
                </span>
              </div>

              {/* 2. Empty Box in middle (clean wireframe canvas for future images/articles) */}
              <div className="my-3 flex-1 min-h-[140px] rounded-xl border border-dashed border-[#172A4A]/25 bg-white/70 flex items-center justify-center relative overflow-hidden group-hover:border-[#E30620]/40 transition-colors">
                <svg
                  className="absolute inset-0 h-full w-full text-[#172A4A]/5 pointer-events-none"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.75" />
                </svg>
              </div>

              {/* 3. Only 'सविस्तर बातमी वाचा' at bottom */}
              <div className="pt-3 border-t border-[#172A4A]/10 flex items-center justify-between text-xs font-black text-[#E30620] group-hover:text-[#c7051b]">
                <span className="tracking-wide">
                  {lang === 'mr' ? 'सविस्तर बातमी वाचा' : 'सविस्तर बातमी वाचा'}
                </span>
                <span className="text-base group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for viewing selected press clipping */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172A4A]/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl rounded-2xl border-2 border-[#172A4A]/30 bg-white p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#172A4A]/10 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-black text-[#E30620] uppercase tracking-wider">
                    <span>{selectedArticle.source}</span>
                    <span>•</span>
                    <span className="text-[#172A4A]/60">{selectedArticle.sourceType}</span>
                  </div>
                  <span className="text-[11px] text-[#172A4A]/60">
                    {lang === 'mr' ? selectedArticle.dateMr : selectedArticle.dateEn}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#172A4A]/20 text-[#172A4A] hover:bg-[#F7F3EC] cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#172A4A] leading-tight mb-4">
                {lang === 'mr' ? selectedArticle.headlineMr : selectedArticle.headlineEn}
              </h3>

              <div className="rounded-xl bg-[#F7F3EC] p-4 text-xs sm:text-sm text-[#172A4A]/90 leading-relaxed mb-6 border border-[#172A4A]/10">
                <p className="mb-3 font-semibold">
                  {lang === 'mr' ? selectedArticle.excerptMr : selectedArticle.excerptEn}
                </p>
                <p className="text-xs text-[#172A4A]/70 leading-relaxed">
                  {lang === 'mr'
                    ? 'लोकशाही पत्रकार महासंघ भारत ही देशभरातील माध्यम क्षेत्रातील एक अग्रगण्य, पक्षनिरपेक्ष व राष्ट्रीय नोंदणीकृत संस्था असून पत्रकारांचे संरक्षण, आरोग्य, विधी सहाय्य व जनहिताच्या प्रश्नांवर अविरत कार्यरत आहे.'
                    : 'Lokshahi Patrakar Mahasangh Bharat is an accredited national media federation advocating for journalists’ welfare, constitutional protection, and democratic ethics nationwide.'}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-[#172A4A]/60">
                  {lang === 'mr' ? 'अधिकृत वृत्त संकलन' : 'Official Media Archive'}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-lg bg-[#172A4A] hover:bg-[#0f1c32] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {lang === 'mr' ? 'बंद करा' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
