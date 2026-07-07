import { HubBenefits } from "../hub/benefits";
import { HubHero } from "../hub/hero";
import { CaseStudies } from "../shared/case-studies";
import { Integration } from "../shared/integration";
import { StatsStrip } from "../shared/stats-strip";
import { Layout } from "../shared/layout";
import { PartnersPaths } from "../hub/partners-paths";

export function HubPage() {
  return (
    <Layout>
      <HubHero />
      <PartnersPaths />
      <StatsStrip />
      <HubBenefits />
      <Integration />
      <CaseStudies />
    </Layout>
  );
}
