import type { ReactNode } from "react";

import { LineEmphasis } from "@/components/common/flourish/line-emphasis";
import { FlourishSparkle } from "@/components/ui/flourish";
import { EyebrowSm, Heading2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingBody, marketingEyebrowSection } from "../shared/copy";

import { ENTERPRISE_IMG } from "../shared/enterprise-assets";

import { SectionShell } from "../shared/section-shell";

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

export function HubBenefits() {
  return (
    <SectionShell className="bg-background py-8 lg:py-8">
      <div className="relative">
        <FlourishSparkle
          className="right-8 -top-8 z-10 hidden w-[71px] lg:block"
          width={71}
          height={90}
        />

        <div className="relative z-0 rounded-[48px] bg-blue-200 px-8 py-14 lg:px-[72px] lg:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[88px]">
          <div className="max-w-[420px] shrink-0">
            <EyebrowSm as="p" className={marketingEyebrowSection}>
              The Benefits
            </EyebrowSm>
            <Heading2 className="mt-4 text-blue-900">
              Why <LineEmphasis emphasis="Partner" /> with Bankrate
            </Heading2>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex max-w-[580px] flex-col gap-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={cn("flex items-start gap-3", marketingBody)}
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
    </div>
    </SectionShell>
  );
}
