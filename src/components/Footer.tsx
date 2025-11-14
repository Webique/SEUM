import { useLanguage } from '@/contexts/LanguageContext';
import seumLogo from '@/assets/seum-logo.jpg';
import { ShieldCheck, BadgeCheck, Target, MapPin, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const { language, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { key: 'about', label: t('nav.about') },
    { key: 'values', label: t('nav.values') },
    { key: 'services', label: t('nav.services') },
    { key: 'clients', label: t('nav.clients') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-primary-dark text-[hsl(var(--color-text-light))] pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row rtl:lg:flex-row-reverse justify-between gap-12">
          <div className="flex-1 space-y-6 max-w-md">
            <div className="flex items-center gap-4 rtl:space-x-reverse">
              <img
                width={200}
                height={200}
                src="images/logo-white3.png"
                alt="SEUM"
                className="h-12  object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide uppercase opacity-90">
                  {language === 'ar'
                    ? 'سيوم – للاستشارات القانونية'
                    : 'SEUM – For Legal Consultation'}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[hsl(var(--color-text-light))]/80 rtl:text-right">
              {language === 'ar'
                ? 'شركة محاماة سعودية تقدم استشارات قانونية واضحة وعملية للأعمال.'
                : 'Saudi law firm providing clear, practical legal advice for businesses.'}
            </p>

            <div className="flex flex-wrap gap-3">
              <FooterBadge
                icon={ShieldCheck}
                label={t('footer.badge.trusted')}
              />
              <FooterBadge
                icon={BadgeCheck}
                label={t('footer.badge.certified')}
              />
              <FooterBadge
                icon={Target}
                label={t('footer.badge.specialized')}
              />
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-4 rtl:text-right">
              {t('footer.quickLinks')}
            </h3>
            <nav className="space-y-2 text-sm rtl:text-right">
              {footerLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.key)}
                  className="block text-left rtl:text-right text-[hsl(var(--color-text-light))]/80 hover:text-[hsl(var(--color-text-light))] hover:underline transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column: Contact Us */}
          <div className="flex-1 min-w-[220px] space-y-4">
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-2 rtl:text-right">
              {t('contact.title')}
            </h3>
            <ul className="space-y-3 text-sm">
              <FooterContactItem
                icon={MapPin}
                text={t('footer.location')}
              />
              <FooterContactItem
                icon={Phone}
                text={t('contact.phone')}
                href="tel:+966530889481"
              />
              <FooterContactItem
                icon={Clock}
                text={t('footer.hours')}
              />
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-[hsl(var(--color-accent-bright))]/20 pt-4 text-center">
          <p className="text-xs text-[hsl(var(--color-text-light))]/70">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

interface BadgeProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const FooterBadge = ({ icon: Icon, label }: BadgeProps) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/10/60">
      <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/10">
        <Icon className="w-4 h-4 text-white/80" />
      </div>
      <span className="text-xs font-medium text-[hsl(var(--color-text-light))]/80">
        {label}
      </span>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  href?: string;
}

const FooterContactItem = ({ icon: Icon, text, href }: ContactItemProps) => {
  const content = (
    <div className="flex items-center gap-3 rtl:space-x-reverse">
      <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/10">
        <Icon className="w-4 h-4 text-white/80" />
      </div>
      <span className="text-sm text-[hsl(var(--color-text-light))]/80">{text}</span>
    </div>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="hover:opacity-100 hover:underline transition-opacity">
          {content}
        </a>
      </li>
    );
  }

  return <li>{content}</li>;
};
