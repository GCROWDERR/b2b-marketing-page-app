import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { IMG } from "./assets";

const tagClass =
  "text-[13px] font-semibold leading-[1.2] tracking-[-0.13px] text-primary";

function InsightsReadMore({
  arrowSrc,
  className,
}: {
  arrowSrc: string;
  className?: string;
}) {
  return (
    <a
      href="#"
      className={cn(
        "flex items-center gap-2 text-[12px] font-semibold leading-[1.42] tracking-[-0.12px] text-foreground underline decoration-solid [text-decoration-skip-ink:none] hover:opacity-90",
        className
      )}
    >
      Read More
      <span className="flex h-3 w-3 shrink-0 items-center justify-center rotate-180">
        <img
          src={arrowSrc}
          alt=""
          className="block h-3 w-3 max-w-none object-contain"
          width={12}
          height={12}
        />
      </span>
    </a>
  );
}

export function MarketingInsights() {
  return (
    <section className="relative flex flex-col items-center gap-10 bg-background px-8 pt-12 pb-16 lg:gap-10 lg:px-16 lg:pt-12 lg:pb-16">
      {/* Figma 45:276 — section title */}
      <div className="flex w-full max-w-[606px] flex-col items-center gap-4">
        <h2 className="max-w-[464px] text-center font-display text-[40px] font-semibold leading-[1.2] tracking-[-2px] text-foreground sm:text-[48px]">
          Expert clarity for an unclear market
        </h2>
      </div>

      <div className="relative mx-auto w-full max-w-[1312px]">
        {/* Decorative quotation marks — Figma 45:360 */}
        <div
          className="pointer-events-none absolute top-8 right-4 z-[1] hidden min-[1200px]:block xl:right-12 xl:top-12"
          aria-hidden
        >
          <div className="flex translate-x-8 flex-col gap-3 opacity-90">
            <img
              src={IMG.insightsDecoLeft}
              alt=""
              className="h-[22px] w-[53px] max-w-none object-contain"
              width={53}
              height={22}
            />
            <img
              src={IMG.insightsDecoRight}
              alt=""
              className="ml-6 h-[22px] w-[54px] max-w-none object-contain"
              width={54}
              height={22}
            />
          </div>
        </div>

        {/* Figma 45:280 — row */}
        <div className="relative z-[2] flex w-full flex-col items-start gap-6 lg:flex-row lg:gap-6">
          {/* Main news card — Figma 45:281 */}
          <div className="flex w-full max-w-[523px] shrink-0 flex-col gap-[27px] overflow-hidden rounded-[34px] bg-card px-4 pb-4 pt-8 lg:w-[523px]">
            <div className="flex h-auto min-h-[158px] flex-col justify-between gap-4 px-4 sm:min-h-[157.67px]">
              <p className={cn(tagClass)}>News</p>
              <p className="font-display text-[22px] font-semibold leading-[1.3] tracking-[-0.66px] text-card-foreground">
                2026 Housing Sentiment: Why banks are tightening their grip—and
                how to find the loopholes.
              </p>
              <InsightsReadMore arrowSrc={IMG.insightsReadMoreNews} />
            </div>
            <div className="relative aspect-[491/294] w-full overflow-hidden rounded-3xl">
              <img
                src={IMG.insightsMainBase}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <img
                  src={IMG.insightsMainOverlay}
                  alt="Editor reviewing housing research on a laptop"
                  className="absolute left-[-17%] top-[-29%] h-[131%] w-[118%] max-w-none object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column — Figma 45:308 */}
          <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col gap-6 self-stretch">
            {/* Expert card — Figma 45:309 */}
            <div className="flex w-full flex-col gap-8 overflow-hidden rounded-[34px] bg-card py-4 pl-4 pr-6 sm:flex-row sm:items-center sm:gap-8 sm:py-4 sm:pr-8">
              <div className="relative mx-auto h-[259px] w-full max-w-[239px] shrink-0 overflow-hidden rounded-3xl sm:mx-0">
                <div
                  className="absolute inset-0 rounded-3xl bg-tone-positive"
                  aria-hidden
                />
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <img
                    src={IMG.insightsAnalystA}
                    alt=""
                    className="absolute top-[-26%] left-0 h-[137%] w-full max-w-none object-cover"
                  />
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <img
                    src={IMG.insightsAnalystB}
                    alt="Sarah Foster, Principal Analyst"
                    className="absolute top-[-14%] left-[-32%] h-[113%] w-[150%] max-w-none object-cover"
                  />
                </div>
                <div className="absolute bottom-[12px] left-5 rounded-full bg-tone-positive-muted px-4 py-[11px]">
                  <p className="text-center text-xs font-semibold tracking-[-0.12px] text-tone-positive-strong">
                    Sarah Foster, Principal Analyst
                  </p>
                </div>
              </div>
              <div className="flex min-h-[220px] flex-1 flex-col justify-between gap-6 py-4">
                <p className={cn(tagClass)}>The Expert Breakdown</p>
                <p className="font-display text-[22px] font-semibold leading-[1.4] tracking-[-0.66px] text-card-foreground">
                  &quot;The Fed is shifting. If you&apos;re waiting for a
                  &apos;perfect&apos; rate, you might be missing the best window
                  for equity. Here is what I&apos;m watching this week.&quot;
                </p>
                <InsightsReadMore arrowSrc={IMG.insightsReadMoreExpert} />
              </div>
            </div>

            {/* Bottom pair — Figma 45:329 */}
            <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-stretch">
              <div className="flex w-full shrink-0 flex-col justify-between gap-6 rounded-3xl bg-card p-6 lg:w-[473px] lg:min-h-0">
                <p className={cn(tagClass)}>Market Survey</p>
                <p className="font-display text-[22px] font-semibold leading-[1.3] tracking-[-0.66px] text-card-foreground">
                  We polled 2,000 lenders. Here are the 5 most transparent ones
                </p>
                <InsightsReadMore arrowSrc={IMG.insightsReadMoreSurvey} />
              </div>
              <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-6 rounded-3xl bg-card p-6">
                <p className={cn(tagClass)}>Data Drop</p>
                <p className="font-display text-[22px] font-semibold leading-[1.3] tracking-[-0.66px] text-card-foreground">
                  35% of buyers are overpaying on fees.
                </p>
                <InsightsReadMore arrowSrc={IMG.insightsReadMoreData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Figma 45:358 — CTA */}
      <Button
        variant="primary"
        size="lg"
        arrow
        className="h-12 px-5 text-[15px] font-semibold tracking-[-0.15px]"
        asChild
      >
        <a href="#">Explore all expert insights</a>
      </Button>
    </section>
  );
}
