import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

export const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = 'info@seum.com.sa';

    const subject = `SEUM website enquiry - ${formData.name || ''}${
      formData.company ? ` (${formData.company})` : ''
    }`;

    const bodyLines = [
      'Details from SEUM website contact form:',
      '',
      `Name: ${formData.name}`,
      `Company: ${formData.company || '-'}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ];

    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    // Open default email client
    window.location.href = mailtoUrl;

    toast({
      title: 'Email prepared',
      description:
        "Your email app has been opened with the message details. Please review and click send.",
    });
  };

  const { ref, isVisible } = useInViewAnimation();

  return (
    <section id="contact" className="py-24 bg-[hsl(var(--color-bg))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            {t('contact.text')}
          </p>

          {/* <div className="inline-flex items-center space-x-3 rtl:space-x-reverse text-foreground font-semibold text-xl">
            <Phone className="w-6 h-6 text-primary" />
            <a
              href="tel:+966530889481"
              className="hover:text-primary transition-colors"
            >
              {t('contact.phone')}
            </a>
          </div> */}
        </div>

        {/* Form + Map */}
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          className={`grid lg:grid-cols-2 gap-10 scroll-fade-in  ${
            isVisible ? 'scroll-fade-in-visible' : ''
          }`}
        >
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-stone-300 border  border-border/70 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md "
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.name')}
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background border-border focus-visible:ring-2 focus-visible:ring-primary/60"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.company')}
                </label>
                <Input
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-background border-border focus-visible:ring-2 focus-visible:ring-primary/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('contact.email')}
              </label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background border-border focus-visible:ring-2 focus-visible:ring-primary/60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('contact.message')}
              </label>
              <Textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-background border-border resize-none focus-visible:ring-2 focus-visible:ring-primary/60"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg group"
            >
              {t('contact.send')}
              <Send className="ml-2 rtl:mr-2 rtl:ml-0 w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Button>

          </form>

          {/* Google Map */}
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              title="SEUM Location Map"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3620.073934527076!2d46.64523696899414!3d24.861324310302734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee57a5cbf8e53%3A0x88cc649afcbc3e8a!2zVGhhYmV0IGludmVzdG1lbnQg2KvYp9io2Kog2YTZhNil2LPYqtir2YXYp9ix!5e0!3m2!1sen!2suk!4v1763397005251!5m2!1sen!2suk"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
