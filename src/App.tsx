import { Route, Routes } from "react-router-dom";

import { MarketingEnterprisePage } from "@/components/marketing/marketing-enterprise-page";
import { MarketingPage } from "@/components/marketing/marketing-page";
import { MarketingPartnersHubPage } from "@/components/marketing/marketing-partners-hub-page";
import { MarketingPartnersPlaceholderPage } from "@/components/marketing/marketing-partners-placeholder-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />
      <Route path="/partners" element={<MarketingPartnersHubPage />} />
      <Route
        path="/partners/affiliate"
        element={
          <MarketingPartnersPlaceholderPage
            documentTitle="Bankrate B2B — Affiliate"
            kicker="Affiliate partners"
            title="Affiliate hub is on the way"
            description="Cross-vertical affiliate materials—integrations, proof points, and examples for public site owners—will live here, separate from private enterprise programs."
          />
        }
      />
      <Route path="/enterprise" element={<MarketingEnterprisePage />} />
    </Routes>
  );
}
