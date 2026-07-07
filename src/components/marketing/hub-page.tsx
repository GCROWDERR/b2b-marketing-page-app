import { useEffect } from "react";

import { MarketingEnterpriseBenefits } from "./enterprise-benefits";
import { MarketingEnterpriseHero } from "./enterprise-hero";
import { MarketingEnterpriseCaseStudies } from "./enterprise-case-studies";
import { MarketingEnterpriseIntegration } from "./enterprise-integration";
import { MarketingEnterpriseStatsStrip } from "./enterprise-stats-strip";
import { MarketingLayout } from "./layout";
import { MarketingPartnersPaths } from "./partners-paths";

export function MarketingHubPage() {
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
