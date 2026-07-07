import { LENDERS_IMG } from "./lenders-assets";

import { EyebrowSm, Heading2, Heading3 } from "@/components/ui/typography";

import { marketingBody, marketingEyebrowSection } from "./copy";
import { MarketingCopyColumn, MarketingSectionShell } from "./section-shell";

const capabilities = [
  {
    title: "Marketplace Placements",
    description: "Appear where consumers are actively comparing products.",
  },
  {
    title: "Geo & Audience Targeting",
    description: "Target by state, intent signal, credit profile, and more.",
  },
  {
    title: "Measurement & Reporting",
    description: "Clear performance data tied to real consumer actions.",
  },
] as const;

export function MarketingLendersCapabilities() {
  return (
    <MarketingSectionShell className="bg-background">
      <div className="flex flex-col gap-16">
        <MarketingCopyColumn className="flex flex-col gap-4 text-center">
          <EyebrowSm as="p" className={marketingEyebrowSection}>
            Capabilities
          </EyebrowSm>
          <Heading2 className="text-pretty text-headings">
            Built for financial institutions at every stage.
          </Heading2>
        </MarketingCopyColumn>
        <div className="grid gap-6 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-[34px] bg-card p-4"
            >
              <div className="flex flex-col gap-4 p-4">
                <Heading3 className="text-blue-900">{item.title}</Heading3>
                <p className={marketingBody}>{item.description}</p>
              </div>
              <div className="mt-auto overflow-hidden rounded-lg">
                <img
                  src={LENDERS_IMG.capabilityCard}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </MarketingSectionShell>
  );
}
