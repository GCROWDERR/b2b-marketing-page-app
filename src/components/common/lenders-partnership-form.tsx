import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LENDERS_LOAN_TYPES,
  lendersFormTitle,
  type LendersVertical,
} from "@/lib/form/lenders-inquiry-types";
import { submitLendersInquiry } from "@/lib/form/submit-lenders-inquiry";
import { useRecaptchaScript } from "@/lib/form/use-recaptcha-script";
import {
  EMAIL_REGEX,
  MAX_COMPANY_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_MARKETS_LENGTH,
  MAX_NAME_LENGTH,
  MAX_NMLS_LENGTH,
  MAX_ROLE_LENGTH,
  MAX_WEBSITE_LENGTH,
} from "@/lib/form/validation";
import { cn } from "@/lib/utils";

import { LENDERS_IMG } from "@/components/marketing/lenders-assets";

type FormState = {
  company: string;
  website: string;
  contactName: string;
  email: string;
  role: string;
  loanTypes: string[];
  nmls: string;
  markets: string;
};

const fieldInputClasses =
  "h-12 rounded-lg border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring";

function createInitialState(): FormState {
  return {
    company: "",
    website: "",
    contactName: "",
    email: "",
    role: "",
    loanTypes: ["Purchase"],
    nmls: "",
    markets: "",
  };
}

function validate(form: FormState, vertical: LendersVertical): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!form.company.trim()) errors.company = "Company name is required.";
  else if (form.company.trim().length > MAX_COMPANY_LENGTH)
    errors.company = `Company name must be ${MAX_COMPANY_LENGTH} characters or fewer.`;

  if (form.website.trim().length > MAX_WEBSITE_LENGTH)
    errors.website = `Website must be ${MAX_WEBSITE_LENGTH} characters or fewer.`;

  if (!form.contactName.trim()) errors.contactName = "Contact name is required.";
  else if (form.contactName.trim().length > MAX_NAME_LENGTH)
    errors.contactName = `Contact name must be ${MAX_NAME_LENGTH} characters or fewer.`;

  if (!form.email.trim()) errors.email = "Email is required.";
  else if (form.email.trim().length > MAX_EMAIL_LENGTH)
    errors.email = `Email must be ${MAX_EMAIL_LENGTH} characters or fewer.`;
  else if (!EMAIL_REGEX.test(form.email.trim()))
    errors.email = "Enter a valid email address.";

  if (form.role.trim().length > MAX_ROLE_LENGTH)
    errors.role = `Role must be ${MAX_ROLE_LENGTH} characters or fewer.`;

  if (vertical === "Mortgage") {
    if (form.loanTypes.length === 0)
      errors.loanTypes = "Select at least one loan type.";
    if (!form.nmls.trim()) errors.nmls = "NMLS number is required.";
    else if (form.nmls.trim().length > MAX_NMLS_LENGTH)
      errors.nmls = `NMLS number must be ${MAX_NMLS_LENGTH} characters or fewer.`;
    if (form.markets.trim().length > MAX_MARKETS_LENGTH)
      errors.markets = `Markets must be ${MAX_MARKETS_LENGTH} characters or fewer.`;
  }

  return errors;
}

type LendersPartnershipFormProps = {
  vertical: LendersVertical;
  className?: string;
  formId?: string;
};

export function LendersPartnershipForm({
  vertical,
  className,
  formId: formIdProp,
}: LendersPartnershipFormProps) {
  useRecaptchaScript();

  const generatedId = useId();
  const formId = formIdProp ?? `lenders-partnership-${generatedId}`;

  const [form, setForm] = useState<FormState>(createInitialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverErrors, setServerErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function toggleLoanType(type: string) {
    updateField(
      "loanTypes",
      form.loanTypes.includes(type)
        ? form.loanTypes.filter((t) => t !== type)
        : [...form.loanTypes, type]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerErrors([]);

    const validationErrors = validate(form, vertical);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    const result = await submitLendersInquiry({
      vertical,
      company: form.company,
      website: form.website,
      contactName: form.contactName,
      email: form.email,
      role: form.role,
      loanTypes: form.loanTypes,
      nmls: form.nmls,
      markets: form.markets,
    });

    if (result.ok) {
      setSuccess(true);
    } else {
      setServerErrors(result.errors);
    }

    setSubmitting(false);
  }

  function handleReset() {
    setForm(createInitialState());
    setErrors({});
    setServerErrors([]);
    setSuccess(false);
  }

  if (success) {
    return (
      <div className={cn("flex flex-col items-center gap-4 py-10 text-center", className)}>
        <h3 className="text-xl font-semibold text-blue-900">Request received!</h3>
        <p className="max-w-md text-muted-foreground">
          Thanks for your interest. Our lenders partnerships team will follow up shortly.
        </p>
        <Button variant="outline" onClick={handleReset} type="button">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      noValidate
      className={cn("flex flex-col gap-6", className)}
    >
      <h3 className="font-display text-[28px] font-bold leading-[1.2] text-blue-900">
        {lendersFormTitle(vertical)}
      </h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-company`}
          label="Company name"
          required
          error={errors.company}
        >
          <Input
            id={`${formId}-company`}
            name="company"
            autoComplete="organization"
            placeholder="Acme Lending"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            aria-invalid={!!errors.company}
            maxLength={MAX_COMPANY_LENGTH}
            className={fieldInputClasses}
          />
        </Field>

        <Field id={`${formId}-website`} label="Website" error={errors.website}>
          <Input
            id={`${formId}-website`}
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://..."
            value={form.website}
            onChange={(e) => updateField("website", e.target.value)}
            aria-invalid={!!errors.website}
            maxLength={MAX_WEBSITE_LENGTH}
            className={fieldInputClasses}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-contact`}
          label="Contact name"
          required
          error={errors.contactName}
        >
          <Input
            id={`${formId}-contact`}
            name="contactName"
            autoComplete="name"
            placeholder="Full name"
            value={form.contactName}
            onChange={(e) => updateField("contactName", e.target.value)}
            aria-invalid={!!errors.contactName}
            maxLength={MAX_NAME_LENGTH}
            className={fieldInputClasses}
          />
        </Field>

        <Field
          id={`${formId}-email`}
          label="Business email"
          required
          error={errors.email}
        >
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@acme.com"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={!!errors.email}
            maxLength={MAX_EMAIL_LENGTH}
            className={fieldInputClasses}
          />
        </Field>
      </div>

      <Field id={`${formId}-role`} label="Role / Title" error={errors.role}>
        <Input
          id={`${formId}-role`}
          name="role"
          autoComplete="organization-title"
          placeholder="e.g. Head of Growth"
          value={form.role}
          onChange={(e) => updateField("role", e.target.value)}
          aria-invalid={!!errors.role}
          maxLength={MAX_ROLE_LENGTH}
          className={fieldInputClasses}
        />
      </Field>

      {vertical === "Mortgage" ? (
        <>
          <div className="flex flex-col gap-3">
            <Label>
              Loan types <span className="text-primary">*</span>
            </Label>
            <div className="flex flex-wrap gap-4">
              {LENDERS_LOAN_TYPES.map((type) => {
                const active = form.loanTypes.includes(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleLoanType(type)}
                    className={cn(
                      "flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors",
                      active
                        ? "border-primary bg-primary/5 text-foreground"
                        : "border-border text-muted-foreground hover:border-primary/40"
                    )}
                  >
                    {active ? (
                      <img
                        src={LENDERS_IMG.checkIcon}
                        alt=""
                        className="size-4 shrink-0"
                        aria-hidden
                      />
                    ) : (
                      <span
                        className="size-4 shrink-0 rounded border border-border"
                        aria-hidden
                      />
                    )}
                    {type}
                  </button>
                );
              })}
            </div>
            {errors.loanTypes && (
              <p className="text-sm text-destructive">{errors.loanTypes}</p>
            )}
          </div>

          <Field
            id={`${formId}-nmls`}
            label="NMLS number"
            required
            error={errors.nmls}
          >
            <Input
              id={`${formId}-nmls`}
              name="nmls"
              placeholder="Required for verification"
              value={form.nmls}
              onChange={(e) => updateField("nmls", e.target.value)}
              aria-invalid={!!errors.nmls}
              maxLength={MAX_NMLS_LENGTH}
              className={fieldInputClasses}
            />
          </Field>

          <Field
            id={`${formId}-markets`}
            label="What markets are you prioritizing?"
            error={errors.markets}
          >
            <Input
              id={`${formId}-markets`}
              name="markets"
              placeholder="Enter state names or regions"
              value={form.markets}
              onChange={(e) => updateField("markets", e.target.value)}
              aria-invalid={!!errors.markets}
              maxLength={MAX_MARKETS_LENGTH}
              className={fieldInputClasses}
            />
          </Field>
        </>
      ) : null}

      {serverErrors.length > 0 && (
        <div
          role="alert"
          className="rounded-xl border border-destructive/50 bg-destructive/5 p-3"
        >
          {serverErrors.map((err, i) => (
            <p key={i} className="text-sm text-destructive">
              {err}
            </p>
          ))}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="h-12 w-fit px-7 text-lg font-bold"
      >
        {submitting ? "Sending…" : "Submit Request"}
      </Button>

      <p className="text-center text-[11px] text-muted-foreground">
        By submitting, you agree to our Terms of Use and B2B Privacy Policy.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
