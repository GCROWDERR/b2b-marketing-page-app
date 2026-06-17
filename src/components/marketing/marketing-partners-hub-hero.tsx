import { Link } from "react-router-dom";

import { Button, dispatchHeroButtonRadiusClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketingPartnersHubHero() {
  return (
    <section className="relative z-0 -mt-[82px] w-full bg-surface-inverse">
      <div className="mx-auto flex max-w-[720px] flex-col items-center px-8 pb-20 pt-[calc(5rem+82px)] text-center sm:pb-24 sm:pt-[calc(6rem+82px)]">
        <h1 className="font-display text-[clamp(2.25rem,6vw,66px)] font-semibold leading-[1.1] tracking-[-2px] text-surface-inverse-fg">
          Partnership paths built for how you go to market.
        </h1>
        <p
          className="mt-6 max-w-[540px] font-sans text-base font-normal leading-[1.5] text-surface-inverse-fg-soft sm:text-lg"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Whether you lend on our marketplace, power a private audience, or
          monetize through affiliate, start here—we will route you to the right
          programs, integrations, and team.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col items-center gap-5 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
          <Button
            variant="primary"
            size="lg"
            className={cn(
              dispatchHeroButtonRadiusClass,
              "h-12 w-full shrink-0 px-6 text-[15px] font-semibold tracking-[-0.15px] sm:w-auto"
            )}
            asChild
          >
            <a href="#partner-paths">Choose a partnership path</a>
          </Button>
          <Link
            to="/partners/lenders"
            className="text-[15px] font-semibold text-surface-inverse-fg underline decoration-surface-inverse-fg/40 underline-offset-[6px] transition-colors hover:text-surface-inverse-fg hover:decoration-surface-inverse-fg"
          >
            Lenders &amp; financial institutions overview
          </Link>
        </div>
      </div>
    </section>
  );
}
