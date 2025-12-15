import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setIsScrolled(y > 0); 
    };

    onScroll(); 
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Preload logos so swap is instant
    const logos = ['/images/logoo.png', '/images/logoAR.png'];
    logos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);


  const scrollToSection = (sectionId: string) => {
    setIsScrolled(true);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setIsMobileMenuOpen(false);
  };

  const logoSrc = language === 'ar' ? '/images/logoAR.png' : '/images/logoo.png';

  const navLinks = [
    { key: 'values', label: t('nav.values') },
    { key: 'services', label: t('nav.services') },
    { key: 'clients', label: t('nav.clients') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b ${isScrolled
        ? 'bg-white shadow-md'
        : 'bg-transparent border-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                width={200}
                height={200}
                src={logoSrc}
                alt="SEUM"
                className={`h-12 object-cover ${isScrolled ? '' : 'brightness-0 invert'}`}
              />
            </a>
          </div>


          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.key)}
                className={
                  isScrolled
                    ? 'font-medium text-slate-900 hover:text-slate-600'
                    : 'font-medium text-white hover:text-accent-bright'
                }
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* LANG + CTA (DESKTOP) */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className={
                isScrolled
                  ? 'font-medium text-slate-900 hover:text-slate-600'
                  : 'font-medium text-white hover:text-accent-bright'
              }
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>

            <Button
              onClick={() => scrollToSection('contact')}
              className={isScrolled ? '' : 'bg-white text-primary hover:bg-white'}
            >
              {t('nav.cta')}
            </Button>
          </div>

          {/* MOBILE: LANG + MENU */}
          <div className="lg:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className={
                isScrolled
                  ? 'text-sm text-slate-900'
                  : 'text-sm text-white'
              }
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-slate-900' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden ${isScrolled ? 'bg-white border-t border-slate-200' : 'bg-black/70'
              }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.key)}
                  className={
                    isScrolled
                      ? 'block w-full text-left rtl:text-right px-3 py-3 rounded-md text-slate-900 hover:bg-slate-100'
                      : 'block w-full text-left rtl:text-right px-3 py-3 rounded-md text-white hover:bg-white/10'
                  }
                >
                  {link.label}
                </button>
              ))}

              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4"
              >
                {t('nav.cta')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
