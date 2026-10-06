import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { Logo } from '../Logo';
import { FacebookIcon, InstagramIcon, YouTubeIcon, XIcon, WhatsAppIcon } from '../SocialIcons';

const contactInfo = [
  {
    labelMr: 'अधिकृत पत्ता :',
    labelEn: 'Headquarters Address :',
    valMr: 'मुंबई',
    valEn: 'Mumbai',
    icon: '🏛️',
  },
  {
    labelMr: 'अधिकृत दूरध्वनी क्रमांक :',
    labelEn: 'National Helpline :',
    valMr: '+91 98220 XXXXX / टोल-फ्री राष्ट्रीय मदत कक्ष: १८००-२३३-XXXX',
    valEn: '+91 98220 XXXXX / National Toll-Free Helpline: 1800-233-XXXX',
    icon: '📞',
  },
  {
    labelMr: 'अधिकृत ई-मेल :',
    labelEn: 'Official Email :',
    valMr: 'help@lokshahipressorg.com',
    valEn: 'help@lokshahipressorg.com',
    icon: '✉️',
  },
  {
    labelMr: 'अधिकृत संकेतस्थळ :',
    labelEn: 'Official Portal :',
    valMr: 'www.lokshahipressorg.com',
    valEn: 'www.lokshahipressorg.com',
    icon: '🌐',
  },
];

const socialChannels = [
  { name: 'Facebook', bg: 'hover:bg-[#2855A5]' },
  { name: 'Instagram', bg: 'hover:bg-[#E30620]' },
  { name: 'YouTube', bg: 'hover:bg-[#E30620]' },
  { name: 'X (Twitter)', bg: 'hover:bg-black' },
  { name: 'WhatsApp', bg: 'hover:bg-[#287A18]' },
];

export function ContactSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="contact" index="17" title={t('sec_contact')}>
      <div className="space-y-8 text-left">
        {/* Intro */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Logo size={64} className="h-16 w-16 shrink-0 drop-shadow-sm" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-[#E30620]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30620]">
                  NATIONAL SECRETARIAT
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
                {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत — National Office' : 'Lokshahi Patrakar Mahasangh Bharat — National Office'}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#172A4A]/70 leading-relaxed max-w-2xl">
                {lang === 'mr'
                  ? 'सदस्यत्व, समिती कामकाज, पत्रकार संरक्षण, विधी मदत अथवा कार्यक्रमांच्या अधिकृत समन्वयासाठी महासंघाच्या राष्ट्रीय मुख्यालयाशी संपर्क साधा.'
                  : 'Connect with our national secretariat for press accreditation validation, legal cell support, or official media statements.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* National Office Card from PDF Page 16/17 */}
          <div className="lg:col-span-7 rounded-2xl border border-[#172A4A]/15 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#E30620] block border-b border-neutral-100 pb-2">
                {lang === 'mr' ? 'केंद्रीय कार्यालयीन तपशील' : 'Apex Secretariat Credentials'}
              </span>

              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 border-b border-[#172A4A]/10 pb-3.5">
                  <span className="text-lg mt-0.5 shrink-0">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-[#172A4A]/60 block mb-0.5">
                      {lang === 'mr' ? item.labelMr : item.labelEn}
                    </span>
                    <span className="text-xs sm:text-sm text-[#172A4A] font-bold leading-relaxed break-words">
                      {lang === 'mr' ? item.valMr : item.valEn}
                    </span>
                  </div>
                </div>
              ))}

              {/* Social Media from PDF Page 17 */}
              <div className="pt-2">
                <span className="text-xs font-bold text-[#172A4A] block mb-2.5">
                  {lang === 'mr' ? 'सोशल मीडिया अधिकृत चॅनल्स :' : 'Official Social Media Handles :'}
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all cursor-pointer"
                  >
                    <FacebookIcon size={20} />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-[#E1306C] hover:bg-[#E1306C]/5 transition-all cursor-pointer"
                  >
                    <InstagramIcon size={20} />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-[#FF0000] hover:bg-[#FF0000]/5 transition-all cursor-pointer"
                  >
                    <YouTubeIcon size={20} />
                    <span>YouTube</span>
                  </a>

                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-black hover:bg-black/5 transition-all cursor-pointer"
                  >
                    <XIcon size={20} />
                    <span>X</span>
                  </a>

                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-[#172A4A]/15 bg-white px-3 py-2 text-xs font-bold text-[#172A4A] shadow-2xs hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon size={20} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-[#F7F3EC] p-4 text-xs text-[#172A4A] font-semibold border border-[#172A4A]/10">
              🕒 {lang === 'mr' ? 'कार्यालयीन वेळ: सकाळी १०:०० ते संध्याकाळी ६:०० (सोमवार ते शनिवार)' : 'Working Hours: 10:00 AM – 6:00 PM (Monday to Saturday)'}
            </div>
          </div>

          {/* Interactive Location Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-[#172A4A] text-white p-6 shadow-sm flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E30620] block mb-2">
                  CENTRAL LOCATION & REGIONAL HUBS
                </span>
                <h4 className="text-lg font-black text-white mb-3">
                  {lang === 'mr' ? 'राष्ट्रीय व प्रादेशिक संपर्क जाळे' : 'National & Regional Network Desks'}
                </h4>
                <p className="text-xs text-[#F7F3EC]/80 leading-relaxed mb-6">
                  {lang === 'mr'
                    ? 'महाराष्ट्र, नवी दिल्ली, गुजरात, कर्नाटक, मध्य प्रदेश व देशभरातील २८ राज्यांत महासंघाचे जिल्हा संपर्क प्रमुख व विधी प्रतिनिधी कार्यरत आहेत.'
                    : 'Active state chapters, legal desks, and regional coordinators operational across Mumbai, New Delhi, Pune, Nagpur, Bengaluru, and 28 states.'}
                </p>

                <div className="space-y-2.5 text-xs text-[#F7F3EC]">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>🏢 Maharashtra State Bureau</span>
                    <span className="text-[#287A18] font-bold">Active</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>🏢 New Delhi National Liaison</span>
                    <span className="text-[#287A18] font-bold">Active</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>🏢 78 Sector Committees</span>
                    <span className="text-[#E6530C] font-bold">78 Wings</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                <span className="text-[#F7F3EC]/60">Helpline Active</span>
                <a
                  href="mailto:help@lokshahipressorg.com"
                  className="px-4 py-2 rounded-lg bg-[#E30620] hover:bg-[#c7051b] font-bold text-white transition-colors"
                >
                  {lang === 'mr' ? 'ई-मेल पाठवा' : 'Send Email'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
