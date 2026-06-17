import { MarketingApp, MarketingMission } from "./marketing-app-mission";
import { MarketingEditorial } from "./marketing-editorial";
import { MarketingFeatures } from "./marketing-features";
import { DispatchFooter } from "@/components/dispatch/footer";
import { MarketingHero } from "./marketing-hero";
import { MarketingInsights } from "./marketing-insights";
import { MarketingNav } from "./marketing-nav";
import { MarketingPartner } from "./marketing-partner";
import { MarketingProof } from "./marketing-proof";
import { MarketingRates } from "./marketing-rates";

export function MarketingPage() {
  return (
    <div className="min-w-0 bg-background text-foreground antialiased">
      <div className="relative">
        <MarketingNav />
        <MarketingHero />
      </div>
      <MarketingProof />
      <MarketingRates />
      <MarketingInsights />
      <MarketingEditorial />
      <MarketingApp />
      <MarketingMission />
      <MarketingFeatures />
      <MarketingPartner />
      <DispatchFooter />
    </div>
  );
}
