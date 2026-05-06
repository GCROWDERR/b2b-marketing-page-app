import { useEffect } from "react";

import { MarketingEnterpriseBenefits } from "./marketing-enterprise-benefits";
import { MarketingEnterpriseHero } from "./marketing-enterprise-hero";
import { MarketingEnterpriseIntegration } from "./marketing-enterprise-integration";
import { MarketingEnterpriseMission } from "./marketing-enterprise-mission";
import { MarketingEnterpriseProof } from "./marketing-enterprise-proof";
import { MarketingFooter } from "./marketing-footer";
import { MarketingNav } from "./marketing-nav";

export function MarketingEnterprisePage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Bankrate B2B — Partnerships";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="min-w-0 bg-background text-foreground antialiased">
      <div className="relative">
        <MarketingNav />
        <MarketingEnterpriseHero />
      </div>
      <MarketingEnterpriseProof />
      <MarketingEnterpriseBenefits />
      <MarketingEnterpriseIntegration />
      <MarketingEnterpriseMission />
      <MarketingFooter />
    </div>
  );
}
