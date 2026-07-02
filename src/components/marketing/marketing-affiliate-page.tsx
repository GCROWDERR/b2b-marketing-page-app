import { useEffect } from "react";

import { MarketingEnterpriseIntegration } from "./marketing-enterprise-integration";
import { MarketingEnterpriseStatsStrip } from "./marketing-enterprise-stats-strip";
import { MarketingLayout } from "./marketing-layout";
import { MarketingLendersHero } from "./marketing-lenders-hero";
import { MarketingLendersRequirements } from "./marketing-lenders-requirements";
import { MarketingPartnersSalesForm } from "./marketing-partners-sales-form";

export function MarketingAffiliatePage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Bankrate B2B — Affiliate";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <MarketingLayout>
      <MarketingLendersHero
        headline="Monetize your audience with Bankrate's financial marketplaces."
        description="Whether you run a finance blog, a YouTube channel, or a paid media operation — Bankrate has a program built for how you work."
        ctaLabel="See integration options"
        ctaHref="#affiliate-formats"
      />
      <MarketingEnterpriseIntegration variant="affiliate" />
      <MarketingEnterpriseStatsStrip variant="affiliate" />
      <MarketingLendersRequirements variant="faq" />
      <MarketingPartnersSalesForm variant="affiliate" />
    </MarketingLayout>
  );
}
