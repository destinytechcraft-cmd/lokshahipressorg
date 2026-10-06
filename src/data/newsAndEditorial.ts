export interface PressArticle {
  id: number;
  source: string;
  sourceType: string;
  dateMr: string;
  dateEn: string;
  headlineMr: string;
  headlineEn: string;
  excerptMr: string;
  excerptEn: string;
  categoryMr: string;
  categoryEn: string;
  readTime: string;
  tagColor: string;
}

export const realPressClippings: PressArticle[] = [
  {
    id: 1,
    source: "दैनिक सकाळ",
    sourceType: "Print Daily",
    dateMr: "२ ऑक्टोबर २०२६",
    dateEn: "October 2, 2026",
    headlineMr: "पत्रकारांच्या संरक्षणासाठी व कायदेशीर मदतीसाठी लोकशाही पत्रकार महासंघाचे राज्यव्यापी अभियान",
    headlineEn: "Lokshahi Patrakar Mahasangh launches statewide campaign for journalist security and legal aid",
    excerptMr: "महाराष्ट्रातील ग्रामीण व तालुका पातळीवर वार्तांकन करताना पत्रकारांवर होणारे हल्ले व खोट्या गुन्ह्यांविरोधात महासंघाने विशेष विधी कक्ष स्थापन केला आहे.",
    excerptEn: "The federation has instituted a dedicated legal cell to combat spurious FIRs, intimidation and attacks on rural journalists across districts.",
    categoryMr: "पत्रकार हक्क",
    categoryEn: "Press Rights",
    readTime: "3 min read",
    tagColor: "border-[#E30620] text-[#E30620]"
  },
  {
    id: 2,
    source: "The Indian Express",
    sourceType: "National English Daily",
    dateMr: "२८ सप्टेंबर २०२६",
    dateEn: "September 28, 2026",
    headlineMr: "राष्ट्रीय स्तरावर ७,६०० हून अधिक सदस्यांसह लोकशाही पत्रकार महासंघाची देशभरात मजबूत बांधणी",
    headlineEn: "With over 7,600 members, Lokshahi Patrakar Mahasangh consolidates nationwide footprint across 28 states",
    excerptMr: "नवी दिल्ली व मुंबई येथे पार पडलेल्या उच्चस्तरीय बैठकीत महासंघाने ७८ विविध विकास समित्यांची घोषणा केली असून सामाजिक क्षेत्रातही सक्रिय सहभाग नोंदवला आहे.",
    excerptEn: "Announcing 78 dedicated development committees, the federation expands institutional support to media personnel, digital publishers, and civic issues.",
    categoryMr: "राष्ट्रीय विस्तार",
    categoryEn: "National Expansion",
    readTime: "4 min read",
    tagColor: "border-[#172A4A] text-[#172A4A]"
  },
  {
    id: 3,
    source: "लोकमत",
    sourceType: "Leading Marathi Daily",
    dateMr: "१५ सप्टेंबर २०२६",
    dateEn: "September 15, 2026",
    headlineMr: "डिजिटल पत्रकार व यूट्यूब चॅनेल प्रतिनिधींसाठी महासंघातर्फे विशेष प्रशिक्षण व कार्यशाळा",
    headlineEn: "Special training and cyber security workshops organized for digital journalists and YouTubers",
    excerptMr: "सोशल मीडिया व ऑनलाइन न्यूज पोर्टल चालवताना येणारे तांत्रिक, सायबर व कायदेशीर अडथळे दूर करण्यासाठी पुणे व नागपूर येथे कार्यशाळा संपन्न.",
    excerptEn: "Over 400 digital reporters attended hands-on sessions on fact-checking, cyber safety regulations, and investigative reporting ethics.",
    categoryMr: "प्रशिक्षण व कार्यशाळा",
    categoryEn: "Workshops",
    readTime: "3 min read",
    tagColor: "border-[#2855A5] text-[#2855A5]"
  },
  {
    id: 4,
    source: "महाराष्ट्र टाइम्स",
    sourceType: "Times Group Daily",
    dateMr: "५ सप्टेंबर २०२६",
    dateEn: "September 5, 2026",
    headlineMr: "पत्रकार संरक्षण कायद्याची सर्व जिल्ह्यांत प्रभावी अंमलबजावणी करा — महासंघाची मागणी",
    headlineEn: "Ensure rigorous enforcement of Journalist Protection Act across all districts: Mahasangh",
    excerptMr: "पत्रकारांवर होणाऱ्या अन्यायाची तातडीने दखल घेऊन पोलीस अधीक्षकांनी प्रत्येक जिल्ह्यात विशेष नोडल अधिकारी नियुक्त करण्याचे निवेदन महासंघाने दिले.",
    excerptEn: "Submitting formal representations to home departments, the federation urged immediate appointment of nodal police liaisons for press safety.",
    categoryMr: "कायदा व प्रशासन",
    categoryEn: "Law & Governance",
    readTime: "2 min read",
    tagColor: "border-[#E6530C] text-[#E6530C]"
  },
  {
    id: 5,
    source: "पुढारी",
    sourceType: "Regional Daily",
    dateMr: "२२ ऑगस्ट २०२६",
    dateEn: "August 22, 2026",
    headlineMr: "शेतकरी, कामगार व आरोग्य क्षेत्रातील जनप्रश्नांवर लोकशाही पत्रकार महासंघाची सामाजिक बांधिलकी",
    headlineEn: "Social commitment of Lokshahi Press Federation on agrarian, labor and healthcare issues",
    excerptMr: "केवळ बातम्यांपुरते मर्यादित न राहता दुष्काळग्रस्त भागातील शेतकरी व एसटी कामगारांच्या प्रश्नांना शासनापर्यंत पोहोचवण्यासाठी महासंघाचे विशेष प्रयत्न.",
    excerptEn: "Championing public welfare beyond news reporting, the federation actively raised farmer relief demands and state transport labor concerns.",
    categoryMr: "सामाजिक कार्य",
    categoryEn: "Social Impact",
    readTime: "4 min read",
    tagColor: "border-[#287A18] text-[#287A18]"
  },
  {
    id: 6,
    source: "Press Trust of India (PTI)",
    sourceType: "National Wire Agency",
    dateMr: "१५ ऑगस्ट २०२६",
    dateEn: "August 15, 2026",
    headlineMr: "स्वातंत्र्य दिनानिमित्त निर्भय पत्रकारितेचा गौरव व ज्येष्ठ पत्रकारांचा राष्ट्रीय सन्मान",
    headlineEn: "Independence Day honor for fearless journalism: Veteran reporters felicitated nationwide",
    excerptMr: "लोकशाहीच्या रक्षणासाठी निर्भीडपणे सत्य मांडणाऱ्या महाराष्ट्रातील व देशभरातील शोधपत्रकारांना महासंघातर्फे राष्ट्रीय गौरव पुरस्काराने सन्मानित करण्यात आले.",
    excerptEn: "Annual national awards celebrated grassroots investigative journalists who uncovered public corruption under severe personal jeopardy.",
    categoryMr: "राष्ट्रीय पुरस्कार",
    categoryEn: "National Awards",
    readTime: "3 min read",
    tagColor: "border-[#E30620] text-[#E30620]"
  },
  {
    id: 7,
    source: "सामना",
    sourceType: "State Daily",
    dateMr: "१ ऑगस्ट २०२६",
    dateEn: "August 1, 2026",
    headlineMr: "वृत्तपत्र विक्रेते व एजन्सी प्रतिनिधींच्या कल्याणासाठी महासंघाच्या विशेष समितीची स्थापना",
    headlineEn: "Special welfare committee constituted for newspaper delivery agents and distributors",
    excerptMr: "घरोघरी वर्तमानपत्रे पोहोचवणाऱ्या हजारो वृत्तपत्र विक्रेत्यांना आरोग्य विमा व सामाजिक सुरक्षा मिळवून देण्यासाठी महासंघाने समिती गठित केली.",
    excerptEn: "Establishing the Newspaper Agency Development Committee to advocate medical insurance and occupational benefits for print distributors.",
    categoryMr: "कल्याणकारी योजना",
    categoryEn: "Welfare Schemes",
    readTime: "3 min read",
    tagColor: "border-[#172A4A] text-[#172A4A]"
  },
  {
    id: 8,
    source: "नवभारत",
    sourceType: "National Hindi Daily",
    dateMr: "२० जुलै २०२६",
    dateEn: "July 20, 2026",
    headlineMr: "पत्रकार हेल्पलाइन व तक्रार निवारण कक्षाद्वारे देशभरातील शेकडो प्रकरणांचे यशस्वी निवारण",
    headlineEn: "Journalist Help Desk successfully mediates hundreds of grievances across the country",
    excerptMr: "पत्रकारांवर दाखल खोट्या तक्रारी रद्द करणे व प्रशासकीय अडवणूक दूर करण्यात महासंघाच्या राष्ट्रीय मदत कक्षाने महत्वपूर्ण यश मिळवले आहे.",
    excerptEn: "Through sustained legal representations and institutional dialogue, the national help desk resolved critical press harassment disputes.",
    categoryMr: "मदत कक्ष यश",
    categoryEn: "Help Desk Success",
    readTime: "3 min read",
    tagColor: "border-[#2855A5] text-[#2855A5]"
  }
];
