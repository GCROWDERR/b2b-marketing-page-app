import {
  getPartnersInterestLabel,
} from "./partners-inquiry-types";
import { submitContactInquiry, type SubmitContactInquiryResult } from "./submit-contact-inquiry";

export type PartnersInquiryPayload = {
  company: string;
  contactName: string;
  email: string;
  interest: string;
  message: string;
};

export type SubmitPartnersInquiryResult = SubmitContactInquiryResult;

function buildSubject(payload: PartnersInquiryPayload): string {
  const interestLabel = getPartnersInterestLabel(payload.interest);
  const subject = `Partnership inquiry: ${interestLabel} — ${payload.company}`;
  return subject.length > 150 ? `${subject.slice(0, 147)}...` : subject;
}

function buildDescription(payload: PartnersInquiryPayload): string {
  const interestLabel = getPartnersInterestLabel(payload.interest);
  const lines = [
    `Company: ${payload.company}`,
    `Contact: ${payload.contactName}`,
    `Interest: ${interestLabel}`,
  ];

  if (payload.message.trim()) {
    lines.push("", payload.message.trim());
  }

  return lines.join("\n");
}

export async function submitPartnersInquiry(
  payload: PartnersInquiryPayload
): Promise<SubmitPartnersInquiryResult> {
  return submitContactInquiry(
    {
      contactName: payload.contactName,
      email: payload.email,
      subject: buildSubject(payload),
      description: buildDescription(payload),
    },
    "PartnersInquiry"
  );
}
