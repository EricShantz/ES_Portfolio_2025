import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PortfolioSection() {
  const projects = [
    {
      slug: "docebo-lms-implementation",
      title: "Docebo LMS Implementation & Optimization",
      description:
        "Led enterprise-wide LMS implementation, custom branding, and advanced configuration. Implemented automated workflows and reporting dashboards.",
      image: "/lms-dashboard.png",
      outcomes: ["40% increase in course completions", "60% reduction in admin time", "95% user satisfaction"],
      tags: ["Docebo", "LMS Administration", "Automation"],
    },
    {
      slug: "boomi-integration-platform",
      title: "Boomi Integration Platform",
      description:
        "Designed and implemented complex system integrations connecting Docebo with HRIS, CRM, and content repositories. Built custom workflows for data synchronization.",
      image: "/system-integration-workflow-diagram.jpg",
      outcomes: ["Real-time data sync", "Eliminated manual data entry", "Improved data accuracy by 98%"],
      tags: ["Boomi", "Integration", "API Development"],
    },
    {
      slug: "ask-solly-ai",
      title: "Ask Solly AI - Learning Assistant",
      description:
        "Developed AI-powered learning assistant using natural language processing to provide instant answers to learner questions and course recommendations.",
      image: "/ai-chatbot-interface.png",
      outcomes: ["24/7 learner support", "70% reduction in support tickets", "4.8/5 user rating"],
      tags: ["AI/ML", "Chatbot", "Innovation"],
    },
    {
      slug: "hands-on-lab-environment",
      title: "Hands-On Lab Environment",
      description:
        "Created interactive, browser-based lab environments for technical training. Built custom simulations and sandbox environments for safe practice.",
      image: "/interactive-coding-lab-environment.jpg",
      outcomes: ["85% skill retention", "3x engagement vs. video", "50+ labs deployed"],
      tags: ["Instructional Design", "Simulations", "Technical Training"],
    },
    {
      slug: "video-content-production",
      title: "Video Content Production Pipeline",
      description:
        "Established end-to-end video production workflow including scripting, recording, editing, and distribution. Created 100+ professional training videos.",
      image: "/video-production-studio-setup.jpg",
      outcomes: ["100+ videos produced", "Consistent brand quality", "90% completion rate"],
      tags: ["Video Production", "Content Development", "Multimedia"],
    },
    {
      slug: "learning-analytics-dashboard",
      title: "Learning Analytics Dashboard",
      description:
        "Built comprehensive analytics platform providing real-time insights into learner engagement, course effectiveness, and certification progress.",
      image: "/analytics-dashboard-charts-graphs.jpg",
      outcomes: ["Data-driven decisions", "Identified at-risk learners", "Improved ROI tracking"],
      tags: ["Analytics", "Data Visualization", "Reporting"],
    },
  ]

  return (
    <ScrollReveal direction="left">
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Portfolio & Case Studies</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl">
                Selected projects showcasing expertise in LMS administration, systems integration, and innovative
                learning solutions.
              </p>
            </div>

            {/* Responsive grid: 1 / 2 / 3 columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Link key={index} href={`/portfolio/${project.slug}`} className="block h-full">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full flex flex-col cursor-pointer">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 mt-auto">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span>Key Outcomes</span>
                        </div>
                        <ul className="space-y-1">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
