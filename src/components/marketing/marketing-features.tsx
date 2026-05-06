import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { IMG } from "./assets";
import { MarketingPrimaryLink } from "./marketing-buttons";

function FeatureRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-10 border-b border-border px-8 py-12 last:border-b-0 lg:flex-row lg:items-center lg:gap-16 lg:px-20 lg:py-12",
        className
      )}
    >
      {children}
    </div>
  );
}

export function MarketingFeatures() {
  return (
    <section className="bg-background py-10">
      <div className="mx-8 overflow-hidden rounded-t-[56px] bg-card lg:mx-16">
        <FeatureRow className="lg:pt-20">
          <div className="flex w-full max-w-[559px] shrink-0 flex-col gap-8">
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-card-foreground sm:text-[40px] sm:tracking-[-2px]">
                More market clarity.
                <br />
                Less guesswork.
              </h3>
              <p className="mt-6 text-lg leading-snug text-card-foreground">
                The financial landscape is vast, and the best fit isn&apos;t
                always the most obvious one. We track the data across 300+
                institutions to bring you a complete view of the market,
                giving you the information you need to choose your next move
                with confidence.
              </p>
            </div>
            <MarketingPrimaryLink className="self-start" href="#">
              Explore the market
            </MarketingPrimaryLink>
          </div>
          <div className="relative h-[280px] w-full flex-1 overflow-hidden rounded-[32px] bg-primary sm:h-[363px]">
            <img
              src={IMG.featureViz}
              alt=""
              className="absolute inset-0 size-full object-cover opacity-60"
            />
            <Card className="absolute right-8 bottom-12 z-[1] w-[205px] gap-0 rounded-[14px] border-0 py-4 shadow-[0_4px_32px_rgba(0,0,0,0.24)] ring-0">
              <CardContent className="px-[18px] py-0">
                <p className="text-sm font-bold text-card-foreground">30-year fixed</p>
                <p className="mt-1.5 text-xs font-semibold text-tone-positive-strong">
                  ↑ 0.11%
                </p>
                <p className="mt-1 font-display text-[44px] font-bold leading-none tracking-tight text-card-foreground">
                  5.76%
                </p>
              </CardContent>
            </Card>
          </div>
        </FeatureRow>

        <FeatureRow>
          <div className="relative order-2 h-[280px] w-full flex-1 overflow-hidden rounded-[32px] bg-primary sm:h-[363px] lg:order-1">
            <img
              src={IMG.featureCalc}
              alt=""
              className="absolute inset-0 size-full object-cover opacity-50"
            />
            <Card className="absolute left-[10%] top-[8%] z-[1] w-[80%] max-w-md gap-0 rounded-2xl border-0 py-8 shadow-[0_7px_50px_rgba(0,0,0,0.15)] ring-0">
              <CardContent className="space-y-5 px-8 py-0">
                <p className="text-base font-semibold text-card-foreground">
                  Try our dynamic calculator
                </p>
                <div>
                  <p className="text-[10px] font-semibold text-primary">
                    Loan Amount
                  </p>
                  <p className="mt-1 text-[22px] font-semibold text-card-foreground">
                    $741,000
                  </p>
                  <div className="mt-2 h-1 w-full rounded-sm bg-border">
                    <div className="relative h-full w-[53%] rounded-sm bg-primary">
                      <span className="absolute -top-1 right-0 size-3 translate-x-1/2 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-[8px] text-muted-foreground">
                    <span>$40,000</span>
                    <span>$1.25 million</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-primary">
                    Estimated Credit Score
                  </p>
                  <p className="mt-1 text-[22px] font-semibold text-card-foreground">
                    $42,000
                  </p>
                  <div className="mt-2 h-1 w-full rounded-sm bg-border">
                    <div className="relative h-full w-[22%] rounded-sm bg-primary">
                      <span className="absolute -top-1 right-0 size-3 translate-x-1/2 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-[8px] text-muted-foreground">
                    <span>$1,000</span>
                    <span>$500,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 flex w-full max-w-[559px] shrink-0 flex-col gap-8 lg:order-2">
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-card-foreground sm:text-[40px] sm:tracking-[-2px]">
                Your goals, backed by our data.
              </h3>
              <p className="mt-6 text-lg leading-snug text-card-foreground">
                We believe a mortgage should fit your life, not just a
                spreadsheet. We provide the tools and personalized insights
                that put you in the driver&apos;s seat, helping you navigate the
                journey from first thought to final signature.
              </p>
            </div>
            <MarketingPrimaryLink className="self-start" href="#">
              Start your personalized path
            </MarketingPrimaryLink>
          </div>
        </FeatureRow>

        <FeatureRow>
          <div className="flex w-full max-w-[559px] shrink-0 flex-col gap-8">
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-card-foreground sm:text-[40px] sm:tracking-[-2px]">
                Finance, translated for real life.
              </h3>
              <p className="mt-6 text-lg leading-snug text-card-foreground">
                We break down complex terms and fine print into clear,
                actionable steps. By removing the noise, we help you focus on
                what actually matters: finding a trusted financial partner and
                building your future.
              </p>
            </div>
            <MarketingPrimaryLink className="self-start" href="#">
              How we&apos;re different
            </MarketingPrimaryLink>
          </div>
          <div className="relative h-[280px] w-full flex-1 overflow-hidden rounded-[32px] bg-feature-soft sm:h-[363px]">
            <img
              src={IMG.featureChart}
              alt=""
              className="absolute left-1/2 top-8 w-[min(375px,90%)] -translate-x-1/2 rounded-[25px] object-cover shadow-[0_4px_48px_rgba(0,0,0,0.15)] sm:left-[101px] sm:translate-x-0"
              width={375}
              height={285}
            />
          </div>
        </FeatureRow>

        <FeatureRow>
          <div className="relative order-2 h-[280px] w-full flex-1 overflow-hidden rounded-[32px] bg-tone-positive sm:h-[363px] lg:order-1">
            <img
              src={IMG.analystMike}
              alt="Mike Dean, Principal Analyst"
              className="absolute left-1/2 top-[-27px] h-[468px] w-[355px] max-w-none -translate-x-1/2 rounded-[18px] object-cover sm:left-[103px] sm:translate-x-0"
              width={355}
              height={468}
            />
            <span className="absolute bottom-6 left-6 z-[1] rounded-full bg-tone-positive-strong px-4 py-2 text-xs font-semibold text-primary-foreground">
              Mike Dean, Principal Analyst
            </span>
            <img
              src={IMG.featureDecor}
              alt=""
              className="absolute right-10 top-14 w-[69px] opacity-90"
              width={69}
              height={69}
            />
          </div>
          <div className="order-1 flex w-full max-w-[559px] shrink-0 flex-col gap-8 lg:order-2">
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-card-foreground sm:text-[40px] sm:tracking-[-2px]">
                Decades of data. Real-world expertise.
              </h3>
              <p className="mt-6 text-lg leading-snug text-card-foreground">
                Our journalists don&apos;t just report on the news; they
                interpret it for your wallet. With 50 years of independent
                analysis, we help you understand market shifts so you can make
                informed decisions that serve your long-term interests.
              </p>
            </div>
            <MarketingPrimaryLink className="self-start" href="#">
              Meet our analysts
            </MarketingPrimaryLink>
          </div>
        </FeatureRow>
      </div>

      <div className="mx-8 overflow-hidden rounded-b-[56px] border-t border-border bg-card lg:mx-16">
        <FeatureRow className="border-t-0 lg:pb-20">
          <div className="flex w-full max-w-[559px] shrink-0 flex-col gap-8">
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-card-foreground sm:text-[40px] sm:tracking-[-2px]">
                A smarter way to stay ahead.
              </h3>
              <p className="mt-6 text-lg leading-snug text-card-foreground">
                Markets change, and so do your needs. Our Member Experience
                keeps you connected to real-time opportunities and personalized
                context, ensuring that as the world moves, you&apos;re always
                moving in the right direction.
              </p>
            </div>
            <MarketingPrimaryLink className="self-start" href="#">
              Join the experience
            </MarketingPrimaryLink>
          </div>
          <div className="relative h-[280px] w-full flex-1 overflow-hidden rounded-[32px] bg-primary sm:h-[363px]">
            <img
              src={IMG.featureAhead}
              alt=""
              className="absolute inset-0 size-full object-cover opacity-50"
            />
          </div>
        </FeatureRow>
      </div>
    </section>
  );
}
