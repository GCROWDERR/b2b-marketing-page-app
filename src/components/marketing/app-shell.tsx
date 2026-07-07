import type { ReactNode } from "react";

import { MarketingFooter } from "./footer";
import { MarketingNav } from "./nav";
import { MarketingNavRouteSync } from "./nav-route-sync";

type MarketingAppShellProps = {
  children: ReactNode;
};

/**
 * Persistent marketing chrome — matches brand-identity layout.tsx where header/footer
 * survive client-side navigations instead of remounting per page.
 */
export function MarketingAppShell({ children }: MarketingAppShellProps) {
  return (
    <div className="min-w-0 bg-background text-foreground antialiased">
      <MarketingNavRouteSync />
      <MarketingNav />
      <main id="main-content" className="flex-1 pb-14">
        {children}
      </main>
      <MarketingFooter />
    </div>
  );
}
