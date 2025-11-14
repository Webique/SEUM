import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Scale, MessageSquare, Users2, Lightbulb } from 'lucide-react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export const ValuesSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('value1.title'),
      text: t('value1.text'),
    },
    {
      icon: Scale,
      title: t('value2.title'),
      text: t('value2.text'),
    },
    {
      icon: MessageSquare,
      title: t('value3.title'),
      text: t('value3.text'),
    },
    {
      icon: Users2,
      title: t('value4.title'),
      text: t('value4.text'),
    },
    {
      icon: Lightbulb,
      title: t('value5.title'),
      text: t('value5.text'),
    },
  ];

  return (
    <section id="values" className="py-24 bg-[hsl(var(--color-surface))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('values.title')}
          </h2>
        </div>

        {/* Timeline-style layout instead of cards */}
        <div className="max-w-4xl mx-auto relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 hidden sm:block">
            <div className="w-px h-full bg-[hsl(var(--color-border))]" />
          </div>

          <div className="space-y-8">
            {values.map((value, index) => (
              <ValueItem key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ValueItemProps {
  icon: typeof Shield;
  title: string;
  text: string;
}

const ValueItem = ({ value, index }: { value: ValueItemProps; index: number }) => {
  const { ref } = useInViewAnimation();

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ transitionDelay: `${index * 0.08}s` }}
      className="
        seum-card-animate
        group relative pl-4 sm:pl-16 pr-2
        cursor-default select-none touch-manipulation
        transition-transform duration-300 ease-out
        hover:-translate-y-1 active:-translate-y-[2px]
      "
    >
      {/* Circle on the line */}
      <div
        className="
          absolute top-1 sm:top-2 left-0 sm:left-4
          w-6 h-6 sm:w-8 sm:h-8 rounded-full
          flex items-center justify-center
          bg-[hsl(var(--color-surface))]
          border border-[hsl(var(--color-primary))]
          shadow-sm
          transition-all duration-300
          group-hover:bg-[hsl(var(--color-primary))] group-active:bg-[hsl(var(--color-primary))]
          group-hover:shadow-md group-active:shadow-md
        "
      >
        <value.icon
          className="
            w-3 h-3 sm:w-4 sm:h-4
            text-[hsl(var(--color-primary))]
            transition-colors duration-300
            group-hover:text-white group-active:text-white
          "
        />
      </div>

      {/* Content block */}
      <div
        className="
          rounded-2xl
          bg-[hsl(var(--color-surface))] 
          border border-[hsl(var(--color-border))]
          px-4 py-4 sm:px-6 sm:py-5
          shadow-sm
          transition-all duration-300
          hover:shadow-lg active:shadow-md
          hover:border-[hsl(var(--color-primary))]/70 active:border-[hsl(var(--color-primary))]/70
          hover:bg-[hsl(var(--color-primary))] active:bg-[hsl(var(--color-primary))]
        "
      >
        <div className="flex items-start justify-between gap-3">
          <h3
            className="
              text-base sm:text-lg font-semibold
              text-card-foreground
              transition-colors duration-300
              group-hover:text-white group-active:text-white
            "
          >
            {value.title}
          </h3>

          <span
            className="
              text-[0.65rem] sm:text-xs font-semibold tracking-[0.18em] uppercase
              px-2 py-1 rounded-full
              bg-[hsl(var(--color-accent-bright))]
              text-[hsl(var(--color-primary-dark))]
              transition-colors duration-300
              group-hover:bg-white group-active:bg-white
              group-hover:text-[hsl(var(--color-primary))] group-active:text-[hsl(var(--color-primary))]
            "
          >
            0{index + 1}
          </span>
        </div>

        <p
          className="
            mt-2 text-sm leading-relaxed
            text-muted-foreground
            transition-colors duration-300
            group-hover:text-white/85 group-active:text-white/85
          "
        >
          {value.text}
        </p>
      </div>
    </div>
  );
};
