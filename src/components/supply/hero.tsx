import type { ReactNode } from "react";

import { LineEmphasis } from "@/components/common/flourish/line-emphasis";
import { Button } from "@/components/ui/button";
import { FlourishSparkle } from "@/components/ui/flourish";
import { Heading1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { SUPPLY_IMG } from "./assets";
import { marketingHeroBody } from "../shared/copy";
import { SectionShell } from "../shared/section-shell";

type SupplyHeroProps = {
  headline?: ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function SupplyHero({
  headline,
  description = "Bankrate connects your products to millions of consumers actively comparing rates, products, and lenders — with an opt-in experience built for quality.",
  ctaLabel = "Choose a partnership path",
  ctaHref = "#supply-goals",
}: SupplyHeroProps = {}) {
  return (
    <SectionShell variant="hero" className="bg-background pb-10">
        <div className="relative min-h-[640px] overflow-hidden rounded-[32px] bg-blue-900 lg:min-h-[674px] lg:rounded-[56px]">
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            <div className="absolute right-0 top-0 h-full w-[48%] overflow-hidden">
              <img
                src={SUPPLY_IMG.heroPhone}
                alt=""
                className="absolute h-[100%] max-w-none -left-[45%] top-0 w-[190%] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent from-[80%] to-blue-900" />
            </div>
            <FlourishSparkle
              className="left-[42%] top-[17%] w-[60px]"
              width={60}
              height={76}
            />
          </div>

          <div className="relative z-10 px-6 py-12 sm:px-10 lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-[min(599px,46%)] lg:flex-col lg:justify-center lg:px-0 lg:pl-[70px] lg:py-[140px]">
            <div className="flex max-w-[599px] flex-col gap-8">
              <div className="flex flex-col gap-8">
                <Heading1 className="leading-[1.2] tracking-tight text-white">
                  {headline ?? (
                    <LineEmphasis
                      before="Reach high-intent financial shoppers "
                      emphasis="at the moment"
                      after=" they're ready to act"
                    />
                  )}
                </Heading1>
                <p className={cn("max-w-[534px]", marketingHeroBody)}>{description}</p>
              </div>
              <Button size="lg" href={ctaHref} className="w-full max-w-[240px]">
                {ctaLabel}
              </Button>
            </div>
          </div>

          <div className="relative z-[1] mt-4 px-6 pb-8 lg:hidden">
            <div className="relative mx-auto h-[360px] max-w-[420px] overflow-hidden rounded-2xl">
              <img
                src={SUPPLY_IMG.heroPhone}
                alt=""
                className="absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
    </SectionShell>
  );
}
