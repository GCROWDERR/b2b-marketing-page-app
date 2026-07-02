import {
  Compare,
  GlobeWorld,
  LockSecure,
  TallBuilding,
  type BankrateIcon,
} from "@bankrate/icons-react";

import {
  IconOffset,
  type IconOffsetColor,
  type IconOffsetVariant,
} from "@/components/common/flourish/icon-offset";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EyebrowSm, Heading2, Heading4 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingBody, marketingCardIcon, marketingEyebrowSection } from "./marketing-copy";
import { MarketingSectionShell } from "./marketing-section-shell";

type IntegrationOption = {
  icon: BankrateIcon;
  iconVariant: IconOffsetVariant;
  iconColor: IconOffsetColor;
  title: string;
  body: string;
};

const homepageOptions: IntegrationOption[] = [
  {
    icon: Compare,
    iconVariant: 1,
    iconColor: "blue",
    title: "API Experiences",
    body: "Pre-fill information and reduce manual steps with our secure, seamless API connections.",
  },
  {
    icon: GlobeWorld,
    iconVariant: 2,
    iconColor: "green",
    title: "Co-Branded Portals",
    body: 'Launch quickly with a pre-configured, Bankrate-powered experience that carries our "halo of trust."',
  },
  {
    icon: TallBuilding,
    iconVariant: 3,
    iconColor: "indigo",
    title: "Embedded Tools",
    body: "Add savings, credit cards, or lending calculators directly into your existing ecosystem.",
  },
];

const enterpriseOptions: IntegrationOption[] = [
  {
    icon: GlobeWorld,
    iconVariant: 1,
    iconColor: "blue",
    title: "Embedded Widgets",
    body: "Drop Bankrate rate tools directly into your product or benefits portal.",
  },
  {
    icon: Compare,
    iconVariant: 2,
    iconColor: "green",
    title: "API Access",
    body: "Pull live rates and product data into your own experience via our REST API.",
  },
  {
    icon: LockSecure,
    iconVariant: 3,
    iconColor: "indigo",
    title: "SSO / Enterprise Access",
    body: "Seamless single sign-on so your users never leave your ecosystem.",
  },
  {
    icon: TallBuilding,
    iconVariant: 1,
    iconColor: "yellow",
    title: "Custom Components",
    body: "Co-built flows designed around your specific audience and use case.",
  },
];

type MarketingEnterpriseIntegrationProps = {
  variant?: "homepage" | "enterprise";
};

export function MarketingEnterpriseIntegration({
  variant = "homepage",
}: MarketingEnterpriseIntegrationProps) {
  const isEnterprise = variant === "enterprise";
  const options = isEnterprise ? enterpriseOptions : homepageOptions;

  return (
    <MarketingSectionShell
      id={isEnterprise ? "integration-options" : undefined}
      className={cn(
        "scroll-mt-[calc(82px+1rem)] bg-background"
      )}
    >
      {isEnterprise ? (
        <div className="flex flex-col gap-16">
          <div className="max-w-(--section-copy)">
            <EyebrowSm as="p" className={marketingEyebrowSection}>
              Our offerings
            </EyebrowSm>
            <Heading2 className="mt-4 text-pretty text-headings">
              Choose your integration approach
            </Heading2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {options.map((opt) => {
              const OptionIcon = opt.icon;

              return (
                <Card
                  key={opt.title}
                  className="flex flex-col gap-5 rounded-xl border border-gray-100 bg-card p-8 shadow-none ring-0"
                >
                  <IconOffset
                    variant={opt.iconVariant}
                    color={opt.iconColor}
                    icon={<OptionIcon className={marketingCardIcon} />}
                  />
                  <CardContent className="flex flex-1 flex-col gap-3 p-0">
                    <Heading4 className="text-headings">{opt.title}</Heading4>
                    <p className={marketingBody}>{opt.body}</p>
                    <Button
                      variant="link"
                      size="sm"
                      arrow
                      className="mt-auto h-auto justify-start p-0 text-sm font-normal"
                      asChild
                    >
                      <a href="#contact-sales">Learn more</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <EyebrowSm as="p" className={marketingEyebrowSection}>
            Integration Options
          </EyebrowSm>
          <Heading2 className="mt-4 max-w-(--section-copy) text-pretty text-headings">
            Technology that fits your business.
          </Heading2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {options.map((opt) => (
              <Card
                key={opt.title}
                className="rounded-[24px] border-0 bg-card p-6 shadow-none ring-0"
              >
                <CardContent className="p-0">
                  <Heading4 className="text-headings">{opt.title}</Heading4>
                  <p className={cn("mt-4", marketingBody)}>{opt.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </MarketingSectionShell>
  );
}
