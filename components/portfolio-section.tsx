import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PortfolioSection() {
  // const projects = [
  //   {
  //     slug: "docebo-lms-implementation",
  //     title: "Docebo LMS Implementation & Optimization",
  //     description:
  //       "Led enterprise-wide LMS implementation, custom branding, and advanced configuration. Implemented automated workflows and reporting dashboards.",
  //     image: "/lms-dashboard.png",
  //     outcomes: ["40% increase in course completions", "60% reduction in admin time", "95% user satisfaction"],
  //     tags: ["Docebo", "LMS Administration", "Automation"],
  //   },
  //   {
  //     slug: "boomi-integration-platform",
  //     title: "Boomi Integration Platform",
  //     description:
  //       "Designed and implemented complex system integrations connecting Docebo with HRIS, CRM, and content repositories. Built custom workflows for data synchronization.",
  //     image: "/system-integration-workflow-diagram.jpg",
  //     outcomes: ["Real-time data sync", "Eliminated manual data entry", "Improved data accuracy by 98%"],
  //     tags: ["Boomi", "Integration", "API Development"],
  //   },
  //   {
  //     slug: "ask-solly-ai",
  //     title: "Ask Solly AI - Learning Assistant",
  //     description:
  //       "Developed AI-powered learning assistant using natural language processing to provide instant answers to learner questions and course recommendations.",
  //     image: "/ai-chatbot-interface.png",
  //     outcomes: ["24/7 learner support", "70% reduction in support tickets", "4.8/5 user rating"],
  //     tags: ["AI/ML", "Chatbot", "Innovation"],
  //   },
  //   {
  //     slug: "hands-on-lab-environment",
  //     title: "Hands-On Lab Environment",
  //     description:
  //       "Created interactive, browser-based lab environments for technical training. Built custom simulations and sandbox environments for safe practice.",
  //     image: "/interactive-coding-lab-environment.jpg",
  //     outcomes: ["85% skill retention", "3x engagement vs. video", "50+ labs deployed"],
  //     tags: ["Instructional Design", "Simulations", "Technical Training"],
  //   },
  //   {
  //     slug: "video-content-production",
  //     title: "Video Content Production Pipeline",
  //     description:
  //       "Established end-to-end video production workflow including scripting, recording, editing, and distribution. Created 100+ professional training videos.",
  //     image: "/video-production-studio-setup.jpg",
  //     outcomes: ["100+ videos produced", "Consistent brand quality", "90% completion rate"],
  //     tags: ["Video Production", "Content Development", "Multimedia"],
  //   },
  //   {
  //     slug: "learning-analytics-dashboard",
  //     title: "Learning Analytics Dashboard",
  //     description:
  //       "Built comprehensive analytics platform providing real-time insights into learner engagement, course effectiveness, and certification progress.",
  //     image: "/analytics-dashboard-charts-graphs.jpg",
  //     outcomes: ["Data-driven decisions", "Identified at-risk learners", "Improved ROI tracking"],
  //     tags: ["Analytics", "Data Visualization", "Reporting"],
  //   },
  // ]

  const projects = [
    {
      slug: "ask-solly-ai",
      title: "Ask Solly AI",
      description:
        "Designed and implemented an AI-powered assistant for the learning platform, providing users with real-time answers and content recommendations.",
      image: "/ask-solly-ai.png",
      outcomes: [
        "Increased learner engagement",
        "Reduced support queries",
        "Boosted content discoverability"
      ],
      tags: ["AI", "LMS Enhancement", "User Experience"]
    },
    {
      slug: "lms-redesign",
      title: "LMS Redesign & Custom Dashboards",
      description:
        "Redesigned LMS interface with custom-coded landing pages and dashboards to improve user experience and branding.",
      image: "/lms-redesign.png",
      outcomes: [
        "Improved navigation",
        "Stronger brand presence",
        "Enhanced learner satisfaction"
      ],
      tags: ["LMS", "UX Design", "Frontend Development"]
    },
    {
      slug: "ssl-health-check-automation",
      title: "SSL Certificate Health Check Automation",
      description:
        "Automated monitoring for LMS SSL certificates, reducing downtime risks and manual oversight.",
      image: "/ssl-health-check.png",
      outcomes: [
        "Increased platform reliability",
        "Reduced manual effort",
        "Proactive issue detection"
      ],
      tags: ["Automation", "DevOps", "Platform Maintenance"]
    },
    {
      slug: "agent-mesh-path-course",
      title: "Agent Mesh Practitioner Path",
      description:
        "Developed certification path and corresponding course content to support Solace’s Agent Mesh initiative.",
      image: "/agent-mesh-course.png",
      outcomes: [
        "Expanded certification offerings",
        "Aligned with product strategy",
        "Improved learner outcomes"
      ],
      tags: ["Course Design", "Certification", "Solace Platform"]
    },
    {
      slug: "marketing-strategy-content",
      title: "Academy Marketing Strategy & Content",
      description:
        "Created marketing campaigns/content, video assets, and social media strategies to promote the Solace Academy brand.",
      image: "/marketing-content.png",
      outcomes: [
        "Improved platform engagement",
        "Enhanced brand visibility",
        "Streamlined communication"
      ],
      tags: ["Marketing", "Content Strategy", "Community Engagement"]
    },
    {
      slug: "erp-workshop-enrollment",
      title: "ERP-Integrated Workshop Enrollment",
      description:
        "Built an automated workflow that enrolls users in LMS sessions upon ERP workshop registration.",
      image: "/erp-integration.png",
      outcomes: [
        "Reduced manual enrollment",
        "Fewer user errors",
        "Streamlined onboarding"
      ],
      tags: ["Integration", "Automation", "LMS Workflow"]
    },
    {
      slug: "badge-certificate-redesign",
      title: "Badge & Certificate Redesign",
      description:
        "Redesigned the Academy’s badges and certificates with a modern, professional look.",
      image: "/badge-redesign.png",
      outcomes: [
        "Improved visual consistency",
        "Enhanced learner recognition",
        "Brand alignment"
      ],
      tags: ["Visual Design", "Branding", "Learner Engagement"]
    },
    {
      slug: "accredible-integration",
      title: "Accredible Badge Vendor Integration",
      description:
        "Onboarded and automated a digital badge platform (Accredible) to issue credentials at scale.",
      image: "/accredible.png",
      outcomes: [
        "Automated credential delivery",
        "Improved badge management",
        "Enhanced learner experience"
      ],
      tags: ["Automation", "Integration", "Credentialing"]
    },
    {
      slug: "topic-hierarchy-site",
      title: "Topic Hierarchy Explainer Site",
      description:
        "Created a simple standalone website to help users understand Solace’s topic hierarchy model.",
      image: "/topic-hierarchy.png",
      outcomes: [
        "Improved user understanding",
        "Reduced support questions",
        "Reusable internal asset"
      ],
      tags: ["Instructional Design", "Web Development", "User Education"]
    },
    {
      slug: "event-driven-integration-course",
      title: "Event-Driven Integration with Solace Course",
      description:
        "Designed and developed a course to teach users how to build event-driven integrations using the Solace platform.",
      image: "/event-driven-course.png",
      outcomes: [
        "Expanded course library",
        "Supported developer adoption",
        "Improved platform education"
      ],
      tags: ["Course Development", "Integration", "Solace Platform"]
    },
    {
      slug: "course-tbd",
      title: "New Course (Coming Soon)",
      description:
        "An upcoming e-learning course currently in development, focused on an advanced Solace use case.",
      image: "/new-course.png",
      outcomes: [
        "To be determined",
        "To be determined",
        "To be determined"
      ],
      tags: ["Course Development", "In Progress", "Solace Platform"]
    },
    {
      slug: "course-tbd",
      title: "New Course (Coming Soon)",
      description:
        "An upcoming e-learning course currently in development, focused on an advanced Solace use case.",
      image: "/new-course.png",
      outcomes: [
        "To be determined",
        "To be determined",
        "To be determined"
      ],
      tags: ["Course Development", "In Progress", "Solace Platform"]
    }
  ];


  return (
    <ScrollReveal direction="left">
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Portfolio & Case Studies</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl">
                A cross-section of projects spanning e-learning development, platform customization, automation, and digital learning strategy
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
