import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const FLOURISH_UNDERLINE_SRC = "/images/hero-headline-underline.svg";
export const FLOURISH_SPARKLE_SRC = "/images/hero-sparkle-r.svg";

export type FlourishUnderlineProps = {
  children: ReactNode;
  className?: string;
  textClassName?: string;
  underlineSrc?: string;
  /** Underline width in px — matches Figma hero at 127px. */
  underlineWidth?: number;
  underlineClassName?: string;
  mobileUnderlineClassName?: string;
};

/**
 * Thin headline flourish underline from dispatch hero — responsive desktop/mobile placement.
 */
export function FlourishUnderline({
  children,
  className,
  textClassName,
  underlineSrc = FLOURISH_UNDERLINE_SRC,
  underlineWidth = 127,
  underlineClassName,
  mobileUnderlineClassName,
}: FlourishUnderlineProps) {
  return (
    <span className={cn("relative inline", className)}>
      <span className={textClassName}>{children}</span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-1 left-0 hidden lg:block",
          underlineClassName
        )}
        style={{ width: underlineWidth }}
      >
        <img
          src={underlineSrc}
          alt=""
          width={underlineWidth}
          height={4}
          className="h-auto w-full"
        />
      </span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-1 left-[42%] max-w-[55%] lg:hidden",
          mobileUnderlineClassName
        )}
        style={{ width: underlineWidth }}
      >
        <img
          src={underlineSrc}
          alt=""
          width={underlineWidth}
          height={4}
          className="h-auto w-full"
        />
      </span>
    </span>
  );
}

export type FlourishSparkleProps = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
};

/** Corner sparkle flourish — e.g. map card corner in dispatch tracker. */
export function FlourishSparkle({
  className,
  src = FLOURISH_SPARKLE_SRC,
  width = 60,
  height = 71,
}: FlourishSparkleProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className={cn(
        "pointer-events-none absolute right-0 top-0 z-20 w-12 translate-x-1/3 -translate-y-1/2 lg:w-[3.75rem]",
        className
      )}
    />
  );
}
