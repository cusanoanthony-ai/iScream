"use client";

import { PrimaryButton } from "./PrimaryButton";

type FutureStorefrontCTAProps = {
  className?: string;
};

export function FutureStorefrontCTA({ className }: FutureStorefrontCTAProps) {
  return (
    <PrimaryButton
      href="/#newsletter"
      className={className}
    >
      Join the Journey
    </PrimaryButton>
  );
}
