import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { leadershipMembers } from '../../data/pdfContent';

export function LeadershipSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="leadership" index="16" title={t('sec_leadership')}>
      <div className="space-y-8 text-left">
        {/* Intro Banner from PDF Page 15 */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#E30620]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30620]">
                APEX EXECUTIVE COUNCIL
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'राष्ट्रीय व प्रांतिक नेतृत्व मंडळ' : 'National Council & State Office-Bearers'}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#172A4A]/70 leading-relaxed max-w-2xl">
              {lang === 'mr'
                ? 'देशभरातील पत्रकारांच्या हक्कांचे रक्षण, संघटनात्मक मार्गदर्शन व धोरणात्मक निर्णयांची धुरा सांभाळणारे महासंघाचे ज्येष्ठ व समर्पित पदाधिकारी.'
                : 'Dedicated senior journalists, legal scholars, and editors steering organizational governance across India.'}
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-xl bg-[#F7F3EC] px-4 py-2 border border-[#172A4A]/15 text-xs font-bold text-[#172A4A]">
              🇮🇳 Pan-India Representation
            </span>
          </div>
        </div>

        {/* Leadership Grid matching PDF Page 16 specifications: Photo + Name + Designation + State + Short Profile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl border border-[#172A4A]/15 bg-white shadow-xs hover:border-[#172A4A] hover:shadow-md transition-all group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Distinctive Executive Insignia Profile Frame */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#172A4A] to-[#2855A5] text-white font-black text-lg shadow-sm border-2 border-white group-hover:scale-105 transition-transform duration-200">
                    <span className="opacity-90">{member.nameEn.split(' ').slice(-1)[0][0]}</span>
                    <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-[#E30620] border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">
                      ✓
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-md bg-[#E30620]/10 text-[#E30620] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                      {lang === 'mr' ? member.roleMr : member.roleEn}
                    </span>
                    <h4 className="text-base font-black text-[#172A4A] mt-1 truncate">
                      {lang === 'mr' ? member.nameMr : member.nameEn}
                    </h4>
                    <span className="text-[11px] font-bold text-[#2855A5] flex items-center gap-1 mt-0.5">
                      📍 {lang === 'mr' ? member.stateMr : member.stateEn}
                    </span>
                  </div>
                </div>

                {/* Short Profile from PDF Page 16 */}
                <div className="border-t border-[#172A4A]/10 pt-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#172A4A]/50 block mb-1">
                    {lang === 'mr' ? 'जबाबदारी व कार्यक्षेत्र :' : 'Portfolio & Scope :'}
                  </span>
                  <p className="text-xs text-[#172A4A]/80 leading-relaxed font-medium">
                    {lang === 'mr' ? member.profileMr : member.profileEn}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-dashed border-[#172A4A]/10 flex items-center justify-between text-[11px] text-[#172A4A]/50 font-bold">
                <span>LOKSHAHI BHARAT</span>
                <span className="text-[#E30620] group-hover:translate-x-1 transition-transform">
                  {lang === 'mr' ? 'संपर्क साधा →' : 'Direct Liaison →'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
