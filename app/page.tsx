import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { ProblemSection } from "@/components/landing/problem-section"
import { AboutSection } from "@/components/landing/about-section"
import { Pricing } from "@/components/landing/pricing"
import { CTASection } from "@/components/landing/cta-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <Features />
      <AboutSection />
      <Pricing />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
