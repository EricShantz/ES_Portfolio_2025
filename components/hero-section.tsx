import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ottawa, Ontario</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                {/*Learning Technology Lead*/}
                Technical Curriculum Developer
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground text-pretty">
                {/* I build and manage learning platforms that scale. */}
                {/* I lead the development and optimization of a scalable learning platform that supports strategic growth and innovation. */}
                Eric Shantz
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Specializing in LMS administration, systems integration, platform automation, and e-learning development.
              Transforming learning experiences through technology and data-driven insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />
              <img
                src={`/ES_Portfolio_2025/ESHS.png`}
                alt="Professional portrait"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl object-[43%_0%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
