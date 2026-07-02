import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarketingSectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  /** default — brand SectionShell; hero — homepage hero padding */
  variant?: "default" | "hero";
  /** When true, children fill the section without the max-width container (full-bleed heroes). */
  fullBleed?: boolean;
};

const variantPadding = {
  default: "px-4 py-12 md:px-6 lg:py-16",
  hero: "px-0 py-6 lg:py-10 lg:px-6 xl:px-20",
} as const;

/** Section wrapper from brand-identity-pages SectionShell — responsive padding + page width. */
export function MarketingSectionShell({
  children,
  className,
  id,
  style,
  variant = "default",
  fullBleed = false,
}: MarketingSectionShellProps) {
  return (
    <section
      id={id}
      className={cn(variantPadding[variant], className)}
      style={style}
    >
      {fullBleed ? (
        children
      ) : (
        <div className="mx-auto w-full max-w-(--section-main)">{children}</div>
      )}
    </section>
  );
}

/** Centered copy column — brand `--section-copy` (45rem / 720px). */
export function MarketingCopyColumn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-(--section-copy)", className)}>
      {children}
    </div>
  );
}

/** Lead / mission block width — brand pages often use ~846px. */
export function MarketingLeadColumn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-(--section-lead)", className)}>
      {children}
    </div>
  );
}
