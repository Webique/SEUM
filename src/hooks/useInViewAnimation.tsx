import { useEffect, useRef, useState } from 'react';

type UseInViewAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
};

export const useInViewAnimation = (options: UseInViewAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('seum-card-in-view');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return {
    ref: elementRef,
    isVisible,
  };
};
