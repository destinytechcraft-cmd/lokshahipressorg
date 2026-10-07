import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WFButton } from '../ui/WireframePrimitives';
import { Logo } from '../Logo';
import { GOOGLE_FORM_LINKS } from '../../config/forms';

export function JoinMembershipModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const categories = [
    { mr: 'पत्रकार सदस्यत्व (Journalist)', en: 'Journalist Membership' },
    { mr: 'डिजिटल पत्रकार (Digital Media)', en: 'Digital Journalist Membership' },
    { mr: 'समाजसेवक सदस्यत्व (Social Worker)', en: 'Social Worker Membership' },
    { mr: 'सहयोगी सदस्यत्व (Associate)', en: 'Associate Membership' },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#172A4A]/60 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl border-2 border-[#172A4A]/30 bg-white p-5 sm:p-7 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#172A4A]/10 pb-4">
          <div className="flex items-center gap-3">
            <Logo size={42} className="h-10 w-10 shrink-0 drop-shadow-xs" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#E30620]">
                {lang === 'mr' ? 'अधिकृत सदस्य नोंदणी' : 'Official Membership Application'}
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#172A4A]">
                {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'Lokshahi Patrakar Mahasangh Bharat'}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#172A4A]/20 text-[#172A4A] hover:bg-[#F7F3EC] cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <p className="text-xs sm:text-sm text-[#172A4A]/85 leading-relaxed font-medium">
            {lang === 'mr'
              ? 'महासंघाचे अधिकृत सदस्यत्व घेण्यासाठी खालील बटणावर क्लिक करून फॉर्मद्वारे आपली नोंदणी पूर्ण करा:'
              : 'To obtain official membership with the federation, click the button below to complete registration via the form:'}
          </p>

          <div>
            <span className="block text-xs font-bold text-[#172A4A] mb-2">
              {lang === 'mr' ? 'सदस्यत्व श्रेणी :' : 'Available Categories :'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#172A4A]/15 bg-[#F7F3EC]/70 p-2.5 text-xs font-bold text-[#172A4A]"
                >
                  {cat[lang]}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#287A18]/30 bg-[#287A18]/5 p-3 text-xs text-[#287A18] font-bold">
            ✓ {lang === 'mr' ? 'नोंदणीनंतर ओळखपत्र व प्रमाणपत्र जारी केले जाईल.' : 'Official ID card and membership certificate will be issued after verification.'}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3 border-t border-[#172A4A]/10">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#172A4A]/20 px-4 py-2.5 text-xs font-bold text-[#172A4A] hover:bg-[#F7F3EC] cursor-pointer text-center"
            >
              {lang === 'mr' ? 'बंद करा' : 'Close'}
            </button>
            <WFButton
              variant="solid"
              href={GOOGLE_FORM_LINKS.joinMembership}
              target="_blank"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#E30620] hover:bg-[#c7051b] text-white font-black text-xs sm:text-sm shadow-md uppercase tracking-wider text-center"
            >
              {lang === 'mr' ? 'सदस्य नोंदणी अर्ज उघडा ↗' : 'OPEN MEMBERSHIP FORM ↗'}
            </WFButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickIssueModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#172A4A]/60 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-2xl border-2 border-[#172A4A]/30 bg-white p-5 sm:p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#172A4A]/10 pb-3">
          <div className="flex items-center gap-2.5">
            <Logo size={36} className="h-9 w-9 shrink-0 drop-shadow-xs" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#E30620]">
                {lang === 'mr' ? 'तातडीचा प्रश्न / तक्रार' : 'Quick Grievance Desk'}
              </span>
              <h3 className="text-sm font-black text-[#172A4A]">
                {lang === 'mr' ? 'पत्रकार मदत कक्ष' : 'Journalist Help Desk'}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#172A4A]/20 text-[#172A4A] hover:bg-[#F7F3EC] cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <p className="text-xs sm:text-sm text-[#172A4A]/85 leading-relaxed font-medium">
            {lang === 'mr'
              ? 'पत्रकारांवरील अन्याय, कायदेशीर अडचणी किंवा समस्या निवारणासाठी अधिकृत तक्रार अर्ज फॉर्मद्वारे नोंदवा:'
              : 'For injustice against journalists, legal issues, or redressal, submit your grievance directly via the official form:'}
          </p>

          <div className="rounded-xl border border-[#172A4A]/15 bg-[#F7F3EC]/70 p-3.5 space-y-2 text-xs text-[#172A4A] font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-[#287A18]">✓</span>
              <span>{lang === 'mr' ? 'गोपनीय व सुरक्षित तक्रार नोंदणी' : 'Confidential & Secure Grievance Filing'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#287A18]">✓</span>
              <span>{lang === 'mr' ? 'थेट राष्ट्रीय व राज्य समितीकडे पोहोच' : 'Direct Reach to Executive Leadership'}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 pt-2 border-t border-[#172A4A]/10">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#172A4A]/20 px-4 py-2 text-xs font-bold text-[#172A4A] hover:bg-[#F7F3EC] cursor-pointer text-center"
            >
              {lang === 'mr' ? 'बंद करा' : 'Close'}
            </button>
            <WFButton
              variant="solid"
              href={GOOGLE_FORM_LINKS.raiseVoice}
              target="_blank"
              onClick={onClose}
              className="px-5 py-2 text-xs font-black bg-[#E30620] hover:bg-[#c7051b] text-white shadow-md uppercase tracking-wider text-center"
            >
              {lang === 'mr' ? 'तक्रार अर्ज उघडा ↗' : 'OPEN GRIEVANCE FORM ↗'}
            </WFButton>
          </div>
        </div>
      </div>
    </div>
  );
}
