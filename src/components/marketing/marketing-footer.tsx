import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { IMG } from "./assets";
import { MarketingPrimaryButton } from "./marketing-buttons";

const footerColumns = [
  {
    title: "Mortgages",
    links: [
      "Purchase Loans",
      "Refinance",
      "Home Equity",
      "Rate Comparison",
      "Mortgage Calculator",
    ],
  },
  {
    title: "Investing",
    links: ["Stocks", "ETFs", "Retirement", "Robo-Advisors", "Brokerages"],
  },
  {
    title: "Resources",
    links: [
      "News",
      "Expert Advice",
      "Calculators",
      "Glossary",
      "Research",
      "Data Center",
      "Surveys",
      "Editorial Standards",
    ],
  },
  {
    title: "About Bankrate",
    links: [
      "About Us",
      "Our Team",
      "Careers",
      "Press Room",
      "Advertise",
      "Contact Us",
    ],
  },
  {
    title: "B2B Partnerships",
    links: [
      "Partner Overview",
      "Lender Solutions",
      "Data Licensing",
      "API Access",
      "Case Studies",
      "Partner Login",
      "Become a Partner",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Use",
      "Cookie Settings",
      "Accessibility",
      "CCPA",
      "Licenses",
      "Disclosures",
    ],
  },
] as const;

export function MarketingFooter() {
  return (
    <footer className="bg-surface-inverse px-8 py-20 pb-16 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <h2 className="max-w-[760px] text-center font-display text-4xl font-semibold leading-tight tracking-tight text-surface-inverse-fg-soft sm:text-5xl lg:text-[56px] lg:tracking-[-2px]">
            Build your future on a stronger foundation.
          </h2>
          <div className="flex w-full max-w-[452px] flex-col items-center gap-4">
            <p className="text-center text-sm font-semibold text-surface-inverse-fg">
              Sign up to our newsletter
            </p>
            <div className="flex w-full items-center justify-between gap-2 rounded-xl border border-surface-inverse-border bg-surface-inverse-input py-2 pr-2 pl-5">
              <Input
                type="email"
                placeholder="Email Address"
                className="h-auto flex-1 border-0 bg-transparent px-0 text-base text-surface-inverse-fg shadow-none ring-0 placeholder:text-surface-inverse-fg-soft focus-visible:ring-0 md:text-base"
              />
              <MarketingPrimaryButton showArrow type="button">
                Submit
              </MarketingPrimaryButton>
            </div>
          </div>
        </div>

        <Separator className="bg-surface-inverse-border" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {footerColumns.map((col) => (
            <div key={col.title} className="min-w-0">
              <p className="mb-8 text-base font-medium tracking-tight text-surface-inverse-fg-soft">
                {col.title}
              </p>
              <div className="flex flex-col">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="py-2 text-xs font-semibold leading-normal text-surface-inverse-fg-soft hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="shrink-0">
            <img
              src={IMG.footerLogo}
              alt="Bankrate"
              className="block max-w-[260px]"
              width={264}
              height={41}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {[
                { href: "#", label: "Facebook", src: IMG.socialFb },
                { href: "#", label: "Instagram", src: IMG.socialIg },
                { href: "#", label: "X / Twitter", src: IMG.socialX },
                { href: "#", label: "LinkedIn", src: IMG.socialLi },
                { href: "#", label: "YouTube", src: IMG.socialYt },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex size-6 items-center justify-center"
                  aria-label={s.label}
                >
                  <img
                    src={s.src}
                    alt=""
                    className="size-[18px] object-contain brightness-0 invert"
                  />
                </a>
              ))}
            </div>
            <p className="text-sm text-surface-inverse-fg-soft">© 2026 Bankrate. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
