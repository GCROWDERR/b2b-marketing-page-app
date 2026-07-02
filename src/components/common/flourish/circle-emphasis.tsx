import type { ReactNode } from "react";

import { FlourishCircle } from "@bankrate/icons-react";

import { cn } from "@/lib/utils";

export type CircleEmphasisProps = {
  fillColor?: string;
  emphasis: ReactNode;
  className?: string;
  before?: ReactNode;
  after?: ReactNode;
};

/** Hand-drawn circle flourish from brand-identity homepage. */
export function CircleEmphasis({
  fillColor,
  className,
  before,
  emphasis,
  after,
}: CircleEmphasisProps) {
  return (
    <>
      <span className="relative z-[1]">{before}</span>
      <span className={cn("relative inline-block", className)}>
        <FlourishCircle
          fill={fillColor ?? "var(--color-electric-500)"}
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-5/3 w-6/5 -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        <span className="relative z-[1]">{emphasis}</span>
      </span>
      <span className="relative z-[1]">{after}</span>
    </>
  );
}
