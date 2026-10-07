import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton } from '../ui/WireframePrimitives';
import { GOOGLE_FORM_LINKS } from '../../config/forms';

export function HelpDeskSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="helpdesk" index="14" title={t('sec_helpdesk')}>
      <div className="space-y-6 text-left">
        {/* Banner from PDF Page 14 */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-8 shadow-xs">
          <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight mb-2">
            {lang === 'mr' ? 'पत्रकार मदत कक्ष' : 'Journalist Help Desk'}
          </h3>
          <p className="text-xs sm:text-sm text-[#172A4A]/80 leading-relaxed">
            {lang === 'mr'
              ? 'पत्रकारिता करताना कोणत्याही अडचणीचा सामना करावा लागत असल्यास आपली समस्या महासंघापर्यंत पोहोचवा.'
              : 'If you are facing any difficulty while practicing journalism, convey your problem to the federation.'}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Main CTA Section replacing inline form as requested */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border-2 border-[#172A4A]/15 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-[#172A4A]/10 pb-4">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#E30620] block mb-1">
                  {lang === 'mr' ? 'अधिकृत नोंदणी कक्ष' : 'OFFICIAL GRIEVANCE DESK'}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-[#172A4A]">
                  {lang === 'mr' ? 'समस्या नोंदणी अर्ज (Google Form)' : 'Register Your Problem (Google Form)'}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#172A4A]/85 leading-relaxed font-medium">
                {lang === 'mr'
                  ? 'पत्रकार संरक्षण, अन्याय निवारण आणि कायदेशीर मदतीसाठी अधिकृत तक्रार अर्ज Google Form द्वारे उपलब्ध आहे. खालील बटणावर क्लिक करून थेट तक्रार नोंदवा:'
                  : 'For journalist protection, legal assistance, and grievance redressal, the official application is accessible via Google Form. Click below to submit directly:'}
              </p>

              {/* Form Checklist Points */}
              <div className="grid gap-3 sm:grid-cols-2 bg-[#F7F3EC]/70 rounded-xl p-4 sm:p-5 border border-[#172A4A]/10 text-xs text-[#172A4A] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="text-[#287A18] font-bold text-base">✓</span>
                  <span>{lang === 'mr' ? 'नाव, मोबाईल व ई-मेल संपर्क' : 'Name, Mobile & Email Info'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#287A18] font-bold text-base">✓</span>
                  <span>{lang === 'mr' ? 'जिल्हा व मीडिया संस्था तपशील' : 'District & Media Organisation'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#287A18] font-bold text-base">✓</span>
                  <span>{lang === 'mr' ? 'समस्येचा प्रकार व संक्षिप्त सारांश' : 'Issue Category & Summary'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#287A18] font-bold text-base">✓</span>
                  <span>{lang === 'mr' ? 'पुरावे व कागदपत्रे जोडण्याची सुविधा' : 'Attach Documents & Evidence'}</span>
                </div>
              </div>

              {/* Prominent CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <WFButton
                  variant="solid"
                  href={GOOGLE_FORM_LINKS.raiseVoice}
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-black shadow-lg bg-[#E30620] hover:bg-[#c7051b] text-white tracking-wide uppercase"
                >
                  {lang === 'mr' ? 'समस्या नोंदणी अर्ज उघडा (Google Form) ↗' : 'OPEN GRIEVANCE FORM (Google Form) ↗'}
                </WFButton>
                <span className="text-[11px] font-bold text-[#172A4A]/60">
                  {lang === 'mr' ? '• नवीन विंडोमध्ये उघडेल' : '• Opens in a new window'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Disclaimer from PDF Page 15 */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 shadow-xs">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#E30620] mb-3">
                {lang === 'mr' ? 'महत्त्वाचे Disclaimer' : 'Important Disclaimer'}
              </h4>

              <div className="text-xs text-[#172A4A]/80 leading-relaxed space-y-3">
                <p>
                  {lang === 'mr'
                    ? 'मदत कक्षामार्फत प्राप्त प्रकरणांचा विचार संघटनेच्या नियमांनुसार व उपलब्ध माहितीनुसार केला जाईल.'
                    : 'The cases received through the help desk will be considered in accordance with the organisation’s rules and available information.'}
                </p>
                <p className="font-semibold text-[#172A4A] border-t border-neutral-100 pt-2">
                  {lang === 'mr'
                    ? 'कायदेशीर प्रकरणांमध्ये आवश्यकतेनुसार संबंधित कायदेशीर तज्ज्ञांचा सल्ला घेणे आवश्यक राहील.'
                    : 'In legal matters, it will be necessary to obtain the advice of relevant legal experts as needed.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
