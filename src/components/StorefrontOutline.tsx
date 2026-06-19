/** Aspirational storefront line art — not a confirmed location */
export function StorefrontOutline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 96"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 84V32L48 14H272L308 32V84H12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="8 5"
      />
      <path d="M48 14L160 6L272 14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="128" y="52" width="64" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="160" cy="24" r="6" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
