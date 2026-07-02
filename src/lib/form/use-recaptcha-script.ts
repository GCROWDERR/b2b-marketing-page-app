import { useEffect } from "react";

const SCRIPT_ID = "recaptcha-v3-script";

/** Loads reCAPTCHA v3 when VITE_RECAPTCHA_SITE_KEY is set (brand ContactForm pattern). */
export function useRecaptchaScript() {
  useEffect(() => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim();
    if (!siteKey || document.getElementById(SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);
}
