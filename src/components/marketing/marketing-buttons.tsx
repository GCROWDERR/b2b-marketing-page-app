import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketingPrimaryLink({
  className,
  children,
  showArrow = true,
  href = "#",
  ...props
}: React.ComponentProps<"a"> & { showArrow?: boolean }) {
  return (
    <Button
      variant="primary"
      size="lg"
      arrow={showArrow}
      className={cn("h-12 px-5 text-[15px] font-semibold tracking-tight", className)}
      asChild
    >
      <a href={href} {...props}>
        {children}
      </a>
    </Button>
  );
}

export function MarketingOutlineOnDarkLink({
  className,
  children,
  showArrow = true,
  href = "#",
  ...props
}: React.ComponentProps<"a"> & { showArrow?: boolean }) {
  return (
    <Button
      variant="outline"
      color="white"
      size="lg"
      arrow={showArrow}
      className={cn("h-12 px-5 text-[15px] font-semibold tracking-tight", className)}
      asChild
    >
      <a href={href} {...props}>
        {children}
      </a>
    </Button>
  );
}

export function MarketingPrimaryButton({
  className,
  children,
  showArrow = true,
  ...props
}: React.ComponentProps<typeof Button> & { showArrow?: boolean }) {
  return (
    <Button
      variant="primary"
      size="lg"
      arrow={showArrow}
      className={cn("h-12 px-5 text-[15px] font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
