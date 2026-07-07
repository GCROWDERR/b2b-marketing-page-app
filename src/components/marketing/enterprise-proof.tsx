import { EyebrowSm, Heading2 } from "@/components/ui/typography";

import { marketingEyebrowSection } from "./copy";
import { MarketingStatPlus, MarketingStatTile } from "./stat-tile";
import { ENTERPRISE_PROOF_STATS } from "./stat-tooltips";
import { MarketingSectionShell } from "./section-shell";

export function MarketingEnterpriseProof() {
  return (
    <MarketingSectionShell className="bg-background pt-12 pb-12 lg:py-16">
      <div className="flex flex-col gap-10">
        <div>
          <EyebrowSm as="p" className={marketingEyebrowSection}>
            Partnership Proof Points
          </EyebrowSm>
          <Heading2 className="mt-4 max-w-(--section-copy) text-pretty text-headings">
            Trusted by the market, proven by the data.
          </Heading2>
        </div>
        <div className="grid w-full gap-4 md:grid-cols-3">
          {ENTERPRISE_PROOF_STATS.map((stat) => (
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
