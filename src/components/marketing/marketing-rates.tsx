import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { IMG } from "./assets";

const JOURNEY_STEPS = [
  { id: "buy", label: "I'm preparing to buy", hasIcon: true },
  { id: "start", label: "I'm just starting out", hasIcon: false },
  { id: "shop", label: "I'm ready to shop", hasIcon: false },
  { id: "manage", label: "I'm managing my home", hasIcon: false },
] as const;

type JourneyId = (typeof JOURNEY_STEPS)[number]["id"];

const JOURNEY_COPY: Record<
  JourneyId,
  { title: string; body: string }
> = {
  buy: {
    title: "Stop looking at averages. See your rate today.",
    body: 'Most sites show "national averages." We use 12 million lending records to show what you actually qualify for based on your credit and goals.',
  },
  start: {
    title: "Start with clarity before you shop.",
    body: "We translate jargon into next steps so you can build confidence before you ever talk to a lender.",
  },
  shop: {
    title: "Compare offers with your real numbers.",
    body: "See how lenders stack up for your scenario—not a generic profile—so you can move faster with less guesswork.",
  },
  manage: {
    title: "Stay ahead after you close.",
    body: "Track shifts that affect your home equity and payment so you can time refinances and big decisions with context.",
  },
};

function SliderRow({
  label,
  valuePrefix,
  valueMain,
  minLabel,
  maxLabel,
  fillPct,
}: {
  label: string;
  valuePrefix: string;
  valueMain: string;
  minLabel: string;
  maxLabel: string;
  fillPct: number;
}) {
  const pct = Math.min(100, Math.max(0, fillPct));
  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-sm font-semibold tracking-tight text-primary">
        {label}
      </p>
      <p className="text-[0px] leading-none tracking-[-0.64px] text-foreground">
        <span className="font-sans text-[20.64px] font-semibold leading-[1.2]">
          {valuePrefix}
        </span>
        <span className="font-sans text-[32px] font-semibold leading-[1.2]">
          {valueMain}
        </span>
      </p>
      <div className="relative pt-2">
        <div className="h-px w-full bg-border" />
        <div
          className="absolute top-2 left-0 h-px bg-primary"
          style={{ width: `${pct}%` }}
        />
        <div
          className="absolute top-1 size-3.5 -translate-x-1/2 rounded-full bg-primary"
          style={{ left: `${pct}%` }}
        />
        <div className="mt-2 flex justify-between text-sm leading-normal text-muted-foreground">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
    </div>
  );
}

function journeyPillClass(isOn: boolean) {
  return cn(
    "inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full border-0 px-[18px] py-3.5 text-sm font-semibold tracking-tight shadow-none transition-colors",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
    isOn
      ? "bg-primary text-primary-foreground shadow-sm"
      : "bg-muted text-primary hover:bg-muted/80 hover:text-primary"
  );
}

function JourneyTabPanel({ journeyId }: { journeyId: JourneyId }) {
  const copy = JOURNEY_COPY[journeyId];
  const step = JOURNEY_STEPS.find((s) => s.id === journeyId)!;

  return (
    <div className="relative flex w-full flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-[88px]">
      <div className="relative flex min-w-0 flex-1 justify-center lg:max-w-[556px]">
        <Card className="relative w-full max-w-[556px] gap-0 rounded-3xl border-0 bg-card shadow-[0_10px_24px_rgba(15,27,47,0.05),0_41px_44px_rgba(15,27,47,0.04)] ring-0">
          <CardContent className="flex flex-col gap-8 p-8 sm:p-12">
            <p className="font-sans text-2xl font-semibold tracking-[-0.72px] text-card-foreground">
              Try our dynamic calculator
            </p>
            <div className="flex flex-col gap-10">
              <SliderRow
                label="Loan Amount"
                valuePrefix="$"
                valueMain="741,000"
                minLabel="$40,000"
                maxLabel="$1.25 million"
                fillPct={53}
              />
              <SliderRow
                label="Estimated Credit Score"
                valuePrefix="$"
                valueMain="42,000"
                minLabel="$1,000"
                maxLabel="$500,000"
                fillPct={22}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Input
                placeholder="Zip Code"
                className="h-12 min-w-[120px] flex-1 rounded-lg border border-primary/40 bg-transparent px-5 text-[15px] font-normal tracking-tight text-card-foreground shadow-none placeholder:text-muted-foreground"
              />
              <Button
                type="button"
                variant="primary"
                size="lg"
                arrow
                className="h-12 shrink-0 px-5 text-[15px] font-semibold tracking-tight"
              >
                Calculate
              </Button>
            </div>
          </CardContent>
          <div className="pointer-events-none absolute -right-2 top-8 hidden sm:block">
            <img
              src={IMG.journeySparkleLg}
              alt=""
              className="h-10 w-9 object-contain"
              width={36}
              height={40}
            />
          </div>
        </Card>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-6 hidden -translate-x-1/2 lg:left-[52%] lg:block xl:left-[515px]">
        <img
          src={IMG.journeySparkleSm}
          alt=""
          className="h-[82px] w-[69px] object-contain"
          width={69}
          height={82}
        />
      </div>

      <div className="relative z-[1] flex min-w-0 flex-1 flex-col gap-6 pr-0 lg:max-w-none lg:pr-10">
        <div className="flex flex-col gap-8">
          <p className="text-base font-semibold tracking-tight text-primary">
            {step.label}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-[1.2] tracking-[-2px] text-foreground sm:text-4xl">
            {copy.title}
          </h2>
        </div>
        <p className="font-sans text-lg font-normal leading-[1.4] text-foreground">
          {copy.body}
        </p>
      </div>
    </div>
  );
}

export function MarketingRates() {
  const [active, setActive] = useState<JourneyId>("buy");

  return (
    <section className="flex flex-col items-center gap-10 bg-background px-8 pt-16 pb-12 lg:px-16">
      <div className="relative flex w-full max-w-[846px] flex-col items-center gap-6 text-center">
        <p className="font-display text-4xl font-semibold leading-[1.2] tracking-[-2px] text-foreground sm:text-[48px]">
          Build your future on a{" "}
          <span className="relative inline-block">
            stronger
            <span
              className="pointer-events-none absolute -right-8 -bottom-2 hidden h-[66px] w-[189px] sm:block"
              aria-hidden
            >
              <img
                src={IMG.journeyHeadlineScribble}
                alt=""
                className="size-full max-w-none object-contain opacity-90"
              />
            </span>
          </span>{" "}
          foundation.
        </p>
      </div>

      <div
        className="w-full max-w-[1312px] overflow-hidden rounded-[48px] px-6 py-10 sm:px-12 sm:py-14"
        style={{ background: "var(--journey-panel-gradient)" }}
      >
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full flex-wrap justify-center gap-3">
            {JOURNEY_STEPS.map((step) => {
              const isOn = active === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  aria-pressed={isOn}
                  className={journeyPillClass(isOn)}
                  onClick={() => setActive(step.id)}
                >
                  {step.hasIcon && isOn ? (
                    <span className="flex h-5 w-[18px] shrink-0 items-center justify-center">
                      <img
                        src={IMG.journeyTabIcon}
                        alt=""
                        className="h-[18px] w-4 object-contain"
                        width={16}
                        height={18}
                      />
                    </span>
                  ) : null}
                  {step.label}
                </button>
              );
            })}
          </div>

          <div className="w-full max-w-none">
            <JourneyTabPanel journeyId={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
