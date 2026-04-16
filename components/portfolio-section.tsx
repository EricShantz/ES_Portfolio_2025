"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

function CustomScrollbar({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement | null> }) {
  const [thumbWidth, setThumbWidth] = useState(0)
  const [thumbLeft, setThumbLeft] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const update = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const ratio = el.clientWidth / el.scrollWidth
    setThumbWidth(ratio * 100)
    const scrollRatio = el.scrollLeft / (el.scrollWidth - el.clientWidth)
    setThumbLeft(scrollRatio * (100 - ratio * 100))
  }, [scrollRef])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    update()
    el.addEventListener("scroll", update)
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [scrollRef, update])

  const handleTrackClick = (e: React.MouseEvent) => {
    const el = scrollRef.current
    const track = trackRef.current
    if (!el || !track) return
    const rect = track.getBoundingClientRect()
    const clickRatio = (e.clientX - rect.left) / rect.width
    const maxScroll = el.scrollWidth - el.clientWidth
    el.scrollTo({ left: clickRatio * maxScroll, behavior: "smooth" })
  }

  if (thumbWidth >= 100) return null

  return (
    <div
      ref={trackRef}
      className="mx-auto mt-3 h-2 rounded-full bg-foreground/5 cursor-pointer"
      style={{ width: "76.5%" }}
      onClick={handleTrackClick}
    >
      <div
        className="h-full rounded-full bg-foreground/15 hover:bg-foreground/25 transition-colors"
        style={{ width: `${thumbWidth}%`, marginLeft: `${thumbLeft}%` }}
      />
    </div>
  )
}

export function PortfolioSection() {
  const coursesScrollRef = useRef<HTMLDivElement>(null)
  const platformScrollRef = useRef<HTMLDivElement>(null)

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
      title: "Academy Marketing Strategy & Content",
      description:
        "Created marketing campaigns/content, video assets, and social media strategies to promote the Solace Academy brand.",
      image: "/2025-feature-update-linkedin.PNG",
      outcomes: [
        "Improved platform engagement",
        "Enhanced brand visibility",
        "Streamlined communication"
      ],
      tags: ["Marketing", "Content Strategy", "Community Engagement"]
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
      tags: ["AI", "LMS Enhancement", "User Experience", "Full-Stack Development"]
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
      tags: ["Instructional Design", "Web Development", "User Education"]
    },
    {
      slug: "ssl-health-check-automation",
      title: "SSL Certificate Health Check Automation",
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
      slug: "badge-certificate-redesign",
      title: "Badge & Certificate Design",
      description:
        "Redesigned the Academy’s badges and certificates with a modern, professional look.",
      image: "/New_Badge.png",
      outcomes: [
        "Improved visual consistency",
        "Enhanced learner recognition",
        "Brand alignment"
      ],
      tags: ["Visual Design", "Branding", "Learner Engagement"]
    },
    {
      slug: "accredible-integration",
      title: "Accredible Integration",
      description:
        "Onboarded and automated a digital badge platform (Accredible) to issue credentials at scale.",
      image: "/accredible-home-page.PNG",
      outcomes: [
        "Automated credential delivery",
        "Improved badge management",
        "Enhanced learner experience"
      ],
      tags: ["Automation", "Integration", "Credentialing"]
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
      <section id="portfolio" className="py-24 bg-muted/30 overflow-x-clip">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Portfolio & Case Studies</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              A cross-section of projects spanning e-learning development, platform customization, automation, and digital learning strategy
            </p>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight">Courses</h3>
        </div>
        <div ref={coursesScrollRef} className="flex gap-6 overflow-x-auto pb-4 mt-4 portfolio-scroll">
          <div className="shrink-0 w-[max(0.5rem,calc((100vw-72rem)/2+1rem-1.5rem))]" />
          {courses.map(renderCard)}
          <div className="shrink-0 w-[max(0.5rem,calc((100vw-72rem)/2+1rem-1.5rem))]" />
        </div>
        <CustomScrollbar scrollRef={coursesScrollRef} />

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
          <h3 className="text-2xl font-semibold tracking-tight">Platform & Tools</h3>
        </div>
        <div ref={platformScrollRef} className="flex gap-6 overflow-x-auto pb-4 mt-4 portfolio-scroll">
          <div className="shrink-0 w-[max(0.5rem,calc((100vw-72rem)/2+1rem-1.5rem))]" />
          {platformProjects.map(renderCard)}
          <div className="shrink-0 w-[max(0.5rem,calc((100vw-72rem)/2+1rem-1.5rem))]" />
        </div>
        <CustomScrollbar scrollRef={platformScrollRef} />
      </section>
    </ScrollReveal>
  )
}
