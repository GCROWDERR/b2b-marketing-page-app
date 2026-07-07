import { Bank, FlourishArrows3, GlobeWorld, TallBuilding, type BankrateIcon } from "@bankrate/icons-react";

import type { IconOffsetColor, IconOffsetVariant } from "@/components/common/flourish/icon-offset";
import { Heading2 } from "@/components/ui/typography";

import { MarketingPathCard } from "./path-card";
import { marketingSectionLeadCenter } from "./copy";
import { MarketingCopyColumn, MarketingSectionShell } from "./section-shell";

const paths: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: BankrateIcon;
  iconVariant: IconOffsetVariant;
  iconColor: IconOffsetColor;
}[] = [
  {
    id: "supply",
    eyebrow: "Advertise with Bankrate",
    title: "Lenders & financial institutions",
    description:
      "Reach in-market consumers across mortgage, deposits, and credit cards through Bankrate's marketplace programs.",
    href: "/lenders",
    cta: "Explore advertiser programs",
    icon: Bank,
    iconVariant: 1,
    iconColor: "blue",
  },
  {
    id: "enterprise-private",
    eyebrow: "Integrate with Bankrate",
    title: "Enterprise partnerships",
    description:
      "Embed Bankrate experiences in your product for private or captive audiences—powered by widgets, APIs, and SSO.",
    href: "/enterprise",
    cta: "View enterprise options",
    icon: TallBuilding,
    iconVariant: 2,
    iconColor: "indigo",
  },
  {
    id: "affiliate",
    eyebrow: "Monetize with Bankrate",
    title: "Publishers & Affiliates",
    description:
      "Add Bankrate widgets and links to your site and earn revenue from your audience with scalable, low-touch setups.",
    href: "/affiliate",
    cta: "Explore affiliate programs",
    icon: GlobeWorld,
    iconVariant: 3,
    iconColor: "green",
  },
];

export function MarketingPartnersPaths() {
  return (
    <MarketingSectionShell
      id="partner-paths"
      className="scroll-mt-[calc(82px+1rem)] bg-background"
    >
      <div className="flex flex-col gap-10">
        <MarketingCopyColumn className="flex flex-col gap-4 text-center">
          <Heading2 className="relative text-pretty text-headings">
            <FlourishArrows3
              fill="var(--color-electric-500)"
              className="absolute bottom-12 right-full hidden h-[4.5rem] w-[12.5rem] rotate-45 md:block"
              aria-hidden="true"
            />
            Three ways to partner with Bankrate
          </Heading2>
          <p className={marketingSectionLeadCenter}>
            Choose the path that fits your audience and commercial goals. Each option has
            different requirements, timelines, and support.
          </p>
        </MarketingCopyColumn>

        <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-stretch md:justify-center">
          {paths.map((path, index) => (
            <MarketingPathCard
              key={path.id}
              showCornerEmphasis={index === paths.length - 1}
              icon={path.icon}
              iconVariant={path.iconVariant}
              iconColor={path.iconColor}
              kicker={path.eyebrow}
              title={path.title}
              description={path.description}
              cta={path.cta}
              href={path.href}
              className="w-full md:max-w-[25rem] md:flex-1"
            />
          ))}
        </div>
      </div>
    </MarketingSectionShell>
  );
}
