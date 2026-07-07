import { Navigate, Route, Routes } from "react-router-dom";

import { MarketingAppShell } from "@/components/marketing/app-shell";
import { MarketingAffiliatePage } from "@/components/marketing/affiliate-page";
import { MarketingAmazonCaseStudyPage } from "@/components/marketing/amazon-case-study-page";
import { MarketingHubPage } from "@/components/marketing/hub-page";
import { MarketingEnterprisePartnersPage } from "@/components/marketing/enterprise-partners-page";
import { MarketingLendersPage } from "@/components/marketing/lenders-page";

export default function App() {
  return (
    <MarketingAppShell>
      <Routes>
        <Route path="/" element={<MarketingHubPage />} />
        <Route path="/lenders" element={<MarketingLendersPage />} />
        <Route path="/enterprise" element={<MarketingEnterprisePartnersPage />} />
        <Route path="/case-studies/amazon" element={<MarketingAmazonCaseStudyPage />} />
        <Route path="/affiliate" element={<MarketingAffiliatePage />} />

        {/* Legacy paths from the removed /partners hub */}
        <Route path="/partners" element={<Navigate to="/" replace />} />
        <Route path="/partners/lenders" element={<Navigate to="/lenders" replace />} />
        <Route path="/partners/enterprise" element={<Navigate to="/enterprise" replace />} />
        <Route path="/partners/affiliate" element={<Navigate to="/affiliate" replace />} />
      </Routes>
    </MarketingAppShell>
  );
}
