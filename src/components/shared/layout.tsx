import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

/** Optional page-level wrapper — nav/footer live in AppShell. */
export function Layout({ children, className }: LayoutProps) {
  return <div className={cn(className)}>{children}</div>;
}
