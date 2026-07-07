import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { syncMarketingSiteNav, injectMarketingPartnerNavLink } from "@/components/common/site-nav-normalize";

/** Re-apply marketing nav fixes after SPA route changes (Alpine toggles condensed state). */
export function MarketingNavRouteSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    syncMarketingSiteNav();
    const root = document.querySelector<HTMLElement>(".site-nav-root");
    if (root) injectMarketingPartnerNavLink(root);
  }, [pathname]);

  return null;
}
