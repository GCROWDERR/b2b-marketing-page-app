import { RemoteHtml } from "./remote-html";

const baseUrl =
  import.meta.env.VITE_HEADER_FOOTER_BASE_URL ?? "https://www.bankrate.com";

const flagParam = import.meta.env.DEV
  ? "?rebrand=1&feature-flag_enable-esi-routes=true"
  : "?rebrand=1";

/** Production Bankrate nav from brand-identity-pages ESI include. */
export function SiteHeader() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-blue-900 focus:shadow-md"
      >
        Skip to main content
      </a>
      <RemoteHtml
        url={`${baseUrl}/esi-includes/header/${flagParam}`}
        className="site-nav-root"
        normalizeNav
      />
    </>
  );
}
