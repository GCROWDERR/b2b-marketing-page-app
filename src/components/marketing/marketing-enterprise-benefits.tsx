import type { ReactNode } from "react";

import { IMG } from "./assets";

const items: { icon: string; content: ReactNode }[] = [
  {
    icon: IMG.bullet1,
    content: (
      <>
        <span className="font-bold">Qualified Reach: </span>
        Tap into an audience of active shoppers looking for their best financial
        fit.
      </>
    ),
  },
  {
    icon: IMG.bullet2,
    content: (
      <>
        <span className="font-bold">Seamless Integration: </span>
        From white-label portals to embedded APIs, we offer deployment that
        keeps your internal lift low.
      </>
    ),
  },
  {
    icon: IMG.bullet3,
    content: (
      <>
        <span className="font-bold">Data-Driven Matching: </span>
        Use our proprietary intelligence to identify and acquire
        high-lifetime-value customers.
      </>
    ),
  },
];

export function MarketingEnterpriseBenefits() {
  return (
    <section className="bg-background px-8 py-16 lg:px-16">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="max-w-[420px] shrink-0">
          <p className="text-base font-semibold leading-snug text-primary">
            The Benefits
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:tracking-[-2px]">
            Why Partner with Bankrate
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
    </section>
  );
}
