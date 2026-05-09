import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MarketingFooter } from "./marketing-footer";
import { MarketingNav } from "./marketing-nav";

type MarketingPartnersPlaceholderPageProps = {
  documentTitle: string;
  kicker: string;
  title: string;
  description: string;
};

export function MarketingPartnersPlaceholderPage({
  documentTitle,
  kicker,
  title,
  description,
}: MarketingPartnersPlaceholderPageProps) {
  useEffect(() => {
    const previous = document.title;
    document.title = documentTitle;
    return () => {
      document.title = previous;
    };
  }, [documentTitle]);

  return (
    <div className="min-w-0 bg-background text-foreground antialiased">
      <div className="relative">
        <MarketingNav />
        <section className="relative z-0 -mt-[82px] w-full bg-surface-inverse">
          <div className="mx-auto flex max-w-[720px] flex-col items-center px-8 pb-24 pt-[calc(5rem+82px)] text-center sm:pb-28 sm:pt-[calc(6rem+82px)]">
            <p className="text-sm font-semibold tracking-tight text-surface-inverse-fg-soft">
              {kicker}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2rem,5vw,48px)] font-semibold leading-[1.15] tracking-[-2px] text-surface-inverse-fg">
              {title}
            </h1>
            <p
              className="mt-6 max-w-[540px] font-sans text-base font-normal leading-[1.5] text-surface-inverse-fg-soft sm:text-lg"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {description}
            </p>
            <Link
              to="/partners"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border-0 bg-primary px-6 text-[15px] font-semibold tracking-[-0.15px] text-primary-foreground shadow-none hover:bg-primary/90 hover:no-underline"
              )}
            >
              Back to partnership paths
              <ChevronRight className="size-4 rotate-180 shrink-0" aria-hidden />
            </Link>
          </div>
        </section>
      </div>
      <MarketingFooter />
    </div>
  );
}
