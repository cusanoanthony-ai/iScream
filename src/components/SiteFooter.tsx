"use client";

import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { business } from "@/data/business";
import { footerNav } from "@/data/navigation";
import { Container } from "./Container";
import { LogoLink } from "./Logo";
import { PrimaryButton } from "./PrimaryButton";
import { NewsletterForm } from "./NewsletterForm";
import { SprinklePattern } from "./SprinklePattern";

function ExternalFooterLink({
  href,
  label,
  trackAs,
}: {
  href: string;
  label: string;
  trackAs?: Parameters<typeof import("@/lib/analytics").trackEvent>[0];
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-white"
      onClick={() => {
        if (trackAs) {
          import("@/lib/analytics").then(({ trackEvent }) => trackEvent(trackAs));
        }
      }}
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-coral pt-16 pb-8 text-white">
      <SprinklePattern variant="dark" className="opacity-15" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <LogoLink variant="light" size="footer" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/90">
              {business.footerDescription}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={business.phone.href} className="block text-lg font-bold text-white hover:text-brand-cream">
                {business.phone.display}
              </a>
              <a href={business.email.href} className="block text-white/90 hover:text-white">
                {business.email.display}
              </a>
              <p className="inline-flex items-center gap-1.5 text-white/90">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {business.location.display}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/80">
              Explore
            </h2>
            <ul className="space-y-1">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm font-semibold text-white/90 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/80">
              Connect
            </h2>
            <div className="flex flex-col gap-2">
              <ExternalFooterLink
                href={business.social.instagram.url}
                label={business.social.instagram.handle}
                trackAs="instagram_click"
              />
              <ExternalFooterLink href={business.social.facebook.url} label="Facebook" />
              <ExternalFooterLink
                href={business.social.streetFoodFinder.url}
                label={business.social.streetFoodFinder.label}
                trackAs="streetfoodfinder_click"
              />
              <ExternalFooterLink
                href={business.social.square.url}
                label={business.social.square.label}
                trackAs="square_click"
              />
            </div>
          </div>

          <div className="lg:col-span-4" id="newsletter">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/80">
              Stay in the Loop
            </h2>
            <p className="mb-4 text-sm text-white/90">
              Get updates on where to find the truck, new treats, and the journey toward a future storefront.
            </p>
            <NewsletterForm variant="light" />
            <div className="mt-6">
              <PrimaryButton
                href="/catering"
                trackAs="book_truck_click"
                className="!bg-brand-navy hover:!bg-brand-navy/90"
              >
                Catering
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/75">
            © {year} {business.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="text-sm font-semibold text-white/75 hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
