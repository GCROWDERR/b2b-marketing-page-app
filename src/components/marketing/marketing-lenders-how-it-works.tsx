const steps = [
  {
    number: "1",
    title: "Tell us your footprint + products",
    description: "Share your licensed states, loan types, and volume goals.",
  },
  {
    number: "2",
    title: "We recommend a program",
    description: "Our team matches you to the right placements and integrations.",
  },
  {
    number: "3",
    title: "Launch, measure, iterate",
    description: "Go live with reporting built in and optimize from day one.",
  },
] as const;

export function MarketingLendersHowItWorks() {
  return (
    <section className="bg-background px-6 py-16 sm:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-16">
        <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[1.8px] text-primary">
            How it works
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.2] text-foreground">
            Three steps to your first campaign.
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-6 text-center">
              <div className="flex size-12 items-center justify-center rounded-[24px] bg-primary text-xl font-bold text-primary-foreground">
                {step.number}
              </div>
              <div className="flex max-w-[300px] flex-col gap-3">
                <h3 className="font-display text-xl font-bold leading-[1.2] tracking-[-0.15px] text-foreground">
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-[1.7] text-muted-foreground"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
