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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EyebrowSm, Heading2, Heading4 } from "@/components/ui/typography";

import { marketingBodySm, marketingCardIcon, marketingEyebrowSection } from "./copy";
import { MarketingCopyColumn, MarketingSectionShell } from "./section-shell";

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

const faqItems = [
  {
    question: "What are the approval criteria for new partners?",
    answer:
      "We look for high-quality content, stable traffic, and alignment with financial service categories. Applications are typically reviewed within 3-5 business days.",
  },
  {
    question: "When and how do I get paid?",
    answer:
      "Payouts are issued monthly via direct deposit or wire transfer once the minimum threshold is met. Our net-payment terms are competitive for the sector.",
  },
  {
    question: "How does Bankrate track conversions?",
    answer:
      "We use a robust, multi-layer tracking system including first-party cookies and server-to-server postbacks to ensure every referral is counted accurately.",
  },
  {
    question: "Are there compliance requirements?",
    answer:
      "Yes, as a financial services publisher, we provide strict guidelines to ensure all advertising is clear, conspicuous, and compliant with federal regulations.",
  },
  {
    question: "What kind of support will I receive?",
    answer:
      "Every high-volume partner is assigned a dedicated account manager to assist with strategy, reporting, and asset optimization.",
  },
  {
    question: "Can I use multiple formats on one page?",
    answer:
      "Absolutely. We encourage testing a mix of text links and interactive widgets to find the best user experience and conversion rate.",
  },
];

type MarketingLendersRequirementsProps = {
  variant?: "requirements" | "faq";
};

export function MarketingLendersRequirements({
  variant = "requirements",
}: MarketingLendersRequirementsProps) {
  if (variant === "faq") {
    return (
      <MarketingSectionShell className="bg-background py-16 lg:py-20">
        <div className="mx-auto flex max-w-[960px] flex-col gap-16">
          <MarketingCopyColumn className="flex flex-col gap-4 text-center">
            <Heading2 className="text-pretty text-headings">
              Answers to common questions
            </Heading2>
          </MarketingCopyColumn>
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="bg-transparent hover:bg-transparent"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed tracking-tight">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MarketingSectionShell>
    );
  }

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
