import { MarketingStatPlus, MarketingStatTile } from "./marketing-stat-tile";
import { LENDERS_STATS } from "./marketing-stat-tooltips";
import { MarketingSectionShell } from "./marketing-section-shell";
import { StatTooltip } from "./stat-tooltip";

import { TooltipProvider } from "@/components/ui/tooltip";

export function MarketingLendersStats() {
  return (
    <MarketingSectionShell className="bg-background pb-12 lg:pb-16">
      <TooltipProvider>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LENDERS_STATS.map((stat) => (
            <div key={stat.label} className="relative">
              <MarketingStatTile
                value={
                  <>
                    {stat.value}
                    {stat.suffix ? <MarketingStatPlus /> : null}
                  </>
                }
                label={stat.label}
              />
              <StatTooltip {...stat.tooltip} />
            </div>
          ))}
        </div>
      </TooltipProvider>
    </MarketingSectionShell>
  );
}
