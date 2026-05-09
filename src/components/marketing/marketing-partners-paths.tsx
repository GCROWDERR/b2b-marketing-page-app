import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const paths = [
  {
    id: "supply",
    eyebrow: "Supply-side partners",
    title: "Lenders & financial institutions",
    description:
      "Auction-backed marketplace programs for mortgage, deposits, and cards—with selective scale and teams aligned to lender outcomes.",
    href: "/enterprise",
    cta: "Explore supply programs",
  },
  {
    id: "enterprise-private",
    eyebrow: "Enterprise partnerships",
    title: "Private & captive audiences",
    description:
      "Premium integrations for select audiences: widgets, APIs, SSO, and enterprise components—contrasted with the public marketplace.",
    href: "/enterprise",
    cta: "View enterprise options",
  },
  {
    id: "affiliate",
    eyebrow: "Affiliate partners",
    title: "Publishers & site owners",
    description:
      "Cross-vertical affiliate revenue for public web experiences—distinct from private enterprise deals, with integration paths by vertical.",
    href: "/partners/affiliate",
    cta: "Explore affiliate",
  },
] as const;

export function MarketingPartnersPaths() {
  return (
    <section
      id="partner-paths"
      className="scroll-mt-[calc(82px+1rem)] bg-background px-8 py-16 lg:px-16"
    >
      <div className="mx-auto max-w-[1312px]">
        <p className="text-base font-semibold text-primary">Partner intake</p>
        <h2 className="mt-4 max-w-[720px] font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:tracking-[-2px]">
          Three ways to partner with Bankrate
        </h2>
        <p className="mt-4 max-w-[720px] text-lg leading-relaxed text-foreground">
          Pick the model that matches your audience and commercial goals. Each
          path has its own programs, requirements, and success team.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {paths.map((path) => (
            <Card
              key={path.id}
              className="flex flex-col rounded-[24px] border-0 bg-card p-6 shadow-none ring-0"
            >
              <CardContent className="flex flex-1 flex-col p-0">
                <p className="text-sm font-semibold text-primary">{path.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug tracking-tight text-card-foreground">
                  {path.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-card-foreground">
                  {path.description}
                </p>
                <Link
                  to={path.href}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border-0 bg-primary px-5 text-[15px] font-semibold tracking-[-0.15px] text-primary-foreground shadow-none hover:bg-primary/90 hover:no-underline"
                  )}
                >
                  {path.cta}
                  <ChevronRight className="size-4 rotate-180 shrink-0" aria-hidden />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
