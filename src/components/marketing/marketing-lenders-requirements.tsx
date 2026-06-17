import { LENDERS_IMG } from "./lenders-assets";

const requirements = [
  {
    icon: LENDERS_IMG.reqCompliance,
    title: "Compliance-ready",
    description:
      "Licensed and able to serve consumers in your target markets with transparency.",
  },
  {
    icon: LENDERS_IMG.reqCapacity,
    title: "Lead handling capacity",
    description:
      "Able to respond to and process leads within agreed SLAs for optimal conversion.",
  },
  {
    icon: LENDERS_IMG.reqProduct,
    title: "Clear product offering",
    description:
      "Defined rates, terms, or product features ready to go to market instantly.",
  },
] as const;

export function MarketingLendersRequirements() {
  return (
    <section className="bg-background px-6 py-16 sm:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-16">
        <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[1.8px] text-primary">
            Requirements
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.2] text-foreground">
            What we look for in partners
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-12">
          {requirements.map((item) => (
            <div key={item.title} className="flex flex-col gap-5">
              <img src={item.icon} alt="" className="size-8" aria-hidden />
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold leading-[1.2] tracking-[-0.15px] text-foreground">
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-[1.7] text-muted-foreground"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
