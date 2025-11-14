// src/components/lightswind/ThreeDCarousel.tsx
import React, {
  useRef,
  useEffect,
  useState,
  TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ThreeDCarouselItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

interface ThreeDCarouselProps {
  items: ThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

const ThreeDCarousel: React.FC<ThreeDCarouselProps> = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 420,
}) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  // Auto-rotate
  useEffect(() => {
    if (autoRotate && isInView && !isHovering && items.length > 1) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  // Intersection observer
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Touch swipe handlers
  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0 pointer-events-none";
  };

  // Shared base classes for arrows
  const arrowBase =
    "absolute -translate-y-1/2 w-9 h-9 " +
    "bg-primary-dark/80 rounded-full flex items-center justify-center " +
    "text-white/80 hover:text-white hover:bg-primary-dark " +
    "z-30 shadow-md transition-all hover:scale-110";

  // On mobile we position them around the middle of the IMAGE area
  // On md+ we go back to full vertical center of the card
  const arrowVerticalClass = isMobile ? "top-[23%]" : "top-1/2";

  return (
    <div
      className="w-full flex items-center justify-center"
      ref={carouselRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative overflow-hidden h-[460px] w-full max-w-5xl">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ease-out ${getCardAnimationClass(
                index
              )}`}
            >
              <Card
                className="overflow-hidden bg-card/95 border border-white/10 shadow-sm hover:shadow-lg flex flex-col rounded-3xl"
                style={{ height: cardHeight }}
              >
                {/* Top image / gradient panel */}
                <div
                  className="relative p-6 flex items-center justify-center h-48 overflow-hidden"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="relative z-10 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2 tracking-wide">
                      {item.brand.toUpperCase()}
                    </h3>
                    <div className="w-12 h-1 bg-white mx-auto mb-2 rounded-full" />
                    <p className="text-sm opacity-90">{item.title}</p>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium mb-3">
                    {item.brand}
                  </p>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {item.description}
                  </p>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <button
                        type="button"
                        onClick={() => {
                          if (item.link.startsWith("#")) {
                            document
                              .querySelector(item.link)
                              ?.scrollIntoView({ behavior: "smooth" });
                          } else {
                            window.open(item.link, "_blank");
                          }
                        }}
                        className="text-sm text-muted-foreground flex items-center group relative"
                      >
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-muted-foreground transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation arrows – now visible on ALL sizes, but positioned differently on mobile */}
        {items.length > 1 && (
          <>
            <button
              className={`${arrowBase} ${arrowVerticalClass} left-2 md:left-4`}
              onClick={() =>
                setActive((prev) => (prev - 1 + items.length) % items.length)
              }
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              className={`${arrowBase} ${arrowVerticalClass} right-2 md:right-4`}
              onClick={() =>
                setActive((prev) => (prev + 1) % items.length)
              }
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                active === idx
                  ? "bg-foreground w-5"
                  : "bg-muted hover:bg-muted-foreground/60"
              }`}
              onClick={() => setActive(idx)}
              aria-label={`Go to item ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDCarousel;
