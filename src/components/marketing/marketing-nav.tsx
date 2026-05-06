import { ChevronDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

import { IMG } from "./assets";
import { MarketingPrimaryLink } from "./marketing-buttons";

const navLinkClass =
  "flex items-center gap-0.5 text-[15px] font-semibold tracking-tight text-surface-inverse-fg hover:text-surface-inverse-fg/90";

export function MarketingNav() {
  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-surface-inverse-border bg-surface-inverse">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-8 lg:px-16">
        <a href="#" className="w-44 shrink-0">
          <img
            src={IMG.logo}
            alt="Bankrate"
            className="h-[27px] w-[176px] object-contain"
            width={176}
            height={27}
          />
        </a>
        <div className="hidden items-center gap-8 xl:flex">
          <a href="#" className={navLinkClass}>
            Mortgages
            <ChevronDown className="size-2.5 opacity-70" aria-hidden />
          </a>
          <a href="#" className={navLinkClass}>
            Investing
            <ChevronDown className="size-2.5 opacity-70" aria-hidden />
          </a>
          <a href="#" className={navLinkClass}>
            B2B Partnerships
            <ChevronDown className="size-2.5 opacity-70" aria-hidden />
          </a>
          <a href="#" className={navLinkClass}>
            Loans
            <ChevronDown className="size-2.5 opacity-70" aria-hidden />
          </a>
          <a href="#" className={navLinkClass}>
            Insurance
            <ChevronDown className="size-2.5 opacity-70" aria-hidden />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MarketingPrimaryLink showArrow href="#">
            Sign up / Log in
          </MarketingPrimaryLink>
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon-lg"
            className="size-12 rounded-[10px] border-primary bg-transparent text-surface-inverse-fg hover:bg-surface-inverse-fg/10"
            aria-label="Search"
          >
            <Search className="size-5 text-surface-inverse-fg" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
