import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { CircledText } from "@/components/ui/circled-text";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { LENDERS_IMG } from "./lenders-assets";

const verticals = ["Mortgage", "Deposits", "Credit Cards", "Other"] as const;
type Vertical = (typeof verticals)[number];

const verticalCopy: Record<
  Vertical,
  {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    fit: string[];
  }
> = {
  Mortgage: {
    eyebrow: "Mortgage & Home Lending",
    title: "Connect with high-intent mortgage shoppers",
    description:
      "Reach purchase, refi, and HELOC shoppers in an opt-in environment built for lender quality and compliance.",
    bullets: [
      "Purchase & refinance leads",
      "HELOC & home equity placements",
      "Real-time rate table integration",
      "Geo-specific state targeting",
    ],
    fit: [
      "Licensed mortgage lender",
      "Capacity to respond within 5 min",
      "Defined geographic footprint",
    ],
  },
  Deposits: {
    eyebrow: "Deposits & Savings",
    title: "Reach savers comparing rates and products",
    description:
      "Connect with consumers actively shopping CDs, savings, and money market accounts across Bankrate surfaces.",
    bullets: [
      "Rate table placements",
      "Product comparison listings",
      "Audience targeting by balance band",
      "Performance reporting",
    ],
    fit: [
      "FDIC/NCUA insured institution",
      "Published rate sheets",
      "Defined product set",
    ],
  },
  "Credit Cards": {
    eyebrow: "Credit Cards",
    title: "Put your card offers in front of ready applicants",
    description:
      "Reach consumers comparing rewards, balance transfer, and low-APR cards with transparent disclosures.",
    bullets: [
      "Card marketplace listings",
      "Category and rewards targeting",
      "Compliance-ready creative",
      "Conversion tracking",
    ],
    fit: [
      "Issuing bank or program manager",
      "Approved marketing materials",
      "Application funnel ready",
    ],
  },
  Other: {
    eyebrow: "Other Financial Products",
    title: "Explore custom partnership programs",
    description:
      "Personal loans, auto, insurance, and more — tell us what you offer and we will route you to the right team.",
    bullets: [
      "Multi-vertical marketplace access",
      "Custom integration options",
      "Dedicated partner support",
      "Flexible commercial models",
    ],
    fit: [
      "Licensed where required",
      "Clear go-to-market plan",
      "Operational readiness",
    ],
  },
};

const loanTypes = ["Purchase", "Refinance", "HELOC", "Home Equity"] as const;

const fieldClass =
  "h-12 w-full rounded-lg border border-input bg-background px-4 text-base text-foreground shadow-none outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export function MarketingLendersGoals() {
  const formId = useId();
  const [vertical, setVertical] = useState<Vertical>("Mortgage");
  const [selectedLoanTypes, setSelectedLoanTypes] = useState<string[]>(["Purchase"]);
  const copy = verticalCopy[vertical];

  function toggleLoanType(type: string) {
    setSelectedLoanTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  return (
    <section
      id="lenders-goals"
      className="scroll-mt-[calc(82px+1rem)] bg-background px-6 pb-16 sm:px-12 lg:px-16 lg:pb-[120px]"
    >
      <div className="mx-auto flex max-w-[1312px] flex-col gap-10">
        <div className="mx-auto flex max-w-[846px] flex-col gap-6 text-center">
          <h2 className="font-display text-4xl font-semibold leading-[1.2] tracking-[-2px] text-foreground sm:text-[48px]">
            Tell us about your <CircledText ringBleed="1.5em">goals</CircledText>
          </h2>
          <p
            className="text-lg leading-[1.7] text-muted-foreground"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Select your vertical below — we&apos;ll tailor the experience from here.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[48px] bg-[#dce7fe] px-6 py-10 sm:px-12 sm:py-14 lg:px-[72px] lg:py-14">
          <div className="flex flex-wrap justify-center gap-3">
            {verticals.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setVertical(item)}
                className={cn(
                  "rounded-full px-[18px] py-3.5 text-sm font-semibold tracking-[-0.14px] transition-colors",
                  vertical === item
                    ? "bg-primary text-primary-foreground"
                    : "bg-[#f2f7ff] text-primary hover:bg-[#eaf1ff]"
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[88px]">
            <div className="flex max-w-[448px] flex-col gap-10">
              <div className="flex flex-col gap-6">
                <p className="text-xs font-bold uppercase tracking-[1.8px] text-primary">
                  {copy.eyebrow}
                </p>
                <h3 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.2] text-[#0b1e3d]">
                  {copy.title}
                </h3>
                <p
                  className="text-lg leading-[1.7] text-muted-foreground"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {copy.description}
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {copy.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <img
                      src={LENDERS_IMG.checkIcon}
                      alt=""
                      className="size-5 shrink-0"
                      aria-hidden
                    />
                    <span className="text-base leading-[1.7] text-muted-foreground">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-6">
                <p className="text-sm text-foreground">Good fit if...</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {copy.fit.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-1 rounded-full bg-muted-foreground" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative min-w-0 flex-1">
              <img
                src={LENDERS_IMG.formSparkle}
                alt=""
                className="pointer-events-none absolute -right-2 -top-2 hidden w-8 lg:block"
                aria-hidden
              />
              <div className="rounded-[24px] bg-card p-8 shadow-[0_4px_24px_rgba(15,27,47,0.08)] sm:p-12">
                <h3 className="font-display text-[28px] font-bold leading-[1.2] text-[#0b1e3d]">
                  Request {vertical.toLowerCase()} partnership info
                </h3>
                <form
                  className="mt-8 flex flex-col gap-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm text-foreground">
                      Company name
                      <Input
                        id={`${formId}-company`}
                        name="company"
                        placeholder="Acme Lending"
                        className={fieldClass}
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-foreground">
                      Website
                      <Input
                        id={`${formId}-website`}
                        name="website"
                        placeholder="https://..."
                        className={fieldClass}
                      />
                    </label>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm text-foreground">
                      Contact name
                      <Input
                        id={`${formId}-contact`}
                        name="contact"
                        placeholder="Full name"
                        className={fieldClass}
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-foreground">
                      Business email
                      <Input
                        id={`${formId}-email`}
                        name="email"
                        type="email"
                        placeholder="you@acme.com"
                        className={fieldClass}
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2 text-sm text-foreground">
                    Role / Title
                    <Input
                      id={`${formId}-role`}
                      name="role"
                      placeholder="e.g. Head of Growth"
                      className={fieldClass}
                    />
                  </label>
                  {vertical === "Mortgage" ? (
                    <>
                      <div className="flex flex-col gap-3">
                        <span className="text-sm text-foreground">Loan types</span>
                        <div className="flex flex-wrap gap-4">
                          {loanTypes.map((type) => {
                            const active = selectedLoanTypes.includes(type);
                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() => toggleLoanType(type)}
                                className={cn(
                                  "flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors",
                                  active
                                    ? "border-primary bg-primary/5 text-foreground"
                                    : "border-border text-muted-foreground"
                                )}
                              >
                                <span
                                  className={cn(
                                    "size-4 rounded border",
                                    active ? "border-primary bg-primary" : "border-border"
                                  )}
                                  aria-hidden
                                />
                                {type}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <label className="flex flex-col gap-2 text-sm text-foreground">
                        NMLS number
                        <Input
                          id={`${formId}-nmls`}
                          name="nmls"
                          placeholder="Required for verification"
                          className={fieldClass}
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm text-foreground">
                        What markets are you prioritizing?
                        <Input
                          id={`${formId}-markets`}
                          name="markets"
                          placeholder="Enter state names or regions"
                          className={fieldClass}
                        />
                      </label>
                    </>
                  ) : null}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="h-12 w-fit px-7 text-lg font-bold"
                  >
                    Submit Request
                  </Button>
                  <p className="text-center text-[11px] text-muted-foreground">
                    By submitting, you agree to our Terms of Use and B2B Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
