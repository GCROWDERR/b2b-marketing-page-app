import { FlourishStars } from "@bankrate/icons-react";

import { cn } from "@/lib/utils";

export type FlourishSparkleProps = {
  className?: string;
  fillColor?: string;
  width?: number;
  height?: number;
};

/** Sparkle cluster flourish from brand-identity (FlourishStars). */
export function FlourishSparkle({
  className,
  fillColor = "var(--color-electric-500)",
  width,
  height,
}: FlourishSparkleProps) {
  return (
    <FlourishStars
      fill={fillColor}
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      style={
        width || height
          ? { width: width ?? height, height: height ?? width }
          : undefined
      }
    />
  );
}
