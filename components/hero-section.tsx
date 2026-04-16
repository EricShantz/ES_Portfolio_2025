"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, X } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [showImage, setShowImage] = useState(false)
  const imageSrc = `${process.env.NEXT_PUBLIC_BASE_PATH}/ESHS.png`

  return (
    <>
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
                  Learning<br />Technology<br />Lead
                </h1>
                <div className="flex items-center gap-3 text-xl sm:text-2xl text-muted-foreground text-pretty">
                  <button
                    onClick={() => setShowImage(true)}
                    className="lg:hidden h-12 w-12 rounded-full overflow-hidden shadow-md shrink-0 cursor-pointer transition-transform hover:scale-110"
                  >
                    <img
                      src={imageSrc}
                      alt="Eric Shantz"
                      className="w-full h-full object-cover object-[43%_25%] scale-[1.75]"
                    />
                  </button>
                  <span>Eric Shantz</span>
                </div>
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

            {/* Right Column - Profile Image (hidden on mobile, shown on lg+) */}
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <img
                  src={imageSrc}
                  alt="Professional portrait"
                  className="relative w-full h-[calc(100%+5px)] object-cover shadow-2xl object-[43%_25%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm p-4"
          onClick={() => setShowImage(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowImage(false)}
              className="absolute -top-3 -right-3 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={imageSrc}
              alt="Eric Shantz"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
