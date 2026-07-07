import type { ReactNode } from "react";

import { Footer } from "./footer";
import { Nav } from "./nav";
import { NavRouteSync } from "./nav-route-sync";

type AppShellProps = {
  children: ReactNode;
};

/**
 * Persistent marketing chrome — matches brand-identity layout.tsx where header/footer
 * survive client-side navigations instead of remounting per page.
 */
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-w-0 bg-background text-foreground antialiased">
      <NavRouteSync />
      <Nav />
      <main id="main-content" className="flex-1 pb-14">
        {children}
      </main>
      <Footer />
    </div>
  );
}
