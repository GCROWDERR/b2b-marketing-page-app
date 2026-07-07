import { StatPlus, StatTile } from "../shared/stat-tile";
import { SUPPLY_STATS } from "../shared/stat-tooltips";
import { SectionShell } from "../shared/section-shell";
import { StatTooltip } from "../shared/stat-tooltip";

import { TooltipProvider } from "@/components/ui/tooltip";

export function SupplyStats() {
  return (
    <SectionShell className="bg-background pb-12 lg:pb-16">
      <TooltipProvider>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPLY_STATS.map((stat) => (
            <div key={stat.label} className="relative">
              <StatTile
                value={
                  <>
                    {stat.value}
                    {stat.suffix ? <StatPlus /> : null}
                  </>
                }
                label={stat.label}
              />
              <StatTooltip {...stat.tooltip} />
            </div>
          ))}
        </div>
      </TooltipProvider>
    </SectionShell>
  );
}
