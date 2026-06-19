import Link from "next/link";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for the iScream Yogurt website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <Container>
          <SectionHeading title="Privacy Policy" titleAs="h1" />
          <p className="mt-4 text-brand-navy/70">Last updated: June 2026</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="prose-brand max-w-3xl space-y-8 text-brand-navy/80">
            <section>
              <h2 className="text-xl font-bold text-brand-navy">Overview</h2>
              <p className="mt-3 leading-relaxed">
                This privacy policy describes how {business.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;)
                handles information collected through this website. This site is intended to help
                customers find our mobile truck, learn about our menu, request catering, and stay
                connected with our brand.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy">Information You Submit</h2>
              <p className="mt-3 leading-relaxed">
                When you submit a contact form, catering request, or newsletter signup, we collect
                the information you provide, such as your name, email address, phone number, and
                message details. This information is used to respond to your inquiry, discuss event
                availability, or send updates you have requested.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy">How Contact Information Is Used</h2>
              <p className="mt-3 leading-relaxed">
                We use submitted contact information to communicate with you about your request,
                provide customer service, and—if you opt in—send occasional email updates about the
                truck, menu offerings, and our long-term plans. We do not sell your personal
                information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy">Email Updates</h2>
              <p className="mt-3 leading-relaxed">
                If you join our email list, we may send updates about truck locations, new treats,
                catering availability, and news about the iScream Yogurt journey. You may request
                to be removed from email communications at any time by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy">Analytics</h2>
              <p className="mt-3 leading-relaxed">
                This website may use basic analytics tools, such as Vercel Analytics and Vercel
                Speed Insights, to understand general site usage and improve performance. These
                tools are designed to be privacy-friendly and do not use invasive tracking cookies
                for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy">External Links</h2>
              <p className="mt-3 leading-relaxed">
                This site links to third-party services such as Instagram, Facebook,
                StreetFoodFinder, and Square. Those services have their own privacy policies, and
                we are not responsible for their practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy">Sensitive Information</h2>
              <p className="mt-3 leading-relaxed">
                This website is not intended to collect sensitive personal information such as
                financial account numbers, government ID numbers, or detailed health records. Please
                do not submit sensitive information through our forms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy">Requesting Removal</h2>
              <p className="mt-3 leading-relaxed">
                To request removal of information you submitted through this website, contact us at{" "}
                <a href={business.email.href} className="font-bold text-brand-teal hover:text-brand-pink">
                  {business.email.display}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy">Changes</h2>
              <p className="mt-3 leading-relaxed">
                We may update this privacy policy from time to time. Continued use of the website
                after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <p className="text-sm text-brand-navy/60">
              This page provides general information and is not legal advice.{" "}
              <Link href="/contact" className="font-bold text-brand-teal">
                Contact us
              </Link>{" "}
              with any questions.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
