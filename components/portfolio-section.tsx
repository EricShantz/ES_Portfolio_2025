"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

function ScrollableRow({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener("scroll", updateScrollState)
    window.addEventListener("resize", updateScrollState)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = 380
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <div className="relative">
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-blue-950 shadow-md p-3 hover:bg-blue-900 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
      )}
      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-blue-950 shadow-md p-3 hover:bg-blue-900 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      )}

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 portfolio-scroll px-[max(1rem,calc((100vw-72rem)/2-10px))] sm:px-[max(1.5rem,calc((100vw-72rem)/2-10px))] lg:px-[max(2rem,calc((100vw-72rem)/2-10px))]">
        {children}
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const courses = [
    {
      slug: "agent-mesh-path",
      title: "Agent Mesh Practitioner Path",
      description:
        "Developed certification path and corresponding course content to support Solace’s Agent Mesh initiative.",
      image: "/sam-lp.jpeg",
      outcomes: [
        "Expanded certification offerings",
        "Aligned with product strategy",
        "Improved learner outcomes"
      ],
      tags: ["Course Design", "Certification", "Solace Platform"]
    },
    {
      slug: "EDInt-path",
      title: "Event-Driven Integration with Solace",
      description:
        "Designed and developed a course to teach users how to build event-driven integrations using the Solace platform.",
      image: "/EDInt-path.png",
      outcomes: [
        "Expanded course library",
        "Supported developer adoption",
        "Improved platform education"
      ],
      tags: ["Course Design", "Integration", "Solace Platform"]
    },
    {
      slug: "schema-registry-course",
      title: "Schema Registry Foundations",
      description:
        "An upcoming e-learning course currently in development, focused on an advanced Solace use case.",
      image: "/schema-registry.jpeg",
      outcomes: [
        "To be determined",
        "To be determined",
        "To be determined"
      ],
      tags: ["Course Design", "In Progress", "Solace Platform"]
    },
    {
      slug: "DMR-course",
      title: "Performance Tuning for DMR",
      description:
        "An upcoming e-learning course currently in development, focused on an advanced Solace use case.",
      image: "/DMR-course.jpeg",
      outcomes: [
        "To be determined",
        "To be determined",
        "To be determined"
      ],
      tags: ["Course Design", "In Progress", "Solace Platform"]
    }
  ];

  const platformProjects = [
    {
      slug: "lms-redesign",
      title: "LMS Redesign & Custom Dashboards",
      description:
        "Redesigned LMS interface with custom-coded landing pages and dashboards to improve user experience and branding.",
      image: "/SoAc-landing-page.PNG",
      outcomes: [
        "Improved navigation",
        "Stronger brand presence",
        "Enhanced learner satisfaction"
      ],
      tags: ["LMS", "UX Design", "Frontend Development"]
    },
    {
      slug: "marketing-strategy-content",
      title: "Marketing Strategy & Content",
      description:
        "Created marketing campaigns/content, video assets, and social media strategies to promote the Solace Academy brand.",
      image: "/2025-feature-update-linkedin.PNG",
      outcomes: [
        "Improved platform engagement",
        "Enhanced brand visibility",
        "Streamlined communication"
      ],
      tags: ["Marketing", "Content Strategy", "Client Engagement"]
    },
    {
      slug: "ask-solly-ai",
      title: "Ask Solly AI",
      description:
        "Designed and implemented a custom interface and analytics for an AI-powered learning assistant, embedding it within the Academy platform to deliver real-time answers and content recommendations.",
      image: "/ask-solly.PNG",
      outcomes: [
        "Increased learner engagement",
        "Reduced support queries",
        "Boosted content discoverability"
      ],
      tags: ["AI", "LMS Enhancement", "Full-Stack Development"]
    },
    {
      slug: "topic-hierarchy-site",
      title: "Topic Hierarchy Explainer Site",
      description:
        "Created a simple standalone website to help users understand Solace’s topic hierarchy model.",
      image: "/topic-tester.PNG",
      outcomes: [
        "Improved user understanding",
        "Reduced support questions",
        "Reusable internal asset"
      ],
      tags: ["Web Development", "Interactive Education"]
    },
    {
      slug: "ssl-health-check-automation",
      title: "SSL Certificate Health Check",
      description:
        "Automated monitoring for LMS SSL certificates, reducing downtime risks and manual oversight.",
      image: "/SSL-check.png",
      outcomes: [
        "Increased platform reliability",
        "Reduced manual effort",
        "Proactive issue detection"
      ],
      tags: ["Automation", "DevOps", "Platform Maintenance"]
    },
    {
      slug: "erp-workshop-enrollment",
      title: "ERP-Integrated Workshop Enrollment",
      description:
        "Built an automated workflow that enrolls users in LMS sessions upon ERP workshop registration.",
      image: "/ERP-registration.PNG",
      outcomes: [
        "Eliminated the need manual enrollment",
        "Fewer user errors",
        "Streamlined onboarding"
      ],
      tags: ["Integration", "Automation", "LMS Workflow"]
    },
    {
      slug: "credential-automation",
      title: "Credential Automation",
      description:
        "Redesigned badges and certificates, and integrated Accredible to automate issuing credentials at scale.",
      image: "/New_Badge.png",
      outcomes: [
        "Unified credential branding",
        "Automated real-time badge delivery",
        "Zero manual overhead"
      ],
      tags: ["Automation", "Integration", "Design", "Credentialing"]
    }
  ];

  const renderCard = (project: typeof courses[0], index: number) => (
    <Link key={index} href={`/portfolio/${project.slug}`} className="block shrink-0 w-[350px]">
      <Card className="overflow-hidden hover:shadow-xl transition-shadow group flex flex-col cursor-pointer pt-0">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}` || `${process.env.NEXT_PUBLIC_BASE_PATH}/placeholder.svg`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="pb-0 pt-3 px-4 gap-1">
          <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 px-4 pb-4 pt-0">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-sm font-semibold">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              <span>Key Outcomes</span>
            </div>
            <ul className="space-y-0.5">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs px-1.5 py-0">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )

  return (
    <ScrollReveal direction="left">
      <section id="portfolio" className="py-24 overflow-x-clip">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Portfolio & Case Studies</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl">
                A cross-section of projects spanning e-learning development, platform customization, automation, and digital learning strategy
              </p>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight">Courses</h3>
          </div>
        </div>
        <div className="mt-4">
          <ScrollableRow>
            {courses.map(renderCard)}
          </ScrollableRow>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 mt-8">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-2xl font-semibold tracking-tight">Platform & Tooling</h3>
          </div>
        </div>
        <div className="mt-4">
          <ScrollableRow>
            {platformProjects.map(renderCard)}
          </ScrollableRow>
        </div>
      </section>
    </ScrollReveal>
  )
}
