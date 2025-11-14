declare module "lightswind" {
  import * as React from "react";

  export interface SlidingLogoMarqueeItem {
    id: string;
    content: React.ReactNode;
    href?: string;
  }

  export interface SlidingLogoMarqueeProps {
    items: SlidingLogoMarqueeItem[];
    speed?: number;
    pauseOnHover?: boolean;
    enableBlur?: boolean;
    blurIntensity?: number;
    height?: string;
    width?: string;
    gap?: string;
    scale?: number;
    direction?: "horizontal" | "vertical";
    autoPlay?: boolean;
    backgroundColor?: string;
    showGridBackground?: boolean;
    className?: string;
    onItemClick?: (item: SlidingLogoMarqueeItem) => void;
    enableSpillEffect?: boolean;
    animationSteps?: number;
    showControls?: boolean;
  }

  export const SlidingLogoMarquee: React.FC<SlidingLogoMarqueeProps>;
}

