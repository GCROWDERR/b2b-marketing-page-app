import { ZENDESK_PARTNERSHIP_INQUIRY_TYPE } from "./partners-inquiry-types";

export type SubmitContactInquiryResult =
  | { ok: true }
  | { ok: false; errors: string[] };

const RECAPTCHA_ACTION = "contact_submit";

async function getRecaptchaToken(): Promise<string | null> {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (!siteKey || typeof window.grecaptcha?.execute !== "function") {
    return null;
  }

  return window.grecaptcha.execute(siteKey, { action: RECAPTCHA_ACTION });
}

export async function submitContactInquiry(
  payload: {
    contactName: string;
    email: string;
    subject: string;
    description: string;
  },
  logTag: string
): Promise<SubmitContactInquiryResult> {
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL?.trim();

  if (!apiUrl) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (import.meta.env.DEV) {
      console.info(`[${logTag}] Demo submit (set VITE_CONTACT_API_URL to post for real):`, payload);
    }
    return { ok: true };
  }

  let recaptchaToken = "";
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (siteKey) {
    try {
      recaptchaToken = (await getRecaptchaToken()) ?? "";
      if (!recaptchaToken) {
        return {
          ok: false,
          errors: [
            "We couldn't verify your submission. Please refresh the page and try again.",
          ],
        };
      }
    } catch {
      return {
        ok: false,
        errors: [
          "We couldn't verify your submission. Please refresh the page and try again.",
        ],
      };
    }
  }

  const body = new FormData();
  body.append("name", payload.contactName.trim());
  body.append("email", payload.email.trim());
  body.append("inquiryType", ZENDESK_PARTNERSHIP_INQUIRY_TYPE);
  body.append("subject", payload.subject);
  body.append("description", payload.description);
  if (recaptchaToken) {
    body.append("recaptchaToken", recaptchaToken);
  }

  try {
    const res = await fetch(apiUrl, { method: "POST", body });
    const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; errors?: string[] }
      | null;

    if (data?.ok) {
      return { ok: true };
    }

    const errors =
      Array.isArray(data?.errors) && data.errors.length > 0
        ? data.errors
        : ["Something went wrong. Please try again."];
    return { ok: false, errors };
  } catch {
    return { ok: false, errors: ["Network error. Please check your connection."] };
  }
}
