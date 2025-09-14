import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { ServicesSection } from "../components/services-section"
import { TeamSection } from "../components/team-section"
import { PricingSection } from "../components/pricing-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import { BackgroundAnimation } from "../components/background-animation"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundAnimation />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
