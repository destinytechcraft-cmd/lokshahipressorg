import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WFButton, WFInput } from '../ui/WireframePrimitives';
import { Logo } from '../Logo';

export function JoinMembershipModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState(
    lang === 'mr' ? 'पत्रकार सदस्यत्व' : 'Journalist Membership'
  );
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    publication: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const categories = [
    { mr: 'पत्रकार सदस्यत्व', en: 'Journalist Membership' },
    { mr: 'डिजिटल पत्रकार', en: 'Digital Journalist' },
    { mr: 'सामाजिक कार्यकर्ता', en: 'Social Worker' },
    { mr: 'सहयोगी सदस्यत्व', en: 'Associate Membership' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172A4A]/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border-2 border-[#172A4A]/30 bg-white p-6 sm:p-7 shadow-2xl">
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

        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#287A18]/10 text-[#287A18] border-2 border-[#287A18] font-black text-2xl">
              ✓
            </div>
            <h4 className="text-lg font-black text-[#172A4A]">
              {lang === 'mr' ? 'नोंदणी अर्ज यशस्वीरित्या प्राप्त झाला!' : 'Registration submitted successfully!'}
            </h4>
            <p className="mt-2 text-xs text-[#172A4A]/70 max-w-sm mx-auto leading-relaxed">
              {lang === 'mr'
                ? 'महासंघाच्या कार्यकारिणीकडून छाननीनंतर ओळखपत्र व प्रमाणपत्र जारी केले जाईल.'
                : 'ID card and certificate will be issued after verification by the national executive committee.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#172A4A] mb-1.5 text-left">
                {lang === 'mr' ? 'सदस्यत्व प्रकार निवडा :' : 'Select Membership Category :'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.en}
                    type="button"
                    onClick={() => setRole(cat[lang])}
                    className={`rounded-lg border-2 p-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                      role === cat[lang]
                        ? 'border-[#172A4A] bg-[#172A4A] text-white shadow-2xs'
                        : 'border-[#172A4A]/15 bg-[#F7F3EC] text-[#172A4A] hover:border-[#172A4A]/40'
                    }`}
                  >
                    {cat[lang]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <WFInput
                label={lang === 'mr' ? 'पूर्ण नाव' : 'Full Name'}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              <WFInput
                label={lang === 'mr' ? 'मोबाईल नंबर' : 'Mobile Number'}
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
              <WFInput
                label={lang === 'mr' ? 'ई-मेल' : 'Email Address'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <WFInput
                label={lang === 'mr' ? 'वृत्तपत्र / चॅनेल / पोर्टल' : 'Media Outlet'}
                value={formData.publication}
                onChange={(e) => setFormData({ ...formData, publication: e.target.value })}
              />
              <WFInput
                label={lang === 'mr' ? 'राज्य' : 'State'}
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              />
              <WFInput
                label={lang === 'mr' ? 'जिल्हा' : 'District'}
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              />
            </div>

            <div className="flex justify-end gap-2.5 border-t border-[#172A4A]/10 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-[#172A4A]/20 px-4 py-2 text-xs font-bold text-[#172A4A] hover:bg-[#F7F3EC] cursor-pointer"
              >
                {lang === 'mr' ? 'रद्द करा' : 'Cancel'}
              </button>
              <WFButton variant="solid" type="submit" className="bg-[#E30620] hover:bg-[#c7051b]">
                {lang === 'mr' ? 'अर्ज सादर करा' : 'Submit Application'}
              </WFButton>
            </div>
          </form>
        )}
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
  const [submitted, setSubmitted] = useState(false);
  const [issue, setIssue] = useState('');
  const [contact, setContact] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172A4A]/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl border-2 border-[#172A4A]/30 bg-white p-6 shadow-2xl">
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

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#287A18]/10 text-[#287A18] border-2 border-[#287A18] font-bold text-xl">
              ✓
            </div>
            <h4 className="text-base font-bold text-[#172A4A]">
              {lang === 'mr' ? 'आपला प्रश्न नोंदवला गेला आहे!' : 'Your issue has been recorded!'}
            </h4>
            <p className="mt-1 text-xs text-[#172A4A]/70">
              {lang === 'mr' ? 'महासंघाची लीगल व हेल्पडेस्क टीम मदत करेल.' : 'Our legal & helpdesk cell will assist you.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <WFInput
              label={lang === 'mr' ? 'आपला संपर्क नंबर किंवा ई-मेल' : 'Your Contact Number / Email'}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="+91..."
            />
            <div>
              <label className="block text-xs font-bold text-[#172A4A] mb-1 text-left">
                {lang === 'mr' ? 'आपली समस्या किंवा प्रश्न सांगा' : 'Describe your grievance or issue'}
              </label>
              <textarea
                rows={4}
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder={lang === 'mr' ? 'येथे तपशील लिहा...' : 'Enter details here...'}
                className="w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 p-3 text-xs text-[#172A4A] focus:border-[#E30620] focus:bg-white focus:outline-none transition-colors"
                required
              />
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-[#172A4A]/10">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-[#172A4A]/20 px-3 py-1.5 text-xs font-bold text-[#172A4A] hover:bg-[#F7F3EC] cursor-pointer"
              >
                {lang === 'mr' ? 'रद्द करा' : 'Cancel'}
              </button>
              <WFButton variant="solid" type="submit" className="bg-[#E30620] hover:bg-[#c7051b]">
                {lang === 'mr' ? 'पाठवा' : 'Send'}
              </WFButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
