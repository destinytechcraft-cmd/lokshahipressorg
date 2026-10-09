import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';
import { Logo } from '../Logo';

export function AboutSection({ isHome = false }: { isHome?: boolean }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="about" index="2" title={t('sec_about')}>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start text-left">
        {/* Left Column: Authoritative Editorial Story */}
        <div className="space-y-6 lg:col-span-7 text-[#172A4A]">
          <div className="border-l-4 border-[#E30620] pl-4 py-1">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30620] block mb-1">
              {lang === 'mr' ? 'राष्ट्रीय ओळख व वाटचाल' : 'NATIONAL CREDENCE & HERITAGE'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr'
                ? 'देशातील माध्यम क्षेत्रातील अग्रगण्य, पक्षनिरपेक्ष व राष्ट्रीय नोंदणीकृत महासंघ'
                : 'India’s Premier Non-Partisan, Non-Profit Registered Press Federation'}
            </h3>
          </div>

          <div className="text-xs sm:text-sm leading-relaxed space-y-4 text-[#172A4A]/85">
            <p>
              {lang === 'mr' ? (
                <>
                  <span className="text-2xl sm:text-3xl font-black text-[#E30620] inline-block align-baseline leading-none mr-0.5">लोक</span>शाही पत्रकार महासंघ भारत ही देशातील माध्यम क्षेत्रातील एक अग्रगण्य, पक्षनिरपेक्ष, ना-नफा तत्त्वावर कार्य करणारी पत्रकारांची राष्ट्रीय नोंदणीकृत संघटना आहे. गेल्या ११ वर्षांपासून पत्रकारिता, सामाजिक बांधिलकी आणि लोकशाही मूल्यांच्या संरक्षणासाठी सातत्याने कार्यरत असलेल्या महासंघाने पत्रकार कल्याण, जनहित आणि सामाजिक उत्तरदायित्वाच्या विविध उपक्रमांद्वारे देशभरात आपली स्वतंत्र व विश्वासार्ह ओळख निर्माण केली आहे.
                </>
              ) : (
                <>
                  <span className="text-2xl sm:text-3xl font-black text-[#E30620] inline-block align-baseline leading-none mr-0.5">Lok</span>shahi Patrakar Mahasangh Bharat is an apex, non-partisan, non-profit, nationally registered organisation of media professionals. Operating continuously for over 11 years, the federation has created an authentic national footprint through proactive journalist welfare, constitutional advocacy, and social accountability.
                </>
              )}
            </p>

            <p>
              {lang === 'mr'
                ? 'आज महासंघ देशभरातील प्रिंट मीडिया, इलेक्ट्रॉनिक मीडिया, डिजिटल मीडिया, वृत्तसंस्था, नियतकालिके आणि स्वतंत्र पत्रकारांना एका सक्षम व्यासपीठावर एकत्र आणत पत्रकारांच्या हक्कांचे संरक्षण, व्यावसायिक सक्षमीकरण आणि जबाबदार पत्रकारितेचा प्रसार करण्यासाठी कटिबद्ध आहे.'
                : 'Today, the federation unites print media, electronic broadcast media, digital media, news agencies, periodicals, and independent journalists onto an empowered platform, committed to protecting journalists’ rights, ensuring professional empowerment, and promoting responsible journalism.'}
            </p>
          </div>

          {/* Lokshahi Family Card & Defense Quote - Shown on About page, hidden on Homepage */}
          {!isHome && (
            <>
              {/* Lokshahi Family Card */}
              <div className="rounded-2xl border border-[#172A4A]/15 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-[#287A18]">
                  <span className="text-base font-bold">🏛️</span>
                  <h4 className="text-sm font-black text-[#172A4A] uppercase tracking-wide">
                    {lang === 'mr' ? 'लोकशाही परिवार — पत्रकारांचे एक राष्ट्रीय कुटुंब' : 'Lokshahi Family — A National Journalist Community'}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-[#172A4A]/80">
                  {lang === 'mr' ? (
                    <>
                      <span className="text-[#E30620] font-bold">लोक</span>शाही पत्रकार महासंघ भारत ही केवळ पत्रकारांची संघटना नसून पत्रकार, समाजसेवक आणि लोकशाही मूल्यांवर विश्वास ठेवणाऱ्या नागरिकांचे एक संयुक्त राष्ट्रीय कुटुंब आहे. समाजहित, पत्रकारांचे संरक्षण आणि समाजसेवकांच्या कल्याणाचा विचार करून महासंघ विविध सामाजिक, शैक्षणिक आणि जनहिताचे उपक्रम सातत्याने राबवितो.
                    </>
                  ) : (
                    <>
                      <span className="text-[#E30620] font-bold">Lok</span>shahi Patrakar Mahasangh Bharat is not merely an occupational union, but a unified national family of truth-seeking journalists, social reformers, and citizens dedicated to constitutional democracy.
                    </>
                  )}
                </p>
              </div>

              {/* Fearless Journalism Defense Quote */}
              <div className="rounded-2xl border-2 border-[#E30620]/30 bg-white p-6 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E30620]" />
                <span className="font-black text-[#E30620] text-xs uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <span>🛡️</span>
                  <span>{lang === 'mr' ? 'निर्भय पत्रकारितेच्या रक्षणाचा ठाम निर्धार :' : 'Uncompromising Defense of Fearless Journalism :'}</span>
                </span>
                <p className="text-xs sm:text-sm text-[#172A4A]/90 leading-relaxed font-medium">
                  {lang === 'mr'
                    ? '“जेव्हा एखादा पत्रकार धाडसी शोधपत्रकारिता करून सत्य जनतेसमोर आणतो, तेव्हा अनेकदा त्याच्यावर दबाव, धमक्या, खोटे गुन्हे किंवा अन्याय होण्याची शक्यता निर्माण होते. अशा प्रत्येक प्रसंगी लोकशाही पत्रकार महासंघ भारत संबंधित पत्रकाराच्या न्याय, संरक्षण आणि सन्मानासाठी ठामपणे त्यांच्या पाठीशी उभा राहतो. आमचा ठाम विश्वास आहे की निर्भय पत्रकारितेचे संरक्षण म्हणजेच लोकशाहीचे संरक्षण.”'
                    : '“When any journalist uncovers systemic corruption through fearless investigative reporting, they often face intimidation, false FIRs, and harassment. In every such crisis, Lokshahi Patrakar Mahasangh Bharat stands firmly behind them for justice, security, and honor. Protecting fearless journalism is protecting democracy.”'}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Right Column: Institutional Showcase & Accreditation Plaque */}
        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-7 shadow-sm text-center flex flex-col items-center">
            <Logo size={84} className="h-20 w-20 sm:h-22 sm:w-22 mb-3.5 drop-shadow-md" />

            <div className="inline-block rounded-md bg-[#F7F3EC] px-3 py-1 text-[11px] font-black text-[#172A4A] border border-[#172A4A]/15 mb-2">
              {lang === 'mr' ? 'शासकीय नोंदणीकृत माध्यम संस्था' : 'GOVT. REGISTERED MEDIA BODY'}
            </div>

            <h4 className="text-base font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'LOKSHAHI PATRAKAR MAHASANGH BHARAT'}
            </h4>
            <p className="text-xs font-bold text-[#E30620] mt-0.5">
              {t('tagline')}
            </p>

            <div className="w-full my-4 border-t border-dashed border-[#172A4A]/15" />

            {/* Credential Grid */}
            <div className="w-full grid grid-cols-2 gap-2.5 text-left text-xs">
              <div className="p-2.5 rounded-lg bg-[#F7F3EC] border border-[#172A4A]/10">
                <span className="text-[10px] font-bold text-[#172A4A]/50 uppercase block">
                  {lang === 'mr' ? 'वाटचाल' : 'Years Active'}
                </span>
                <span className="text-sm font-black text-[#172A4A]">
                  {lang === 'mr' ? '११+ वर्षे' : '11+ Years'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F7F3EC] border border-[#172A4A]/10">
                <span className="text-[10px] font-bold text-[#172A4A]/50 uppercase block">
                  {lang === 'mr' ? 'एकूण सदस्य' : 'Total Members'}
                </span>
                <span className="text-sm font-black text-[#E30620]">
                  {lang === 'mr' ? '७,६००+ सदस्य' : '7,600+ Members'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F7F3EC] border border-[#172A4A]/10">
                <span className="text-[10px] font-bold text-[#172A4A]/50 uppercase block">
                  {lang === 'mr' ? 'समित्या' : 'Committees'}
                </span>
                <span className="text-sm font-black text-[#2855A5]">
                  {lang === 'mr' ? '७८ समित्या' : '78 Committees'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F7F3EC] border border-[#172A4A]/10">
                <span className="text-[10px] font-bold text-[#172A4A]/50 uppercase block">
                  {lang === 'mr' ? 'कार्यक्षेत्र' : 'Reach'}
                </span>
                <span className="text-sm font-black text-[#287A18]">
                  {lang === 'mr' ? 'भारतभर कार्यक्षेत्र' : 'Pan-India Reach'}
                </span>
              </div>
            </div>

            <div className="w-full mt-4 p-3 rounded-xl bg-[#172A4A] text-white text-xs text-left">
              <p className="text-[11px] text-[#F7F3EC]/90 leading-relaxed">
                {lang === 'mr'
                  ? 'महासंघ विविध माध्यमांतून पत्रकारांच्या सक्षमीकरणासाठी आणि समाजजागृतीसाठी सातत्याने कार्यरत आहे: पत्रकार प्रशिक्षण शिबिरे, कार्यशाळा, राज्य व राष्ट्रीय अधिवेशने आणि प्रेस परिषदा.'
                  : 'Active across training workshops, state and national conventions, press conferences, and media empowerment.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
