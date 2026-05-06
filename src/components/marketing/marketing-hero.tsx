import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { IMG } from "./assets";

const heroCtaArrow = (
  <span className="flex size-4 shrink-0 items-center justify-center">
    <span className="inline-flex rotate-180">
      <img
        src={IMG.heroBtnArrow}
        alt=""
        className="h-4 w-[16px] max-w-none object-contain"
        width={16}
        height={16}
      />
    </span>
  </span>
);

export function MarketingHero() {
  return (
    <section className="relative z-0 -mt-[82px] min-h-[810px] w-full overflow-hidden bg-surface-inverse">
      <div className="relative mx-auto min-h-[810px] max-w-[1440px] px-8 pb-16 pt-[calc(6rem+82px)] lg:px-16 lg:pb-16 lg:pt-[calc(112px+82px)]">
        {/* Left column — Figma 45:203, max 646px */}
        <div className="relative z-[2] flex w-full max-w-[646px] flex-col gap-8">
          <div className="flex max-w-[599px] flex-col gap-6 text-surface-inverse-fg">
            <h1 className="font-display text-[clamp(2.25rem,6vw,66px)] font-semibold tracking-[-2px] text-surface-inverse-fg">
              <p className="leading-[1.1]">Your bank has a</p>
              <p className="relative leading-[1.1]">
                mortgage rate. We have a better{" "}
                <span className="relative inline-block whitespace-nowrap">
                  one.
                  <img
                    src={IMG.heroHeadlineUnderline}
                    alt=""
                    className="pointer-events-none absolute top-[calc(100%-4px)] left-0 h-1.5 w-[179px] max-w-[min(179px,calc(100vw-4rem))] object-contain object-left opacity-95"
                    width={179}
                    height={6}
                  />
                </span>
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
            <a
              href="#"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[10px] border-0 bg-primary px-5 text-[15px] font-semibold tracking-[-0.15px] text-primary-foreground shadow-none hover:bg-primary/90 hover:no-underline"
              )}
            >
              Unlock my personal dashboard
              {heroCtaArrow}
            </a>
            <a
              href="#"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "inline-flex h-12 w-full max-w-[254px] shrink-0 items-center justify-center gap-2 rounded-[10px] border border-primary bg-transparent px-5 text-[15px] font-semibold tracking-[-0.15px] text-surface-inverse-fg shadow-none hover:bg-surface-inverse-fg/10 hover:text-surface-inverse-fg hover:no-underline sm:w-[254px]"
              )}
            >
              Just show me today&apos;s rates
              {heroCtaArrow}
            </a>
          </div>
        </div>

        {/* Right column — Figma 45:210: 767×974, anchored to artboard */}
        <div className="pointer-events-none absolute top-0 right-0 hidden h-[974px] w-[767px] min-[1180px]:block">
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
