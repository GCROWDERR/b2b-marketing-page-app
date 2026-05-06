import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketingEnterpriseHero() {
  return (
    <section className="relative z-0 -mt-[82px] w-full bg-surface-inverse">
      <div className="mx-auto flex max-w-[720px] flex-col items-center px-8 pb-20 pt-[calc(5rem+82px)] text-center sm:pb-24 sm:pt-[calc(6rem+82px)]">
        <h1 className="font-display text-[clamp(2.25rem,6vw,66px)] font-semibold leading-[1.1] tracking-[-2px] text-surface-inverse-fg">
          Partner with the platform that powers homeownership.
        </h1>
        <p
          className="mt-6 max-w-[540px] font-sans text-base font-normal leading-[1.5] text-surface-inverse-fg-soft sm:text-lg"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Gain access to a high-intent audience of 25 million monthly users. We
          use 50 years of trusted market data to connect the right borrowers with
          the right institutions.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col items-center gap-5 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
          <a
            href="#"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "inline-flex h-12 w-full shrink-0 items-center justify-center rounded-[10px] border-0 bg-primary px-6 text-[15px] font-semibold tracking-[-0.15px] text-primary-foreground shadow-none hover:bg-primary/90 hover:no-underline sm:w-auto"
            )}
          >
            Become a Bankrate Partner
          </a>
          <a
            href="#integration-options"
            className="text-[15px] font-semibold text-surface-inverse-fg underline decoration-surface-inverse-fg/40 underline-offset-[6px] transition-colors hover:text-surface-inverse-fg hover:decoration-surface-inverse-fg"
          >
            View our integration options
          </a>
        </div>
      </div>
    </section>
  );
}
