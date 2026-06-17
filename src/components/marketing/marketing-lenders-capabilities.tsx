import { LENDERS_IMG } from "./lenders-assets";

const capabilities = [
  {
    title: "Marketplace Placements",
    description: "Appear where consumers are actively comparing products.",
  },
  {
    title: "Geo & Audience Targeting",
    description: "Target by state, intent signal, credit profile, and more.",
  },
  {
    title: "Measurement & Reporting",
    description: "Clear performance data tied to real consumer actions.",
  },
] as const;

export function MarketingLendersCapabilities() {
  return (
    <section className="bg-background px-6 py-16 sm:px-12 lg:px-16 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-16">
        <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[1.8px] text-primary">
            Capabilities
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.2] text-foreground">
            Built for financial institutions at every stage.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-[34px] bg-card p-4"
            >
              <div className="flex flex-col gap-4 p-4">
                <h3 className="font-display text-2xl font-semibold leading-[1.2] tracking-[-1px] text-foreground">
                  {item.title}
                </h3>
                <p
                  className="text-base leading-[1.7] text-muted-foreground"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {item.description}
                </p>
              </div>
              <div className="mt-auto overflow-hidden rounded-lg">
                <img
                  src={LENDERS_IMG.capabilityCard}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
