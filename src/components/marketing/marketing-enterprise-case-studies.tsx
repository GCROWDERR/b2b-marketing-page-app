import { Checkmark } from "@bankrate/icons-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EyebrowSm, Heading1, Heading2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { ENTERPRISE_IMG } from "./enterprise-assets";
import { marketingBody, marketingEyebrowSection, marketingSectionLead } from "./marketing-copy";
import { MarketingSectionShell } from "./marketing-section-shell";

const homepageContent = {
  eyebrow: null as string | null,
  heading: "See how partners use Bankrate",
  body:
    "Our journalists don't just report on the news; they interpret it for your wallet. With 50 years of independent analysis, we help you understand market shifts so you can make informed decisions that serve your long-term interests.",
  cta: "Meet our analysts",
  ctaHref: "#",
  showImage: true,
};

const enterpriseContent = {
  eyebrow: "Case study",
  heading: "See what enterprise partnership looks like in practice",
  highlight: "$38K average savings",
  kicker: "Fortune 50 Technology Company",
  body: "By integrating a private mortgage auction directly into their employee benefits portal, this global technology leader enabled their workforce to access rates substantially lower than the national average.",
  cta: "Read the full case study",
  ctaHref: "/case-studies/amazon",
  outcomes: [
    "98% employee satisfaction score",
    "Seamless SSO integration",
    "Live within 6 weeks",
  ],
};

type MarketingEnterpriseCaseStudiesProps = {
  variant?: "homepage" | "enterprise";
};

export function MarketingEnterpriseCaseStudies({
  variant = "homepage",
}: MarketingEnterpriseCaseStudiesProps) {
  const isEnterprise = variant === "enterprise";
  const content = isEnterprise ? enterpriseContent : homepageContent;

  if (isEnterprise) {
    return (
      <MarketingSectionShell className="bg-background">
        <div className="flex flex-col gap-16">
          <div>
            <EyebrowSm as="p" className={marketingEyebrowSection}>
              {enterpriseContent.eyebrow}
            </EyebrowSm>
            <Heading2 className="mt-4 text-pretty text-headings">
              {enterpriseContent.heading}
            </Heading2>
          </div>
          <Card className="rounded-3xl border-2 border-blue-50 bg-card p-8 shadow-none ring-0 lg:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex min-w-0 flex-1 flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Heading1 className="text-pretty text-headings">
                    {enterpriseContent.highlight}
                  </Heading1>
                  <EyebrowSm as="p" className="text-primary">
                    {enterpriseContent.kicker}
                  </EyebrowSm>
                </div>
                <p className={marketingSectionLead}>{enterpriseContent.body}</p>
                <Button
                  variant="link"
                  size="lg"
                  arrow
                  className="h-auto w-fit justify-start p-0 text-base font-normal"
                  asChild
                >
                  <Link to={enterpriseContent.ctaHref}>{enterpriseContent.cta}</Link>
                </Button>
              </div>
              <CardContent className="w-full shrink-0 rounded-2xl bg-[#f9f9fc] p-8 lg:max-w-[400px]">
                <ul className="flex flex-col gap-5">
                  {enterpriseContent.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[10px] bg-primary">
                        <Checkmark className="size-3 text-white" aria-hidden />
                      </span>
                      <p className={cn("min-w-0 flex-1", marketingBody)}>{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        </div>
      </MarketingSectionShell>
    );
  }

  return (
    <MarketingSectionShell className="bg-background">
      <div className="mx-auto flex max-w-(--section-narrow) flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex min-h-[280px] flex-1 items-center justify-center rounded-[48px] border border-border bg-gray-800 p-8 lg:min-h-[363px]">
          <img
            src={ENTERPRISE_IMG.caseStudyAmazon}
            alt="Amazon"
            className="h-auto w-[200px] max-w-full object-contain"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Heading2 className="text-pretty text-headings">{content.heading}</Heading2>
            <p className={marketingSectionLead}>{content.body}</p>
          </div>
          <Button
            variant="primary"
            size="lg"
            arrow
            className="h-12 w-fit px-5 text-[15px] font-semibold"
            asChild
          >
            <a href={content.ctaHref}>{content.cta}</a>
          </Button>
        </div>
      </div>
    </MarketingSectionShell>
  );
}
