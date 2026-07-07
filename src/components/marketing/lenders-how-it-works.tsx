import { Number1, Number2, Number3, type BankrateIcon } from "@bankrate/icons-react";

import {
  IconOffset,
  type IconOffsetColor,
  type IconOffsetVariant,
} from "@/components/common/flourish/icon-offset";
import { EyebrowSm, Heading2, Heading4 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingBodySm, marketingCardIcon, marketingEyebrowSection } from "./copy";
import { MarketingBrushSectionShell } from "./brush-section-shell";
import { MarketingCopyColumn, MarketingSectionShell } from "./section-shell";

type HowItWorksStep = {
  icon: BankrateIcon;
  iconVariant: IconOffsetVariant;
  iconColor: IconOffsetColor;
  title: string;
  description: string;
};

const defaultSteps: HowItWorksStep[] = [
  {
    icon: Number1,
    iconVariant: 1,
    iconColor: "blue",
    title: "Tell us your footprint + products",
    description: "Share your licensed states, loan types, and volume goals.",
  },
  {
    icon: Number2,
    iconVariant: 2,
    iconColor: "green",
    title: "We recommend a program",
    description: "Our team matches you to the right placements and integrations.",
  },
  {
    icon: Number3,
    iconVariant: 3,
    iconColor: "indigo",
    title: "Launch, measure, iterate",
    description: "Go live with reporting built in and optimize from day one.",
  },
];

const enterpriseSteps: HowItWorksStep[] = [
  {
    icon: Number1,
    iconVariant: 1,
    iconColor: "blue",
    title: "Align on goals",
    description:
      "We learn about your audience, platform, and what success looks like.",
  },
  {
    icon: Number2,
    iconVariant: 2,
    iconColor: "green",
    title: "Choose your approach",
    description: "Select from widgets, APIs, SSO, or a fully custom build.",
  },
  {
    icon: Number3,
    iconVariant: 3,
    iconColor: "indigo",
    title: "Launch, monitor, iterate",
    description: "Go live with a dedicated team tracking performance alongside you.",
  },
];

type MarketingLendersHowItWorksProps = {
  eyebrow?: string;
  heading?: string;
  steps?: HowItWorksStep[];
  className?: string;
  brushBackground?: boolean;
};

export function MarketingLendersHowItWorks({
  eyebrow = "How it works",
  heading = "Three steps to your first campaign.",
  steps = defaultSteps,
  className,
  brushBackground = false,
}: MarketingLendersHowItWorksProps) {
  const content = (
    <div className="flex flex-col gap-16">
      <MarketingCopyColumn className="flex flex-col gap-4 text-center">
        <EyebrowSm as="p" className={marketingEyebrowSection}>
          {eyebrow}
        </EyebrowSm>
        <Heading2 className="text-pretty text-headings">{heading}</Heading2>
      </MarketingCopyColumn>
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {steps.map((step) => {
          const StepIcon = step.icon;

          return (
            <div key={step.title} className="flex flex-col items-center gap-6 text-center">
              <IconOffset
                variant={step.iconVariant}
                color={step.iconColor}
                icon={<StepIcon className={marketingCardIcon} />}
              />
              <div className="flex max-w-[300px] flex-col gap-3">
                <Heading4 className="text-headings">{step.title}</Heading4>
                <p className={marketingBodySm}>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (brushBackground) {
    return (
      <MarketingBrushSectionShell className={className}>
        <MarketingSectionShell className="bg-transparent py-12 lg:py-16">
          {content}
        </MarketingSectionShell>
      </MarketingBrushSectionShell>
    );
  }

  return (
    <MarketingSectionShell className={cn("bg-background", className)}>
      {content}
    </MarketingSectionShell>
  );
}

export { enterpriseSteps as marketingEnterpriseHowItWorksSteps };
