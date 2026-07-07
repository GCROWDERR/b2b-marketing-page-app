import { SupplyCapabilities } from "../supply/capabilities";
import { SupplyGoals } from "../supply/goals";
import { SupplyHero } from "../supply/hero";
import { SupplyHowItWorks } from "../supply/how-it-works";
import { SupplyRequirements } from "../supply/requirements";
import { SupplyStats } from "../supply/stats";
import { Layout } from "../shared/layout";

/** Supply partners landing page — Figma frame 190:8865. */
export function SupplyPage() {
  return (
    <Layout>
      <SupplyHero />
      <SupplyStats />
      <SupplyGoals />
      <SupplyCapabilities />
      <SupplyRequirements />
      <SupplyHowItWorks />
    </Layout>
  );
}
