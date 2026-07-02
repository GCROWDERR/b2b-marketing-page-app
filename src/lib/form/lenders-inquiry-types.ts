export const LENDERS_VERTICALS = ["Mortgage", "Deposits", "Credit Cards", "Other"] as const;

export type LendersVertical = (typeof LENDERS_VERTICALS)[number];

export const LENDERS_LOAN_TYPES = [
  "Purchase",
  "Refinance",
  "HELOC",
  "Home Equity",
] as const;

/** Maps lenders vertical tabs to partners interest values for Zendesk routing. */
export const LENDERS_VERTICAL_INTEREST: Record<LendersVertical, string> = {
  Mortgage: "mortgage-advertising",
  Deposits: "deposits-cards",
  "Credit Cards": "deposits-cards",
  Other: "other",
};

export function lendersFormTitle(vertical: LendersVertical): string {
  return `Request ${vertical.toLowerCase()} partnership info`;
}
