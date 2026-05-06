import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { IMG } from "./assets";

export function MarketingProof() {
  return (
    <section className="bg-background px-8 pt-16 pb-12 lg:px-[175px]">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-[39px]">
        <div className="flex h-auto min-h-0 w-full max-w-[306px] shrink-0 items-start lg:h-32">
          <p className="w-full font-display text-[32px] font-semibold leading-[1.25] tracking-[-2px] text-foreground">
            The proof is in the $73,000 you keep.
          </p>
        </div>
        <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-8">
          <div className="flex h-auto w-full flex-col gap-4 sm:h-[104px] sm:flex-row sm:gap-4">
            <Card className="flex min-h-[104px] flex-1 gap-0 rounded-[24px] border-0 bg-card !p-2.5 shadow-none ring-0 sm:h-[104px]">
              <CardContent className="flex h-full items-center gap-[18px] p-0">
                <div className="flex h-full min-h-[84px] w-[126px] shrink-0 items-center justify-center rounded-[14px] bg-muted p-3">
                  <div className="relative flex items-start font-display text-[40px] leading-[1.2] tracking-[-2.3569px] text-primary">
                    300
                    <img
                      src={IMG.statPlus}
                      alt="+"
                      className="ml-1 mt-[21px] h-[17px] w-[17px]"
                      width={17}
                      height={17}
                    />
                  </div>
                </div>
                <p className="flex-1 text-base font-bold leading-[1.4] text-foreground">
                  Banks and credit unions surveyed weekly.
                </p>
              </CardContent>
            </Card>
            <Card
              className={cn(
                "flex min-h-[104px] w-full shrink-0 gap-0 rounded-[24px] border-0 bg-card !p-2.5 shadow-none ring-0 sm:h-[104px] sm:w-[364.5px]"
              )}
            >
              <CardContent className="flex h-full items-center gap-[18px] p-0">
                <div className="flex h-full min-h-[84px] w-[126px] shrink-0 items-center justify-center rounded-[14px] bg-muted p-3">
                  <div className="relative flex items-start font-display text-[40px] leading-[1.2] tracking-[-2.3569px] text-primary">
                    99.7
                    <img
                      src={IMG.statPct}
                      alt="%"
                      className="ml-1 mt-[21px] h-4 w-[15px]"
                      width={15}
                      height={16}
                    />
                  </div>
                </div>
                <p className="min-w-0 flex-1 text-base font-bold leading-[1.4] text-foreground">
                  Of banks beaten by Bankrate top offers.
                </p>
              </CardContent>
            </Card>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-solid underline-offset-auto [text-decoration-skip-ink:none] hover:opacity-90"
          >
            More about Bankrate&apos;s Home Lending Advantage
            <span className="flex size-4 shrink-0 items-center justify-center">
              <span className="inline-flex rotate-180">
                <img
                  src={IMG.proofArrow}
                  alt=""
                  className="h-4 w-4 max-w-none"
                  width={16}
                  height={16}
                />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
