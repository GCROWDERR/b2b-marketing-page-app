import { IMG } from "./assets";

const items = [
  {
    icon: IMG.bullet1,
    title: "Qualified Reach.",
    body: "Tap into an audience of active shoppers looking for their best financial fit.",
  },
  {
    icon: IMG.bullet2,
    title: "Seamless Integration.",
    body: "From white-label portals to embedded APIs, we offer deployment that keeps your internal lift low.",
  },
  {
    icon: IMG.bullet3,
    title: "Data-Driven Matching.",
    body: "Use our proprietary intelligence to identify and acquire high-lifetime-value customers.",
  },
] as const;

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
        <div className="min-w-0 flex-1 space-y-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-border pb-8 last:border-b-0 last:pb-0"
            >
              <span className="mt-1 w-4 shrink-0">
                <img src={item.icon} alt="" className="w-full" />
              </span>
              <div>
                <p className="text-lg font-bold leading-snug text-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-lg leading-snug text-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
