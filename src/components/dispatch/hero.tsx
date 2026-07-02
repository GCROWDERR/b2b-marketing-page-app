import { Link } from "react-router-dom";

import { DispatchHeroRateCards } from "@/components/dispatch/hero-rate-cards";
import { Button, dispatchHeroButtonRadiusClass } from "@/components/ui/button";
import { CircledText } from "@/components/ui/circled-text";
import { cn } from "@/lib/utils";

/**
 * Hero shell from bankrate-dispatch `components/sections/hero.tsx`,
 * with B2B partnerships copy for this marketing page.
 */
export function DispatchHero() {
  return (
    <section
      className="flex items-center justify-center bg-gray-100 px-6 pb-6 pt-6 lg:px-12 lg:pb-10 lg:pt-6"
      aria-label="Hero"
    >
      <div className="relative flex w-full max-w-[1312px] flex-col gap-8 overflow-hidden rounded-2xl bg-blue-900 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:rounded-[56px] lg:px-16 lg:py-12">
        <div className="relative z-10 flex w-full flex-col gap-10 lg:max-w-[653px] lg:flex-1 lg:pb-6">
          <div className="relative flex flex-col gap-8 text-white">
            <h1 className="font-display text-[36px] font-semibold leading-[1.2] tracking-normal lg:text-[48px]">
              Partnership paths built for how you{" "}
              <CircledText ringBleed="2em">go to market</CircledText>.
            </h1>
            <p className="max-w-[630px] text-[18px] leading-[1.4] text-gray-50">
              Whether you lend on our marketplace, power a private audience, or monetize through
              affiliate, start here—we will route you to the right programs, integrations, and
              team.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
            <Button
              variant="primary"
              size="lg"
              className={cn(
                dispatchHeroButtonRadiusClass,
                "h-[42px] w-full max-w-[240px] text-sm font-semibold lg:h-11 lg:max-w-none lg:text-base lg:font-bold"
              )}
              asChild
            >
              <a href="#partner-paths">Choose a partnership path</a>
            </Button>
            <Button
              variant="outline"
              color="white"
              size="lg"
              className={cn(dispatchHeroButtonRadiusClass, "hidden h-11 lg:inline-flex")}
              asChild
            >
              <Link to="/#partner-paths">Explore partner programs</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[327px] shrink-0 lg:mx-0 lg:w-[548px] lg:max-w-[548px]">
          <DispatchHeroRateCards className="mx-auto lg:mx-0" />
          <span className="sr-only">
            Illustrative rate comparison cards showing national mortgage averages and a Bankrate
            top offer.
          </span>
        </div>
      </div>
    </section>
  );
}
