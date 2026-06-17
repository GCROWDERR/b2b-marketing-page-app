import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { ENTERPRISE_IMG } from "./enterprise-assets";
import { MarketingPrimaryButton } from "./marketing-buttons";

const footerColumns = [
  { title: "Mortgages", links: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"] },
  { title: "Investing", links: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"] },
  {
    title: "Resources",
    links: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five", "Link Six", "Link Seven", "Link Eight"],
  },
  { title: "About Bankrate", links: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five", "Link Six"] },
  {
    title: "B2B Partnerships",
    links: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five", "Link Six", "Link Seven"],
  },
  { title: "Legal", links: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five", "Link Six", "Link Seven"] },
] as const;

const socialLinks = [
  { label: "Facebook", href: "#", icon: ENTERPRISE_IMG.socialFacebook },
  { label: "Instagram", href: "#", icon: ENTERPRISE_IMG.socialInstagram },
  { label: "X", href: "#", icon: ENTERPRISE_IMG.socialX },
  { label: "LinkedIn", href: "#", icon: ENTERPRISE_IMG.socialLinkedin },
  { label: "YouTube", href: "#", icon: ENTERPRISE_IMG.socialYoutube },
] as const;

export function MarketingFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0f1b2f] px-8 pb-20 pt-[104px] lg:px-16">
      <img
        src={ENTERPRISE_IMG.footerHouse}
        alt=""
        className="pointer-events-none absolute right-[15%] top-[70px] hidden h-[109px] w-[97px] -rotate-[7.5deg] lg:block"
        aria-hidden
      />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 lg:gap-20">
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-[760px] text-center font-display text-4xl font-semibold leading-[1.2] tracking-[-2px] text-[#f5f2eb] sm:text-[56px]">
            Build your future on a stronger foundation.
          </h2>
          <div className="flex w-full max-w-[452px] flex-col items-center gap-4">
            <p className="text-sm font-semibold text-white">Sign up to our newsletter</p>
            <div className="flex w-full items-center justify-between gap-2 rounded-xl border border-[#4c5d78] bg-[#13223b] py-2 pr-2 pl-5">
              <Input
                type="email"
                placeholder="Email Address"
                className="h-auto flex-1 border-0 bg-transparent px-0 text-base text-white shadow-none ring-0 placeholder:text-white/50 focus-visible:ring-0 md:text-base"
              />
              <MarketingPrimaryButton showArrow type="button">
                Submit
              </MarketingPrimaryButton>
            </div>
          </div>
        </div>

        <Separator className="bg-[#4c5d78]" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((col) => (
            <div key={col.title} className="min-w-0">
              <p className="mb-10 text-base font-medium tracking-[-0.16px] text-[#f5f2eb]">
                {col.title}
              </p>
              <div className="flex flex-col">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="py-2 text-xs font-semibold text-[#f5f2eb] hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <img
            src={ENTERPRISE_IMG.footerLogo}
            alt="Bankrate"
            className="block h-[52px] w-auto max-w-[320px] object-contain object-left sm:h-[64px] lg:h-[81px] lg:max-w-[518px]"
          />
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex size-6 items-center justify-center"
                  aria-label={label}
                >
                  <img src={icon} alt="" className="size-5" aria-hidden />
                </a>
              ))}
            </div>
            <p className="text-sm text-[#f5f2eb]">© 2026 Bankrate. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
