// src/sections/ServicesSection.tsx  (or wherever it is)
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      id: 1,
      title: t("service1.title"),
      brand: "SEUM",
      description: t("service1.text"),
      tags:
        language === "ar"
          ? ["التقاضي", "النزاعات", "الرسوم المحددة"]
          : ["Litigation", "Disputes", "Capped fees"],
      imageUrl: "/images/1.jpg",
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
      imageUrl: "/images/2.jpg",
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
      imageUrl: "/images/3.jpg",
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
      imageUrl: "/images/4.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden bg-card/95 border border-white/10 shadow-sm hover:shadow-lg flex flex-col rounded-3xl"
            >
              {/* Top image */}
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  backgroundImage: `url(${service.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium mb-3">
                  {service.brand}
                </p>
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
