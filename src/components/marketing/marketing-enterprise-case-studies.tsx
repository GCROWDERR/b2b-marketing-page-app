import { ENTERPRISE_IMG } from "./enterprise-assets";
import { Button } from "@/components/ui/button";

export function MarketingEnterpriseCaseStudies() {
  return (
    <section className="bg-background px-6 py-16 sm:px-12 lg:px-16 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1152px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex min-h-[280px] flex-1 items-center justify-center rounded-[48px] border border-border bg-[#232f3e] p-8 lg:min-h-[363px]">
          <img
            src={ENTERPRISE_IMG.caseStudyAmazon}
            alt="Amazon"
            className="h-auto w-[200px] max-w-full object-contain"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.2] tracking-[-2px] text-foreground">
              See how partners use Bankrate
            </h2>
            <p
              className="text-lg leading-[1.4] text-foreground"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Our journalists don&apos;t just report on the news; they interpret it for your
              wallet. With 50 years of independent analysis, we help you understand market
              shifts so you can make informed decisions that serve your long-term interests.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            arrow
            className="h-12 w-fit px-5 text-[15px] font-semibold"
            asChild
          >
            <a href="#">Meet our analysts</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
