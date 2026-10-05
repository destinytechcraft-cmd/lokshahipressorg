import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFCard, WFImage, WFInput, WFTextBlock } from '../ui/WireframePrimitives';

const formFields = [
  { key: 'name', mr: 'नाव', en: 'Name' },
  { key: 'mobile', mr: 'मोबाईल', en: 'Mobile' },
  { key: 'email', mr: 'ई-मेल', en: 'Email' },
  { key: 'district', mr: 'जिल्हा', en: 'District' },
  { key: 'mediaOrg', mr: 'मीडिया संस्था', en: 'Media Organisation' },
  { key: 'issueType', mr: 'समस्येचा प्रकार', en: 'Issue Type' },
];

export function HelpDeskSection({ onSubmitSuccess }: { onSubmitSuccess?: (data: Record<string, string>) => void }) {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState<Record<string, string>>({
    name: '',
    mobile: '',
    email: '',
    district: '',
    mediaOrg: '',
    issueType: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitSuccess?.(formData);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        district: '',
        mediaOrg: '',
        issueType: '',
        details: '',
      });
    }, 4000);
  };

  return (
    <SectionShell id="helpdesk" index="14" title={t('sec_helpdesk')}>
      <div className="grid gap-6 md:grid-cols-2">
        <WFCard label="Grievance Form">
          {submitted ? (
            <div className="py-8 text-center animate-in fade-in duration-200">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 border-2 border-neutral-400">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-neutral-800">
                {lang === 'mr' ? 'तक्रार यशस्वीरित्या नोंदवली गेली!' : 'Grievance submitted successfully!'}
              </h4>
              <p className="mt-1 text-xs text-neutral-500">
                {lang === 'mr'
                  ? 'आमचा मदत कक्ष प्रतिनिधी लवकरच आपल्याशी संपर्क साधेल.'
                  : 'Our help desk representative will contact you shortly.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                {formFields.map((field) => (
                  <WFInput
                    key={field.key}
                    label={field[lang]}
                    value={formData[field.key]}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                    }
                  />
                ))}
              </div>

              <div className="mt-3">
                <label className="flex flex-col gap-1 text-left">
                  <span className="text-xs font-semibold text-neutral-500">
                    {lang === 'mr' ? 'तक्रारीचे स्वरूप' : 'Complaint details'}
                  </span>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, details: e.target.value }))
                    }
                    className="w-full rounded-md border-2 border-neutral-300 bg-neutral-50 p-2.5 text-xs text-neutral-800 focus:border-neutral-500 focus:bg-white focus:outline-none transition-colors"
                  />
                </label>
              </div>

              <div className="mt-4">
                <WFButton variant="solid" type="submit">
                  {t('btn_submit')}
                </WFButton>
              </div>
            </form>
          )}
        </WFCard>

        <div className="flex flex-col gap-4">
          <WFCard label="Disclaimer" className="bg-neutral-50">
            <WFTextBlock lines={3} />
          </WFCard>
          <WFImage label={t('image_ph')} ratio="aspect-video" />
        </div>
      </div>
    </SectionShell>
  );
}
