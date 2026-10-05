import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard, WFImage, WFLine } from '../ui/WireframePrimitives';

const contactInfo = [
  { mr: 'पत्ता', en: 'Address' },
  { mr: 'फोन', en: 'Phone' },
  { mr: 'ई-मेल', en: 'Email' },
  { mr: 'वेबसाइट', en: 'Website' },
];

const socials = ['FB', 'IG', 'YT', 'X', 'WA'];

export function ContactSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="contact" index="17" title={t('sec_contact')}>
      <div className="grid gap-6 md:grid-cols-2">
        <WFCard label="National Office" className="p-6">
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-24 shrink-0 text-xs font-semibold text-neutral-600">
                  {item[lang]}
                </span>
                <WFLine w="2/3" />
              </div>
            ))}

            <div className="mt-4 flex gap-2 pt-2 border-t border-neutral-100">
              {socials.map((platform) => (
                <span
                  key={platform}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 text-[10px] font-bold text-neutral-500 hover:border-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </WFCard>

        <WFImage
          label={lang === 'mr' ? 'नकाशा' : 'MAP'}
          ratio="aspect-[4/3]"
          className="shadow-xs"
        />
      </div>
    </SectionShell>
  );
}
