import {
  Clock,
  Compare,
  LockSecure,
  type BankrateIcon,
} from "@bankrate/icons-react";

import {
  IconOffset,
  type IconOffsetColor,
  type IconOffsetVariant,
} from "@/components/common/flourish/icon-offset";
import { EyebrowSm, Heading2, Heading4 } from "@/components/ui/typography";

import { marketingBodySm, marketingCardIcon, marketingEyebrowSection } from "./marketing-copy";
import { MarketingCopyColumn, MarketingSectionShell } from "./marketing-section-shell";

const requirements: {
  icon: BankrateIcon;
  iconVariant: IconOffsetVariant;
  iconColor: IconOffsetColor;
  title: string;
  description: string;
}[] = [
  {
    icon: LockSecure,
    iconVariant: 1,
    iconColor: "blue",
    title: "Compliance-ready",
    description:
      "Licensed and able to serve consumers in your target markets with transparency.",
  },
  {
    icon: Clock,
    iconVariant: 2,
    iconColor: "green",
    title: "Lead handling capacity",
    description:
      "Able to respond to and process leads within agreed SLAs for optimal conversion.",
  },
  {
    icon: Compare,
    iconVariant: 3,
    iconColor: "indigo",
    title: "Clear product offering",
    description:
      "Defined rates, terms, or product features ready to go to market instantly.",
  },
];

export function MarketingLendersRequirements() {
  return (
    <MarketingSectionShell className="bg-background">
      <div className="flex flex-col gap-16">
        <MarketingCopyColumn className="flex flex-col gap-4 text-center">
          <EyebrowSm as="p" className={marketingEyebrowSection}>
            Requirements
          </EyebrowSm>
          <Heading2 className="text-pretty text-headings">What we look for in partners</Heading2>
        </MarketingCopyColumn>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-12">
          {requirements.map((item) => {
            const RequirementIcon = item.icon;

            return (
              <div key={item.title} className="flex flex-col gap-5">
                <IconOffset
                  variant={item.iconVariant}
                  color={item.iconColor}
                  icon={<RequirementIcon className={marketingCardIcon} />}
                />
                <div className="flex flex-col gap-2">
                  <Heading4 className="text-headings">{item.title}</Heading4>
                  <p className={marketingBodySm}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MarketingSectionShell>
  );
}
