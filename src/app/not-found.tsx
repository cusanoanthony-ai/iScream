import Link from "next/link";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-teal">404</p>
        <h1 className="mt-2 text-4xl font-bold text-brand-navy sm:text-5xl">
          This Page Got Lost on the Road
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-brand-navy/70">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to something sweet.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="/">Back to Home</PrimaryButton>
          <Link
            href="/find-us"
            className="inline-flex min-h-12 items-center rounded-full px-6 font-bold text-brand-teal hover:text-brand-pink"
          >
            Find the Truck
          </Link>
        </div>
      </Container>
    </section>
  );
}
