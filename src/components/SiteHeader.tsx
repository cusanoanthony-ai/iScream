"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { business } from "@/data/business";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { LogoLink } from "./Logo";
import { PrimaryButton } from "./PrimaryButton";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-brand-navy focus:shadow-card"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-brand-navy/5 bg-white/95 shadow-soft backdrop-blur-md">
        <Container as="div" className="flex h-[4.25rem] items-center justify-between gap-3 sm:h-[4.75rem] lg:gap-4">
          <LogoLink className="shrink-0" />

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-bold transition-colors",
                    active
                      ? "bg-brand-teal/10 text-brand-teal"
                      : "text-brand-navy/75 hover:bg-brand-cream hover:text-brand-navy",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={business.phone.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-pink px-4 py-2 text-sm font-bold text-white shadow-soft transition-colors hover:bg-brand-coral"
              onClick={() => trackEvent("call_click")}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="hidden xl:inline">{business.phone.display}</span>
              <span className="xl:hidden">Call</span>
            </Link>
            <PrimaryButton href="/catering" trackAs="book_truck_click" className="!px-5 !py-2.5 !text-sm">
              Book the Truck
            </PrimaryButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream text-brand-navy shadow-soft lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </Container>
      </header>
      <MobileNavigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
