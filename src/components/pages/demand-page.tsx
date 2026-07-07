import { SupplyHero } from "../supply/hero";
import { SupplyRequirements } from "../supply/requirements";
import { Integration } from "../shared/integration";
import { Layout } from "../shared/layout";
import { PartnersSalesForm } from "../shared/partners-sales-form";
import { StatsStrip } from "../shared/stats-strip";

export function DemandPage() {
  return (
    <Layout>
      <SupplyHero
        headline="Monetize your audience with Bankrate's financial marketplaces."
        description="Whether you run a finance blog, a YouTube channel, or a paid media operation — Bankrate has a program built for how you work."
        ctaLabel="See integration options"
        ctaHref="#demand-formats"
      />
      <Integration variant="demand" />
      <StatsStrip variant="demand" />
      <SupplyRequirements variant="faq" />
      <PartnersSalesForm variant="demand" />
    </Layout>
  );
}
