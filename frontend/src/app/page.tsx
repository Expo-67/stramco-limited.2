import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { Testimonials } from "./components/testimonials";
import { WhyChoose } from "./components/why-choose";
import { FAQ } from "./components/faq";
import { Footer } from "./components/footer";
import { TrustedCompanies } from "./components/trusted-companies";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrustedCompanies />
      <Testimonials />
      <WhyChoose />
      <FAQ />
      <Footer />
    </main>
  );
}
