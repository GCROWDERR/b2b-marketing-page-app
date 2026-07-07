import { CircleEmphasis } from "@/components/common/flourish/circle-emphasis";
import { Button } from "@/components/ui/button";
import { FlourishSparkle } from "@/components/ui/flourish";
import { Heading1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { ENTERPRISE_IMG } from "../shared/enterprise-assets";
import { marketingHeroBody } from "../shared/copy";
import { SectionShell } from "../shared/section-shell";

function DownPaymentCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[220px] rounded-[25px] bg-white p-[22px] shadow-[0_4px_29px_rgba(0,0,0,0.24)]",
        className
      )}
    >
      <p
        className="text-[11px] font-semibold text-blue-900"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Down payment
      </p>
      <p className="mt-1 font-display text-2xl font-bold tracking-tight text-blue-900">
        $83,000
      </p>
      <img
        src={ENTERPRISE_IMG.heroSparkline}
        alt=""
        className="mt-4 h-6 w-full"
        aria-hidden
      />
      <div
        className="mt-4 h-[26px] w-full rounded-full border border-gray-100 bg-blue-900"
        aria-hidden
      />
    </div>
  );
}

function MonthlyPaymentCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-[130px] flex-col items-center rounded-[24px] bg-white p-4 shadow-[0_2px_14px_rgba(0,0,0,0.24)]",
        className
      )}
    >
      <img
        src={ENTERPRISE_IMG.heroMonthlyBadge}
        alt=""
        className="size-[72px]"
        aria-hidden
      />
      <p className="mt-2 text-center font-display text-sm font-bold text-blue-900">
        $2,171/mo
      </p>
    </div>
  );
}

/** Hero from Figma frame 150:6211 — navy card on cream, portrait + UI cards on the right. */
export function HubHero() {
  return (
    <SectionShell variant="hero" className="bg-background pb-10">
        <div className="relative min-h-[640px] overflow-hidden rounded-[32px] bg-blue-900 lg:min-h-[674px] lg:rounded-[56px]">
          {/* Blue union shape */}
          <div
            className="pointer-events-none absolute -right-[20%] -top-[38%] hidden h-[135%] w-[72%] lg:block"
            aria-hidden
          >
            <div className="-rotate-90 size-full">
              <img
                src={ENTERPRISE_IMG.heroUnionBlob}
                alt=""
                className="size-full object-contain object-right"
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute -bottom-[20%] -right-[25%] h-[70%] w-[70%] rounded-full bg-primary/30 blur-3xl lg:hidden"
            aria-hidden
          />

          {/* Copy + CTA — Figma: left 70px, top 140px, width 520px */}
          <div className="relative z-10 px-6 py-12 sm:px-10 lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-[min(520px,42%)] lg:flex-col lg:justify-center lg:px-0 lg:pl-[70px] lg:py-[140px]">
            <div className="flex max-w-[534px] flex-col gap-8">
              <div className="relative flex flex-col gap-8">
                <Heading1 className="leading-[1.2] tracking-tight text-white lg:max-w-[778px]">
                  <span className="relative z-[1]">
                    Partnership paths built for how you{" "}
                  </span>
                  <CircleEmphasis
                    className="relative z-0 [&_svg]:-z-[1]"
                    emphasis="go to market"
                  />
                  <span className="relative z-[1]">.</span>
                </Heading1>
                <p className={cn("max-w-[534px]", marketingHeroBody)}>
                  Whether you lend on our marketplace, power a private audience, or
                  monetize through affiliate, start here—we will route you to the right
                  programs, integrations, and team.
                </p>
              </div>
              <Button size="lg" href="#partner-paths" className="w-full max-w-[240px]">
                Choose a partnership path
              </Button>
            </div>
          </div>

          {/* Desktop visual layer */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            <FlourishSparkle
              className="left-[42%] top-[14%] z-[3] w-[60px]"
              width={60}
              height={76}
            />
            <DownPaymentCard className="absolute left-[51.5%] top-[14.2%] z-[1]" />

            <div className="absolute left-[47.8%] top-[1.2%] z-[2] h-[698px] w-[646px] max-w-[48%] overflow-hidden">
              <img
                src={ENTERPRISE_IMG.heroPortrait}
                alt=""
                className="absolute h-[127%] max-w-none -left-[82%] -top-[5%] w-[205%] object-cover object-bottom"
              />
            </div>

            <MonthlyPaymentCard className="absolute right-[4.5%] top-[46.9%] z-[3]" />
          </div>

          {/* Mobile / tablet visual */}
          <div className="relative z-[1] mt-4 px-6 pb-8 lg:hidden">
            <div className="relative mx-auto h-[360px] max-w-[420px] overflow-hidden rounded-2xl sm:h-[420px]">
              <DownPaymentCard className="absolute left-3 top-4 z-[1] scale-90 sm:scale-100" />
              <MonthlyPaymentCard className="absolute bottom-6 right-3 z-[3] scale-90 sm:scale-100" />
              <img
                src={ENTERPRISE_IMG.heroPortrait}
                alt=""
                className="absolute inset-0 z-[2] size-full object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
    </SectionShell>
  );
}
