import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const paths = [
  {
    id: "supply",
    eyebrow: "Advertise with Bankrate",
    title: "Lenders & financial institutions",
    description:
      "Reach in-market consumers across mortgage, deposits, and credit cards through Bankrate's marketplace programs.",
    href: "/partners/lenders",
    cta: "Explore advertiser programs",
  },
  {
    id: "enterprise-private",
    eyebrow: "Integrate with Bankrate",
    title: "Enterprise partnerships",
    description:
      "Embed Bankrate experiences in your product for private or captive audiences—powered by widgets, APIs, and SSO.",
    href: "/partners/enterprise",
    cta: "View enterprise options",
  },
  {
    id: "affiliate",
    eyebrow: "Monetize with Bankrate",
    title: "Publishers & Affiliates",
    description:
      "Add Bankrate widgets and links to your site and earn revenue from your audience with scalable, low-touch setups.",
    href: "/partners/affiliate",
    cta: "Explore affiliate programs",
  },
] as const;

export function MarketingPartnersPaths() {
  return (
    <section
      id="partner-paths"
      className="scroll-mt-[calc(82px+1rem)] bg-background px-6 py-16 sm:px-12 lg:px-16 lg:py-[120px]"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10">
        <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center">
          <h2 className="font-display text-4xl font-semibold leading-none tracking-[-2px] text-foreground sm:text-[48px]">
            Three ways to partner with Bankrate
          </h2>
          <p className="text-lg leading-[1.45] text-foreground">
            Choose the path that fits your audience and commercial goals. Each option has
            different requirements, timelines, and support.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {paths.map((path) => (
            <Card
              key={path.id}
              className="flex min-h-[287px] flex-col rounded-[24px] border-0 bg-card p-6 shadow-none ring-0"
            >
              <CardContent className="flex flex-1 flex-col gap-8 p-0">
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-semibold text-primary">{path.eyebrow}</p>
                  <h3 className="font-display text-2xl font-semibold leading-[33px] tracking-[-0.6px] text-card-foreground">
                    {path.title}
                  </h3>
                  <p className="text-base leading-[26px] text-card-foreground">
                    {path.description}
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  arrow
                  className="mt-auto h-[52px] w-full px-6 text-base font-bold tracking-tight"
                  asChild
                >
                  <Link to={path.href}>{path.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
