import { Route, Routes } from "react-router-dom";

import { MarketingEnterprisePage } from "@/components/marketing/marketing-enterprise-page";
import { MarketingPage } from "@/components/marketing/marketing-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />
      <Route path="/enterprise" element={<MarketingEnterprisePage />} />
    </Routes>
  );
}
