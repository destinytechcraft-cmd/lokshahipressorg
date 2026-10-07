export interface CommitteeItem {
  id: number;
  nameMr: string;
  nameEn: string;
  categoryMr: string;
  categoryEn: string;
}

// All 78 Committees exactly as enumerated in PDF Pages 7, 8, 9
export const all78Committees: CommitteeItem[] = [
  { id: 1, nameMr: "मंत्रालय कामकाज समिती", nameEn: "Ministry Affairs Committee", categoryMr: "प्रशासन", categoryEn: "Administration" },
  { id: 2, nameMr: "पोलीस विकास समिती", nameEn: "Police Welfare Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" },
  { id: 3, nameMr: "महिला अन्याय अत्याचार निर्मूलन समिती", nameEn: "Women Anti-Atrocities & Justice Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 4, nameMr: "न्यूज पेपर एजन्सी विकास समिती", nameEn: "Newspaper Agency Development Committee", categoryMr: "मीडिया", categoryEn: "Media" },
  { id: 5, nameMr: "ग्राहक संरक्षण विकास समिती", nameEn: "Consumer Protection Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 6, nameMr: "आरोग्य कर्मचारी विकास समिती", nameEn: "Healthcare Workers Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 7, nameMr: "क्रीडा विकास समिती", nameEn: "Sports Development Committee", categoryMr: "क्रीडा", categoryEn: "Sports" },
  { id: 8, nameMr: "शिक्षक वर्ग विकास समिती", nameEn: "Teachers Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 9, nameMr: "प्राध्यापक वर्ग विकास समिती", nameEn: "Professors Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 10, nameMr: "महिला बचत गट उद्योग विकास समिती", nameEn: "Women Self-Help Groups (SHG) Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 11, nameMr: "एस.टी. कर्मचारी विकास समिती", nameEn: "MSRTC State Transport Workers Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 12, nameMr: "व्यापारी विकास समिती", nameEn: "Traders & Merchants Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 13, nameMr: "शेतकरी विकास समिती", nameEn: "Farmers Welfare Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 14, nameMr: "बँक विकास समिती", nameEn: "Banking Sector Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 15, nameMr: "कार, ट्रक ड्रायव्हर विकास समिती", nameEn: "Car & Truck Drivers Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 16, nameMr: "नॅशनल व राज्य रस्ते विकास समिती", nameEn: "National & State Highways Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 17, nameMr: "गुत्तेदार विकास समिती", nameEn: "Contractors Welfare Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 18, nameMr: "इंग्लिश स्कूल विकास समिती", nameEn: "English Medium Schools Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 19, nameMr: "रिक्षा चालक, मालक विकास समिती", nameEn: "Auto Rickshaw Drivers & Owners Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 20, nameMr: "प्रवासी विकास समिती", nameEn: "Commuters & Passengers Welfare Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 21, nameMr: "पर्यटन विकास समिती", nameEn: "Tourism Development Committee", categoryMr: "पर्यटन", categoryEn: "Tourism" },
  { id: 22, nameMr: "पाणी पुरवठा विकास समिती", nameEn: "Water Supply Welfare Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 23, nameMr: "डॉक्टर विकास समिती", nameEn: "Doctors & Medical Practitioners Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 24, nameMr: "आयुर्वेदिक विकास समिती", nameEn: "Ayurveda Development Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 25, nameMr: "विद्यार्थी विकास समिती", nameEn: "Students Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 26, nameMr: "टी.व्ही., यूट्यूब चॅनेल विकास समिती", nameEn: "TV & YouTube News Channels Committee", categoryMr: "मीडिया", categoryEn: "Media" },
  { id: 27, nameMr: "ऊर्जा विकास समिती", nameEn: "Energy & Power Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 28, nameMr: "प्रशासन विभाग विकास समिती", nameEn: "Administrative Affairs Committee", categoryMr: "प्रशासन", categoryEn: "Administration" },
  { id: 29, nameMr: "राजकारण विकास समिती", nameEn: "Political Analysis & Civic Affairs Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 30, nameMr: "सामाजिक कार्य विकास समिती", nameEn: "Social Work & Philanthropy Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 31, nameMr: "शेती पूरक जोड धंदे विकास समिती", nameEn: "Agro-Allied Businesses Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 32, nameMr: "शेती आधारित प्रक्रिया उद्योग विकास समिती", nameEn: "Agro-Processing Industries Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 33, nameMr: "व्यसनमुक्ती विकास समिती", nameEn: "De-Addiction & Rehab Welfare Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 34, nameMr: "उद्योग विकास समिती", nameEn: "Industries & MSME Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 35, nameMr: "जिल्हा कोर कमिटी", nameEn: "District Core Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 36, nameMr: "विभागीय कार्यकारणी विकास समिती", nameEn: "Divisional Executive Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 37, nameMr: "तंटा मुक्ती विकास समिती", nameEn: "Dispute-Free Village & Harmony Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" },
  { id: 38, nameMr: "समाजकल्याण विकास समिती", nameEn: "Social Welfare Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 39, nameMr: "सरपंच, ग्रामपंचायत विकास समिती", nameEn: "Sarpanch & Gram Panchayat Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 40, nameMr: "जिल्हा परिषद विकास समिती", nameEn: "Zilla Parishad Affairs Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 41, nameMr: "पंचायत राज विकास समिती", nameEn: "Panchayati Raj Empowerment Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 42, nameMr: "दारू बंदी विकास समिती", nameEn: "Liquor Prohibition & Awareness Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 43, nameMr: "वजन मापे विकास समिती", nameEn: "Weights & Measures Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 44, nameMr: "वसतिगृह विकास समिती", nameEn: "Hostels Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 45, nameMr: "महिला व बाल कल्याण विकास समिती", nameEn: "Women & Child Welfare Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 46, nameMr: "बालवाडी, अंगणवाडी विकास समिती", nameEn: "Anganwadi & Balwadi Workers Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 47, nameMr: "नर्सेस व ब्रदर्स विकास समिती", nameEn: "Nursing Staff & Healthcare Workers Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 48, nameMr: "शिक्षण विकास समिती", nameEn: "Education Reforms Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 49, nameMr: "नागरी समस्या विकास समिती", nameEn: "Civic Issues & Urban Affairs Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 50, nameMr: "अतिक्रमण धारक विकास समिती", nameEn: "Encroachment & Rehabilitation Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 51, nameMr: "कामगार कल्याण विकास समिती", nameEn: "Labor Welfare Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 52, nameMr: "एन.जी.ओ. विकास समिती", nameEn: "NGOs Coordination Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 53, nameMr: "अस्वच्छ कामगार विकास समिती", nameEn: "Sanitation Workers Welfare Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 54, nameMr: "पाणी विकास समिती", nameEn: "Water Resources & Irrigation Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 55, nameMr: "विभागीय विकास समिती", nameEn: "Divisional Regional Development Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 56, nameMr: "अर्थ नियोजन विकास समिती", nameEn: "Financial Planning & Economic Welfare Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 57, nameMr: "सी.एस.आर. फंड विकास समिती", nameEn: "CSR Funds Utilization Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 58, nameMr: "लोकशाही पत्रकार कार्यक्रम समिती, मुंबई", nameEn: "Lokshahi Events Committee, Mumbai", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 59, nameMr: "महाराष्ट्र सरकारी कर्मचारी समिती", nameEn: "Maharashtra Government Employees Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 60, nameMr: "मराठी, हिंदी कलाकार विकास समिती", nameEn: "Marathi & Hindi Artists Committee", categoryMr: "कला व संस्कृती", categoryEn: "Art & Culture" },
  { id: 61, nameMr: "रिक्षा, टॅक्सी चालक मालक विकास समिती", nameEn: "Taxi & Cab Operators Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 62, nameMr: "तृतीय पंथी विकास समिती", nameEn: "Transgender Community Rights Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 63, nameMr: "पशु, पक्षी, प्राणी विकास समिती", nameEn: "Animal Welfare & Veterinary Committee", categoryMr: "पर्यावरण", categoryEn: "Environment" },
  { id: 64, nameMr: "एस.टी. महामंडळ कर्मचारी विकास समिती", nameEn: "State Road Transport Corporation Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 65, nameMr: "हॉटेल अँड बार विकास समिती", nameEn: "Hospitality & Restaurant Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 66, nameMr: "शालेय शिक्षण विकास समिती", nameEn: "Primary School Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 67, nameMr: "माध्यमिक शिक्षण विकास समिती", nameEn: "Secondary Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 68, nameMr: "उच्च शिक्षण विकास समिती", nameEn: "Higher Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 69, nameMr: "कनिष्ठ महाविद्यालय विकास समिती", nameEn: "Junior College Affairs Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 70, nameMr: "तांत्रिक व व्यावसायिक शिक्षण विकास समिती", nameEn: "Technical & Vocational Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 71, nameMr: "सहकार क्षेत्र विकास समिती", nameEn: "Cooperative Sector Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 72, nameMr: "अन्न व औषध प्रशासन विकास समिती", nameEn: "Food & Drug Administration Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 73, nameMr: "पर्यावरण संरक्षण विकास समिती", nameEn: "Environmental Conservation Committee", categoryMr: "पर्यावरण", categoryEn: "Environment" },
  { id: 74, nameMr: "माहिती तंत्रज्ञान (IT) विकास समिती", nameEn: "Information Technology (IT) Committee", categoryMr: "तंत्रज्ञान", categoryEn: "Technology" },
  { id: 75, nameMr: "युवा व क्रीडा प्रबोधन विकास समिती", nameEn: "Youth & Sports Empowerment Committee", categoryMr: "क्रीडा", categoryEn: "Sports" },
  { id: 76, nameMr: "दिव्यांग कल्याण विकास समिती", nameEn: "Divyang & Special Needs Welfare Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 77, nameMr: "गृहनिर्माण व सोसायटी विकास समिती", nameEn: "Housing Societies Welfare Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 78, nameMr: "कायदा व सुव्यवस्था विकास समिती", nameEn: "Law & Order Assistance Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" }
];

// Leadership designations strictly as per PDF Pages 15 & 16:
// Photo + Name + Designation + State + Short Profile
export const leadershipMembers = [
  {
    roleMr: "राष्ट्रीय अध्यक्ष",
    roleEn: "National President",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  },
  {
    roleMr: "राष्ट्रीय कार्याध्यक्ष",
    roleEn: "National Working President",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  },
  {
    roleMr: "राष्ट्रीय उपाध्यक्ष",
    roleEn: "National Vice President",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  },
  {
    roleMr: "राष्ट्रीय महामंत्री",
    roleEn: "National General Secretary",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  },
  {
    roleMr: "राष्ट्रीय महासचिव",
    roleEn: "National Secretary General",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  },
  {
    roleMr: "राष्ट्रीय संघटन मंत्री",
    roleEn: "National Organizing Secretary",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  },
  {
    roleMr: "महाराष्ट्र प्रदेशाध्यक्ष",
    roleEn: "Maharashtra State President",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  },
  {
    roleMr: "राज्य कार्याध्यक्ष",
    roleEn: "State Working President",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  },
  {
    roleMr: "राज्य उपाध्यक्ष",
    roleEn: "State Vice President",
    nameMr: "नाव",
    nameEn: "Name",
    stateMr: "[राज्य]",
    stateEn: "[State]",
    profileMr: "[Short Profile]",
    profileEn: "[Short Profile]"
  }
];

// Future Roadmap 8 Phases strictly matching PDF Pages 11 & 12
export const futureRoadmapPhases = [
  {
    phase: "PHASE 01",
    titleMr: "संघटन विस्तार",
    titleEn: "Organisational Expansion",
    descMr: "भारताच्या विविध राज्यांमध्ये महासंघाचे संघटनात्मक जाळे मजबूत करणे.",
    descEn: "Strengthening the organisational network across various states of India."
  },
  {
    phase: "PHASE 02",
    titleMr: "Journalist Help Desk",
    titleEn: "Journalist Help Desk",
    descMr: "पत्रकारांच्या प्रश्नांसाठी राष्ट्रीय पातळीवर संपर्क व मार्गदर्शन व्यवस्था विकसित करणे.",
    descEn: "Developing a national-level contact and guidance mechanism for journalists' issues."
  },
  {
    phase: "PHASE 03",
    titleMr: "प्रशिक्षण व कौशल्य विकास",
    titleEn: "Training & Skill Development",
    descMr: "डिजिटल पत्रकारिता, सोशल मीडिया, तथ्य पडताळणी, सायबर सुरक्षा, कायदेशीर जागरूकता आणि आधुनिक पत्रकारितेसाठी प्रशिक्षण उपक्रम व पत्रकार कार्यशाळेचे आयोजन.सोबतच Meet the Press कार्यक्रम, पत्रकार सुरक्षा व हक्क संरक्षण अभियान, माध्यम संशोधन व अभ्यास प्रकल्प,मानवाधिकार जनजागृती उपक्रम,पर्यावरण संरक्षण मोहिमा,पत्रकारिता नैतिकता विषयक मार्गदर्शन,स्मरणिका, नियतकालिके आणि डिजिटल प्रकाशन,सामाजिक सेवा आणि जनहिताचे विशेष अभियान",
    descEn: "Training programs and journalist workshops on digital journalism, social media, fact checking, cyber security, legal awareness, Meet the Press events, and public interest initiatives."
  },
  {
    phase: "PHASE 04",
    titleMr: "पत्रकार हक्क अभियान",
    titleEn: "Journalist Rights Campaign",
    descMr: "पत्रकारांच्या न्याय्य हक्क आणि प्रश्नांसाठी राष्ट्रीय स्तरावर जनजागृती व संघटनात्मक अभियान.",
    descEn: "National awareness campaigns and advocacy drives for journalists' legitimate rights and issues."
  },
  {
    phase: "PHASE 05",
    titleMr: "सामाजिक जनहित अभियान",
    titleEn: "Public Welfare Initiative",
    descMr: "देशभरातील जनहिताचे प्रश्न संबंधित शासन-प्रशासनापर्यंत पोहोचवण्यासाठी सामाजिक उपक्रम.",
    descEn: "Social initiatives to bring public interest issues across the country to relevant government administrations."
  },
  {
    phase: "PHASE 06",
    titleMr: "Digital Journalist Network",
    titleEn: "Digital Journalist Network",
    descMr: "देशभरातील सदस्य पत्रकारांना जोडणारे डिजिटल नेटवर्क तयार करणे.",
    descEn: "Creating a digital network connecting member journalists across India."
  },
  {
    phase: "PHASE 07",
    titleMr: "National Media & Journalist Convention",
    titleEn: "National Media & Journalist Convention",
    descMr: "देशभरातील पत्रकारांना एका व्यासपीठावर आणण्यासाठी राष्ट्रीय स्तरावरील परिषद/अधिवेशन व देशव्यापी चर्चासत्रांचे आयोजन.",
    descEn: "Organizing national-level conventions and nationwide symposiums to bring journalists together on one platform."
  },
  {
    phase: "PHASE 08",
    titleMr: "Research & Documentation",
    titleEn: "Research & Documentation",
    descMr: "पत्रकारांचे प्रश्न, पत्रकारितेतील बदल आणि सामाजिक प्रश्नांवर अभ्यास व दस्तऐवजीकरण.",
    descEn: "Study and documentation of journalists' issues, media evolution, and social questions."
  }
];

// Event Cards specifications matching PDF Page 13:
// प्रत्येक Event Card मध्ये: कार्यक्रमाचे नाव, 📍 ठिकाण, 📅 दिनांक, 👥 आयोजक / समिती, 📝 कार्यक्रमाची माहिती, 📷 फोटो, 🎥 व्हिडिओ
export const sampleEvents = [
  {
    id: 1,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  },
  {
    id: 2,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  },
  {
    id: 3,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  }
];
