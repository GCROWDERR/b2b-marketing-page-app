import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarketingLayoutProps = {
  children: ReactNode;
  className?: string;
};

/** Optional page-level wrapper — nav/footer live in MarketingAppShell. */
export function MarketingLayout({ children, className }: MarketingLayoutProps) {
  return <div className={cn(className)}>{children}</div>;
}
