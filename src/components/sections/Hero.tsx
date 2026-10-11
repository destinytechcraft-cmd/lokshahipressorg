import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
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
}

export function Hero({
  onJoinClick,
  onVoiceClick,
}: {
  onJoinClick?: () => void;
  onVoiceClick?: () => void;
}) {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 5 Background Slides for the event photos
  const backgroundSlides: BackgroundSlide[] = [
    {
      id: 1,
      imageSrc: '/hero-slide-1.jpg',
      titleMr: 'शासकीय व प्रशासकीय संवाद — महासंघ शिष्टमंडळ भेट',
      titleEn: 'Government Liaison & Administrative Delegation Meeting',
    },
    {
      id: 2,
      imageSrc: '/hero-slide-2.jpg',
      titleMr: 'लोकशाही पत्रकार संघ बैठक व पत्रकार प्रशिक्षण मेळावा',
      titleEn: 'Lokshahi Press Federation Meeting & Journalist Training Seminar',
    },
    {
      id: 3,
      imageSrc: '/hero-slide-3.jpg',
      titleMr: 'संघटनात्मक सत्कार व ज्येष्ठ सामाजिक मार्गदर्शन',
      titleEn: 'Federation Leadership Guidance & Felicitation',
    },
    {
      id: 4,
      imageSrc: '/hero-slide-4.jpg',
      titleMr: 'दैनिक लोकनेता द्वितीय वर्धापन दिन — वृत्तपत्र प्रकाशन',
      titleEn: 'Dainik Lokneta 2nd Anniversary Publication',
    },
    {
      id: 5,
      imageSrc: '/hero-slide-5.jpg',
      titleMr: 'दैनिक लोकनेता वृत्तपत्र प्रकाशन व वर्धापन दिन सोहळा',
      titleEn: 'Dainik Lokneta Newspaper Publication & Anniversary Ceremony',
    },
  ];

  // Auto-scroll timing:
  // Slide 1 (idx 0) -> 2000ms
  // Slide 2 (idx 1) -> 2000ms
  // Slide 3 (idx 2) -> 5000ms (5 seconds as requested)
  // Slide 4 (idx 3) -> 2000ms
  // Slide 5 (idx 4) -> 2000ms
  useEffect(() => {
    const duration = currentSlide === 2 ? 5000 : 2000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentSlide, backgroundSlides.length]);

  return (
    <section className="relative w-full flex items-center justify-start overflow-hidden border-b-4 border-[#E30620] min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px] bg-[#0B1E36]">
      {/* Background Image Slides with Smooth Crossfade */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        {backgroundSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.imageSrc}
                alt={slide.titleEn}
                onError={(e) => {
                  const fallback = `/hero-photo-${idx + 1}.jpg`;
                  if (e.currentTarget.src !== fallback) {
                    e.currentTarget.src = fallback;
                  }
                }}
                className="w-full h-full object-cover object-[center_30%] scale-105 transition-transform duration-[3000ms] ease-out"
              />
            </div>
          );
        })}

        {/* Balanced high-legibility dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col items-start text-left mr-auto">
        <div className="flex flex-col items-start text-left max-w-4xl lg:max-w-5xl">
          {/* Top Eyebrow Header */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-sm sm:text-base md:text-lg font-black uppercase tracking-wide text-white drop-shadow-md">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'LOKSHAHI PATRAKAR MAHASANGH BHARAT'}
            </span>
            <span className="hidden sm:inline text-white/50 text-base font-bold select-none">•</span>
            <span className="text-sm sm:text-base md:text-lg font-black uppercase tracking-wide text-[#E30620] drop-shadow-md">
              {lang === 'mr' ? 'राष्ट्रीय नोंदणीकृत व्यासपीठ' : 'Nationally Registered Body'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight sm:leading-tight text-white tracking-tight drop-shadow-2xl text-left">
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

          {/* Strength Badges */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-start gap-2 sm:gap-3 max-w-2xl">
            {heroBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`rounded-xl border px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-sm font-bold shadow-sm backdrop-blur-md transition-transform hover:scale-105 ${badge.color}`}
              >
                {badge[lang]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Slide Indicator Dots */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20 shadow-md">
        {backgroundSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            title={`Slide ${idx + 1} (${idx === 2 ? '5s' : '2s'})`}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              idx === currentSlide
                ? 'w-6 sm:w-7 bg-[#E30620]'
                : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Indian Tricolor Bottom Accent Band */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 flex z-20">
        <div className="h-full flex-1 bg-[#E6530C]" />
        <div className="h-full flex-1 bg-white" />
        <div className="h-full flex-1 bg-[#287A18]" />
      </div>
    </section>
  );
}

/**
 * Editorial Intro Section placed right after the Hero Section ends.
 * Contains verbatim text from PDF Page 18 followed by the action CTA buttons.
 */
export function HeroIntroSection({
  onJoinClick,
  onHelpDeskClick,
  onVoiceClick,
  onKnowMoreClick,
}: {
  onJoinClick?: () => void;
  onHelpDeskClick?: () => void;
  onVoiceClick?: () => void;
  onKnowMoreClick?: () => void;
}) {
  const { t, lang } = useLanguage();

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
            <p>
              {lang === 'mr' ? (
                <>
                  <span className="text-2xl sm:text-3xl font-black text-[#E30620] inline-block align-baseline leading-none mr-0.5">लोक</span>शाही पत्रकार महासंघ भारत हे देशभरातील पत्रकार आणि सामाजिक कार्यकर्त्यांच्या न्याय, हक्क, अधिकार आणि सन्मानासाठी कार्यरत असलेले राष्ट्रीय नोंदणीकृत व्यासपीठ आहे. गेल्या ११ वर्षांपासून पत्रकारिता, सामाजिक बांधिलकी आणि लोकशाही मूल्यांच्या संरक्षणासाठी सातत्याने कार्यरत असलेल्या महासंघाने पत्रकार कल्याण, जनहित आणि सामाजिक उत्तरदायित्वाच्या विविध उपक्रमांद्वारे देशभरात आपली स्वतंत्र व विश्वासार्ह ओळख निर्माण केली आहे.
                </>
              ) : (
                <>
                  <span className="text-2xl sm:text-3xl font-black text-[#E30620] inline-block align-baseline leading-none mr-0.5">Lok</span>shahi Patrakar Mahasangh Bharat is a nationally registered platform operating for the justice, rights, dignity and empowerment of journalists and social activists across India. Committed for over 11 years, the federation stands for democratic ethics, media welfare, and constitutional freedom.
                </>
              )}
            </p>
            <p>
              {lang === 'mr'
                ? 'आज महासंघ देशभरातील प्रिंट मीडिया, इलेक्ट्रॉनिक मीडिया, डिजिटल मीडिया, वृत्तसंस्था, नियतकालिके आणि स्वतंत्र पत्रकारांना एका सक्षम व्यासपीठावर एकत्र आणत पत्रकारांच्या हक्कांचे संरक्षण, व्यावसायिक सक्षमीकरण आणि जबाबदार पत्रकारितेचा प्रसार करण्यासाठी कटिबद्ध आहे.'
                : 'Today, the federation unites print media, electronic broadcast media, digital portals, news agencies, periodicals, and independent journalists onto an empowered platform, committed to protecting journalists’ rights, ensuring professional empowerment, and advancing responsible journalism.'}
            </p>

            {/* Action Buttons: JOIN US (Red) & JOURNALIST & PUBLIC HELPDESK (Green) */}
            <div className="pt-2 pb-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/membership"
                onClick={(e) => {
                  e.preventDefault();
                  if (onJoinClick) {
                    onJoinClick();
                  }
                }}
                className="w-full sm:w-auto min-h-[46px] px-8 py-3 inline-flex items-center justify-center rounded-full bg-[#E30620] hover:bg-[#c7051b] text-white text-sm sm:text-base font-black tracking-wide shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer select-none active:scale-[0.98] text-center"
              >
                {t('btn_join')}
              </a>
              <a
                href="/help-desk"
                onClick={(e) => {
                  e.preventDefault();
                  if (onHelpDeskClick) {
                    onHelpDeskClick();
                  } else if (onVoiceClick) {
                    onVoiceClick();
                  }
                }}
                className="w-full sm:w-auto min-h-[46px] px-7 sm:px-8 py-3 inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-black tracking-wide shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer select-none active:scale-[0.98] text-center"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 animate-pulse" />
                <span>Journalist & Public Helpdesk</span>
                {lang === 'mr' && (
                  <span className="text-[11px] font-bold text-emerald-100 hidden lg:inline">
                    (पत्रकार व जन मदत कक्ष)
                  </span>
                )}
              </a>
            </div>

            {/* लोकशाही परिवार — पत्रकारांचे एक राष्ट्रीय कुटुंब */}
            <div className="rounded-2xl border border-[#172A4A]/15 bg-white p-5 sm:p-6 shadow-xs text-left">
              <h4 className="flex items-center gap-2 text-base sm:text-lg font-black text-[#172A4A] mb-2.5">
                <span className="text-lg">🏛️</span>
                <span>
                  {lang === 'mr'
                    ? 'लोकशाही परिवार — पत्रकारांचे एक राष्ट्रीय कुटुंब'
                    : 'Lokshahi Pariwar — A National Family of Journalists'}
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-[#172A4A]/85 leading-relaxed font-medium">
                {lang === 'mr' ? (
                  <>
                    <span className="text-[#E30620] font-black">लोक</span>शाही पत्रकार महासंघ भारत ही केवळ पत्रकारांची संघटना नसून पत्रकार, समाजसेवक आणि लोकशाही मूल्यांवर विश्वास ठेवणाऱ्या नागरिकांचे एक संयुक्त राष्ट्रीय कुटुंब आहे. समाजहित, पत्रकारांचे संरक्षण आणि समाजसेवकांच्या कल्याणाचा विचार करून महासंघ विविध सामाजिक, शैक्षणिक आणि जनहिताचे उपक्रम सातत्याने राबवितो.
                  </>
                ) : (
                  <>
                    <span className="text-[#E30620] font-black">Lok</span>shahi Patrakar Mahasangh Bharat is not merely an association of journalists, but a united national family of journalists, social workers, and citizens who believe in democratic values. With a focus on public interest, journalist protection, and welfare of social workers, the federation consistently carries out various social, educational, and public welfare initiatives.
                  </>
                )}
              </p>
            </div>

            {/* निर्भय पत्रकारितेच्या रक्षणाचा ठाम निर्धार */}
            <div className="rounded-2xl border border-[#172A4A]/15 bg-white p-5 sm:p-6 shadow-xs text-left">
              <h4 className="text-base sm:text-lg font-black text-[#172A4A] mb-2.5">
                {lang === 'mr'
                  ? 'निर्भय पत्रकारितेच्या रक्षणाचा ठाम निर्धार :'
                  : 'Firm Commitment to Protecting Fearless Journalism :'}
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-[#172A4A]/85 leading-relaxed font-medium">
                {lang === 'mr'
                  ? '“जेव्हा एखादा पत्रकार धाडसी शोधपत्रकारिता करून सत्य जनतेसमोर आणतो, तेव्हा अनेकदा त्याच्यावर दबाव, धमक्या, खोटे गुन्हे किंवा अन्याय होण्याची शक्यता निर्माण होते. अशा प्रत्येक प्रसंगी लोकशाही पत्रकार महासंघ भारत संबंधित पत्रकाराच्या न्याय, संरक्षण आणि सन्मानासाठी ठामपणे त्यांच्या पाठीशी उभा राहतो. आमचा ठाम विश्वास आहे की निर्भय पत्रकारितेचे संरक्षण म्हणजेच लोकशाहीचे संरक्षण.”'
                  : '“When a journalist undertakes daring investigative journalism to bring truth before the public, they often face pressure, threats, false cases, or injustice. On every such occasion, Lokshahi Patrakar Mahasangh Bharat stands firmly behind them for their justice, protection, and dignity. We firmly believe that defending fearless journalism is defending democracy itself.”'}
              </p>
            </div>

            {/* Know More Button */}
            <div className="pt-2 flex justify-start">
              <button
                type="button"
                onClick={onKnowMoreClick}
                className="inline-flex items-center gap-2 rounded-xl bg-[#172A4A] hover:bg-[#E30620] text-white px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{lang === 'mr' ? 'अधिक जाणून घ्या' : 'Know More'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
