import * as React from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "inverted";
  size?: "default" | "sm" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-normal uppercase transition-colors disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: "bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)]",
      ghost: "border-b border-[var(--fg-light)] text-[var(--fg-mid)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
      inverted: "bg-[var(--white)] text-[var(--accent)] hover:bg-[var(--bg-dark)] hover:text-[var(--white)]",
    };

    const sizes = {
      default: variant === "ghost" ? "pb-[1px] text-[12px] tracking-[0.07em]" : "px-9 py-4 text-[11px] tracking-[0.11em]",
      sm: variant === "ghost" ? "pb-[1px] text-[11px] tracking-[0.09em]" : "px-[26px] py-[11px] text-[11px] tracking-[0.1em]",
      lg: "px-11 py-[18px] text-[12px] tracking-[0.11em]", // Mostly for the inverted big button
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      if (isExternal) {
        return (
          <a
            className={classes}
            href={href}
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        );
      }
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          {...(props as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>)}
        />
      );
    }

    return (
      <button
        className={classes}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
