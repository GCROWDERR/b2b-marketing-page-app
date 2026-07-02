import { Navigate, Route, Routes } from "react-router-dom";

import { MarketingAppShell } from "@/components/marketing/marketing-app-shell";
import { MarketingEnterprisePage } from "@/components/marketing/marketing-enterprise-page";
import { MarketingEnterprisePartnersPage } from "@/components/marketing/marketing-enterprise-partners-page";
import { MarketingLendersPage } from "@/components/marketing/marketing-lenders-page";
import { MarketingPartnersPlaceholderPage } from "@/components/marketing/marketing-partners-placeholder-page";

export default function App() {
  return (
    <MarketingAppShell>
      <Routes>
        <Route path="/" element={<MarketingEnterprisePage />} />
        <Route path="/lenders" element={<MarketingLendersPage />} />
        <Route path="/enterprise" element={<MarketingEnterprisePartnersPage />} />
        <Route
          path="/affiliate"
          element={
            <MarketingPartnersPlaceholderPage
              documentTitle="Bankrate B2B — Affiliate"
              kicker="Affiliate partners"
              title="Affiliate hub is on the way"
              description="Cross-vertical affiliate materials—integrations, proof points, and examples for public site owners—will live here, separate from private enterprise programs."
            />
          }
        />

        {/* Legacy paths from the removed /partners hub */}
        <Route path="/partners" element={<Navigate to="/" replace />} />
        <Route path="/partners/lenders" element={<Navigate to="/lenders" replace />} />
        <Route path="/partners/enterprise" element={<Navigate to="/enterprise" replace />} />
        <Route path="/partners/affiliate" element={<Navigate to="/affiliate" replace />} />
      </Routes>
    </MarketingAppShell>
  );
}
