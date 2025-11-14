// src/sections/WhyChooseUsSection.tsx
import { useLanguage } from '@/contexts/LanguageContext';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useInViewAnimation();
  const isArabic = language === 'ar';

  const points = [
    t('why.point1'),
    t('why.point2'),
    t('why.point3'),
  ];

  return (
    <section className="py-16 bg-[hsl(var(--color-bg))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          className={`max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden scroll-fade-in ${
            isVisible ? 'scroll-fade-in-visible' : ''
          }`}
        >
          <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white px-6 sm:px-10 lg:px-16 py-10 sm:py-12">
            {/* subtle glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />

            <div className="relative z-10 text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                {t('why.title')}
              </h2>
              <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto leading-relaxed">
                {t('why.subtitle')}
              </p>
            </div>

            <div
              className={`relative z-10 grid gap-6 sm:gap-8 ${
                isArabic ? 'rtl:grid-cols-1 sm:rtl:grid-cols-3' : ''
              } grid-cols-1 sm:grid-cols-3`}
            >
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center text-sm sm:text-base text-white/90"
                >
                  <div className="flex items-center gap-3 rtl:flex-row-reverse">
                    <span className="inline-flex items-center justify-center rounded-full border border-white/40 w-7 h-7 sm:w-8 sm:h-8 bg-black/10">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span className="max-w-xs text-left rtl:text-right leading-relaxed">
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
