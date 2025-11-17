import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Settings, Handshake } from 'lucide-react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export const StrengthsSection = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      icon: Brain,
      title: t('strength1.title'),
      text: t('strength1.text'),
    },
    {
      icon: Settings,
      title: t('strength2.title'),
      text: t('strength2.text'),
    },
    {
      icon: Handshake,
      title: t('strength3.title'),
      text: t('strength3.text'),
    },
  ];

  return (
    <section className="py-24 bg-[hsl(var(--color-bg))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('strengths.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <StrengthCard key={index} strength={strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Strength {
  icon: typeof Brain;
  title: string;
  text: string;
}

const StrengthCard = ({ strength, index }: { strength: Strength; index: number }) => {
  const { ref } = useInViewAnimation();

  return (
    <Card
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ transitionDelay: `${index * 0.1}s` }}
      className="
        seum-card seum-card-animate
        group cursor-pointer select-none touch-manipulation

        transition-all duration-300 ease-out
        hover:bg-[hsl(var(--color-primary))] hover:border-[hsl(var(--color-primary))] hover:shadow-lg
        active:bg-[hsl(var(--color-primary))] active:border-[hsl(var(--color-primary))] active:shadow-md
      "
    >
      <CardHeader className="text-center">
        <div
          className="
            mb-4 inline-flex p-3 rounded-xl
            bg-[hsl(var(--color-primary-light))]
            transition-colors duration-300
            group-hover:bg-white/15 group-active:bg-white/20
            mx-auto
          "
        >
          <strength.icon
            className="
              w-8 h-8 text-white/80
              transition-colors duration-300
              group-hover:text-white group-active:text-white
            "
          />
        </div>
        <CardTitle
          className="
            text-xl font-semibold text-card-foreground
            transition-colors duration-300
            group-hover:text-white group-active:text-white
            text-center
          "
        >
          {strength.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p
          className="
            text-muted-foreground leading-relaxed
            transition-colors duration-300
            group-hover:text-white/80 group-active:text-white/80
            text-center
          "
        >
          {strength.text}
        </p>
      </CardContent>
    </Card>
  );
};
