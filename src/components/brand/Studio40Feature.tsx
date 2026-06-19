import { ExternalLink, Tv } from "lucide-react";
import { Container } from "@/components/Container";
import { SprinklePattern } from "@/components/SprinklePattern";
import { cn } from "@/lib/utils";

const STUDIO40_URL = "https://fox40.com/studio-40/";

type Studio40FeatureProps = {
  className?: string;
};

/** FOX40 Studio 40 credibility callout for Our Story */
export function Studio40Feature({ className }: Studio40FeatureProps) {
  return (
    <section
      className={cn("relative overflow-hidden bg-brand-teal py-14 text-white sm:py-16", className)}
      aria-labelledby="studio40-heading"
    >
      <SprinklePattern variant="dark" className="opacity-15" aria-hidden="true" />
      <Container className="relative">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-lift backdrop-blur-sm sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white shadow-soft"
              aria-hidden="true"
            >
              <Tv className="h-8 w-8" />
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-cream/90">
                As seen on local TV
              </p>
              <h2 id="studio40-heading" className="text-2xl font-extrabold sm:text-3xl">
                Featured on FOX40 Studio 40
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                iScream Yogurt has been highlighted on FOX40&apos;s Studio 40 segment, sharing the
                mobile frozen yogurt experience with Sacramento viewers and building local buzz
                around the truck.
              </p>
              <a
                href={STUDIO40_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-teal transition-colors hover:bg-brand-cream"
              >
                Visit FOX40 Studio 40
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
