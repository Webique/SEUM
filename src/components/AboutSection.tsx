import { useLanguage } from '@/contexts/LanguageContext';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export const AboutSection = () => {
  const { t, language } = useLanguage();

  const {
    ref: visionRef,
    isVisible: visionVisible,
  } = useInViewAnimation();
  const {
    ref: missionRef,
    isVisible: missionVisible,
  } = useInViewAnimation();

  const isArabic = language === 'ar';

  return (
    <section id="about" className="py-24 bg-[hsl(var(--color-surface))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t('about.text')}
          </p>
        </div>

        <div className="space-y-20 max-w-6xl mx-auto">
          {/* Vision row */}
          <div
            ref={visionRef as React.Ref<HTMLDivElement>}
            className={`grid md:grid-cols-2 gap-10 items-center scroll-fade-in ${
              visionVisible ? 'scroll-fade-in-visible' : ''
            }`}
          >
            {/* Text */}
            <div className={isArabic ? 'md:order-2 text-right' : ''}>
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t('about.vision.text')}
              </p>
            </div>

            {/* Image card */}
            <div className={isArabic ? 'md:order-1' : ''}>
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-[hsl(var(--color-bg))]">
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/10 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/about-vision.png"
                  alt={isArabic ? 'رؤية سيوم' : 'SEUM Vision illustration'}
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Mission row (alternating layout) */}
          <div
            ref={missionRef as React.Ref<HTMLDivElement>}
            className={`grid md:grid-cols-2 gap-10 items-center scroll-fade-in ${
              missionVisible ? 'scroll-fade-in-visible' : ''
            }`}
          >
            {/* Image card */}
            <div className={isArabic ? 'md:order-2' : ''}>
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-[hsl(var(--color-bg))]">
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/10 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/about-mission.png"
                  alt={isArabic ? 'رسالة سيوم' : 'SEUM Mission illustration'}
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Text */}
            <div className={isArabic ? 'md:order-1 text-right' : ''}>
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t('about.mission.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
