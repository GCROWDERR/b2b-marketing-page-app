import { useEffect } from "react";

import { MarketingLendersCapabilities } from "./marketing-lenders-capabilities";
import { MarketingLendersGoals } from "./marketing-lenders-goals";
import { MarketingLendersHero } from "./marketing-lenders-hero";
import { MarketingLendersHowItWorks } from "./marketing-lenders-how-it-works";
import { MarketingLendersRequirements } from "./marketing-lenders-requirements";
import { MarketingLendersStats } from "./marketing-lenders-stats";
import { MarketingLayout } from "./marketing-layout";

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
