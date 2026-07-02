import { useState } from "react";

import { CircleEmphasis } from "@/components/common/flourish/circle-emphasis";
import { LendersPartnershipForm } from "@/components/common/lenders-partnership-form";
import { FlourishSparkle } from "@/components/ui/flourish";
import { EyebrowSm, Heading2, Heading3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  LENDERS_VERTICALS,
  type LendersVertical,
} from "@/lib/form/lenders-inquiry-types";

import { LENDERS_IMG } from "./lenders-assets";
import { marketingBody, marketingBodySm, marketingEyebrowSection, marketingSectionLeadCenter } from "./marketing-copy";
import { MarketingLeadColumn, MarketingSectionShell } from "./marketing-section-shell";

const verticalCopy: Record<
  LendersVertical,
  {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    fit: string[];
  }
> = {
  Mortgage: {
    eyebrow: "Mortgage & Home Lending",
    title: "Connect with high-intent mortgage shoppers",
    description:
      "Reach purchase, refi, and HELOC shoppers in an opt-in environment built for lender quality and compliance.",
    bullets: [
      "Purchase & refinance leads",
      "HELOC & home equity placements",
      "Real-time rate table integration",
      "Geo-specific state targeting",
    ],
    fit: [
      "Licensed mortgage lender",
      "Capacity to respond within 5 min",
      "Defined geographic footprint",
    ],
  },
  Deposits: {
    eyebrow: "Deposits & Savings",
    title: "Reach savers comparing rates and products",
    description:
      "Connect with consumers actively shopping CDs, savings, and money market accounts across Bankrate surfaces.",
    bullets: [
      "Rate table placements",
      "Product comparison listings",
      "Audience targeting by balance band",
      "Performance reporting",
    ],
    fit: [
      "FDIC/NCUA insured institution",
      "Published rate sheets",
      "Defined product set",
    ],
  },
  "Credit Cards": {
    eyebrow: "Credit Cards",
    title: "Put your card offers in front of ready applicants",
    description:
      "Reach consumers comparing rewards, balance transfer, and low-APR cards with transparent disclosures.",
    bullets: [
      "Card marketplace listings",
      "Category and rewards targeting",
      "Compliance-ready creative",
      "Conversion tracking",
    ],
    fit: [
      "Issuing bank or program manager",
      "Approved marketing materials",
      "Application funnel ready",
    ],
  },
  Other: {
    eyebrow: "Other Financial Products",
    title: "Explore custom partnership programs",
    description:
      "Personal loans, auto, insurance, and more — tell us what you offer and we will route you to the right team.",
    bullets: [
      "Multi-vertical marketplace access",
      "Custom integration options",
      "Dedicated partner support",
      "Flexible commercial models",
    ],
    fit: [
      "Licensed where required",
      "Clear go-to-market plan",
      "Operational readiness",
    ],
  },
};

export function MarketingLendersGoals() {
  const [vertical, setVertical] = useState<LendersVertical>("Mortgage");
  const copy = verticalCopy[vertical];

  return (
    <MarketingSectionShell
      id="lenders-goals"
      className="scroll-mt-[calc(82px+1rem)] bg-background pb-12 lg:pb-[120px]"
    >
      <div className="flex flex-col gap-10">
        <MarketingLeadColumn className="flex flex-col gap-6 text-center">
          <Heading2 className="text-pretty text-headings">
            Tell us about your <CircleEmphasis emphasis="goals" />
          </Heading2>
          <p className={marketingSectionLeadCenter}>
            Select your vertical below — we&apos;ll tailor the experience from here.
          </p>
        </MarketingLeadColumn>

        <div className="relative overflow-hidden rounded-[48px] bg-blue-200 px-6 py-10 sm:px-12 sm:py-14 lg:px-[72px] lg:py-14">
          <div className="flex flex-wrap justify-center gap-3">
            {LENDERS_VERTICALS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setVertical(item)}
                className={cn(
                  "rounded-full px-[18px] py-3.5 text-sm font-semibold tracking-[-0.14px] transition-colors",
                  vertical === item
                    ? "bg-primary text-primary-foreground"
                    : "bg-blue-50 text-primary hover:bg-blue-100"
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[88px]">
            <div className="flex max-w-[448px] flex-col gap-10">
              <div className="flex flex-col gap-6">
                <EyebrowSm as="p" className={marketingEyebrowSection}>
                  {copy.eyebrow}
                </EyebrowSm>
                <Heading3 className="text-blue-900">{copy.title}</Heading3>
                <p className={marketingBody}>{copy.description}</p>
              </div>
              <ul className="flex flex-col gap-4">
                {copy.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <img
                      src={LENDERS_IMG.checkIcon}
                      alt=""
                      className="size-5 shrink-0"
                      aria-hidden
                    />
                    <span className={marketingBody}>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-6">
                <p className="text-sm text-gray-800">Good fit if...</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {copy.fit.map((item) => (
                    <li key={item} className={cn("flex items-center gap-2", marketingBodySm)}>
                      <span className="size-1 rounded-full bg-muted-foreground" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative min-w-0 flex-1">
              <FlourishSparkle
                className="-right-2 -top-2 hidden w-8 lg:block"
                width={32}
                height={40}
              />
              <div className="rounded-[24px] bg-card p-8 shadow-[0_4px_24px_rgba(15,27,47,0.08)] sm:p-12">
                <LendersPartnershipForm key={vertical} vertical={vertical} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingSectionShell>
  );
}
