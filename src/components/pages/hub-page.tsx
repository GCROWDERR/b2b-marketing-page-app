import { HubBenefits } from "../hub/benefits";
import { HubHero } from "../hub/hero";
import { CaseStudies } from "../shared/case-studies";
import { Integration } from "../shared/integration";
import { StatsStrip } from "../shared/stats-strip";
import { ENTERPRISE_STATS } from "../shared/stat-tooltips";
import { Layout } from "../shared/layout";
import { PartnersPaths } from "../hub/partners-paths";

export function HubPage() {
  return (
    <Layout>
      <HubHero />
      <PartnersPaths />
      <StatsStrip
        stats={ENTERPRISE_STATS}
        showTooltips
        heading="Trusted by the market, proven by the data."
      />
      <HubBenefits />
      <Integration />
      <CaseStudies />
    </Layout>
  );
}
