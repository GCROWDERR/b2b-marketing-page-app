import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const BRUSH_UNDERLINE_SRC = "/images/brush-underline.svg";

/** Figma Vector 45 — vertical bleed beyond the stroke box at text size. */
export const BRUSH_UNDERLINE_INSET = "-34.1% 0 -64.18% 0";
export const BRUSH_UNDERLINE_HEIGHT = "0.22em";
export const BRUSH_UNDERLINE_OFFSET = "4px";

export type BrushUnderlineProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  textClassName?: string;
  underlineClassName?: string;
  underlineSrc?: string;
  /** CSS inset for the brush layer, e.g. `-34.1% 0 -64.18% 0`. */
  underlineInset?: string;
  /** Height of the underline track, e.g. `0.22em`. */
  underlineHeight?: string;
  /** Distance below the text baseline, e.g. `4px`. */
  underlineOffset?: string;
};

function BrushUnderlineText({
  children,
  href,
  textClassName,
}: Pick<BrushUnderlineProps, "children" | "href" | "textClassName">) {
  if (!href) {
    return <span className={cn("relative z-[1]", textClassName)}>{children}</span>;
  }

  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={cn("relative z-[1] hover:opacity-90", textClassName)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn("relative z-[1] hover:opacity-90", textClassName)}
    >
      {children}
    </Link>
  );
}

export function BrushUnderline({
  children,
  href,
  className,
  textClassName,
  underlineClassName,
  underlineSrc = BRUSH_UNDERLINE_SRC,
  underlineInset = BRUSH_UNDERLINE_INSET,
  underlineHeight = BRUSH_UNDERLINE_HEIGHT,
  underlineOffset = BRUSH_UNDERLINE_OFFSET,
}: BrushUnderlineProps) {
  return (
    <span
      className={cn("relative inline whitespace-nowrap", className)}
      style={
        {
          "--brush-underline-inset": underlineInset,
          "--brush-underline-height": underlineHeight,
          "--brush-underline-offset": underlineOffset,
        } as CSSProperties
      }
    >
      <BrushUnderlineText href={href} textClassName={textClassName}>
        {children}
      </BrushUnderlineText>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-[calc(0px-var(--brush-underline-offset))] h-[var(--brush-underline-height)]",
          underlineClassName
        )}
      >
        <img
          src={underlineSrc}
          alt=""
          className="absolute block size-full max-w-none -scale-x-100 -scale-y-100"
          style={{ inset: underlineInset }}
        />
      </span>
    </span>
  );
}
