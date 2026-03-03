import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { SocialProof } from "@/components/landing/social-proof"
import { Features } from "@/components/landing/features"
import { ProblemSection } from "@/components/landing/problem-section"
import { StepsSection } from "@/components/landing/steps-section"
import { Testimonials } from "@/components/landing/testimonials"
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
      <SocialProof />
      <ProblemSection />
      <Features />
      <StepsSection />
      <Pricing />
      <Testimonials />
      <AboutSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
