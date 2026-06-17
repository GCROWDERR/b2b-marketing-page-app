import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const interestOptions = [
  { value: "mortgage-advertising", label: "Mortgage advertising" },
  { value: "deposits-cards", label: "Deposits & cards" },
  { value: "data-licensing", label: "Data licensing" },
  { value: "api-integrations", label: "API & integrations" },
  { value: "affiliate", label: "Affiliate partnerships" },
  { value: "enterprise", label: "Enterprise & private programs" },
  { value: "other", label: "Other" },
] as const;

const fieldClass =
  "h-12 w-full rounded-[10px] border border-input bg-muted px-4 text-base text-foreground shadow-none outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

/** Textareas must not use a fixed height (`h-12`) or `flex-1`, or the resize handle cannot change height. */
const textareaFieldClass =
  "min-h-[160px] w-full resize-y rounded-[10px] border border-input bg-muted px-4 py-3 text-base text-foreground shadow-none outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-sans leading-relaxed";

export function MarketingPartnersSalesForm() {
  const formId = useId();
  const companyId = `${formId}-company`;
  const contactId = `${formId}-contact`;
  const emailId = `${formId}-email`;
  const messageId = `${formId}-message`;
  const interestId = `${formId}-interest`;

  const [interest, setInterest] = useState("mortgage-advertising");

  return (
    <section
      id="contact-sales"
      className="scroll-mt-[calc(82px+1rem)] bg-background px-8 py-16 lg:px-16"
    >
      <div className="mx-auto max-w-[1312px]">
        <Card className="rounded-[24px] border-0 bg-card shadow-none ring-0">
          <CardContent className="p-8 sm:p-10 lg:p-12">
            <p className="text-base font-semibold text-primary">Sales inquiry</p>
            <h2 className="mt-4 max-w-[720px] font-display text-4xl font-semibold leading-tight tracking-tight text-card-foreground sm:text-5xl sm:tracking-[-2px]">
              Contact one of our sales representatives
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">* Required field</p>
            <p className="mt-2 max-w-[640px] text-base leading-relaxed text-muted-foreground">
              Your personal information and privacy is protected. Please read our{" "}
              <a
                href="#"
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-[3px] transition-colors hover:decoration-primary"
              >
                privacy policy
              </a>{" "}
              for details.
            </p>

            <form
              className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="flex min-h-0 flex-1 flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={companyId}
                    className="text-sm font-semibold text-card-foreground"
                  >
                    Company name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id={companyId}
                    name="company"
                    required
                    autoComplete="organization"
                    className={cn(fieldClass, "py-3")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={contactId}
                    className="text-sm font-semibold text-card-foreground"
                  >
                    Contact name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id={contactId}
                    name="contactName"
                    required
                    autoComplete="name"
                    className={cn(fieldClass, "py-3")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={messageId}
                    className="text-sm font-semibold text-card-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    rows={6}
                    className={textareaFieldClass}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 lg:max-w-md lg:shrink-0">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={emailId}
                    className="text-sm font-semibold text-card-foreground"
                  >
                    Email address
                  </label>
                  <Input
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={cn(fieldClass, "py-3")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={interestId}
                    className="text-sm font-semibold text-card-foreground"
                  >
                    I&apos;m interested in <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id={interestId}
                      name="interest"
                      required
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className={cn(
                        fieldClass,
                        "cursor-pointer appearance-none py-3 pr-10 font-sans"
                      )}
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                      aria-hidden
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="h-12 w-full px-6 text-[15px] font-semibold tracking-[-0.15px]"
                  >
                    Request info
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
