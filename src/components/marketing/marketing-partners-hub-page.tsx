import { useEffect } from "react";

import { MarketingEnterpriseIntegration } from "./marketing-enterprise-integration";
import { MarketingEnterpriseMission } from "./marketing-enterprise-mission";
import { MarketingEnterpriseProof } from "./marketing-enterprise-proof";
import { MarketingFooter } from "./marketing-footer";
import { MarketingNav } from "./marketing-nav";
import { MarketingPartnersHubHero } from "./marketing-partners-hub-hero";
import { MarketingPartnersPaths } from "./marketing-partners-paths";

export function MarketingPartnersHubPage() {
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
        <MarketingPartnersHubHero />
      </div>
      <MarketingPartnersPaths />
      <MarketingEnterpriseProof />
      <MarketingEnterpriseIntegration />
      <MarketingEnterpriseMission />
      <MarketingFooter />
    </div>
  );
}
