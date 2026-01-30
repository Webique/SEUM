import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.values': 'Our Values',
    'nav.services': 'Our Services',
    'nav.clients': 'Our Clients',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact Us',

    // Hero
    'hero.label': 'Saudi Law Firm',
    'hero.title': 'Your Legal Partner For Growth in Saudi Arabia',
    'hero.subtitle':
      'CEO legal advisory, Family Offices Governance, Board Governance',
    'hero.cta1': 'Speak to a Lawyer',
    'hero.cta2': 'View Our Services',

    // About
    'about.title': 'About Us',
    'about.text':
      'CEO legal advisory, Family Offices Governance, Board Governance',

    // Vision & Mission
    'about.vision.title': 'Vision',
    'about.vision.text':
      'To achieve the leading position as the most distinguished and trusted commercial legal consultancy firm in the Kingdom of Saudi Arabia.',

    'about.mission.title': 'Mission',
    'about.mission.text':
      "SEUM's mission is to empower businesses in the Kingdom of Saudi Arabia by providing specially tailored commercial legal consultations and solutions, stemming from extensive experience and deep practical insight.",

    // Key Strengths
    'strengths.title': 'Key Strengths',
    'strength1.title': 'Significant Experience & Practical Insight',
    'strength1.text':
      'SEUM combines deep legal know-how with real business understanding to help clients handle everyday legal and regulatory challenges.',
    'strength2.title': 'Tailored Service',
    'strength2.text':
      'We can act as your dedicated in-house counsel or simply add extra expertise to strengthen your existing legal team.',
    'strength3.title': 'Close Relationships',
    'strength3.text':
      "By knowing each client's business inside out, we deliver clear, relevant legal advice that supports confident decision-making.",

    // Values
    'values.title': 'Our Values',
    'value1.title': 'Integrity',
    'value1.text': 'We uphold the highest ethical standards in every decision and action.',
    'value2.title': 'Responsibility',
    'value2.text':
      'We manage budgets wisely, add value, and meet client needs while working efficiently as a team.',
    'value3.title': 'Communication',
    'value3.text':
      'We value open, timely, and respectful communication with clients and colleagues.',
    'value4.title': 'Teamwork & Collaboration',
    'value4.text': 'Combined efforts lead to greater success.',
    'value5.title': 'Innovation',
    'value5.text': 'We embrace new ideas and continuous improvement.',

    // Services
    'services.title': 'Our Services',
    'service1.title': 'Litigation & Dispute Management',
    'service1.text':
      'We provide capped-fee litigation support with a dedicated Partner as your single point of contact. From preparing responses to representing you in hearings and appeals, we handle the full process.',
    'service2.title': 'Compliance',
    'service2.text':
      'With deep knowledge of Saudi regulations, we help clients adapt to evolving laws, reduce risks, and stay compliant with growing regulatory demands.',
    'service3.title': 'Corporate & Contracts',
    'service3.text':
      'We support restructures, mergers, and contract needs by offering tailored legal guidance, ensuring compliance, and aligning with your business goals.',
    'service4.title': 'Employment Legal Consultancy',
    'service4.text':
      'Our lawyers provide on-site advice and practical solutions for employment law matters, including drafting agreements and resolving workplace issues.',

    // Catalogue
    'catalogue.title': 'Catalogue of Services',
    'catalogue1': 'Corporate & Company Services',
    'catalogue2': 'Mergers, Acquisitions & Alliances',
    'catalogue3': 'Litigation & Dispute Resolution',
    'catalogue4': 'Commercial & Regulatory Advisory',
    'catalogue5': 'Employment & Professional Services',
    'catalogue6': 'Investment & Capital Advisory',

    // Clients
    'clients.title': 'Clients',
    'clients.subtitle': 'Trusted by leading businesses across sectors.',


    // Why Choose Us
    'why.title': 'Why Choose Us?',
    'why.subtitle':
    'We are committed to providing clear, practical legal support that helps your business grow while staying fully compliant in Saudi Arabia.',
    'why.point1': 'Saudi-qualified lawyers with deep regulatory experience.',
    'why.point2': 'Practical business-focused advice that helps you manage your operations with ease and clarity.',
    'why.point3': 'Flexible engagement: ongoing counsel or specialist support.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.text':
      'Looking for clear, practical legal support in Saudi Arabia? Share your details and our team will get in touch.',
    'contact.name': 'Name',
    'contact.company': 'Company',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.badge.trusted': 'Trusted',
    'footer.badge.certified': 'Certified',
    'footer.badge.specialized': 'Specialized',
    'footer.location': 'Saudi Arabia',
    'footer.hours': 'Working Hours: Sunday to Thursday, 7 AM to 4 PM',
    'footer.rights': '© SEUM, All rights reserved.',
  },
  ar: {
    // Navbar
    'nav.about': 'من نحن',
    'nav.values': 'قيمنا',
    'nav.services': 'خدماتنا',
    'nav.clients': 'عملاؤنا',
    'nav.contact': 'تواصل',
    'nav.cta': 'تواصل معنا',

    // Hero
    'hero.label': 'شركة محاماة سعودية',
    'hero.title': 'شريكك القانوني للنمو في السعودية',
    'hero.subtitle':
      'الاستشارات القانونية للمدراء التنفيذيين، حوكمة المكاتب العائلية، حوكمة مجالس الإدارة',
    'hero.cta1': 'تحدث إلى محامٍ',
    'hero.cta2': 'استعرض خدماتنا',

    // About
    'about.title': 'من نحن',
    'about.text':
      'الاستشارات القانونية للمدراء التنفيذيين، حوكمة المكاتب العائلية، حوكمة مجالس الإدارة',

    // Vision & Mission
    'about.vision.title': 'الرؤية',
    'about.vision.text':
      'الوصول إلى المكانة الرائدة كأكثر شركة للاستشارات القانونية التجارية تميزًا وموثوقية في المملكة العربية السعودية.',

    'about.mission.title': 'الرسالة',
    'about.mission.text':
      'تتمثل رسالة سيوم في تمكين الشركات في المملكة العربية السعودية من خلال تقديم استشارات وحلول قانونية تجارية مصممة خصيصًا، نابعة من خبرة واسعة ورؤية عملية عميقة.',


    // Key Strengths
    'strengths.title': 'نقاط القوة',
    'strength1.title': 'خبرة كبيرة ورؤية عملية',
    'strength1.text':
      'يجمع سيوم بين المعرفة القانونية المتعمقة وفهم الأعمال لتقديم حلول عملية للتحديات القانونية والتنظيمية اليومية.',
    'strength2.title': 'خدمة مصممة حسب الاحتياج',
    'strength2.text':
      'يمكننا العمل كمستشارك القانوني الداخلي أو دعم فريقك القانوني القائم بخبرة إضافية متخصصة.',
    'strength3.title': 'علاقات وثيقة مع العملاء',
    'strength3.text':
      'من خلال فهم طبيعة عمل كل عميل عن قرب، نقدم استشارات قانونية واضحة وملائمة تدعم اتخاذ القرار بثقة.',

    // Values
    'values.title': 'قيمنا',
    'value1.title': 'النزاهة',
    'value1.text': 'نلتزم بأعلى المعايير الأخلاقية في كل قرار وتصرف.',
    'value2.title': 'المسؤولية',
    'value2.text':
      'ندير الميزانيات بكفاءة، ونضيف قيمة حقيقية، ونلبي احتياجات العملاء مع العمل بروح الفريق الواحد.',
    'value3.title': 'التواصل',
    'value3.text':
      'نحرص على تواصل واضح وفي الوقت المناسب وباحترام مع العملاء والزملاء.',
    'value4.title': 'العمل الجماعي والتعاون',
    'value4.text': 'العمل المشترك يقود إلى نتائج أفضل وأكثر استدامة.',
    'value5.title': 'الابتكار',
    'value5.text': 'نتبنى الأفكار الجديدة ونسعى للتحسين المستمر في أسلوب عملنا.',

    // Services
    'services.title': 'خدماتنا',
    'service1.title': 'التقاضي وإدارة النزاعات',
    'service1.text':
      'نقدم دعمًا في أعمال التقاضي وفق أتعاب محددة مع شريك مسؤول كنقطة اتصال واحدة، بدءًا من إعداد الردود وحتى التمثيل في الجلسات والاستئناف.',
    'service2.title': 'الامتثال والتنظيم',
    'service2.text':
      'نساعد العملاء على مواكبة الأنظمة السعودية المتغيرة، وتقليل المخاطر، والالتزام بالمتطلبات التنظيمية المتزايدة.',
    'service3.title': 'الشركات والعقود',
    'service3.text':
      'ندعم عمليات إعادة الهيكلة والاندماجات والعقود من خلال استشارات قانونية مصممة، تضمن الالتزام بالأنظمة وتحقيق أهداف أعمالكم.',
    'service4.title': 'الاستشارات العمالية',
    'service4.text':
      'يقدم محامونا استشارات عملية في أنظمة العمل، تشمل صياغة الاتفاقيات والتعامل مع قضايا العمل اليومية.',

    // Catalogue
    'catalogue.title': 'دليل الخدمات',
    'catalogue1': 'خدمات الشركات والأعمال',
    'catalogue2': 'الاندماجات والاستحواذات والتحالفات',
    'catalogue3': 'التقاضي وتسوية النزاعات',
    'catalogue4': 'الاستشارات التجارية والتنظيمية',
    'catalogue5': 'الخدمات المهنية والموارد البشرية',
    'catalogue6': 'الاستثمار ورأس المال',

    // Clients
    'clients.title': 'عملاؤنا',
    'clients.subtitle': 'نخدم شركات رائدة في مختلف القطاعات.',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.text':
      'تبحث عن دعم قانوني واضح وعملي في السعودية؟ شاركنا بياناتك وسيتواصل معك فريقنا.',
    'contact.name': 'الاسم',
    'contact.company': 'الشركة',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',

    // Why Choose Us
    'why.title': 'لماذا تختارنا؟',
    'why.subtitle':
      'نلتزم بتقديم دعم قانوني واضح وعملي يساعد أعمالك على النمو مع الالتزام الكامل بأنظمة المملكة العربية السعودية.',
    'why.point1': 'محامون سعوديون مؤهلون بخبرة تنظيمية عميقة.',
    'why.point2': 'استشارات عملية تساعدك على إدارة أعمالك بسهولة ووضوح.',
    'why.point3': 'مرونة في أسلوب العمل: مستشار قانوني مستمر أو دعم متخصص عند الحاجة.',

    // Footer
    'footer.quickLinks': 'روابط سريعة',
    'footer.badge.trusted': 'موثوق',
    'footer.badge.certified': 'معتمد',
    'footer.badge.specialized': 'متخصص',
    'footer.location': 'المملكة العربية السعودية',
    'footer.hours': 'أوقات العمل: الأحد إلى الخميس من 7 ص إلى 4 م',
    'footer.rights': '© سيوم، جميع الحقوق محفوظة.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily =
      language === 'ar' ? "'Cairo', 'Tajawal', sans-serif" : "'Inter', sans-serif";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
