import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

/** Section wrapper from brand-identity-pages — responsive padding + page width. */
export function SectionShell({ children, className, id, style }: SectionShellProps) {
  return (
    <section id={id} className={cn("px-4 py-12 md:px-6 lg:py-16", className)} style={style}>
      <div className="mx-auto w-full max-w-(--section-main)">{children}</div>
    </section>
  );
}
