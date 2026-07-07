import { Checkmark } from "@bankrate/icons-react";

import { PartnersInquiryForm } from "@/components/common/partners-inquiry-form";
import { Heading2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingBody, marketingBodySm, marketingSectionLead } from "./copy";
import { SectionShell } from "./section-shell";

type PartnersSalesFormProps = {
  variant?: "default" | "enterprise" | "demand";
};

const demandBenefits = [
  "Fast approval process",
  "Access to pre-made assets",
  "Dedicated onboarding support",
];

export function PartnersSalesForm({
  variant = "default",
}: PartnersSalesFormProps) {
  const isEnterprise = variant === "enterprise";
  const isDemand = variant === "demand";

  return (
    <SectionShell
      id={isDemand ? "apply" : "contact-sales"}
      className={cn(
        "scroll-mt-[calc(82px+1rem)] bg-background",
        isDemand && "py-16 lg:py-20"
      )}
    >
      {isEnterprise || isDemand ? (
        <div className="grid gap-12 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <Heading2 className="text-pretty text-headings">
              {isDemand
                ? "Apply to become an affiliate partner"
                : "Tell us about your goals"}
            </Heading2>
            <p className={marketingSectionLead}>
              {isDemand
                ? "Ready to scale your earnings? Fill out the application and our partnership team will be in touch shortly."
                : "Our team will reach out within 24 hours to discuss how Bankrate can power your audience\u2019s financial journey."}
            </p>
            {isDemand ? (
              <ul className="flex flex-col gap-4 pt-2">
                {demandBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-[10px] bg-primary">
                      <Checkmark className="size-3 text-white" aria-hidden />
                    </span>
                    <span className={marketingBody}>{benefit}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <PartnersInquiryForm
              submitLabel="Submit Request"
              defaultInterest={isDemand ? "demand" : undefined}
              hideInterestField={isDemand}
              className="flex-col lg:flex-col"
            />
            <p className={cn("mt-6 text-center text-[11px]", marketingBodySm)}>
              By clicking submit, you agree to our Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:p-12">
          <Heading2 className="max-w-(--section-copy) text-pretty text-headings">
            Contact one of our sales representatives
          </Heading2>
          <p className="mt-4 text-sm text-gray-700">* Required field</p>
          <p className={cn("mt-2 max-w-[640px]", marketingBodySm)}>
            Your personal information and privacy is protected. Please read our{" "}
            <a
              href="https://www.bankrate.com/privacy/"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-[3px] transition-colors hover:decoration-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>{" "}
            for details.
          </p>
          <div className="mt-10">
            <PartnersInquiryForm />
          </div>
        </div>
      )}
    </SectionShell>
  );
}
