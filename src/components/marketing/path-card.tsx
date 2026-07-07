import type { ReactNode } from "react";
import type { BankrateIcon } from "@bankrate/icons-react";

import { CornerEmphasis } from "@/components/common/flourish/corner-emphasis";
import {
  IconOffset,
  type IconOffsetColor,
  type IconOffsetVariant,
} from "@/components/common/flourish/icon-offset";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingBody, marketingCardIcon, marketingCardKicker } from "./copy";

/** Card shell from brand-identity homepage next-steps tiles. */
export const marketingPathCardClassName =
  "relative flex flex-1 flex-col gap-4 overflow-visible border-none bg-card pt-6 px-8 pb-12 shadow-xs ring-0 has-data-[slot=card-footer]:pb-12";

export type MarketingPathCardProps = {
  icon: BankrateIcon;
  iconVariant: IconOffsetVariant;
  iconColor: IconOffsetColor;
  kicker: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  className?: string;
  footer?: ReactNode;
  showCornerEmphasis?: boolean;
};

export function MarketingPathCard({
  icon: PathIcon,
  iconVariant,
  iconColor,
  kicker,
  title,
  description,
  cta,
  href,
  className,
  footer,
  showCornerEmphasis = false,
}: MarketingPathCardProps) {
  return (
    <Card className={cn(marketingPathCardClassName, className)}>
      {showCornerEmphasis ? <CornerEmphasis className="hidden xl:block" /> : null}
      <CardHeader className="gap-4 border-b border-gray-300 px-0 pb-4">
        <IconOffset
          variant={iconVariant}
          color={iconColor}
          icon={<PathIcon className={marketingCardIcon} />}
        />
        <CardDescription className={marketingCardKicker}>{kicker}</CardDescription>
        <CardTitle>
          <Heading3 className="text-blue-900">{title}</Heading3>
        </CardTitle>
      </CardHeader>
      <CardContent className="mb-4 px-0">
        <p className={marketingBody}>{description}</p>
      </CardContent>
      <CardFooter className="mt-auto border-0 bg-transparent p-0">
        {footer ?? (
          <Button size="lg" arrow href={href}>
            {cta}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
