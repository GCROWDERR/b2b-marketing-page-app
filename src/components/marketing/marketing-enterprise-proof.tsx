import { Card, CardContent } from "@/components/ui/card";

export function MarketingEnterpriseProof() {
  return (
    <section className="bg-background px-8 pt-16 pb-12 lg:px-[175px]">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10">
        <div>
          <p className="text-base font-semibold text-primary">Partnership Proof Points</p>
          <h2 className="mt-4 max-w-[720px] font-display text-[32px] font-semibold leading-[1.25] tracking-[-2px] text-foreground sm:text-[40px]">
            Trusted by the market, proven by the data.
          </h2>
        </div>
        <div className="grid w-full gap-4 md:grid-cols-3">
          <Card className="flex min-h-[120px] flex-1 gap-0 rounded-[24px] border-0 bg-card !p-2.5 shadow-none ring-0">
            <CardContent className="flex h-full flex-col gap-[14px] p-0 sm:flex-row sm:items-center sm:gap-[18px]">
              <div className="flex h-[84px] w-full shrink-0 items-center justify-center rounded-[14px] bg-muted p-3 sm:h-full sm:min-h-[84px] sm:w-[126px]">
                <p className="text-center font-display text-[28px] font-semibold leading-none tracking-[-1.5px] text-primary sm:text-[32px]">
                  #1
                </p>
              </div>
              <p className="flex-1 text-base font-bold leading-[1.4] text-foreground">
                Destination for organic financial search.
              </p>
            </CardContent>
          </Card>
          <Card className="flex min-h-[120px] flex-1 gap-0 rounded-[24px] border-0 bg-card !p-2.5 shadow-none ring-0">
            <CardContent className="flex h-full flex-col gap-[14px] p-0 sm:flex-row sm:items-center sm:gap-[18px]">
              <div className="flex h-[84px] w-full shrink-0 items-center justify-center rounded-[14px] bg-muted p-3 sm:h-full sm:min-h-[84px] sm:w-[126px]">
                <p className="text-center font-display text-xl font-semibold leading-tight tracking-tight text-primary sm:text-2xl">
                  Fed
                </p>
              </div>
              <p className="flex-1 text-base font-bold leading-[1.4] text-foreground">
                Federal Reserve Source – Our data is used by the Fed to track
                national lending trends.
              </p>
            </CardContent>
          </Card>
          <Card className="flex min-h-[120px] flex-1 gap-0 rounded-[24px] border-0 bg-card !p-2.5 shadow-none ring-0">
            <CardContent className="flex h-full flex-col gap-[14px] p-0 sm:flex-row sm:items-center sm:gap-[18px]">
              <div className="flex h-[84px] w-full shrink-0 items-center justify-center rounded-[14px] bg-muted p-3 sm:h-full sm:min-h-[84px] sm:w-[126px]">
                <div className="relative flex items-start font-display text-[40px] leading-[1.2] tracking-[-2.3569px] text-primary">
                  3,000
                  <span className="ml-0.5 mt-[18px] text-[17px] leading-none">+</span>
                </div>
              </div>
              <p className="flex-1 text-base font-bold leading-[1.4] text-foreground">
                Press Mentions – A brand identity that carries immediate authority
                with your customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
