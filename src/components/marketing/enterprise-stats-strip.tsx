import { MarketingStatPlus, MarketingStatTile } from "./stat-tile";
import {
  AFFILIATE_PROOF_STATS,
  ENTERPRISE_STATS,
  ENTERPRISE_WHY_STATS,
  type MarketingStatDefinition,
} from "./stat-tooltips";
import { MarketingSectionShell } from "./section-shell";
import { StatTooltip } from "./stat-tooltip";

import { EyebrowSm, Heading1, Heading2, Heading3 } from "@/components/ui/typography";
import { TooltipProvider } from "@/components/ui/tooltip";

import { marketingEyebrowSection } from "./copy";

type MarketingEnterpriseStatsStripProps = {
  variant?: "homepage" | "enterprise" | "affiliate";
};

export function MarketingEnterpriseStatsStrip({
  variant = "homepage",
}: MarketingEnterpriseStatsStripProps) {
  if (variant === "affiliate") {
    return (
      <MarketingSectionShell className="bg-background py-16 lg:py-20">
        <div className="flex flex-col gap-16">
          <Heading2 className="text-center text-pretty text-headings">
            What affiliate partners are seeing
          </Heading2>
          <div className="grid gap-8 lg:grid-cols-2">
            {AFFILIATE_PROOF_STATS.map((stat) => (
              <div
                key={stat.title}
                className="flex flex-col gap-6 rounded-3xl bg-blue-900 p-8 lg:p-12"
              >
                <Heading1 className="text-blue-200">{stat.value}</Heading1>
                <div className="flex flex-col gap-3">
                  <Heading3 className="text-white">{stat.title}</Heading3>
                  <p className="text-base leading-relaxed tracking-tighter text-gray-200">
                    {stat.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MarketingSectionShell>
    );
  }

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
