import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, TrendingUp, Users, Target, Lightbulb, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = {
  "docebo-lms-implementation": {
    title: "Docebo LMS Implementation & Optimization",
    subtitle: "Enterprise Learning Management System Transformation",
    description:
      "Led enterprise-wide LMS implementation, custom branding, and advanced configuration. Implemented automated workflows and reporting dashboards.",
    image: "/lms-dashboard.png",
    tags: ["Docebo", "LMS Administration", "Automation"],
    duration: "12 months",
    team: "Cross-functional team of 8",
    challenge:
      "The organization needed to modernize its learning infrastructure to support 5,000+ employees across multiple departments. The existing system was outdated, lacked automation, and provided limited reporting capabilities.",
    solution:
      "Implemented Docebo LMS with custom branding, automated user provisioning, and advanced reporting dashboards. Designed intuitive navigation and learning paths tailored to different user roles. Integrated with existing HRIS for seamless data flow.",
    outcomes: [
      "40% increase in course completions within first 6 months",
      "60% reduction in administrative time through automation",
      "95% user satisfaction rating in post-implementation survey",
      "Reduced onboarding time from 2 weeks to 3 days",
    ],
    technologies: ["Docebo", "SCORM", "xAPI", "SSO Integration", "Custom CSS/JavaScript"],
    responsibilities: [
      "Led full implementation from requirements gathering to launch",
      "Configured platform settings, branding, and user roles",
      "Developed automated workflows for enrollment and notifications",
      "Created custom reporting dashboards for stakeholders",
      "Trained administrators and power users",
      "Provided ongoing optimization and support",
    ],
  },
  "boomi-integration-platform": {
    title: "Boomi Integration Platform",
    subtitle: "Seamless System Integration & Data Synchronization",
    description:
      "Designed and implemented complex system integrations connecting Docebo with HRIS, CRM, and content repositories. Built custom workflows for data synchronization.",
    image: "/system-integration-workflow-diagram.jpg",
    tags: ["Boomi", "Integration", "API Development"],
    duration: "8 months",
    team: "Integration team of 4",
    challenge:
      "Multiple disconnected systems led to data silos, manual data entry errors, and delayed reporting. The organization needed real-time data synchronization between learning, HR, and business systems.",
    solution:
      "Designed and built integration workflows using Dell Boomi to connect Docebo LMS with Workday HRIS, Salesforce CRM, and SharePoint content repositories. Implemented bi-directional data sync, error handling, and monitoring dashboards.",
    outcomes: [
      "Real-time data synchronization across all systems",
      "Eliminated manual data entry, saving 20+ hours per week",
      "Improved data accuracy to 98%+",
      "Reduced system onboarding time by 75%",
    ],
    technologies: ["Dell Boomi", "REST APIs", "SOAP", "JSON/XML", "OAuth 2.0"],
    responsibilities: [
      "Designed integration architecture and data flow diagrams",
      "Built and tested Boomi integration processes",
      "Implemented error handling and logging mechanisms",
      "Created monitoring dashboards for integration health",
      "Documented integration specifications and runbooks",
      "Provided training to technical team members",
    ],
  },
  "ask-solly-ai": {
    title: "Ask Solly AI - Learning Assistant",
    subtitle: "AI-Powered Learning Support & Course Recommendations",
    description:
      "Developed AI-powered learning assistant using natural language processing to provide instant answers to learner questions and course recommendations.",
    image: "/ai-chatbot-interface.png",
    tags: ["AI/ML", "Chatbot", "Innovation"],
    duration: "6 months",
    team: "Innovation team of 5",
    challenge:
      "Learners struggled to find relevant courses and often waited hours for support responses. The support team was overwhelmed with repetitive questions about course navigation and content.",
    solution:
      "Developed an AI-powered chatbot using natural language processing to understand learner queries and provide instant, contextual responses. Integrated with the LMS to offer personalized course recommendations based on user profiles and learning history.",
    outcomes: [
      "24/7 instant learner support availability",
      "70% reduction in support ticket volume",
      "4.8/5 average user satisfaction rating",
      "Increased course discovery by 45%",
    ],
    technologies: ["OpenAI GPT", "Python", "React", "Node.js", "Vector Database"],
    responsibilities: [
      "Designed conversational AI architecture and user flows",
      "Trained AI model on learning content and FAQs",
      "Built chat interface integrated with LMS",
      "Implemented recommendation engine using ML algorithms",
      "Monitored performance and refined responses",
      "Gathered user feedback for continuous improvement",
    ],
  },
  "hands-on-lab-environment": {
    title: "Hands-On Lab Environment",
    subtitle: "Interactive Technical Training & Simulations",
    description:
      "Created interactive, browser-based lab environments for technical training. Built custom simulations and sandbox environments for safe practice.",
    image: "/interactive-coding-lab-environment.jpg",
    tags: ["Instructional Design", "Simulations", "Technical Training"],
    duration: "Ongoing (2+ years)",
    team: "Content development team of 6",
    challenge:
      "Technical training relied heavily on passive video content, resulting in low engagement and poor skill retention. Learners needed hands-on practice but setting up local environments was complex and time-consuming.",
    solution:
      "Developed browser-based interactive lab environments where learners could practice technical skills in safe, sandboxed environments. Created 50+ labs covering programming, cloud platforms, and system administration with automated validation and instant feedback.",
    outcomes: [
      "85% skill retention rate vs. 20% with video-only",
      "3x higher engagement compared to traditional content",
      "50+ interactive labs deployed across curriculum",
      "Reduced setup time from hours to seconds",
    ],
    technologies: ["Docker", "Kubernetes", "WebAssembly", "Monaco Editor", "AWS"],
    responsibilities: [
      "Designed lab architecture and learning objectives",
      "Built containerized lab environments",
      "Created automated assessment and validation logic",
      "Developed user-friendly lab interfaces",
      "Wrote comprehensive lab instructions and hints",
      "Monitored lab performance and user analytics",
    ],
  },
  "video-content-production": {
    title: "Video Content Production Pipeline",
    subtitle: "Professional Training Video Development at Scale",
    description:
      "Established end-to-end video production workflow including scripting, recording, editing, and distribution. Created 100+ professional training videos.",
    image: "/video-production-studio-setup.jpg",
    tags: ["Video Production", "Content Development", "Multimedia"],
    duration: "18 months",
    team: "Content team of 4",
    challenge:
      "The organization needed to rapidly scale video content production while maintaining consistent quality and branding. Existing processes were ad-hoc and time-consuming.",
    solution:
      "Established a professional video production pipeline with standardized templates, recording workflows, and editing processes. Set up a dedicated recording studio and trained subject matter experts on effective video presentation techniques.",
    outcomes: [
      "100+ professional training videos produced",
      "Consistent brand quality across all content",
      "90% average video completion rate",
      "Reduced production time by 50% through standardization",
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "Camtasia", "OBS Studio", "Audacity"],
    responsibilities: [
      "Designed video production workflow and standards",
      "Set up recording studio with professional equipment",
      "Created video templates and brand guidelines",
      "Trained SMEs on effective video presentation",
      "Edited and produced final video content",
      "Managed video distribution and accessibility",
    ],
  },
  "learning-analytics-dashboard": {
    title: "Learning Analytics Dashboard",
    subtitle: "Data-Driven Insights for Learning Effectiveness",
    description:
      "Built comprehensive analytics platform providing real-time insights into learner engagement, course effectiveness, and certification progress.",
    image: "/analytics-dashboard-charts-graphs.jpg",
    tags: ["Analytics", "Data Visualization", "Reporting"],
    duration: "10 months",
    team: "Analytics team of 3",
    challenge:
      "Leadership lacked visibility into learning program effectiveness and ROI. Data was scattered across multiple systems with no unified reporting. Identifying at-risk learners and course improvement opportunities was nearly impossible.",
    solution:
      "Built a comprehensive analytics dashboard that aggregates data from multiple sources and provides real-time insights through interactive visualizations. Implemented predictive analytics to identify at-risk learners and automated reporting for stakeholders.",
    outcomes: [
      "Enabled data-driven decision making for learning strategy",
      "Identified at-risk learners with 85% accuracy",
      "Improved ROI tracking and program justification",
      "Reduced reporting time from days to minutes",
    ],
    technologies: ["Power BI", "SQL", "Python", "Tableau", "REST APIs"],
    responsibilities: [
      "Designed analytics architecture and data models",
      "Built ETL processes to aggregate data from multiple sources",
      "Created interactive dashboards and visualizations",
      "Implemented predictive models for learner success",
      "Automated reporting for stakeholders",
      "Trained business users on dashboard usage",
    ],
  },
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-5xl">
          <Link href="/#portfolio">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">{project.title}</h1>

            <p className="text-xl sm:text-2xl text-muted-foreground text-balance">{project.subtitle}</p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{project.team}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-2xl">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Outcomes */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl space-y-12">
          {/* Challenge */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-primary" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-primary" />
                The Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
            </CardContent>
          </Card>

          {/* Outcomes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-primary" />
                Key Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies & Responsibilities */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Interested in working together?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities in learning technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <Link href="/#portfolio">
              <Button size="lg" variant="outline">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}