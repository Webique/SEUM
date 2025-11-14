import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export const CatalogueSection = () => {
  const { t } = useLanguage();

  const catalogueItems = [
    t('catalogue1'),
    t('catalogue2'),
    t('catalogue3'),
    t('catalogue4'),
    t('catalogue5'),
    t('catalogue6'),
  ];

  return (
    <section className="py-24 bg-[hsl(var(--color-bg))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('catalogue.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {catalogueItems.map((item, index) => (
              <CatalogueItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CatalogueItem = ({ item, index }: { item: string; index: number }) => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`flex items-start space-x-3 rtl:space-x-reverse p-6 bg-card rounded-xl border border-border card-interactive scroll-fade-in ${
        isVisible ? 'scroll-fade-in-visible' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
          <Check className="w-4 h-4 text-white/80" />
        </div>
      </div>
      <p className="text-card-foreground font-medium leading-relaxed">
        {item}
      </p>
    </div>
  );
};
