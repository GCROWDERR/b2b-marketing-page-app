import type { ReactNode } from "react";

import { FlourishLine1 } from "@bankrate/icons-react";

import { cn } from "@/lib/utils";

export type LineEmphasisProps = {
  fillColor?: string;
  emphasis: ReactNode;
  className?: string;
  underlineClassName?: string;
  before?: ReactNode;
  after?: ReactNode;
};

/** Hand-drawn underline flourish from brand-identity homepage. */
export function LineEmphasis({
  fillColor,
  className,
  underlineClassName,
  before,
  emphasis,
  after,
}: LineEmphasisProps) {
  return (
    <>
      <span className="relative z-[1]">{before}</span>
      <span className={cn("relative inline-block", className)}>
        <FlourishLine1
          fill={fillColor ?? "var(--color-electric-500)"}
          preserveAspectRatio="none"
          className={cn(
            "pointer-events-none absolute -bottom-3 left-0 z-0 w-full",
            underlineClassName
          )}
          height={14}
          aria-hidden="true"
        />
        <span className="relative z-[1]">{emphasis}</span>
      </span>
      <span className="relative z-[1]">{after}</span>
    </>
  );
}
