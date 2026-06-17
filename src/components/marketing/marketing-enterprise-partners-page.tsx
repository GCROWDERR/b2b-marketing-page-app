import { useEffect } from "react";

import { BrushUnderline } from "@/components/ui/brush-underline";
import { Button, dispatchHeroButtonRadiusClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MarketingEnterpriseBenefits } from "./marketing-enterprise-benefits";
import { MarketingEnterpriseCaseStudies } from "./marketing-enterprise-case-studies";
import { MarketingEnterpriseIntegration } from "./marketing-enterprise-integration";
import { MarketingEnterpriseProof } from "./marketing-enterprise-proof";
import { DispatchFooter } from "@/components/dispatch/footer";
import { MarketingNav } from "./marketing-nav";
import { MarketingPartnersSalesForm } from "./marketing-partners-sales-form";

function EnterprisePartnersHero() {
  return (
    <section className="relative z-0 bg-background pb-2 pt-3 lg:pb-4 lg:pt-5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[32px] bg-[#13223b] lg:rounded-[56px]">
          <div
            className="pointer-events-none absolute -right-[25%] top-1/2 h-[130%] w-[75%] -translate-y-1/2 rounded-full bg-primary/30 blur-3xl lg:right-[-12%]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[-35%] right-[10%] h-[65%] w-[50%] rounded-full bg-amber-300/20 blur-3xl"
            aria-hidden
          />
          <div className="relative px-6 py-16 lg:px-14 lg:py-[120px] xl:px-[70px]">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Enterprise partnerships
            </p>
            <h1 className="mt-6 max-w-[640px] font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.12] tracking-[-2px] text-white">
              Integrate Bankrate directly into your{" "}
              <BrushUnderline textClassName="text-inherit">
                private ecosystem
              </BrushUnderline>
              .
            </h1>
            <p
              className="mt-6 max-w-[540px] text-base leading-relaxed text-[#f5f2eb] sm:text-[17px] sm:leading-[1.45]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              For large platforms and employers. Embed our decisioning engines,
              marketplace UI, and rate APIs into your proprietary portals —
              white-labelled, SSO-ready, and backed by a dedicated success team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="lg"
                className={cn(
                  dispatchHeroButtonRadiusClass,
                  "h-12 min-w-[200px] text-sm font-semibold"
                )}
                asChild
              >
                <a href="#contact-sales">Talk to enterprise sales</a>
              </Button>
              <Button
                variant="outline"
                color="white"
                size="lg"
                className={cn(dispatchHeroButtonRadiusClass, "h-12 text-sm font-semibold")}
                asChild
              >
                <a href="#integration-options">See integration options</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <div className="min-w-0 bg-background text-foreground antialiased">
      <MarketingNav />
      <EnterprisePartnersHero />
      <MarketingEnterpriseBenefits />
      <MarketingEnterpriseIntegration />
      <MarketingEnterpriseCaseStudies />
      <MarketingEnterpriseProof />
      <MarketingPartnersSalesForm />
      <DispatchFooter />
    </div>
  );
}
