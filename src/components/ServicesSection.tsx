// src/sections/ServicesSection.tsx  (or wherever it is)
import { useLanguage } from "@/contexts/LanguageContext";
import ThreeDCarousel, {
  ThreeDCarouselItem,
} from "@/components/lightswind/ThreeDCarousel";

export const ServicesSection = () => {
  const { t, language } = useLanguage();

  const items: ThreeDCarouselItem[] = [
    {
      id: 1,
      title: t("service1.title"),
      brand: "SEUM",
      description: t("service1.text"),
      tags:
        language === "ar"
          ? ["التقاضي", "النزاعات", "الرسوم المحددة"]
          : ["Litigation", "Disputes", "Capped fees"],
      imageUrl: "/images/LitigationandDisputeManagement.webp", // put any hero-like image
      link: "#contact",
    },
    {
      id: 2,
      title: t("service2.title"),
      brand: "SEUM",
      description: t("service2.text"),
      tags:
        language === "ar"
          ? ["الامتثال", "اللوائح", "تقليل المخاطر"]
          : ["Compliance", "Regulations", "Risk"],
      imageUrl: "/images/compliance.webp",
      link: "#contact",
    },
    {
      id: 3,
      title: t("service3.title"),
      brand: "SEUM",
      description: t("service3.text"),
      tags:
        language === "ar"
          ? ["الشركات", "العقود", "إعادة الهيكلة"]
          : ["Corporate", "Contracts", "Restructuring"],
      imageUrl: "/images/corporateContract.webp",
      link: "#contact",
    },
    {
      id: 4,
      title: t("service4.title"),
      brand: "SEUM",
      description: t("service4.text"),
      tags:
        language === "ar"
          ? ["العمل", "التوظيف", "الاتفاقيات"]
          : ["Employment", "Workplace", "Agreements"],
      imageUrl: "/images/EmploymentLegalConsultancy.webp",
      link: "#contact",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[hsl(var(--color-bg))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {language === "ar"
              ? "خدمات قانونية متكاملة تدعم نمو عملك وتضمن امتثال شركتك لأنظمة المملكة."
              : "Comprehensive legal services that support your growth and keep your business compliant in Saudi Arabia."}
          </p>
        </div>

        <ThreeDCarousel items={items} cardHeight={440} />
      </div>
    </section>
  );
};
