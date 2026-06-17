import { LENDERS_IMG } from "./lenders-assets";

const stats = [
  { value: "100", suffix: true, label: "Partners" },
  { value: "78%", suffix: false, label: "Actively comparing rates" },
  { value: "4.3M", suffix: false, label: "Monthly mortgage shoppers" },
  { value: "#1", suffix: false, label: "Most trusted mortgage site" },
] as const;

export function MarketingLendersStats() {
  return (
    <section className="bg-background px-6 pb-16 sm:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1312px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex h-[104px] items-center gap-[18px] rounded-[24px] bg-card p-2.5"
          >
            <div className="flex h-full w-[126px] shrink-0 items-center justify-center rounded-[14px] bg-[#f2f7ff] p-3">
              <p className="relative flex items-start font-display text-[40px] font-semibold leading-none tracking-[-2.35px] text-primary">
                {stat.value}
                {stat.suffix ? (
                  <img
                    src={LENDERS_IMG.statPlus}
                    alt="+"
                    className="ml-0.5 mt-[18px] h-[17px] w-[17px]"
                    width={17}
                    height={17}
                  />
                ) : null}
              </p>
            </div>
            <p className="min-w-0 flex-1 text-base font-bold leading-[1.4] text-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
