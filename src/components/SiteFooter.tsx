"use client";

import Link from "next/link";
import { ExternalLink, Instagram, Facebook, MapPin } from "lucide-react";
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
      className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-brand-navy/75 hover:text-brand-teal"
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
    <footer className="relative overflow-hidden bg-white pt-16 pb-8">
      <SprinklePattern className="opacity-20" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <LogoLink />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-brand-navy/75">
              {business.footerDescription}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={business.phone.href} className="block font-bold text-brand-navy hover:text-brand-teal">
                {business.phone.display}
              </a>
              <a href={business.email.href} className="block text-brand-navy/75 hover:text-brand-teal">
                {business.email.display}
              </a>
              <p className="inline-flex items-center gap-1.5 text-brand-navy/75">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {business.location.display}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-teal">
              Explore
            </h2>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm font-semibold text-brand-navy/75 hover:text-brand-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-teal">
              Connect
            </h2>
            <div className="flex flex-col gap-3">
              <ExternalFooterLink
                href={business.social.instagram.url}
                label={business.social.instagram.handle}
                trackAs="instagram_click"
              />
              <ExternalFooterLink
                href={business.social.facebook.url}
                label="Facebook"
              />
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

          <div className="lg:col-span-3" id="newsletter">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-teal">
              Stay in the Loop
            </h2>
            <p className="mb-4 text-sm text-brand-navy/75">
              Get updates on where to find the truck, new treats, and the journey toward a future storefront.
            </p>
            <NewsletterForm />
            <div className="mt-6">
              <PrimaryButton href="/catering" trackAs="book_truck_click">
                Book Catering
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-navy/60">
            © {year} {business.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="text-sm font-semibold text-brand-navy/60 hover:text-brand-teal">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
