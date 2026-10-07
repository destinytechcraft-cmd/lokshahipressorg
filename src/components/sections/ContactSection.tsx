import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton } from '../ui/WireframePrimitives';
import { FacebookIcon, InstagramIcon, YouTubeIcon, XIcon, WhatsAppIcon } from '../SocialIcons';
import { GOOGLE_FORM_LINKS } from '../../config/forms';

export function ContactSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="contact" index="17" title={t('sec_contact')}>
      <div className="space-y-8 text-left">
        {/* Header from PDF Page 16 */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-8 shadow-xs">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30620] block mb-1">
            21. CONTACT US
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
            {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'Lokshahi Patrakar Mahasangh Bharat'}
          </h3>
          <p className="mt-1 text-sm font-bold text-[#172A4A]/80">
            {lang === 'mr' ? 'राष्ट्रीय कार्यालय : मुंबई' : 'National Office : Mumbai'}
          </p>
        </div>

        {/* Contact Info Card matching PDF Page 17 */}
        <div className="max-w-3xl rounded-2xl border border-[#172A4A]/15 bg-white p-6 sm:p-8 shadow-xs space-y-5">
          <div className="space-y-4 text-xs sm:text-sm text-[#172A4A]">
            <div className="border-b border-[#172A4A]/10 pb-3">
              <span className="font-bold text-[#172A4A]/60 block mb-1">{lang === 'mr' ? 'पत्ता :' : 'Address :'}</span>
              <span className="font-bold text-neutral-800">{lang === 'mr' ? '[अधिकृत पत्ता]' : '[Official Address]'}</span>
            </div>

            <div className="border-b border-[#172A4A]/10 pb-3">
              <span className="font-bold text-[#172A4A]/60 block mb-1">Phone:</span>
              <span className="font-bold text-neutral-800">{lang === 'mr' ? '[अधिकृत क्रमांक]' : '[Official Number]'}</span>
            </div>

            <div className="border-b border-[#172A4A]/10 pb-3">
              <span className="font-bold text-[#172A4A]/60 block mb-1">Email:</span>
              <span className="font-bold text-neutral-800">{lang === 'mr' ? '[अधिकृत ई-मेल]' : '[Official Email]'}</span>
            </div>

            <div className="border-b border-[#172A4A]/10 pb-3">
              <span className="font-bold text-[#172A4A]/60 block mb-1">Website:</span>
              <span className="font-bold text-neutral-800">{lang === 'mr' ? '[वेबसाइट]' : '[Website]'}</span>
            </div>
          </div>

          {/* Social Media from PDF Page 17 */}
          <div className="pt-2">
            <span className="text-xs font-bold text-[#172A4A] block mb-3">
              Social Media
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3.5 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all cursor-pointer"
              >
                <FacebookIcon size={18} />
                <span>Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3.5 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-[#E1306C] hover:bg-[#E1306C]/5 transition-all cursor-pointer"
              >
                <InstagramIcon size={18} />
                <span>Instagram</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3.5 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-[#FF0000] hover:bg-[#FF0000]/5 transition-all cursor-pointer"
              >
                <YouTubeIcon size={18} />
                <span>YouTube</span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3.5 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-black hover:bg-black/5 transition-all cursor-pointer"
              >
                <XIcon size={18} />
                <span>X</span>
              </a>

              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3.5 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Google Form CTA for Contact Inquiry */}
          <div className="pt-4 border-t border-[#172A4A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-black text-[#172A4A] block">
                {lang === 'mr' ? 'थेट संपर्क किंवा संदेश पाठवण्यासाठी :' : 'For direct inquiries or messages :'}
              </span>
              <span className="text-[11px] text-[#172A4A]/70 font-semibold">
                {lang === 'mr' ? 'आमच्या अधिकृत फॉर्मद्वारे संदेश पाठवा' : 'Send a message via our official form'}
              </span>
            </div>
            <WFButton
              variant="solid"
              href={GOOGLE_FORM_LINKS.contact}
              target="_blank"
              className="px-6 py-2.5 text-xs sm:text-sm font-black bg-[#E30620] hover:bg-[#c7051b] text-white shadow-md uppercase tracking-wider"
            >
              {lang === 'mr' ? 'संपर्क फॉर्म उघडा ↗' : 'OPEN CONTACT FORM ↗'}
            </WFButton>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
