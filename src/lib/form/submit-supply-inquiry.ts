import { getPartnersInterestLabel } from "./partners-inquiry-types";
import {
  SUPPLY_VERTICAL_INTEREST,
  type SupplyVertical,
} from "./supply-inquiry-types";
import { submitContactInquiry, type SubmitContactInquiryResult } from "./submit-contact-inquiry";

export type SupplyInquiryPayload = {
  vertical: SupplyVertical;
  company: string;
  website: string;
  contactName: string;
  email: string;
  role: string;
  loanTypes: string[];
  nmls: string;
  markets: string;
};

export type SubmitSupplyInquiryResult = SubmitContactInquiryResult;

function buildSubject(payload: SupplyInquiryPayload): string {
  const interest = SUPPLY_VERTICAL_INTEREST[payload.vertical];
  const interestLabel = getPartnersInterestLabel(interest);
  const subject = `Supply partnership: ${payload.vertical} — ${interestLabel} — ${payload.company}`;
  return subject.length > 150 ? `${subject.slice(0, 147)}...` : subject;
}

function buildDescription(payload: SupplyInquiryPayload): string {
  const lines = [
    `Vertical: ${payload.vertical}`,
    `Company: ${payload.company}`,
    `Contact: ${payload.contactName}`,
    `Email: ${payload.email}`,
  ];

  if (payload.website.trim()) lines.push(`Website: ${payload.website.trim()}`);
  if (payload.role.trim()) lines.push(`Role: ${payload.role.trim()}`);

  if (payload.vertical === "Mortgage") {
    if (payload.loanTypes.length > 0) {
      lines.push(`Loan types: ${payload.loanTypes.join(", ")}`);
    }
    if (payload.nmls.trim()) lines.push(`NMLS: ${payload.nmls.trim()}`);
    if (payload.markets.trim()) lines.push(`Markets: ${payload.markets.trim()}`);
  }

  return lines.join("\n");
}

export async function submitSupplyInquiry(
  payload: SupplyInquiryPayload
): Promise<SubmitSupplyInquiryResult> {
  return submitContactInquiry(
    {
      contactName: payload.contactName,
      email: payload.email,
      subject: buildSubject(payload),
      description: buildDescription(payload),
    },
    "SupplyInquiry"
  );
}
