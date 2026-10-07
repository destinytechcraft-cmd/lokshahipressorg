import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WFButton } from '../ui/WireframePrimitives';
import { GOOGLE_FORM_LINKS } from '../../config/forms';

const heroBadges = [
  { mr: '११+ वर्षे वाटचाल', en: '11+ Years Journey', color: 'border-[#E6530C]/40 text-[#E6530C] bg-[#E6530C]/10' },
  { mr: '७,६००+ सदस्य', en: '7,600+ Members', color: 'border-white/30 text-white bg-white/10' },
  { mr: '७८ समित्या', en: '78 Committees', color: 'border-[#2855A5]/60 text-[#93C5FD] bg-[#2855A5]/20' },
  { mr: 'भारतभर कार्यक्षेत्र', en: 'Pan-India Reach', color: 'border-[#287A18]/50 text-[#86EFAC] bg-[#287A18]/20' },
];

export interface BackgroundSlide {
  id: number;
  imageSrc: string;
  titleMr: string;
  titleEn: string;
  themeGradient: string;
}

export function Hero({
  onJoinClick,
  onVoiceClick,
}: {
  onJoinClick?: () => void;
  onVoiceClick?: () => void;
}) {
  const { t, lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 4 Background Slides with the 4 user-provided photos
  const backgroundSlides: BackgroundSlide[] = [
    {
      id: 1,
      imageSrc: '/hero-1.jpg',
      titleMr: 'राष्ट्रीय नेतृत्व व मार्गदर्शन',
      titleEn: 'National Leadership & Guidance',
      themeGradient: 'from-[#0B1528] via-[#172A4A] to-[#1E3A5F]',
    },
    {
      id: 2,
      imageSrc: '/hero-2.jpg',
      titleMr: 'लोकशाही, विचार व संवाद',
      titleEn: 'Democratic Dialogue & Vision',
      themeGradient: 'from-[#17172A] via-[#1B2A4A] to-[#0A192F]',
    },
    {
      id: 3,
      imageSrc: '/hero-3.jpg',
      titleMr: 'पत्रकार कल्याण व जनहित धोरण',
      titleEn: 'Press Welfare & Public Interest Policies',
      themeGradient: 'from-[#1A1829] via-[#172A4A] to-[#12233C]',
    },
    {
      id: 4,
      imageSrc: '/hero-4.jpg',
      titleMr: 'प्रशासकीय कार्य व संघटनात्मक वाटचाल',
      titleEn: 'Administrative Governance & Progress',
      themeGradient: 'from-[#0B1A30] via-[#172A4A] to-[#1B355A]',
    },
  ];

  // Auto-scroll slides every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [backgroundSlides.length]);

  return (
    <section className="relative min-h-[calc(100vh-65px)] lg:min-h-screen w-full flex items-center justify-start overflow-hidden border-b-4 border-[#E30620]">
      {/* 4 Auto-scrolling background image layers with smooth crossfade */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        {backgroundSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.imageSrc}
                alt={slide.titleEn}
                className="w-full h-full object-cover object-top sm:object-center scale-105 transition-transform duration-[4000ms] ease-out"
              />
            </div>
          );
        })}

        {/* Cinematic dark overlay balancing photo visibility with crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C32]/75 via-[#172A4A]/70 to-[#0B1528]/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0F1C32]/40 to-[#060D1A]/75" />
        {/* Left-weighted gradient providing deep contrast behind left-aligned content */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071120]/85 via-[#0A1628]/50 to-transparent" />
      </div>

      {/* Hero Foreground Content - Left Side Aligned Layout as requested */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-start text-left mr-auto">
        <div className="flex flex-col items-start text-left max-w-3xl">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 mb-5 sm:mb-6">
            <span className="rounded-full bg-white text-[#172A4A] px-3.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'LOKSHAHI PATRAKAR MAHASANGH BHARAT'}
            </span>
            <span className="rounded-full bg-[#E30620] text-white px-3.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md border border-white/20">
              {lang === 'mr' ? 'राष्ट्रीय नोंदणीकृत व्यासपीठ' : 'Nationally Registered Body'}
            </span>
          </div>

          {/* Main Headline - Preserved Verbatim */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-snug sm:leading-tight text-white tracking-tight drop-shadow-md text-left">
            {lang === 'mr' ? (
              <>
                <span className="text-[#E30620]">सत्यासाठी</span> लढणार, <span className="text-white">अन्यायाला</span> भिडणार!
              </>
            ) : (
              <>
                <span className="text-[#E30620]">Fight for Truth</span>, <span className="text-white">Stand Against Injustice!</span>
              </>
            )}
          </h1>

          {/* Values Strip */}
          <div className="mt-3 flex flex-wrap items-center justify-start gap-x-2 gap-y-1 text-xs sm:text-sm font-black text-[#E6530C] uppercase tracking-[0.2em] text-left">
            <span>{t('values')}</span>
          </div>

          {/* Strength Badges - 4 Badges */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-start gap-2 sm:gap-3 max-w-2xl">
            {heroBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`rounded-xl border px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-sm font-bold shadow-sm backdrop-blur-md transition-transform hover:scale-105 ${badge.color}`}
              >
                {badge[lang]}
              </span>
            ))}
          </div>

          {/* Action Buttons: JOIN US & RAISE YOUR VOICE - Direct Google Form CTA Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            <WFButton
              variant="solid"
              href={GOOGLE_FORM_LINKS.joinMembership}
              target="_blank"
              onClick={onJoinClick}
              className="w-full sm:w-auto min-h-[44px] px-7 py-3 text-sm sm:text-base font-black shadow-lg bg-[#E30620] hover:bg-[#c7051b] text-white tracking-wide"
            >
              {t('btn_join')}
            </WFButton>
            <WFButton
              variant="outline"
              href={GOOGLE_FORM_LINKS.raiseVoice}
              target="_blank"
              onClick={onVoiceClick}
              className="w-full sm:w-auto min-h-[44px] px-7 py-3 text-sm sm:text-base font-black border-2 border-white text-white hover:bg-white hover:text-[#172A4A] tracking-wide backdrop-blur-sm"
            >
              {t('btn_voice')}
            </WFButton>
          </div>

          {/* Background Auto-scroller Navigator Controls (3-4 images) */}
          <div className="mt-8 sm:mt-10 max-w-[calc(100vw-32px)] flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2.5 sm:gap-3 bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 sm:py-2 rounded-2xl sm:rounded-full shadow-lg">
            <div className="flex items-center gap-2 max-w-full overflow-hidden">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/70 shrink-0">
                {lang === 'mr' ? 'पार्श्वभूमी दृश्य' : 'BG Slide'} {currentSlide + 1} / {backgroundSlides.length}:
              </span>
              <span className="text-xs font-bold text-white truncate max-w-[220px] sm:max-w-xs">
                {lang === 'mr' ? backgroundSlides[currentSlide].titleMr : backgroundSlides[currentSlide].titleEn}
              </span>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5 shrink-0">
              {backgroundSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Switch to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? 'w-7 bg-[#E30620] shadow-sm'
                      : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tricolor bottom indicator band */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex z-20">
        <div className="h-full flex-1 bg-[#E6530C]" />
        <div className="h-full flex-1 bg-white" />
        <div className="h-full flex-1 bg-[#287A18]" />
      </div>
    </section>
  );
}

/**
 * Editorial Intro Section placed right after the Hero Section ends.
 * Contains verbatim text from PDF Page 18.
 */
export function HeroIntroSection() {
  const { lang } = useLanguage();

  return (
    <section className="bg-white border-b border-[#172A4A]/15 py-10 sm:py-14 text-left">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border-2 border-[#172A4A]/10 bg-[#F7F3EC]/60 p-6 sm:p-9 shadow-xs">
          <div className="border-l-4 border-[#E30620] pl-4 sm:pl-5 mb-5">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620] block mb-1">
              {lang === 'mr' ? 'राष्ट्रीय नोंदणीकृत व्यासपीठ' : 'NATIONALLY REGISTERED PLATFORM'}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'Lokshahi Patrakar Mahasangh Bharat'}
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#172A4A]/90 leading-relaxed font-medium">
            <p className="first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-black first-letter:text-[#E30620] first-letter:float-left first-letter:mr-2.5 first-letter:leading-none">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारत हे देशभरातील पत्रकार आणि सामाजिक कार्यकर्त्यांच्या न्याय, हक्क, अधिकार आणि सन्मानासाठी कार्यरत असलेले राष्ट्रीय नोंदणीकृत व्यासपीठ आहे. गेल्या ११ वर्षांपासून पत्रकारिता, सामाजिक बांधिलकी आणि लोकशाही मूल्यांच्या संरक्षणासाठी सातत्याने कार्यरत असलेल्या महासंघाने पत्रकार कल्याण, जनहित आणि सामाजिक उत्तरदायित्वाच्या विविध उपक्रमांद्वारे देशभरात आपली स्वतंत्र व विश्वासार्ह ओळख निर्माण केली आहे.'
                : 'Lokshahi Patrakar Mahasangh Bharat is a nationally registered platform operating for the justice, rights, dignity and empowerment of journalists and social activists across India. Committed for over 11 years, the federation stands for democratic ethics, media welfare, and constitutional freedom.'}
            </p>
            <p>
              {lang === 'mr'
                ? 'आज महासंघ देशभरातील प्रिंट मीडिया, इलेक्ट्रॉनिक मीडिया, डिजिटल मीडिया, वृत्तसंस्था, नियतकालिके आणि स्वतंत्र पत्रकारांना एका सक्षम व्यासपीठावर एकत्र आणत पत्रकारांच्या हक्कांचे संरक्षण, व्यावसायिक सक्षमीकरण आणि जबाबदार पत्रकारितेचा प्रसार करण्यासाठी कटिबद्ध आहे.'
                : 'Today, the federation unites print media, electronic broadcast media, digital portals, news agencies, periodicals, and independent journalists onto an empowered platform, committed to protecting journalists’ rights, ensuring professional empowerment, and advancing responsible journalism.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
