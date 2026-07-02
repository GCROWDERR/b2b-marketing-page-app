import { useEffect } from "react";

import { MarketingEnterpriseBenefits } from "./marketing-enterprise-benefits";
import { MarketingEnterpriseHero } from "./marketing-enterprise-hero";
import { MarketingEnterpriseCaseStudies } from "./marketing-enterprise-case-studies";
import { MarketingEnterpriseIntegration } from "./marketing-enterprise-integration";
import { MarketingEnterpriseStatsStrip } from "./marketing-enterprise-stats-strip";
import { MarketingLayout } from "./marketing-layout";
import { MarketingPartnersPaths } from "./marketing-partners-paths";

export function MarketingEnterprisePage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Bankrate B2B — Partnerships";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <MarketingLayout>
      <MarketingEnterpriseHero />
      <MarketingPartnersPaths />
      <MarketingEnterpriseStatsStrip />
      <MarketingEnterpriseBenefits />
      <MarketingEnterpriseIntegration />
      <MarketingEnterpriseCaseStudies />
    </MarketingLayout>
  );
}
