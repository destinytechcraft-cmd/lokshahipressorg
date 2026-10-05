import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Language, DictKey } from '../types';

export const dict: Record<DictKey, { mr: string; en: string }> = {
  brand: {
    mr: 'लोकशाही पत्रकार महासंघ भारत',
    en: 'Lokshahi Patrakar Mahasangh Bharat',
  },
  tagline: {
    mr: 'सत्यासाठी लढणार, अन्यायाला भिडणार!',
    en: 'Fight for truth, stand against injustice!',
  },
  values: {
    mr: 'न्याय • हक्क • अधिकार • लोकशाही',
    en: 'Justice • Rights • Authority • Democracy',
  },
  nav_home: {
    mr: 'मुख्यपृष्ठ',
    en: 'Home',
  },
  nav_about: {
    mr: 'आमच्याविषयी',
    en: 'About Us',
  },
  nav_org: {
    mr: 'संघटना',
    en: 'Organisation',
  },
  nav_rights: {
    mr: 'पत्रकार हक्क',
    en: "Journalists' Rights",
  },
  nav_committees: {
    mr: 'समिती विभाग',
    en: 'Committees',
  },
  nav_social: {
    mr: 'सामाजिक कार्य',
    en: 'Social Work',
  },
  nav_media: {
    mr: 'मीडिया',
    en: 'Media',
  },
  nav_events: {
    mr: 'कार्यक्रम',
    en: 'Events',
  },
  nav_roadmap: {
    mr: 'रोडमॅप',
    en: 'Future Roadmap',
  },
  nav_membership: {
    mr: 'सदस्यत्व',
    en: 'Membership',
  },
  nav_helpdesk: {
    mr: 'मदत कक्ष',
    en: 'Help Desk',
  },
  nav_gallery: {
    mr: 'गॅलरी',
    en: 'Gallery',
  },
  nav_contact: {
    mr: 'संपर्क',
    en: 'Contact Us',
  },
  btn_join: {
    mr: 'सामील व्हा',
    en: 'Join Us',
  },
  btn_voice: {
    mr: 'आवाज उठवा',
    en: 'Raise Your Voice',
  },
  btn_helpdesk: {
    mr: 'पत्रकार मदत कक्ष',
    en: 'Journalist Help Desk',
  },
  btn_submit: {
    mr: 'सबमिट करा',
    en: 'Submit',
  },
  btn_join_member: {
    mr: 'सदस्य व्हा',
    en: 'Join Mahasangh',
  },
  btn_submit_issue: {
    mr: 'प्रश्न पाठवा',
    en: 'Submit Your Issue',
  },
  sec_media_coverage: {
    mr: 'मीडिया कव्हरेज',
    en: 'Media Coverage',
  },
  sec_stats: {
    mr: 'आमची ताकद',
    en: 'Our Strength',
  },
  sec_about: {
    mr: 'आमच्याविषयी',
    en: 'About Us',
  },
  sec_role: {
    mr: 'आमची भूमिका',
    en: 'Our Role',
  },
  sec_vision: {
    mr: 'आमचे ध्येय (Vision)',
    en: 'Our Vision',
  },
  sec_org: {
    mr: 'संघटनेची रचना',
    en: 'Organisation Structure',
  },
  sec_committees: {
    mr: 'लोकशाही समिती विभाग (७८ समित्या)',
    en: 'Committees (78 Committees)',
  },
  sec_rights: {
    mr: 'पत्रकारांचे न्याय, हक्क आणि अधिकार',
    en: "Journalists' Rights",
  },
  sec_social: {
    mr: 'पत्रकारतेसोबत सामाजिक बांधिलकी',
    en: 'Social Work',
  },
  sec_achievements: {
    mr: 'आमची ११ वर्षांची वाटचाल',
    en: 'Our Achievements',
  },
  sec_roadmap: {
    mr: 'भविष्यातील रोडमॅप',
    en: 'Future Roadmap',
  },
  sec_media: {
    mr: 'मीडिया सेक्शन',
    en: 'Media Section',
  },
  sec_events: {
    mr: 'कार्यक्रम आणि उपक्रम',
    en: 'Events',
  },
  sec_membership: {
    mr: 'सदस्यत्व',
    en: 'Membership',
  },
  sec_helpdesk: {
    mr: 'पत्रकार मदत कक्ष',
    en: 'Journalist Help Desk',
  },
  sec_grievance: {
    mr: 'जन तक्रार निवारण',
    en: 'Public Grievance',
  },
  sec_leadership: {
    mr: 'टीम लोकशाही — राष्ट्रीय नेतृत्व',
    en: 'National Leadership',
  },
  sec_contact: {
    mr: 'संपर्क',
    en: 'Contact Us',
  },
  sec_org_network: {
    mr: 'भारतभर संघटनात्मक जाळे',
    en: 'Pan-India Organisational Network',
  },
  sec_gallery: {
    mr: 'फोटो व व्हिडिओ गॅलरी',
    en: 'Photo & Video Gallery',
  },
  crumb_home: {
    mr: 'मुख्यपृष्ठ',
    en: 'Home',
  },
  page_subtitle: {
    mr: 'पृष्ठ आशयाची जागा — वायरफ्रेम',
    en: 'Page content placeholder — wireframe',
  },
  image_ph: {
    mr: 'प्रतिमा',
    en: 'IMAGE',
  },
  logo: {
    mr: 'लोगो',
    en: 'LOGO',
  },
  wireframe: {
    mr: 'वायरफ्रेम',
    en: 'WIREFRAME',
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: DictKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);
const STORAGE_KEY = 'wf-lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('mr');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'mr' || stored === 'en') {
        setLangState(stored);
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // LocalStorage access fallback
    }
  };

  const t = (key: DictKey): string => {
    const item = dict[key];
    if (!item) return key;
    return item[lang] || item.mr || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
