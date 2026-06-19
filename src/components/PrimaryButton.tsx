"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  trackAs?: Parameters<typeof trackEvent>[0];
};

type PrimaryButtonProps = ButtonBaseProps & {
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

export function PrimaryButton({
  children,
  className,
  href,
  external,
  type = "button",
  disabled,
  loading,
  onClick,
  trackAs,
}: PrimaryButtonProps) {
  const classes = cn(
    baseClasses,
    "bg-brand-coral text-white shadow-soft hover:bg-brand-pink hover:shadow-card active:scale-[0.98] focus-visible:outline-brand-coral",
    className,
  );

  const handleClick = () => {
    if (trackAs) trackEvent(trackAs);
    onClick?.();
  };

  const content = loading ? (
    <>
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      {children}
    </>
  ) : (
    children
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}

export function SecondaryButton({
  children,
  className,
  href,
  external,
  type = "button",
  disabled,
  loading,
  onClick,
  trackAs,
}: PrimaryButtonProps) {
  const classes = cn(
    baseClasses,
    "border-2 border-brand-teal bg-white text-brand-teal hover:bg-brand-teal hover:text-white active:scale-[0.98] focus-visible:outline-brand-teal",
    className,
  );

  const handleClick = () => {
    if (trackAs) trackEvent(trackAs);
    onClick?.();
  };

  const content = loading ? (
    <>
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand-teal/30 border-t-brand-teal" />
      {children}
    </>
  ) : (
    children
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
