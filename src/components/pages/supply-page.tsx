import { SupplyCapabilities } from "../supply/capabilities";
import { SupplyGoals } from "../supply/goals";
import { SupplyHero } from "../supply/hero";
import { SupplyHowItWorks } from "../supply/how-it-works";
import { SupplyRequirements } from "../supply/requirements";
import { StatsStrip } from "../shared/stats-strip";
import { SUPPLY_STATS } from "../shared/stat-tooltips";
import { Layout } from "../shared/layout";

/** Supply partners landing page — Figma frame 190:8865. */
export function SupplyPage() {
  return (
    <Layout>
      <SupplyHero />
      <StatsStrip
        stats={SUPPLY_STATS}
        showTooltips
        columns={3}
        className="pb-12 lg:pb-16"
      />
      <SupplyGoals />
      <SupplyCapabilities />
      <SupplyRequirements />
      <SupplyHowItWorks />
    </Layout>
  );
}
