import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { all78Committees } from '../../data/pdfContent';

export function CommitteesSection() {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryMr, setSelectedCategoryMr] = useState<string>('all');

  const uniqueCategories = Array.from(new Set(all78Committees.map(c => c.categoryMr))).map(catMr => {
    const item = all78Committees.find(c => c.categoryMr === catMr)!;
    return { mr: item.categoryMr, en: item.categoryEn };
  });

  const filteredCommittees = all78Committees.filter(committee => {
    const name = lang === 'mr' ? committee.nameMr : committee.nameEn;
    const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase()) || committee.id.toString() === searchQuery.trim();
    const matchesCategory = selectedCategoryMr === 'all' || committee.categoryMr === selectedCategoryMr;
    return matchesSearch && matchesCategory;
  });

  return (
    <SectionShell id="committees" index="6" title={t('sec_committees')}>
      <div className="space-y-6 text-left">
        {/* Intro from PDF Page 7 */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
            {lang === 'mr'
              ? 'महासंघाच्या ७८ समित्या — संघटनात्मक कार्याची मजबूत साखळी'
              : 'The 78 Committees — Backbone of Grassroots Organisational Action'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'महासंघाच्या कार्याचा विस्तार विविध क्षेत्रांपर्यंत पोहोचविण्यासाठी ७८ विविध विकास समित्यांच्या माध्यमातून संघटनात्मक कार्य केले जाते. या समित्या सामाजिक प्रश्न, पत्रकारांचे प्रश्न, जनजागृती, संघटन विस्तार आणि स्थानिक पातळीवरील उपक्रम यासाठी अविरतपणे कार्यरत आहेत.'
              : 'To expand the reach and depth of our democratic mission, 78 specialized development committees operate across various civic, labor, academic, legal, media, and public welfare sectors.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-lg border-2 border-neutral-200">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'mr' ? 'समिती शोधा (उदा. पोलीस, शेतकरी, शिक्षण, आरोग्य...)' : 'Search committees (e.g. Police, Farmers, Education, Health)...'}
              className="w-full rounded-md border-2 border-neutral-300 bg-neutral-50 px-3.5 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:bg-white focus:border-neutral-600 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-xs text-neutral-400 hover:text-neutral-700 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-neutral-500 whitespace-nowrap self-center">
            {lang === 'mr' ? `एकूण: ${filteredCommittees.length} / ७८ समित्या` : `Showing: ${filteredCommittees.length} / 78 Committees`}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedCategoryMr('all')}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-colors cursor-pointer border ${
              selectedCategoryMr === 'all'
                ? 'bg-[#172A4A] text-white border-[#172A4A]'
                : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-500'
            }`}
          >
            {lang === 'mr' ? 'सर्व विभाग' : 'All Sectors'}
          </button>
          {uniqueCategories.slice(0, 10).map((cat) => (
            <button
              key={cat.mr}
              type="button"
              onClick={() => setSelectedCategoryMr(cat.mr)}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-colors cursor-pointer border ${
                selectedCategoryMr === cat.mr
                  ? 'bg-[#172A4A] text-white border-[#172A4A]'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-500'
              }`}
            >
              {lang === 'mr' ? cat.mr : cat.en}
            </button>
          ))}
        </div>

        {/* All 78 Committees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredCommittees.map((committee) => (
            <div
              key={committee.id}
              className="flex items-start gap-3 rounded-lg border-2 border-neutral-200 bg-white p-3.5 shadow-2xs hover:border-neutral-400 transition-colors"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-100 border border-neutral-300 text-xs font-bold text-neutral-700">
                {committee.id}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-bold text-neutral-800 leading-snug">
                  {lang === 'mr' ? committee.nameMr : committee.nameEn}
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500">
                    {lang === 'mr' ? committee.categoryMr : committee.categoryEn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
