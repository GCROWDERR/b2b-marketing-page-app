"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { syncMarketingSiteNav, injectMarketingPartnerNavLink } from "@/components/common/site-nav-normalize";

/** Re-apply marketing nav fixes after SPA route changes (Alpine toggles condensed state). */
export function NavRouteSync() {
  const pathname = usePathname();

  useEffect(() => {
    syncMarketingSiteNav();
    const root = document.querySelector<HTMLElement>(".site-nav-root");
    if (root) injectMarketingPartnerNavLink(root);
  }, [pathname]);

  return null;
}
