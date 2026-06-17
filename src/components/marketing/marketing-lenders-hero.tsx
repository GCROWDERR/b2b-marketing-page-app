import { Button, dispatchHeroButtonRadiusClass } from "@/components/ui/button";
import { BrushUnderline } from "@/components/ui/brush-underline";
import { cn } from "@/lib/utils";

import { LENDERS_IMG } from "./lenders-assets";

export function MarketingLendersHero() {
  return (
    <section className="bg-background px-6 pb-10 pt-3.5 sm:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative min-h-[640px] overflow-hidden rounded-[32px] bg-[#13223b] lg:min-h-[674px] lg:rounded-[56px]">
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            <div className="absolute right-0 top-0 h-full w-[48%] overflow-hidden">
              <img
                src={LENDERS_IMG.heroPhone}
                alt=""
                className="absolute h-[100%] max-w-none -left-[45%] top-0 w-[190%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent from-[80%] to-[#13223b]" />
            </div>
            <img
              src={LENDERS_IMG.heroSparkle}
              alt=""
              className="absolute left-[42%] top-[17%] w-[60px]"
            />
          </div>

          <div className="relative z-10 px-6 py-12 sm:px-10 lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-[min(599px,46%)] lg:flex-col lg:justify-center lg:px-0 lg:pl-[70px] lg:py-[140px]">
            <div className="flex max-w-[599px] flex-col gap-8">
              <div className="flex flex-col gap-8">
                <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.2] text-white lg:text-[64px]">
                  Reach high-intent financial shoppers{" "}
                  <BrushUnderline textClassName="text-inherit">
                    at the moment
                  </BrushUnderline>{" "}
                  they&apos;re ready to act
                </h1>
                <p
                  className="max-w-[534px] text-lg leading-[1.4] text-[#f5f2eb]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Bankrate connects your products to millions of consumers actively
                  comparing rates, products, and lenders — with an opt-in experience
                  built for quality.
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                className={cn(
                  dispatchHeroButtonRadiusClass,
                  "h-12 w-full max-w-[240px] text-sm font-semibold"
                )}
                asChild
              >
                <a href="#lenders-goals">Choose a partnership path</a>
              </Button>
            </div>
          </div>

          <div className="relative z-[1] mt-4 px-6 pb-8 lg:hidden">
            <div className="relative mx-auto h-[360px] max-w-[420px] overflow-hidden rounded-2xl">
              <img
                src={LENDERS_IMG.heroPhone}
                alt=""
                className="absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13223b] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
