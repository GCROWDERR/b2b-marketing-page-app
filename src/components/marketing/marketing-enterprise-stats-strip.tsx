import { MarketingStatPlus, MarketingStatTile } from "./marketing-stat-tile";
import {
  ENTERPRISE_STATS,
  ENTERPRISE_WHY_STATS,
  type MarketingStatDefinition,
} from "./marketing-stat-tooltips";
import { MarketingSectionShell } from "./marketing-section-shell";
import { StatTooltip } from "./stat-tooltip";

import { EyebrowSm, Heading2 } from "@/components/ui/typography";
import { TooltipProvider } from "@/components/ui/tooltip";

import { marketingEyebrowSection } from "./marketing-copy";

type MarketingEnterpriseStatsStripProps = {
  variant?: "homepage" | "enterprise";
};

export function MarketingEnterpriseStatsStrip({
  variant = "homepage",
}: MarketingEnterpriseStatsStripProps) {
  if (variant === "enterprise") {
    return (
      <MarketingSectionShell className="bg-background py-16 lg:py-[120px]">
        <div className="flex flex-col gap-20">
          <div className="mx-auto flex max-w-(--section-copy) flex-col items-center gap-4 text-center">
            <EyebrowSm as="p" className={marketingEyebrowSection}>
              Why Bankrate
            </EyebrowSm>
            <Heading2 className="text-pretty text-headings">
              The financial platform your audience already trusts
            </Heading2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ENTERPRISE_WHY_STATS.map((stat) => (
              <MarketingStatTile
                key={stat.label}
                value={
                  <>
                    {stat.value}
                    {stat.suffix ? <MarketingStatPlus /> : null}
                  </>
                }
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </MarketingSectionShell>
    );
  }

  return (
    <MarketingSectionShell className="bg-background">
      <div className="flex flex-col gap-10">
        <Heading2 className="text-pretty text-headings">
          Trusted by the market, proven by the data.
        </Heading2>
        <TooltipProvider>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ENTERPRISE_STATS.map((stat: MarketingStatDefinition) => (
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
      </div>
    </MarketingSectionShell>
  );
}
