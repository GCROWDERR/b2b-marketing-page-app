import * as React from "react";
import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg text-sm font-semibold leading-none whitespace-nowrap transition-all outline-none outline-offset-4 outline-ring",
    "hover:cursor-pointer",
    "focus-visible:outline-solid focus-visible:outline-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-hover outline-destructive",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        outline: "border border-primary bg-background text-primary hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 gap-1.5 px-3",
        lg: "min-h-12 rounded-xl px-6",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-12 rounded-xl [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    arrow?: boolean;
    href?: string;
    target?: React.ComponentProps<"a">["target"];
    rel?: React.ComponentProps<"a">["rel"];
  };

function Button({
  className,
  variant = "default",
  size = "default",
  arrow = false,
  href,
  children,
  type,
  disabled,
  target,
  rel,
  ...props
}: ButtonProps) {
  const sharedClassName = cn(buttonVariants({ variant, size, className }), arrow && "group");

  const content = (
    <>
      {children}
      {arrow ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          className="size-4 transition-transform"
          aria-hidden="true"
        >
          <path
            className="-translate-x-1 transition-transform group-hover:translate-x-0"
            fill="currentColor"
            fillRule="evenodd"
            d="M7.3 14.7c-.4-.4-.4-1.05 0-1.45L12.53 8 7.3 2.75c-.4-.4-.4-1.05 0-1.45.4-.4 1.04-.4 1.44 0l5.96 5.98c.4.4.4 1.04 0 1.44L8.74 14.7c-.4.4-1.04.4-1.44 0Z"
            clipRule="evenodd"
          />
          <path
            className="origin-left scale-x-50 opacity-0 transition group-hover:scale-x-100 group-hover:opacity-100"
            fill="currentColor"
            d="M2.07 7C1.48 7 1 7.45 1 8s.48 1 1.07 1V7ZM14 7H2.07v2H14V7Z"
          />
        </svg>
      ) : null}
    </>
  );

  if (href) {
    const anchorProps = props as Omit<React.ComponentProps<"a">, "className" | "children">;
    const linkClassName = cn(sharedClassName, disabled && "pointer-events-none opacity-50");
    const sharedAnchorProps = {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: linkClassName,
      target,
      rel,
      "aria-disabled": disabled || undefined,
      tabIndex: disabled ? -1 : undefined,
      ...anchorProps,
    };

    if (href.startsWith("/")) {
      return (
        <Link to={href} {...sharedAnchorProps}>
          {content}
        </Link>
      );
    }

    return (
      <a href={disabled ? undefined : href} {...sharedAnchorProps}>
        {content}
      </a>
    );
  }

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={sharedClassName}
      type={type}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

export { Button, buttonVariants, type ButtonProps };
