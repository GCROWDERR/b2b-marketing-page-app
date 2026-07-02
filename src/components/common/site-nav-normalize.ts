/**
 * Marketing shell fixes for the production Bankrate ESI nav.
 *
 * Production sets `is-condensed` on non-homepage routes, which hides desktop
 * categories in a real MPA. In this SPA we only strip those structural classes
 * and let Alpine handle hover / flyout interaction — do not re-init Alpine or
 * watch subtree mutations (that was resetting `is-active` on every hover).
 */

const MARKETING_NAV_EXPANDED_CLASS = "marketing-nav-expanded";
const PARTNER_NAV_LINK_ID = "marketing-partner-with-us";
const PARTNER_HUB_PATH = "/";

function navigateSpa(href: string): void {
  const url = new URL(href, window.location.origin);
  if (url.origin !== window.location.origin) return;

  window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function syncPartnerNavLinkState(link: HTMLAnchorElement): void {
  const onPartnerHub =
    window.location.pathname === PARTNER_HUB_PATH ||
    window.location.pathname === "/partners";

  if (onPartnerHub) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
}

/** B2B marketing CTA — injected beside production auth in the ESI nav. */
export function injectMarketingPartnerNavLink(container: HTMLElement): void {
  const rightLinks = container.querySelector<HTMLElement>(".SiteNav-rightLinks");
  if (!rightLinks) return;

  let link = container.querySelector<HTMLAnchorElement>(`#${PARTNER_NAV_LINK_ID}`);

  if (!link) {
    link = document.createElement("a");
    link.id = PARTNER_NAV_LINK_ID;
    link.href = PARTNER_HUB_PATH;
    link.className = "marketing-partner-nav-link";
    link.textContent = "Partner with us";
    link.setAttribute("data-location", "site-nav");
    link.setAttribute("data-name", "partner-with-us");

    link.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      event.preventDefault();
      navigateSpa(link!.href);
    });

    const authSection = rightLinks.querySelector("#desktop-auth-section");
    if (authSection) {
      rightLinks.insertBefore(link, authSection);
    } else {
      rightLinks.prepend(link);
    }
  } else {
    const authSection = rightLinks.querySelector("#desktop-auth-section");
    if (authSection && link.nextElementSibling !== authSection) {
      rightLinks.insertBefore(link, authSection);
    }
  }

  syncPartnerNavLinkState(link);
}

/** Strip condensed/gradient classes and reveal cloaked nodes once. */
export function normalizeMarketingSiteNav(container: HTMLElement): void {
  const siteNav = container.querySelector<HTMLElement>(".SiteNav");
  if (!siteNav) return;

  siteNav.classList.add(MARKETING_NAV_EXPANDED_CLASS);
  siteNav.classList.remove("blue-gradient-enabled", "is-condensed");

  if (!container.hasAttribute("data-marketing-nav-ready")) {
    container.querySelectorAll("[x-cloak]").forEach((node) => {
      node.removeAttribute("x-cloak");
    });
  }

  injectMarketingPartnerNavLink(container);

  siteNav.setAttribute("data-marketing-nav-ready", "true");
  container.setAttribute("data-marketing-nav-ready", "true");
}

/** Re-apply structural fixes if production scripts re-add condensed state. */
export function observeMarketingSiteNav(container: HTMLElement): () => void {
  const siteNav = container.querySelector<HTMLElement>(".SiteNav");
  if (!siteNav) return () => {};

  const observer = new MutationObserver(() => {
    if (
      siteNav.classList.contains("is-condensed") ||
      siteNav.classList.contains("blue-gradient-enabled")
    ) {
      siteNav.classList.add(MARKETING_NAV_EXPANDED_CLASS);
      siteNav.classList.remove("blue-gradient-enabled", "is-condensed");
    }
  });

  observer.observe(siteNav, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

export function finalizeMarketingSiteNav(container: HTMLElement): () => void {
  normalizeMarketingSiteNav(container);
  return observeMarketingSiteNav(container);
}

/** Re-run after SPA route changes — structural only, no Alpine re-init. */
export function syncMarketingSiteNav(): void {
  const root = document.querySelector<HTMLElement>(".site-nav-root");
  if (root) normalizeMarketingSiteNav(root);
}
