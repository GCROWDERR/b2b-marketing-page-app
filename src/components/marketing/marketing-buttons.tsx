import * as React from "react";
import { ChevronRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const arrowClass = "size-4 rotate-180 shrink-0";

export function MarketingPrimaryLink({
  className,
  children,
  showArrow = true,
  href = "#",
  ...props
}: React.ComponentProps<"a"> & { showArrow?: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "h-auto gap-2 rounded-[10px] border-0 bg-primary px-5 py-3 text-[15px] font-semibold tracking-tight text-primary-foreground shadow-none hover:bg-primary/90 hover:no-underline",
        className
      )}
      {...props}
    >
      {children}
      {showArrow ? <ChevronRight className={arrowClass} aria-hidden /> : null}
    </a>
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
    <a
      href={href}
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "h-auto gap-2 rounded-[10px] border-primary bg-transparent px-5 py-3 text-[15px] font-semibold tracking-tight text-surface-inverse-fg shadow-none hover:bg-surface-inverse-fg/10 hover:text-surface-inverse-fg hover:no-underline",
        className
      )}
      {...props}
    >
      {children}
      {showArrow ? (
        <ChevronRight className={cn(arrowClass, "text-surface-inverse-fg")} aria-hidden />
      ) : null}
    </a>
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
      variant="default"
      size="lg"
      className={cn(
        "h-auto gap-2 rounded-[10px] border-0 bg-primary px-5 py-3 text-[15px] font-semibold tracking-tight text-primary-foreground shadow-none hover:bg-primary/90",
        className
      )}
      {...props}
    >
      {children}
      {showArrow ? <ChevronRight className={arrowClass} aria-hidden /> : null}
    </Button>
  );
}
