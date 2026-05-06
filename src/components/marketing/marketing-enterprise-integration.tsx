import { Card, CardContent } from "@/components/ui/card";

const options = [
  {
    title: "API Experiences",
    body: "Pre-fill information and reduce manual steps with our secure, seamless API connections.",
  },
  {
    title: "Co-Branded Portals",
    body: 'Launch quickly with a pre-configured, Bankrate-powered experience that carries our "halo of trust."',
  },
  {
    title: "Embedded Tools",
    body: "Add savings, credit cards, or lending calculators directly into your existing ecosystem.",
  },
] as const;

export function MarketingEnterpriseIntegration() {
  return (
    <section
      id="integration-options"
      className="scroll-mt-[calc(82px+1rem)] bg-background px-8 py-16 lg:px-16"
    >
      <div className="mx-auto max-w-[1312px]">
        <p className="text-base font-semibold text-primary">Integration Options</p>
        <h2 className="mt-4 max-w-[720px] font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:tracking-[-2px]">
          Technology that fits your business.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {options.map((opt) => (
            <Card
              key={opt.title}
              className="rounded-[24px] border-0 bg-card p-6 shadow-none ring-0"
            >
              <CardContent className="p-0">
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-card-foreground sm:text-2xl">
                  {opt.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-card-foreground">
                  {opt.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
