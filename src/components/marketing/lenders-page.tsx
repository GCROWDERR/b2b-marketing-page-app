import { useEffect } from "react";

import { MarketingLendersCapabilities } from "./lenders-capabilities";
import { MarketingLendersGoals } from "./lenders-goals";
import { MarketingLendersHero } from "./lenders-hero";
import { MarketingLendersHowItWorks } from "./lenders-how-it-works";
import { MarketingLendersRequirements } from "./lenders-requirements";
import { MarketingLendersStats } from "./lenders-stats";
import { MarketingLayout } from "./layout";

/** Lenders & financial institutions landing page — Figma frame 190:8865. */
export function MarketingLendersPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Bankrate B2B — Lenders & Financial Institutions";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <MarketingLayout>
      <MarketingLendersHero />
      <MarketingLendersStats />
      <MarketingLendersGoals />
      <MarketingLendersCapabilities />
      <MarketingLendersRequirements />
      <MarketingLendersHowItWorks />
    </MarketingLayout>
  );
}
