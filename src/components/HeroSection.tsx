import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const { language, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center pt-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8">
        {/* Label */}
        <div
          className="hero-fade-up inline-block mb-6"
          style={{ animationDelay: '0.12s' }}
        >
          <span className="text-accent text-[0.7rem] md:text-xs font-semibold tracking-[0.18em] uppercase bg-white/10 px-4 py-2 rounded-full border border-white/20">
            {t('hero.label')}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight hero-fade-up"
          style={{ animationDelay: '0.24s' }}
        >
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto hero-fade-up"
          style={{ animationDelay: '0.36s' }}
        >
          {t('hero.subtitle')}
        </p>

        {/* Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 hero-fade-up"
          style={{ animationDelay: '0.48s' }}
        >
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="group"
          >
            {t('hero.cta1')}
            <ArrowRight
              className={`${language === 'ar' ? 'rotate-180' : ''} ml-2 transition-transform group-hover:translate-x-1`}
              size={20}
            />
          </Button>

          <Button
            onClick={() => scrollToSection('services')}
            size="lg"
            variant="outline"
            className="border-accent-bright hover:bg-accent-bright/20 transition-all duration-300"
          >
            {t('hero.cta2')}
          </Button>
        </div>
      </div>
    </section>
  );
};
