import FAQSection from "~/components/faq";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { PageProps, usePullContent } from "~/utils/pageUtils";
import Hero from "~/components/landing/hero";
import WhyJoin from "~/components/landing/whyJoin";
import WhatYouGet from "~/components/landing/whatYouGet";
import Testimonals from "~/components/landing/testimonals";
import CTA from "~/components/landing/cta";
import navigation from "~/navigation.json";

export default function LandingPage({ adminContent, adminError }: PageProps) {
  const pullContent = usePullContent(); // Unconditionally call the hook

  const content = adminContent ?? pullContent.content;
  const error = adminError ?? pullContent.error;

  if (error) {
    // Display a fallback error message if Firestore fetch fails
    return (
      <div className="error-container">
        <h1>Service Unavailable</h1>
        <p>
          We&apos;re experiencing issues retrieving content. Please try again
          later.
        </p>
      </div>
    );
  }

  if (!content) {
    // Loading indicator while content is being fetched
    return (
      <div className="flex items-center justify-center text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-0 min-h-screen bg-white">
      <Navbar links = {navigation.navigation.links} joinLink={content.components.joinLink}/>
      <main className="mx-auto px-2 pb-6 sm:px-4 lg:px-6 2xl:px-8">
        <Hero hero = {content.components.hero} gallary={content.landing.gallary} />
        <WhyJoin {...content.landing.whyJoin} />
        <WhatYouGet {...content.landing.whatYouGet} />
        <Testimonals {...content.landing.testimonials} />
        <CTA {...content.landing.cta} />
        <FAQSection {...content.landing.faq} />
      </main>
      <Footer {...navigation} />
    </div>
  );
}
