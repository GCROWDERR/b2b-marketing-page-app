import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { ENTERPRISE_IMG } from "./enterprise-assets";
import { MarketingPrimaryLink } from "./marketing-buttons";

const navLinkClass =
  "flex items-center gap-0.5 text-[15px] font-semibold tracking-[-0.15px] text-foreground hover:text-foreground/85";

export function MarketingNav() {
  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-border bg-background">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-8 lg:px-14">
        <Link to="/" className="w-44 shrink-0">
          <img
            src={ENTERPRISE_IMG.navLogo}
            alt="Bankrate"
            className="h-[27px] w-[176px] object-contain object-left"
            width={176}
            height={27}
          />
        </Link>
        <div className="hidden items-center gap-8 xl:flex">
          {(["Mortgages", "Investing", "Loans", "Insurance"] as const).map((label) => (
            <a key={label} href="#" className={navLinkClass}>
              {label}
              <ChevronDown className="size-2.5 opacity-70" aria-hidden />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/partners"
            className="mr-1 inline-flex h-12 items-center gap-2 whitespace-nowrap px-5 text-base font-semibold tracking-[-0.16px] text-primary hover:text-primary/90"
          >
            Partner with us
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Link>
          <MarketingPrimaryLink showArrow href="#" className="inline-flex h-12">
            Sign up
          </MarketingPrimaryLink>
          <Button
            variant="outline"
            className="size-12 shrink-0 p-0"
            aria-label="Search"
          >
            <Search className="size-5 text-foreground" aria-hidden />
          </Button>
        </div>
      </div>
    </nav>
  );
}
