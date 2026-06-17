import type { ReactNode } from "react";

import { BrushUnderline } from "@/components/ui/brush-underline";
import { FlourishSparkle } from "@/components/ui/flourish";

import { ENTERPRISE_IMG } from "./enterprise-assets";

const items: { icon: string; content: ReactNode }[] = [
  {
    icon: ENTERPRISE_IMG.benefitBullet1,
    content: (
      <>
        <span className="font-bold">Qualified Reach: </span>
        Tap into an audience of active shoppers looking for their best financial fit.
      </>
    ),
  },
  {
    icon: ENTERPRISE_IMG.benefitBullet2,
    content: (
      <>
        <span className="font-bold">Seamless Integration: </span>
        From white-label portals to embedded APIs, we offer deployment that keeps your
        internal lift low.
      </>
    ),
  },
  {
    icon: ENTERPRISE_IMG.benefitBullet3,
    content: (
      <>
        <span className="font-bold">Data-Driven Matching: </span>
        Use our proprietary intelligence to identify and acquire high-lifetime-value
        customers.
      </>
    ),
  },
];

export function MarketingEnterpriseBenefits() {
  return (
    <section className="bg-background px-6 py-8 sm:px-12 lg:px-16">
      <div className="relative mx-auto max-w-[1312px] overflow-hidden rounded-[48px] bg-[#dce7fe] px-8 py-14 lg:px-[72px] lg:py-14">
        <FlourishSparkle className="right-8 top-0 hidden lg:block" />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[88px]">
          <div className="max-w-[420px] shrink-0">
            <p className="text-base font-semibold text-primary">The Benefits</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-2px] text-foreground sm:text-[48px]">
              Why{" "}
              <BrushUnderline textClassName="text-inherit">Partner</BrushUnderline> with
              Bankrate
            </h2>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex max-w-[580px] flex-col gap-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-lg leading-[1.4] text-foreground"
                >
                  <span className="mt-[5px] flex size-[18px] shrink-0 items-center justify-center">
                    <span className="inline-flex rotate-[90.32deg]">
                      <img
                        src={item.icon}
                        alt=""
                        className="block h-auto w-[15px] max-w-none"
                        width={15}
                        height={15}
                      />
                    </span>
                  </span>
                  <p className="min-w-0 flex-1">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
