import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
