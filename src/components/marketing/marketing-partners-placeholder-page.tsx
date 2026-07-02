import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, dispatchHeroButtonRadiusClass } from "@/components/ui/button";
import { EyebrowLg, Heading1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingEyebrowHero, marketingHeroBody } from "./marketing-copy";
import { MarketingLayout } from "./marketing-layout";
import { MarketingBrushHeroShell } from "./marketing-brush-hero-shell";

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
    <MarketingLayout>
      <MarketingBrushHeroShell
        contentClassName="flex flex-col items-center py-20 text-center sm:py-24 lg:py-[120px]"
      >
        <EyebrowLg as="p" className={marketingEyebrowHero}>
          {kicker}
        </EyebrowLg>
        <Heading1 className="mt-6 max-w-[640px] leading-[1.2] tracking-tight text-white">
          {title}
        </Heading1>
        <p className={cn("mt-6 max-w-[540px]", marketingHeroBody)}>{description}</p>
        <Button
          variant="primary"
          size="lg"
          className={cn(
            dispatchHeroButtonRadiusClass,
            "mt-10 h-12 px-6 text-sm font-semibold"
          )}
          asChild
        >
          <Link to="/#partner-paths">Back to partnership paths</Link>
        </Button>
      </MarketingBrushHeroShell>
    </MarketingLayout>
  );
}
