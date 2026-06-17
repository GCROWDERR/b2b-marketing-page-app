import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

const paths = [
  {
    accentClass: "bg-[#b3d0ff]",
    title: "Supply Side",
    subtitle: "For: Lenders & FIs",
    body: "Showcase your mortgage, personal loan, or credit card rates to millions of high-intent consumers monthly.",
    href: "/partners/lenders",
  },
  {
    accentClass: "bg-[#fde6a8]",
    title: "Enterprise",
    subtitle: "For: Large platforms & employers",
    body: "Integrate our decisioning engines and marketplace UI directly into your proprietary employee or customer portals.",
    href: "/partners/enterprise",
  },
  {
    accentClass: "bg-[#c6edd1]",
    title: "Affiliates",
    subtitle: "For: Website owners & publishers",
    body: "Monetize your financial content with the industry's highest-converting offers and real-time API rate tables.",
    href: "/partners/affiliate",
  },
] as const;

export function MarketingEnterprisePathFinder() {
  return (
    <section className="bg-background px-6 py-16 sm:px-12 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-12 lg:gap-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-base font-semibold leading-[1.3] text-primary">The Three Paths</p>
          <h2 className="max-w-[720px] font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.2] tracking-normal text-foreground">
            Find your partnership path
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {paths.map((p) => (
            <article
              key={p.title}
              className="flex min-h-[326px] flex-col rounded-3xl border border-[#f0f0f0] bg-card p-[33px] shadow-none"
            >
              <div className={cn("mb-6 h-2 w-full rounded", p.accentClass)} />
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-[28px] font-bold leading-[1.2] tracking-normal text-card-foreground">
                  {p.title}
                </h3>
                <p className="text-xs font-bold uppercase text-[#99968e]">{p.subtitle}</p>
              </div>
              <p
                className="mt-6 flex-1 text-base leading-[1.6] text-card-foreground"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {p.body}
              </p>
              <div className="mt-8">
                <Link
                  to={p.href}
                  className="inline-flex rounded border border-card-foreground px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-muted"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
