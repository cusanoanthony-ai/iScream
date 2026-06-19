"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";
import { LogoLink } from "./Logo";
import { PrimaryButton } from "./PrimaryButton";

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button
        type="button"
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-brand-cream shadow-card">
        <div className="flex items-center justify-between border-b border-brand-navy/10 px-5 py-4">
          <LogoLink />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-navy shadow-soft"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto px-5 py-6">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex min-h-12 items-center rounded-xl px-3 text-lg font-semibold text-brand-navy hover:bg-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-y-3 border-t border-brand-navy/10 px-5 py-6">
          <a
            href={business.phone.href}
            onClick={onClose}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-pink font-bold text-white shadow-soft"
          >
            Call {business.phone.display}
          </a>
          <PrimaryButton href="/catering" className="w-full" trackAs="book_truck_click" onClick={onClose}>
            Book the Truck
          </PrimaryButton>
        </div>
      </nav>
    </div>
  );
}
