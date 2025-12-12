import { useLanguage } from "@/contexts/LanguageContext";
import {
  SlidingLogoMarquee,
  type SlidingLogoMarqueeItem,
} from "@/components/lightswind/sliding-logo-marquee";

export const ClientsSection = () => {
  const { t, language } = useLanguage();

  // Actual client list with logos & names
  const items: SlidingLogoMarqueeItem[] = [
    {
      id: "everbridge",
      content: (
        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-card border border-white/10 shadow-sm">
          <img
            src="/images/EverBridge.png"
            alt="Everbridge Capital"
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-sm font-medium text-muted-foreground text-center">
            Everbridge Capital
          </p>
        </div>
      ),
    },
    {
      id: "enat",
      content: (
        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-card border border-white/10 shadow-sm">
          <img
            src="/images/ENAT.png"
            alt="ENAT"
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-sm font-medium text-muted-foreground text-center">
            ENAT Engineering
          </p>
        </div>
      ),
    },
    {
      id: "arkad",
      content: (
        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-card border border-white/10 shadow-sm">
          <img
            src="/images/Arkad.png"
            alt="Arkad"
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-sm font-medium text-muted-foreground text-center">
            Arkad
          </p>
        </div>
      ),
    },
    {
      id: "vector",
      content: (
        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-card border border-white/10 shadow-sm">
          <img
            src="/images/Vector.png"
            alt="Vector Vostok"
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-sm font-medium text-muted-foreground text-center">
            Vector Vostok
          </p>
        </div>
      ),
    },
    {
      id: "viridi",
      content: (
        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-card border border-white/10 shadow-sm">
          <img
            src="/images/Viridi.png"
            alt="Viridi"
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-sm font-medium text-muted-foreground text-center">
            Viridi
          </p>
        </div>
      ),
    },
    {
      id: "omoda",
      content: (
        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-card border border-white/10 shadow-sm">
          <img
            src="/images/5.jpg"
            alt="omoda"
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-sm font-medium text-muted-foreground text-center">
            omoda
          </p>
        </div>
      ),
    },
    {
      id: "veda-estate",
      content: (
        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-card border border-white/10 shadow-sm">
          <img
            src="/images/6.jpg"
            alt="veda estate"
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-sm font-medium text-muted-foreground text-center">
            veda estate
          </p>
        </div>
      ),
    },
    {
      id: "jaecoo",
      content: (
        <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-card border border-white/10 shadow-sm">
          <img
            src="/images/7.jpg"
            alt="jaecoo"
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-sm font-medium text-muted-foreground text-center">
            jaecoo
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="clients" className="py-24 bg-[hsl(var(--color-surface))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("clients.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("clients.subtitle")}
          </p>
        </div>

        {/* Force slider to LTR so it looks the same in EN/AR */}
        <div className="flex justify-center" dir="ltr">
          <SlidingLogoMarquee
            items={items}
            height="200px"
            pauseOnHover={true}
            enableBlur={false}
            showGridBackground={false}
            width="100%"
            gap="1.5rem"
            scale={1}
            direction="horizontal"
            autoPlay={true}
            backgroundColor="transparent"
            enableSpillEffect={false}
            // smaller steps -> faster animation
            animationSteps={8}
            speed={15}
            showControls={false}
          />
        </div>
      </div>
    </section>
  );
};
