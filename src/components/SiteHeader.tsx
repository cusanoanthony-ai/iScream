"use client";

import { useEffect, useState } from "react";
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

const emphasizedHrefs = new Set(["/find-us", "/catering"]);

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-brand-navy focus:shadow-card"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 bg-brand-cream/95 backdrop-blur-md transition-shadow duration-200",
          scrolled ? "border-b border-brand-navy/8 shadow-soft" : "border-b border-transparent",
        )}
      >
        <Container
          as="div"
          className="grid h-[4.25rem] grid-cols-[1fr_auto] items-center gap-3 sm:h-[5rem] lg:grid-cols-[minmax(150px,190px)_1fr_auto] lg:gap-6"
        >
          <LogoLink size="header" className="lg:justify-self-start" />

          <nav
            className="hidden items-center justify-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              const emphasized = emphasizedHrefs.has(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal",
                    emphasized ? "font-extrabold" : "font-semibold",
                    active
                      ? "text-brand-teal after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-teal"
                      : emphasized
                        ? "text-brand-navy hover:text-brand-teal"
                        : "text-brand-navy/70 hover:text-brand-navy",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <Link
              href={business.phone.href}
              className="hidden items-center gap-1.5 text-sm font-semibold text-brand-navy/75 transition-colors hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal md:inline-flex"
              onClick={() => trackEvent("call_click")}
            >
              <Phone className="h-4 w-4 shrink-0 text-brand-teal" aria-hidden="true" />
              <span className="hidden xl:inline">{business.phone.display}</span>
              <span className="xl:hidden">Call</span>
            </Link>
            <PrimaryButton
              href="/catering"
              trackAs="book_truck_click"
              className="hidden !min-h-10 !px-4 !py-2 !text-sm sm:inline-flex lg:!px-5"
            >
              Book the Truck
            </PrimaryButton>
            <PrimaryButton
              href="/catering"
              trackAs="book_truck_click"
              className="!min-h-9 !px-3 !py-1.5 !text-xs sm:hidden"
              aria-label="Book the Truck"
            >
              Book
            </PrimaryButton>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-navy transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>
      <MobileNavigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
