import { PartnersInquiryForm } from "@/components/common/partners-inquiry-form";
import { Heading2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { marketingBodySm, marketingSectionLead } from "./marketing-copy";
import { MarketingSectionShell } from "./marketing-section-shell";

type MarketingPartnersSalesFormProps = {
  variant?: "default" | "enterprise";
};

export function MarketingPartnersSalesForm({
  variant = "default",
}: MarketingPartnersSalesFormProps) {
  const isEnterprise = variant === "enterprise";

  return (
    <MarketingSectionShell
      id="contact-sales"
      className="scroll-mt-[calc(82px+1rem)] bg-background"
    >
      {isEnterprise ? (
        <div className="grid gap-12 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <Heading2 className="text-pretty text-headings">Tell us about your goals</Heading2>
            <p className={marketingSectionLead}>
              Our team will reach out within 24 hours to discuss how Bankrate can power your
              audience&apos;s financial journey.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <PartnersInquiryForm submitLabel="Submit Request" />
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
    </MarketingSectionShell>
  );
}
