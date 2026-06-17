import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { DispatchFooter } from "@/components/dispatch/footer";
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
            <Button
              variant="primary"
              size="lg"
              className="mt-10 h-12 px-6 text-[15px] font-semibold tracking-[-0.15px]"
              asChild
            >
              <Link to="/partners">Back to partnership paths</Link>
            </Button>
          </div>
        </section>
      </div>
      <DispatchFooter />
    </div>
  );
}
