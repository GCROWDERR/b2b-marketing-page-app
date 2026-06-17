import { CircledText } from "@/components/ui/circled-text";
import { cn } from "@/lib/utils";

const RATE_ROWS: Array<{
  eyebrow: string;
  term: string;
  rate: string;
  highlight?: boolean;
}> = [
  {
    eyebrow: "National average",
    term: "30-yr fixed",
    rate: "6.85%",
  },
  {
    eyebrow: "National average",
    term: "15-yr fixed",
    rate: "6.12%",
  },
  {
    eyebrow: "Bankrate only",
    term: "Today\u2019s top offer",
    rate: "5.99%",
    highlight: true,
  },
];

/** Hero rate-card graphic — from bankrate-dispatch `hero-rate-cards.tsx`. */
export function DispatchHeroRateCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[548/562] w-full max-w-[327px] lg:max-w-[548px]",
        className
      )}
      aria-hidden
    >
      <div className="absolute left-[5.1%] top-[5.9%] h-[88.1%] w-[89.8%]">
        <img src="/images/hero-blobs.svg" alt="" className="h-full w-full object-contain" />
      </div>

      <img
        src="/images/hero-rate-sparkle.svg"
        alt=""
        width={87}
        height={92}
        className="pointer-events-none absolute left-[8.8%] top-[11.6%] z-20 w-[15.9%] rotate-[-141deg]"
      />

      <div className="absolute left-1/2 top-1/2 z-10 flex w-[67%] -translate-x-1/2 -translate-y-1/2 flex-col gap-[8.66px] pt-[8.66px]">
        {RATE_ROWS.map((row) => (
          <div
            key={row.term}
            className="relative flex min-h-[88px] items-center justify-between rounded-3xl bg-white px-4 py-5 shadow-[0_4px_24px_rgba(15,27,47,0.08)] sm:min-h-[100px] sm:px-6 sm:py-6 lg:min-h-[115px] lg:px-[33px] lg:py-8"
          >
            <div className="flex min-w-0 flex-col gap-1.5 lg:gap-2.5">
              <p className="text-[11px] leading-[1.08] tracking-[-0.71px] text-[#3b3b44] sm:text-[12px] lg:text-[14px]">
                {row.eyebrow}
              </p>
              <p className="text-sm font-bold leading-[1.7] tracking-[-0.25px] text-[#13223b] sm:text-base lg:text-lg">
                {row.highlight ? (
                  <CircledText ringBleed="1.2em">{row.term}</CircledText>
                ) : (
                  row.term
                )}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1.5 text-right lg:gap-2.5">
              <p className="text-[11px] leading-[1.08] tracking-[-0.71px] text-[#3b3b44] sm:text-[12px] lg:text-[14px]">
                APR
              </p>
              <p className="text-2xl font-bold leading-none text-[#13223b] sm:text-[28px] lg:text-[36px]">
                {row.rate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
