import type { ReactNode } from "react";

import { FlourishPlus } from "@bankrate/icons-react";

import { Heading2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type StatTileProps = {
  value: ReactNode;
  label: string;
  className?: string;
};

/** B2B marketing stat pill — aligned with brand-identity Stat component. */
export function StatTile({ value, label, className }: StatTileProps) {
  return (
    <div
      className={cn(
        "flex h-[104px] items-center gap-[18px] rounded-[24px] bg-card p-2.5",
        className
      )}
    >
      <div className="flex h-full w-[126px] shrink-0 items-center justify-center rounded-[14px] bg-blue-50 p-3">
        <Heading2
          as="span"
          className="inline-flex items-baseline justify-center whitespace-nowrap text-primary"
        >
          {value}
        </Heading2>
      </div>
      <p className="min-w-0 flex-1 text-base font-bold leading-snug tracking-tighter text-blue-900 text-balance">
        {label}
      </p>
    </div>
  );
}

export function StatPlus() {
  return (
    <FlourishPlus
      className="relative -top-1 ml-0.5 inline size-4 shrink-0"
      aria-hidden
    />
  );
}
