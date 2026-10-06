import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { realPressClippings, PressArticle } from '../../data/newsAndEditorial';

export function MediaCoverage() {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated list for seamless infinite looping autoscroll
  const scrollArticles = [...realPressClippings, ...realPressClippings];

  // Pause scrolling while hovered, touched, or while modal is open
  const isScrollingPaused = isPaused || selectedArticle !== null;

  // Continuous smooth autoscroll loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    let scrollPos = scrollRef.current ? scrollRef.current.scrollLeft : 0;

    const step = (now: number) => {
      const el = scrollRef.current;
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (el && !isScrollingPaused) {
        scrollPos += 45 * dt; // 45px/second smooth movement
        const halfWidth = el.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos -= halfWidth;
        }
        el.scrollLeft = scrollPos;
      } else if (el) {
        scrollPos = el.scrollLeft;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isScrollingPaused]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArticle]);

  return (
    <section id="media-coverage" className="border-b border-[#172A4A]/10 bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4 text-left">
        {/* Section Header (Slider arrow icons removed as requested) */}
        <div className="mb-6">
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

        {/* Continuous Smooth Auto-Scroller of Cards */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 select-none touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {scrollArticles.map((article, idx) => (
            <article
              key={`${article.id}-${idx}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedArticle(article);
              }}
              className="w-72 sm:w-80 h-72 sm:h-80 shrink-0 bg-[#F7F3EC] p-5 rounded-2xl border-2 border-[#172A4A]/15 shadow-xs hover:border-[#E30620] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* 1. Only Date at top (clean text, no calendar icon) */}
              <div className="flex items-center justify-between pb-3 border-b border-[#172A4A]/10 text-xs">
                <span className="font-bold text-[#172A4A] tracking-wide text-xs sm:text-sm">
                  {lang === 'mr' ? article.dateMr : article.dateEn}
                </span>
              </div>

              {/* 2. Empty Box in middle (keep layout only as requested) */}
              <div className="my-3 flex-1 min-h-[140px] rounded-xl border border-dashed border-[#172A4A]/25 bg-white/70 group-hover:border-[#E30620]/40 transition-colors" />

              {/* 3. Only 'सविस्तर बातमी वाचा' at bottom - opens modal tab directly without redirect */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedArticle(article);
                }}
                className="pt-3 border-t border-[#172A4A]/10 w-full flex items-center justify-between text-xs font-black text-[#E30620] group-hover:text-[#c7051b] cursor-pointer"
              >
                <span className="tracking-wide">
                  {lang === 'mr' ? 'सविस्तर बातमी वाचा' : 'सविस्तर बातमी वाचा'}
                </span>
                <span className="text-base group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </button>
            </article>
          ))}
        </div>

        {/* Modal for viewing selected press clipping - opens directly in-tab without redirecting */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#172A4A]/60 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-[#172A4A]/30 bg-white p-5 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#172A4A]/10 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-black text-[#E30620] uppercase tracking-wider">
                    <span>{selectedArticle.source}</span>
                    <span>•</span>
                    <span className="text-[#172A4A]/60">{selectedArticle.sourceType}</span>
                  </div>
                  <span className="text-[11px] text-[#172A4A]/60 font-semibold mt-0.5 block">
                    {lang === 'mr' ? selectedArticle.dateMr : selectedArticle.dateEn}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#172A4A]/20 text-[#172A4A] hover:bg-[#F7F3EC] cursor-pointer"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#172A4A] leading-tight mb-4">
                {lang === 'mr' ? selectedArticle.headlineMr : selectedArticle.headlineEn}
              </h3>

              <div className="rounded-xl bg-[#F7F3EC] p-4 sm:p-5 text-xs sm:text-sm text-[#172A4A]/90 leading-relaxed mb-6 border border-[#172A4A]/10">
                <p className="mb-3 font-bold text-[#172A4A]">
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
