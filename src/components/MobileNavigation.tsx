"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Instagram, Phone } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { business } from "@/data/business";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { LogoLink } from "./Logo";
import { PrimaryButton } from "./PrimaryButton";

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      id="mobile-nav"
    >
      <button
        type="button"
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-hidden bg-brand-cream shadow-card"
      >
        <div className="flex h-[4.25rem] shrink-0 items-center justify-between border-b border-brand-navy/10 px-5 sm:h-[4.75rem]">
          <LogoLink size="header" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-brand-navy shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex min-h-12 items-center rounded-lg px-3 text-base font-semibold text-brand-navy hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal",
                  (item.href === "/find-us" || item.href === "/catering") && "font-extrabold",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="shrink-0 space-y-2 border-t border-brand-navy/10 px-4 py-5">
          <PrimaryButton href="/catering" className="w-full" trackAs="book_truck_click" onClick={onClose}>
            Book the Truck
          </PrimaryButton>
          <a
            href={business.phone.href}
            onClick={() => {
              trackEvent("call_click");
              onClose();
            }}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-brand-navy/15 bg-white text-sm font-bold text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          >
            <Phone className="h-4 w-4 text-brand-teal" aria-hidden="true" />
            Call {business.phone.display}
          </a>
          <a
            href={business.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("instagram_click");
              onClose();
            }}
            className="flex min-h-12 w-full items-center justify-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          >
            <Instagram className="h-4 w-4 text-brand-pink" aria-hidden="true" />
            {business.social.instagram.handle}
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
