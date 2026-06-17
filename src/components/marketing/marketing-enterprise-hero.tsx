import { ENTERPRISE_IMG } from "./enterprise-assets";
import { Button, dispatchHeroButtonRadiusClass } from "@/components/ui/button";
import { CircledText } from "@/components/ui/circled-text";
import { cn } from "@/lib/utils";

function DownPaymentCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[220px] rounded-[25px] bg-white p-[22px] shadow-[0_4px_29px_rgba(0,0,0,0.24)]",
        className
      )}
    >
      <p
        className="text-[11px] font-semibold text-[#13223b]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Down payment
      </p>
      <p className="mt-1 font-display text-2xl font-bold tracking-tight text-[#13223b]">
        $83,000
      </p>
      <img
        src={ENTERPRISE_IMG.heroSparkline}
        alt=""
        className="mt-4 h-6 w-full"
        aria-hidden
      />
      <div
        className="mt-4 h-[26px] w-full rounded-full border border-[#f5f2eb] bg-[#13223b]"
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
      <p className="mt-2 text-center font-display text-sm font-bold text-[#13223b]">
        $2,171/mo
      </p>
    </div>
  );
}

/** Hero from Figma frame 150:6211 — navy card on cream, portrait + UI cards on the right. */
export function MarketingEnterpriseHero() {
  return (
    <section className="bg-[#f5f2eb] px-6 pb-10 pt-3.5 sm:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative min-h-[640px] overflow-hidden rounded-[32px] bg-[#13223b] lg:min-h-[674px] lg:rounded-[56px]">
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
                <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.2] tracking-normal text-white lg:text-[64px]">
                  Partnership paths built for how you{" "}
                  <CircledText ringBleed="2.5em">go to market</CircledText>.
                </h1>
                <p
                  className="max-w-[534px] text-lg leading-[1.4] text-[#f5f2eb]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Whether you lend on our marketplace, power a private audience, or
                  monetize through affiliate, start here—we will route you to the right
                  programs, integrations, and team.
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
                <a href="#partner-paths">Choose a partnership path</a>
              </Button>
            </div>
          </div>

          {/* Desktop visual layer */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            <img
              src={ENTERPRISE_IMG.heroSparkleYellow}
              alt=""
              className="absolute left-[42.7%] top-[17.4%] size-8"
            />
            <img
              src={ENTERPRISE_IMG.heroSparkleGreen}
              alt=""
              className="absolute left-[44.5%] top-[23.4%] size-6"
            />
            <img
              src={ENTERPRISE_IMG.heroSparklePurple}
              alt=""
              className="absolute left-[42.7%] top-[19.8%] size-7"
            />

            <DownPaymentCard className="absolute left-[51.5%] top-[14.2%] z-10" />

            <div className="absolute left-[47.8%] top-[1.2%] h-[698px] w-[646px] max-w-[48%] overflow-hidden">
              <img
                src={ENTERPRISE_IMG.heroPortrait}
                alt=""
                className="absolute h-[127%] max-w-none -left-[82%] -top-[5%] w-[205%] object-cover object-bottom"
              />
            </div>

            <MonthlyPaymentCard className="absolute right-[4.5%] top-[46.9%] z-10" />
          </div>

          {/* Mobile / tablet visual */}
          <div className="relative z-[1] mt-4 px-6 pb-8 lg:hidden">
            <div className="relative mx-auto h-[360px] max-w-[420px] overflow-hidden rounded-2xl sm:h-[420px]">
              <img
                src={ENTERPRISE_IMG.heroPortrait}
                alt=""
                className="absolute inset-0 size-full object-cover object-[center_20%]"
              />
              <DownPaymentCard className="absolute left-3 top-4 scale-90 sm:scale-100" />
              <MonthlyPaymentCard className="absolute bottom-6 right-3 scale-90 sm:scale-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
