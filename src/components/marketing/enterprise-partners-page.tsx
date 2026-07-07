import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { EyebrowLg, Heading1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingHeroBody } from "./copy";
import { MarketingBrushHeroShell } from "./brush-hero-shell";
import { MarketingEnterpriseCaseStudies } from "./enterprise-case-studies";
import { MarketingEnterpriseIntegration } from "./enterprise-integration";
import { MarketingEnterpriseStatsStrip } from "./enterprise-stats-strip";
import {
  MarketingLendersHowItWorks,
  marketingEnterpriseHowItWorksSteps,
} from "./lenders-how-it-works";
import { MarketingLayout } from "./layout";
import { MarketingPartnersSalesForm } from "./partners-sales-form";

function EnterprisePartnersHero() {
  return (
    <MarketingBrushHeroShell contentClassName="lg:py-24 xl:py-[120px]">
      <EyebrowLg as="p" className="sr-only">
        Enterprise partnerships
      </EyebrowLg>
      <Heading1 className="max-w-[599px] leading-[1.2] tracking-tight text-white">
        Give your audience exclusive access to Bankrate&apos;s financial marketplace
      </Heading1>
      <p className={cn("mt-8 max-w-[534px]", marketingHeroBody)}>
        From private mortgage auctions to embedded rate tools, Bankrate builds custom
        financial experiences for enterprise partners — at scale.
      </p>
      <div className="mt-8">
        <Button size="lg" href="#integration-options" className="min-w-[240px]">
          See integration options
        </Button>
      </div>
    </MarketingBrushHeroShell>
  );
}

export function MarketingEnterprisePartnersPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Bankrate B2B — Enterprise";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <MarketingLayout>
      <EnterprisePartnersHero />
      <MarketingEnterpriseIntegration variant="enterprise" />
      <MarketingLendersHowItWorks
        eyebrow="How it works"
        heading="From first conversation to live integration"
        steps={marketingEnterpriseHowItWorksSteps}
        brushBackground
      />
      <MarketingEnterpriseStatsStrip variant="enterprise" />
      <MarketingEnterpriseCaseStudies />
      <MarketingPartnersSalesForm variant="enterprise" />
    </MarketingLayout>
  );
}
