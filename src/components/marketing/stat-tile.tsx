import type { ReactNode } from "react";

import { FlourishPlus } from "@bankrate/icons-react";

import { Heading2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type MarketingStatTileProps = {
  value: ReactNode;
  label: string;
  className?: string;
};

/** B2B marketing stat pill — aligned with brand-identity Stat component. */
export function MarketingStatTile({ value, label, className }: MarketingStatTileProps) {
  return (
    <div
      className={cn(
        "flex h-[104px] items-center gap-[18px] rounded-[24px] bg-card p-2.5",
        className
      )}
    >
      <div className="flex h-full w-[126px] shrink-0 items-center justify-center rounded-[14px] bg-blue-50 p-3">
        <Heading2 as="span" className="text-primary">
          {value}
        </Heading2>
      </div>
      <p className="min-w-0 flex-1 text-base font-bold leading-snug tracking-tighter text-blue-900 text-balance">
        {label}
      </p>
    </div>
  );
}

export function MarketingStatPlus() {
  return <FlourishPlus className="ml-0.5 mt-1 size-4" aria-hidden />;
}
