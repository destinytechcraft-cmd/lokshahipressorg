import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WFButton } from '../ui/WireframePrimitives';

const heroBadges = [
  { mr: '११+ वर्षे वाटचाल', en: '11+ Years Journey', color: 'border-[#E6530C] text-[#E6530C] bg-[#E6530C]/5' },
  { mr: '७,६००+ सदस्य', en: '7,600+ Members', color: 'border-[#172A4A] text-[#172A4A] bg-[#172A4A]/5' },
  { mr: '७८ समित्या', en: '78 Committees', color: 'border-[#2855A5] text-[#2855A5] bg-[#2855A5]/5' },
  { mr: 'भारतभर कार्यक्षेत्र', en: 'Pan-India Reach', color: 'border-[#287A18] text-[#287A18] bg-[#287A18]/5' },
];

export interface HeroSlide {
  id: number;
  imageSrc?: string; // Blank for now. Add image URL/path here later.
  text: string;
}

const heroSlides: HeroSlide[] = [
  { id: 1, imageSrc: '', text: 'IMAGE 01' },
  { id: 2, imageSrc: '', text: 'IMAGE 02' },
  { id: 3, imageSrc: '', text: 'IMAGE 03' },
  { id: 4, imageSrc: '', text: 'IMAGE 04' },
];

export function Hero({
  onJoinClick,
  onVoiceClick,
}: {
  onJoinClick?: () => void;
  onVoiceClick?: () => void;
}) {
  const { t, lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-b border-[#172A4A]/15 py-12 lg:py-16 bg-[#F7F3EC] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E30620]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2855A5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-12 md:items-center">
        {/* Left Column: Headlines & Editorial Copy */}
        <div className="flex flex-col gap-4 sm:gap-5 text-left md:col-span-7">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="rounded-full bg-[#172A4A] text-white px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-2xs">
              {lang === 'mr' ? 'राष्ट्रीय माध्यम महासंघ' : 'NATIONAL MEDIA FEDERATION'}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#E30620] bg-white border border-[#E30620]/30 px-2.5 py-0.5 sm:px-3 sm:py-0.5 rounded-full shadow-2xs">
              {lang === 'mr' ? 'राष्ट्रीय नोंदणीकृत व्यासपीठ' : 'Nationally Registered Body'}
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight text-[#172A4A] tracking-tight break-words">
              {lang === 'mr' ? (
                <>
                  <span className="text-[#E30620]">सत्यासाठी</span> लढणार, <span className="text-[#172A4A]">अन्यायाला</span> भिडणार!
                </>
              ) : (
                <>
                  <span className="text-[#E30620]">Fight for Truth</span>, <span className="text-[#172A4A]">Stand Against Injustice!</span>
                </>
              )}
            </h1>

            <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-bold text-[#2855A5] uppercase tracking-wider break-words">
              <span>{t('values')}</span>
            </div>

            <p className="mt-2 text-base sm:text-xl font-black text-[#172A4A] italic border-l-4 border-[#E30620] pl-3 py-0.5 leading-snug break-words">
              {lang === 'mr' ? '“जनतेच्या न्यायासाठी एक व्यासपीठ!”' : '“A National Platform for the People’s Justice!”'}
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#172A4A]/80 leading-relaxed">
            <p>
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारत हे देशभरातील पत्रकार आणि सामाजिक कार्यकर्त्यांच्या न्याय, हक्क, अधिकार आणि सन्मानासाठी कार्यरत असलेले राष्ट्रीय नोंदणीकृत व्यासपीठ आहे. गेल्या ११ वर्षांपासून पत्रकारिता, सामाजिक बांधिलकी आणि लोकशाही मूल्यांच्या संरक्षणासाठी सातत्याने कार्यरत असलेल्या महासंघाने पत्रकार कल्याण, जनहित आणि सामाजिक उत्तरदायित्वाच्या विविध उपक्रमांद्वारे देशभरात आपली स्वतंत्र व विश्वासार्ह ओळख निर्माण केली आहे.'
                : 'Lokshahi Patrakar Mahasangh Bharat is a nationally registered platform operating for the justice, rights, dignity and empowerment of journalists and social activists across India. Committed for over 11 years, the federation stands for democratic ethics, media welfare, and constitutional freedom.'}
            </p>
            <p>
              {lang === 'mr'
                ? 'आज महासंघ देशभरातील प्रिंट मीडिया, इलेक्ट्रॉनिक मीडिया, डिजिटल मीडिया, वृत्तसंस्था, नियतकालिके आणि स्वतंत्र पत्रकारांना एका सक्षम व्यासपीठावर एकत्र आणत पत्रकारांच्या हक्कांचे संरक्षण, व्यावसायिक सक्षमीकरण आणि जबाबदार पत्रकारितेचा प्रसार करण्यासाठी कटिबद्ध आहे.'
                : 'Today, the federation unites print media, electronic broadcast media, digital portals, news agencies, periodicals, and independent journalists onto a empowered platform, committed to protecting journalists’ rights, ensuring professional empowerment, and advancing responsible journalism.'}
            </p>
          </div>

          {/* Strength Badges: 2x2 grid on mobile, flex wrap on desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-1">
            {heroBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`flex items-center justify-center text-center rounded-lg border px-2.5 py-1.5 text-xs font-bold shadow-2xs ${badge.color}`}
              >
                {badge[lang]}
              </span>
            ))}
          </div>

          {/* Action buttons from PDF Page 18: JOIN US & RAISE YOUR VOICE */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 pt-2">
            <WFButton
              variant="solid"
              onClick={onJoinClick}
              className="w-full sm:w-auto px-3 sm:px-6 py-2.5 text-xs sm:text-sm font-bold shadow-md bg-[#E30620] hover:bg-[#c7051b] text-center"
            >
              {t('btn_join')}
            </WFButton>
            <WFButton
              variant="outline"
              onClick={onVoiceClick}
              className="w-full sm:w-auto px-3 sm:px-6 py-2.5 text-xs sm:text-sm font-bold border-2 border-[#172A4A] text-[#172A4A] hover:bg-[#172A4A] hover:text-white text-center"
            >
              {t('btn_voice')}
            </WFButton>
          </div>
        </div>

        {/* Right Column: 4-Image Horizontal Auto-Scroller with clean IMAGE text */}
        <div className="flex flex-col gap-4 md:col-span-5 items-center w-full max-w-full overflow-hidden">
          <div className="relative w-full max-w-md md:max-w-none rounded-2xl border-2 border-[#172A4A]/20 bg-white shadow-lg overflow-hidden flex flex-col group">
            {/* Tricolor top accent strip */}
            <div className="h-1.5 w-full flex">
              <div className="h-full flex-1 bg-[#E6530C]" />
              <div className="h-full flex-1 bg-white" />
              <div className="h-full flex-1 bg-[#287A18]" />
            </div>

            {/* Horizontal Auto-Scroller Track */}
            <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full bg-[#F7F3EC] overflow-hidden">
              <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((slide) => (
                  <div key={slide.id} className="relative h-full w-full shrink-0">
                    {slide.imageSrc ? (
                      /* Real Image (when user adds imageSrc) */
                      <div className="h-full w-full bg-white flex items-center justify-center p-6">
                        <img
                          src={slide.imageSrc}
                          alt={slide.text}
                          className="h-full w-full object-contain drop-shadow-md"
                        />
                      </div>
                    ) : (
                      /* Clean Wireframe Placeholder with only IMG text */
                      <div className="relative flex h-full w-full items-center justify-center p-6 text-center select-none bg-[#F7F3EC]">
                        {/* Blueprint diagonal wireframe lines */}
                        <svg
                          className="absolute inset-0 h-full w-full text-[#172A4A]/10 pointer-events-none"
                          preserveAspectRatio="none"
                          viewBox="0 0 100 100"
                        >
                          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.75" />
                          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.75" />
                        </svg>

                        {/* Clean centered IMG text */}
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <span className="rounded-full bg-white/95 px-6 py-2.5 text-sm sm:text-base font-black uppercase tracking-[0.25em] text-[#172A4A] shadow-xs border border-[#172A4A]/20 backdrop-blur-xs">
                            {slide.text}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Controls Bar: Active Label & 4 Dots */}
            <div className="border-t border-[#172A4A]/10 bg-white px-4 py-3 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#172A4A]">
                {heroSlides[currentSlide].text}
              </span>

              {/* 4 Interactive Dot Indicators */}
              <div className="flex items-center gap-1.5 shrink-0">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentSlide
                        ? 'w-6 bg-[#E30620]'
                        : 'w-2 bg-[#172A4A]/25 hover:bg-[#172A4A]/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
