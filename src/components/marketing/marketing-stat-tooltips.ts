import type { StatTooltipData } from "./stat-tooltip";

/** Bankrate methodology page — same destination as brand-identity stat tooltips. */
export const BANKRATE_METHODOLOGY_HREF =
  "https://www.bankrate.com/mortgages/bankrate-low-offers-methodology/";

export type MarketingStatDefinition = {
  value: string;
  suffix?: boolean;
  label: string;
  tooltip: StatTooltipData;
};

export type MarketingProofStatDefinition = Pick<
  MarketingStatDefinition,
  "value" | "suffix" | "label"
>;

export type MarketingHighlightStatDefinition = {
  value: string;
  title: string;
  body: string;
};

export const AFFILIATE_PROOF_STATS: MarketingHighlightStatDefinition[] = [
  {
    value: "3.2x",
    title: "average revenue lift vs. display ads",
    body: "Partners switching from generic display ads to high-intent Bankrate widgets see immediate RPM increases.",
  },
  {
    value: "Top 5%",
    title: "payout rate among partners",
    body: "Our performance benchmarks consistently rank in the highest tier of the finance affiliate industry.",
  },
];

export const ENTERPRISE_PROOF_STATS: MarketingProofStatDefinition[] = [
  {
    value: "#1",
    label: "Destination for organic financial search.",
  },
  {
    value: "Fed",
    label:
      "Federal Reserve Source – Our data is used by the Fed to track national lending trends.",
  },
  {
    value: "3,000",
    suffix: true,
    label:
      "Press Mentions – A brand identity that carries immediate authority with your customers.",
  },
];

export const ENTERPRISE_WHY_STATS: MarketingProofStatDefinition[] = [
  {
    value: "100M",
    suffix: true,
    label: "Annual unique visitors",
  },
  {
    value: "$38K",
    label: "Average employee savings (private auction)",
  },
  {
    value: "14",
    label: "Lenders per private auction",
  },
  {
    value: "#1",
    label: "Most trusted finance comparison site",
  },
];

export const ENTERPRISE_STATS: MarketingStatDefinition[] = [
  {
    value: "100",
    suffix: true,
    label: "Partners",
    tooltip: {
      body: "On Bankrate, 100+ lenders and financial partners compete to reach qualified, rate-shopping consumers across mortgage, deposits, credit cards, and more — giving partners access to high-intent traffic nationwide.",
      linkText: "See our full methodology.",
      linkHref: BANKRATE_METHODOLOGY_HREF,
    },
  },
  {
    value: "$38k",
    label: "Avg savings",
    tooltip: {
      heading:
        "During 2025, Bankrate's average rate saved its consumers $73,397 on their expected 30-year mortgage cost.",
      body: "Savings based on a modeled comparison of Bankrate's monthly average clicked-on rate in 2025 for purchases and refinances and Freddie Mac's average published mortgage rate, with savings calculated over a 30-year term using Bankrate's average loan amount. Freddie Mac's survey criteria differ from Bankrate data, and fees and points are excluded for both. Not actual realized consumer savings; actual savings vary based on loan terms, rates, costs, and how long the loan is held. Bankrate is not a lender.",
      linkText: "Learn more about our methodology.",
      linkHref: BANKRATE_METHODOLOGY_HREF,
    },
  },
  {
    value: "99.7%",
    label: "Better rates",
    tooltip: {
      heading:
        "During 2025, Bankrate's top offer outperformed 99.77% of offers by 600+ banks and credit unions surveyed.",
      body: "Based on an 8-year cost of loan calculation (including interest payments, lender fees and points). Comparison of Bankrate's best quoted offer clicked by a user each day in 2025 for a 30-year fixed purchase, $310k–$330k loan with 20% down, 700–780 FICO, primary residence, single family) against rates from all institutions surveyed by Bankrate for similar loan each applicable day (assuming $320k loan, 740 FICO). Bankrate is not a lender.",
      linkText: "Learn more about our methodology.",
      linkHref: BANKRATE_METHODOLOGY_HREF,
    },
  },
  {
    value: "2x",
    label: "Lead sharing max",
    tooltip: {
      body: "Qualified leads can be shared with up to two partners in a given product category, ensuring consumers see competitive offers while partners receive high-intent traffic. Availability varies by vertical and partnership tier.",
      linkText: "Learn more about our methodology.",
      linkHref: BANKRATE_METHODOLOGY_HREF,
    },
  },
];

export const LENDERS_STATS: MarketingStatDefinition[] = [
  {
    value: "100",
    suffix: true,
    label: "Partners",
    tooltip: ENTERPRISE_STATS[0].tooltip,
  },
  {
    value: "78%",
    label: "Actively comparing rates",
    tooltip: {
      body: "Based on Bankrate mortgage audience behavior — the majority of visitors on Bankrate mortgage surfaces are actively comparing rates and offers from multiple lenders rather than browsing passively.",
      linkText: "Learn more about our methodology.",
      linkHref: BANKRATE_METHODOLOGY_HREF,
    },
  },
  {
    value: "4.3M",
    label: "Monthly mortgage shoppers",
    tooltip: {
      body: "Monthly mortgage shoppers represent unique visitors to Bankrate mortgage content and rate comparison tools. Volume reflects aggregate audience reach across purchase, refinance, and home equity journeys.",
      linkText: "Learn more about our methodology.",
      linkHref: BANKRATE_METHODOLOGY_HREF,
    },
  },
  {
    value: "#1",
    label: "Most trusted mortgage site",
    tooltip: {
      body: "Bankrate has been helping consumers compare financial products for decades. Trust rankings reflect consumer perception surveys and third-party recognition of Bankrate as a leading personal finance destination.",
      linkText: "Learn more about our methodology.",
      linkHref: BANKRATE_METHODOLOGY_HREF,
    },
  },
];
