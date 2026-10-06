import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton } from '../ui/WireframePrimitives';

export function HelpDeskSection() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    district: '',
    mediaOrg: '',
    issueType: '',
    summary: '',
    fileName: '',
  });
  const [receiptData, setReceiptData] = useState<{
    ticketId: string;
    submittedAt: string;
    name: string;
    issueType: string;
    district: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket = {
      ticketId: `LPMB-2026-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toLocaleString(),
      name: formData.name || 'Accredited Journalist',
      issueType: formData.issueType || 'Legal Defense Request',
      district: formData.district || 'Maharashtra / National',
    };
    setReceiptData(newTicket);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleReset = () => {
    setReceiptData(null);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      district: '',
      mediaOrg: '',
      issueType: '',
      summary: '',
      fileName: '',
    });
  };

  return (
    <SectionShell id="helpdesk" index="14" title={t('sec_helpdesk')}>
      <div className="space-y-6 text-left">
        {/* Banner from PDF Page 14 */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E30620]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30620]">
                {lang === 'mr' ? '२४/७ आपत्कालीन कक्ष' : '24X7 EMERGENCY CELL'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'पत्रकार मदत कक्ष — तत्पर कायदेशीर व संघटनात्मक सहाय्य' : 'Journalist Emergency Help Desk & Grievance Portal'}
            </h3>
            <p className="text-xs sm:text-sm text-[#172A4A]/75 leading-relaxed max-w-2xl">
              {lang === 'mr'
                ? 'पत्रकारिता करताना कोणत्याही अडचणीचा सामना करावा लागत असल्यास आपली समस्या महासंघापर्यंत पोहोचवा. दबाव, धमक्या, खोटे गुन्हे किंवा प्रशासकीय अडवणुकीविरोधात आमची विधी व मदत कक्ष समिती तात्काळ सक्रिय होते.'
                : 'If you encounter any harassment, false FIR, physical threat, or institutional intimidation during reporting, register your grievance directly with our national legal and assistance cell.'}
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-[#F7F3EC] border border-[#172A4A]/15 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#172A4A]/60 block">
              {lang === 'mr' ? 'हेल्पलाईन क्रमांक' : 'Helpline Hotline'}
            </span>
            <span className="text-lg font-black text-[#E30620] block">1800-233-XXXX</span>
            <span className="text-[10px] font-bold text-[#287A18]">
              {lang === 'mr' ? '२४ तास देशव्यापी सेवा' : 'Active 24 Hours Nationwide'}
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Main Grievance Form / E-Receipt Card */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-[#172A4A]/15 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#172A4A]/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#E30620]" />
                  <h4 className="text-sm font-black text-[#172A4A] uppercase tracking-wide">
                    {lang === 'mr' ? 'समस्या नोंदवा — अधिकृत तक्रार अर्ज' : 'Register Grievance — Official Help Desk Form'}
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-[#2855A5]">
                  {lang === 'mr' ? 'गोपनीय व सुरक्षित' : 'Confidential & Encrypted'}
                </span>
              </div>

              {receiptData ? (
                /* Polished Digital Acknowledgment Receipt */
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="rounded-2xl border-2 border-[#287A18]/30 bg-[#287A18]/5 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#287A18] text-white font-black text-2xl shadow-sm">
                      ✓
                    </div>
                    <h4 className="text-xl font-black text-[#172A4A]">
                      {lang === 'mr' ? 'समस्या यशस्वीरित्या नोंदवली गेली!' : 'Grievance Acknowledged Successfully!'}
                    </h4>
                    <p className="mt-1 text-xs text-[#172A4A]/70 max-w-md mx-auto">
                      {lang === 'mr'
                        ? 'आपला अर्ज राष्ट्रीय विधी कक्ष व संबंधित जिल्हा समन्वयकांकडे त्वरित वर्ग करण्यात आला आहे.'
                        : 'Your petition has been routed to the National Legal Advisory Board and the District Media Liaison.'}
                    </p>

                    <div className="mt-5 inline-block rounded-xl border border-[#172A4A]/15 bg-white px-5 py-3 text-left shadow-xs">
                      <div className="flex items-center justify-between gap-6 mb-2 border-b pb-2">
                        <span className="text-[10px] font-bold text-[#172A4A]/50 uppercase">
                          {lang === 'mr' ? 'अधिकृत ट्रॅकिंग आयडी' : 'Official Tracking ID'}
                        </span>
                        <span className="text-sm font-mono font-black text-[#E30620]">{receiptData.ticketId}</span>
                      </div>
                      <div className="text-xs text-[#172A4A] space-y-1">
                        <div><strong>{lang === 'mr' ? 'पत्रकार:' : 'Journalist:'}</strong> {receiptData.name}</div>
                        <div><strong>{lang === 'mr' ? 'तक्रार प्रकार:' : 'Issue:'}</strong> {receiptData.issueType}</div>
                        <div><strong>{lang === 'mr' ? 'कार्यक्षेत्र / जिल्हा:' : 'Jurisdiction:'}</strong> {receiptData.district}</div>
                        <div><strong>{lang === 'mr' ? 'तारीख व वेळ:' : 'Timestamp:'}</strong> {receiptData.submittedAt}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="rounded-lg border-2 border-[#172A4A] px-4 py-2 text-xs font-bold text-[#172A4A] hover:bg-[#172A4A] hover:text-white transition-colors cursor-pointer"
                    >
                      🖨️ {lang === 'mr' ? 'पावती प्रिंट करा' : 'Print Acknowledgment'}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-lg bg-[#E30620] px-5 py-2 text-xs font-bold text-white hover:bg-[#c7051b] transition-colors cursor-pointer"
                    >
                      {lang === 'mr' ? 'नवीन तक्रार नोंदवा' : 'Submit Another Grievance'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="flex flex-col gap-1 text-left">
                      <span className="text-xs font-bold text-[#172A4A]">{lang === 'mr' ? 'नाव :' : 'Full Name :'}</span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'mr' ? 'आपले पूर्ण नाव' : 'Your full name'}
                        className="h-10 w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 px-3 text-xs text-[#172A4A] focus:border-[#E30620] focus:bg-white focus:outline-none"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-left">
                      <span className="text-xs font-bold text-[#172A4A]">{lang === 'mr' ? 'मोबाईल :' : 'Mobile :'}</span>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="+91..."
                        className="h-10 w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 px-3 text-xs text-[#172A4A] focus:border-[#E30620] focus:bg-white focus:outline-none"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-left">
                      <span className="text-xs font-bold text-[#172A4A]">{lang === 'mr' ? 'ई-मेल :' : 'Email :'}</span>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="h-10 w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 px-3 text-xs text-[#172A4A] focus:border-[#E30620] focus:bg-white focus:outline-none"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-left">
                      <span className="text-xs font-bold text-[#172A4A]">{lang === 'mr' ? 'जिल्हा :' : 'District :'}</span>
                      <input
                        type="text"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        placeholder={lang === 'mr' ? 'उदा. मुंबई, पुणे, नागपूर...' : 'e.g. Mumbai, Pune, Nagpur...'}
                        className="h-10 w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 px-3 text-xs text-[#172A4A] focus:border-[#E30620] focus:bg-white focus:outline-none"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-left">
                      <span className="text-xs font-bold text-[#172A4A]">{lang === 'mr' ? 'मीडिया संस्था :' : 'Media Organisation :'}</span>
                      <input
                        type="text"
                        required
                        value={formData.mediaOrg}
                        onChange={(e) => setFormData({ ...formData, mediaOrg: e.target.value })}
                        placeholder={lang === 'mr' ? 'वृत्तपत्र / टीव्ही / डिजिटल पोर्टल' : 'Newspaper / TV / Portal name'}
                        className="h-10 w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 px-3 text-xs text-[#172A4A] focus:border-[#E30620] focus:bg-white focus:outline-none"
                      />
                    </label>

                    <label className="flex flex-col gap-1 text-left">
                      <span className="text-xs font-bold text-[#172A4A]">{lang === 'mr' ? 'समस्येचा प्रकार :' : 'Issue Category :'}</span>
                      <select
                        required
                        value={formData.issueType}
                        onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                        className="h-10 w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 px-3 text-xs text-[#172A4A] focus:border-[#E30620] focus:bg-white focus:outline-none cursor-pointer"
                      >
                        <option value="">{lang === 'mr' ? '-- प्रकार निवडा --' : '-- Select Category --'}</option>
                        <option value="Spurious FIR / False Police Case">{lang === 'mr' ? 'खोटे गुन्हे / पोलीस दबाव (Spurious FIR)' : 'Spurious FIR / False Police Case'}</option>
                        <option value="Physical Threat / Assault">{lang === 'mr' ? 'धमक्या / शारीरिक हल्ला (Physical Threat / Assault)' : 'Physical Threat / Assault'}</option>
                        <option value="Administrative Blockade">{lang === 'mr' ? 'प्रशासकीय अडवणूक (Administrative Obstacle)' : 'Administrative Obstacle'}</option>
                        <option value="Medical & Financial Relief">{lang === 'mr' ? 'आरोग्य व आपत्कालीन मदत (Medical / Relief)' : 'Medical & Financial Relief'}</option>
                        <option value="Press Accreditation Dispute">{lang === 'mr' ? 'अधिस्वीकृती / ओळखपत्र वाद (Accreditation Dispute)' : 'Press Accreditation Dispute'}</option>
                      </select>
                    </label>
                  </div>

                  <label className="flex flex-col gap-1 text-left">
                    <span className="text-xs font-bold text-[#172A4A]">{lang === 'mr' ? 'तक्रारीचे संक्षिप्त स्वरूप :' : 'Complaint Summary & Details :'}</span>
                    <textarea
                      rows={3}
                      required
                      value={formData.summary}
                      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                      placeholder={lang === 'mr' ? 'घटनेचा सविस्तर तपशील, दिनांक, संबंधित पोलीस ठाणे, आरोपी अथवा प्रशासकीय अधिकारी...' : 'Detailed narrative of the incident, dates, police station, or officials involved...'}
                      className="w-full rounded-lg border border-[#172A4A]/25 bg-[#F7F3EC]/50 p-3 text-xs text-[#172A4A] focus:border-[#E30620] focus:bg-white focus:outline-none"
                    />
                  </label>

                  {/* File Upload from PDF Page 14 */}
                  <div>
                    <span className="text-xs font-bold text-[#172A4A] block mb-1">
                      {lang === 'mr' ? 'कागदपत्रे / पुरावे (FIR प्रत, फोटो, ऑडिओ/व्हिडिओ लिंक) :' : 'Documents / Evidence (FIR copy, Photos, Proof) :'}
                    </span>
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 rounded-lg border-2 border-[#172A4A]/20 bg-[#F7F3EC] px-4 py-2 text-xs font-bold text-[#172A4A] hover:border-[#172A4A] cursor-pointer">
                        📎 {lang === 'mr' ? 'कागदपत्रे जोडा' : 'Attach Documents'}
                        <input type="file" onChange={handleFileChange} className="hidden" />
                      </label>
                      <span className="text-xs text-[#172A4A]/60 truncate">
                        {formData.fileName || (lang === 'mr' ? 'कोणतीही फाईल निवडलेली नाही (वैकल्पिक)' : 'No file attached (optional)')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <WFButton variant="solid" type="submit" className="px-8 py-3 bg-[#E30620] hover:bg-[#c7051b] font-black uppercase tracking-wider text-sm shadow-md">
                      Submit Grievance
                    </WFButton>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Official Legal Cell & Disclaimer from PDF Page 15 */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3 text-[#E30620]">
                <span className="text-lg">⚖️</span>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#172A4A]">
                  {lang === 'mr' ? 'महत्त्वाचे Disclaimer' : 'Statutory Disclaimer'}
                </h4>
              </div>

              <div className="text-xs text-[#172A4A]/80 leading-relaxed space-y-3">
                <p>
                  {lang === 'mr'
                    ? 'मदत कक्षामार्फत प्राप्त प्रकरणांचा विचार संघटनेच्या नियमांनुसार व उपलब्ध माहितीनुसार केला जाईल.'
                    : 'All petitions received through the help desk are evaluated strictly on merit in accordance with the constitution of Lokshahi Patrakar Mahasangh Bharat.'}
                </p>
                <p className="font-semibold text-[#172A4A] border-t border-neutral-100 pt-2">
                  {lang === 'mr'
                    ? 'कायदेशीर प्रकरणांमध्ये आवश्यकतेनुसार संबंधित कायदेशीर तज्ज्ञांचा सल्ला घेणे आवश्यक राहील.'
                    : 'Where criminal defamation or statutory litigation arises, guidance from accredited legal advocates will be coordinated.'}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#172A4A]/15 bg-[#172A4A] text-white p-6 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E30620] block mb-1">
                LOKSHAHI PRESS LEGAL SHIELD
              </span>
              <h5 className="text-sm font-black text-white mb-2">
                {lang === 'mr' ? 'तातडीचा कायदेशीर प्रतिसाद कक्ष' : 'Immediate Legal Response Cell'}
              </h5>
              <p className="text-xs text-[#F7F3EC]/80 leading-relaxed mb-4">
                {lang === 'mr'
                  ? 'पत्रकारांवर अवाजवी दबाव अथवा बेकायदेशीर अटकेची शक्यता असल्यास आमच्या राष्ट्रीय विधी कक्षाशी त्वरित संपर्क साधा.'
                  : 'In cases of arbitrary detention or urgent police summons, our national legal panel mobilizes local representation.'}
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-semibold text-[#F7F3EC]">
                Direct Desk: help@lokshahipressorg.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
