import { ENTERPRISE_IMG } from "./enterprise-assets";

const stats = [
  { value: "100", suffix: true, label: "Partners" },
  { value: "$38k", suffix: false, label: "Avg savings" },
  { value: "99.7%", suffix: false, label: "Better rates" },
  { value: "2x", suffix: false, label: "Lead sharing max" },
] as const;

export function MarketingEnterpriseStatsStrip() {
  return (
    <section className="bg-background px-6 py-16 sm:px-12 lg:px-16 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10">
        <h2 className="font-display text-4xl font-semibold leading-none tracking-[-2px] text-foreground sm:text-[48px]">
          Trusted by the market, proven by the data.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex h-[104px] items-center gap-[18px] rounded-[24px] bg-card p-2.5"
            >
              <div className="flex h-full w-[126px] shrink-0 items-center justify-center rounded-[14px] bg-[#f2f7ff] p-3">
                <p className="relative flex items-start font-display text-[40px] font-semibold leading-none tracking-[-2.35px] text-primary">
                  {s.value}
                  {s.suffix ? (
                    <img
                      src={ENTERPRISE_IMG.statPlus}
                      alt="+"
                      className="ml-0.5 mt-[18px] h-[17px] w-[17px]"
                      width={17}
                      height={17}
                    />
                  ) : null}
                </p>
              </div>
              <p className="min-w-0 flex-1 text-base font-bold leading-[1.4] text-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
