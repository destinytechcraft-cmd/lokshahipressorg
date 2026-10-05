import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WFButton, WFInput } from '../ui/WireframePrimitives';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-xl border-2 border-neutral-300 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {lang === 'mr' ? 'सदस्यता अर्ज' : 'Membership Application'}
            </span>
            <h3 className="text-lg font-black text-neutral-800">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'Lokshahi Patrakar Mahasangh Bharat'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 text-neutral-500 hover:bg-neutral-100 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 border-2 border-neutral-400">
              ✓
            </div>
            <h4 className="text-lg font-bold text-neutral-800">
              {lang === 'mr' ? 'नोंदणी अर्ज यशस्वीरित्या प्राप्त झाला!' : 'Registration submitted successfully!'}
            </h4>
            <p className="mt-2 text-xs text-neutral-500">
              {lang === 'mr'
                ? 'महासंघाच्या कार्यकारी समितीकडून छाननीनंतर ओळखपत्र व प्रमाणपत्र जारी केले जाईल.'
                : 'ID card and certificate will be issued after verification by the executive committee.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-600 mb-1">
                {lang === 'mr' ? 'सदस्यत्व प्रकार' : 'Membership Category'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.en}
                    type="button"
                    onClick={() => setRole(cat[lang])}
                    className={`rounded-md border-2 p-2 text-left text-xs font-medium transition-colors cursor-pointer ${
                      role === cat[lang]
                        ? 'border-neutral-800 bg-neutral-800 text-white'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
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

            <div className="flex justify-end gap-2 border-t pt-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border-2 border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-600 hover:bg-neutral-100 cursor-pointer"
              >
                {lang === 'mr' ? 'रद्द करा' : 'Cancel'}
              </button>
              <WFButton variant="solid" type="submit">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-xl border-2 border-neutral-300 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {lang === 'mr' ? 'तातडीचा प्रश्न / तक्रार' : 'Quick Grievance Desk'}
            </span>
            <h3 className="text-base font-black text-neutral-800">
              {lang === 'mr' ? 'पत्रकार मदत कक्ष' : 'Journalist Help Desk'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 text-neutral-500 hover:bg-neutral-100 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 border-2 border-neutral-400">
              ✓
            </div>
            <h4 className="text-base font-bold text-neutral-800">
              {lang === 'mr' ? 'आपला प्रश्न नोंदवला गेला आहे!' : 'Your issue has been recorded!'}
            </h4>
            <p className="mt-1 text-xs text-neutral-500">
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
              <label className="block text-xs font-semibold text-neutral-600 mb-1">
                {lang === 'mr' ? 'आपली समस्या किंवा प्रश्न सांगा' : 'Describe your grievance or issue'}
              </label>
              <textarea
                rows={4}
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder={lang === 'mr' ? 'येथे तपशील लिहा...' : 'Enter details here...'}
                className="w-full rounded-md border-2 border-neutral-300 bg-neutral-50 p-2.5 text-xs text-neutral-800 focus:border-neutral-500 focus:bg-white focus:outline-none transition-colors"
                required
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border-2 border-neutral-300 px-3 py-1.5 text-xs font-semibold text-neutral-600 hover:bg-neutral-100 cursor-pointer"
              >
                {lang === 'mr' ? 'रद्द करा' : 'Cancel'}
              </button>
              <WFButton variant="solid" type="submit">
                {lang === 'mr' ? 'पाठवा' : 'Send'}
              </WFButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
