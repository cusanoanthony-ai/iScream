"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { primaryNav } from "@/data/navigation";
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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
          "sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-[box-shadow,border-color] duration-200",
          scrolled ? "border-b border-brand-navy/8 shadow-soft" : "border-b border-transparent",
        )}
      >
        <Container
          as="div"
          className="flex h-[4.25rem] items-center justify-between gap-3 sm:h-[5rem] lg:grid lg:grid-cols-[minmax(150px,190px)_1fr_auto] lg:gap-8"
        >
          <LogoLink size="header" className="shrink-0 lg:justify-self-start" />

          <nav
            className="hidden items-center justify-center gap-0.5 lg:flex"
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
                    "whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal xl:px-3 xl:text-sm",
                    emphasized ? "font-extrabold" : "font-medium",
                    active
                      ? "text-brand-teal"
                      : emphasized
                        ? "text-brand-navy hover:text-brand-teal"
                        : "text-brand-navy/65 hover:text-brand-navy",
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="mx-auto mt-1 block h-0.5 w-4 rounded-full bg-brand-teal" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-4 lg:justify-self-end">
            <PrimaryButton
              href="/catering"
              trackAs="book_truck_click"
              className="!min-h-10 !px-4 !py-2 !text-sm max-lg:!hidden"
            >
              Book the Truck
            </PrimaryButton>
            <PrimaryButton
              href="/catering"
              trackAs="book_truck_click"
              className="!min-h-9 !px-3 !py-1.5 !text-xs lg:!hidden"
              aria-label="Book the Truck"
            >
              Book
            </PrimaryButton>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-navy transition-colors hover:bg-brand-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal lg:hidden"
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
