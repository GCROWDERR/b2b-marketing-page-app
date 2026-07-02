/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** POST endpoint compatible with brand-identity /api/contact (multipart FormData). */
  readonly VITE_CONTACT_API_URL?: string;
  /** reCAPTCHA v3 site key — required when posting to a protected contact API. */
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  grecaptcha?: {
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  };
}
