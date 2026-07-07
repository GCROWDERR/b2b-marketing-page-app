import { Button } from "@/components/ui/button";
import { EyebrowLg, Heading1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingHeroBody } from "../shared/copy";
import { BrushHeroShell } from "../shared/brush-hero-shell";
import { CaseStudies } from "../shared/case-studies";
import { Integration } from "../shared/integration";
import { StatsStrip } from "../shared/stats-strip";
import { ENTERPRISE_WHY_STATS } from "../shared/stat-tooltips";
import {
  SupplyHowItWorks,
  enterpriseHowItWorksSteps,
} from "../supply/how-it-works";
import { Layout } from "../shared/layout";
import { PartnersSalesForm } from "../shared/partners-sales-form";

function EnterprisePartnersHero() {
  return (
    <BrushHeroShell contentClassName="lg:py-24 xl:py-[120px]">
      <EyebrowLg as="p" className="sr-only">
        Enterprise partnerships
      </EyebrowLg>
      <Heading1 className="max-w-[778px] leading-[1.2] tracking-tight text-white">
        Give your audience exclusive access to Bankrate&apos;s financial marketplace
      </Heading1>
      <p className={cn("mt-8 max-w-[778px]", marketingHeroBody)}>
        From private mortgage auctions to embedded rate tools, Bankrate builds custom
        financial experiences for enterprise partners — at scale.
      </p>
      <div className="mt-8">
        <Button size="lg" href="#integration-options" className="min-w-[240px]">
          See integration options
        </Button>
      </div>
    </BrushHeroShell>
  );
}

export function EnterprisePage() {
  return (
    <Layout>
      <EnterprisePartnersHero />
      <Integration variant="enterprise" />
      <SupplyHowItWorks
        eyebrow="How it works"
        heading="From first conversation to live integration"
        steps={enterpriseHowItWorksSteps}
        brushBackground
      />
      <StatsStrip
        stats={ENTERPRISE_WHY_STATS}
        eyebrow="Why Bankrate"
        heading="The financial platform your audience already trusts"
        headingAlign="center"
        stackClassName="gap-20"
        className="py-16 lg:py-[120px]"
      />
      <CaseStudies />
      <PartnersSalesForm variant="enterprise" />
    </Layout>
  );
}
