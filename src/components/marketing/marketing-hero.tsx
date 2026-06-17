import { Button, dispatchHeroButtonRadiusClass } from "@/components/ui/button";
import { FlourishUnderline } from "@/components/ui/flourish";
import { cn } from "@/lib/utils";

import { IMG } from "./assets";

export function MarketingHero() {
  return (
    <section className="relative z-0 -mt-[82px] min-h-[810px] w-full overflow-hidden bg-surface-inverse">
      <div className="relative z-[10] mx-auto min-h-[810px] max-w-[1440px] px-8 pb-16 pt-[calc(6rem+82px)] lg:px-16 lg:pb-16 lg:pt-[calc(112px+82px)]">
        {/* Left column — Figma 45:203, max 646px */}
        <div className="relative flex w-full max-w-[646px] flex-col gap-8">
          <div className="flex max-w-[599px] flex-col gap-6 text-surface-inverse-fg">
            <h1 className="font-display text-[clamp(2.25rem,6vw,66px)] font-semibold tracking-[-2px] text-surface-inverse-fg">
              <p className="leading-[1.1]">Your bank has a</p>
              <p className="relative leading-[1.1]">
                mortgage rate. We have a better{" "}
                <FlourishUnderline className="whitespace-nowrap" underlineWidth={179}>
                  one.
                </FlourishUnderline>
              </p>
            </h1>
            <p
              className="max-w-[534px] font-sans text-lg font-normal leading-[1.4] text-surface-inverse-fg-soft"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              The market moves fast—don&apos;t get left behind. Join 25 million
              people who use Bankrate&apos;s 50 years of data to outsmart the big
              banks and find the loan they actually deserve.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="lg"
              arrow
              className={cn(
                dispatchHeroButtonRadiusClass,
                "h-12 shrink-0 px-5 text-[15px] font-semibold tracking-[-0.15px]"
              )}
              asChild
            >
              <a href="#">Unlock my personal dashboard</a>
            </Button>
            <Button
              variant="outline"
              color="white"
              size="lg"
              arrow
              className={cn(
                dispatchHeroButtonRadiusClass,
                "h-12 w-full max-w-[254px] shrink-0 px-5 text-[15px] font-semibold tracking-[-0.15px] sm:w-[254px]"
              )}
              asChild
            >
              <a href="#">Just show me today&apos;s rates</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Right column — slide to viewport edge on wide screens (scale grew left, not into the margin) */}
      <div
        className={cn(
          "pointer-events-none absolute top-0 z-0 hidden min-[1180px]:block",
          "h-[974px] w-[767px]",
          "right-[max(2rem,calc((100vw-1440px)/2))]"
        )}
        style={{
          transform: "translateX(calc(max(0px, (100vw - 1440px) / 2)))",
        }}
      >
        <div className="absolute top-[-43px] right-0 h-[974px] w-[767px]">
          <img
            src={IMG.heroMaskUnion}
            alt=""
            className="absolute top-[32px] -left-[15px] z-0 h-[938px] w-[762px] max-w-none object-contain"
            width={762}
            height={938}
          />
          <img
            src={IMG.heroUnion1}
            alt=""
            className="absolute top-[3px] -left-[21px] z-[1] h-[979px] w-[796px] max-w-none object-contain"
            width={796}
            height={979}
          />
          <img
            src={IMG.heroPeople}
            alt="Couple reviewing finances at home"
            className="absolute top-[590px] left-[21px] z-[2] h-[99px] w-[83px] object-contain"
            width={83}
            height={99}
          />
          <img
            src={IMG.heroUnion2}
            alt=""
            className="absolute top-[3px] -left-[21px] z-[3] h-[979px] w-[796px] max-w-none object-contain"
            width={796}
            height={979}
          />

          {/* Stacked payment cards — Figma 45:216–218 */}
          <div className="pointer-events-auto absolute top-[252px] left-2 z-[4] h-[81px] w-[268px]">
            <div
              className="absolute top-[38px] left-[26px] h-[43px] w-[215px] rounded-[9.44px] bg-card shadow-[0px_2.66px_21.31px_rgba(0,0,0,0.24)]"
              aria-hidden
            />
            <div
              className="absolute top-[21px] left-[13px] h-[46px] w-[241px] rounded-[10.69px] bg-card shadow-[0px_3.02px_24.12px_rgba(0,0,0,0.24)]"
              aria-hidden
            />
            <div className="absolute top-0 left-0 flex h-[54px] w-[268px] items-center gap-3 overflow-hidden rounded-[11.75px] bg-card px-4 py-0 shadow-[0px_3.31px_26.51px_rgba(0,0,0,0.24)]">
              <span className="font-sans text-[14.4px] font-bold leading-[1.1] tracking-[-0.144px] text-card-foreground">
                Est. monthly payment $358
              </span>
              <span className="flex h-[25px] w-[22px] shrink-0 items-center justify-center">
                <span className="inline-flex -rotate-[5.57deg]">
                  <img
                    src={IMG.heroCardIcon}
                    alt=""
                    className="h-[23px] w-5 object-contain"
                    width={20}
                    height={23}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / narrow: photo strip below copy */}
      <div className="relative mt-10 min-[1180px]:hidden">
        <div className="relative mx-auto aspect-[767/560] w-full max-w-3xl overflow-hidden rounded-2xl bg-surface-inverse-input">
          <img
            src={IMG.heroUnion1}
            alt=""
            className="absolute inset-0 m-auto h-[120%] w-[120%] max-w-none object-cover object-center opacity-90"
          />
          <img
            src={IMG.heroPeople}
            alt="Couple reviewing finances at home"
            className="absolute bottom-4 right-6 z-[2] h-24 w-auto object-contain drop-shadow-lg"
            width={120}
            height={140}
          />
          <div className="absolute bottom-6 left-4 z-[3] flex h-12 max-w-[240px] items-center gap-2 rounded-xl bg-card px-3 shadow-lg">
            <span className="text-xs font-bold text-card-foreground">
              Est. monthly payment $358
            </span>
            <img
              src={IMG.heroCardIcon}
              alt=""
              className="size-5 shrink-0 object-contain"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
