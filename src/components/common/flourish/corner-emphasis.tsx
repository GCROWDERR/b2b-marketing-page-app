import { FlourishCorner } from "@bankrate/icons-react";

import { cn } from "@/lib/utils";

export type CornerEmphasisProps = {
  fillColor?: string;
  className?: string;
};

export function CornerEmphasis({ fillColor, className }: CornerEmphasisProps) {
  return (
    <FlourishCorner
      aria-hidden="true"
      fill={fillColor ?? "var(--color-electric-400)"}
      className={cn(
        "pointer-events-none absolute -top-10 -right-11 size-12",
        className,
      )}
    />
  );
}
