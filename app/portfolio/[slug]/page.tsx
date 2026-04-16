import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, TrendingUp, Users, Target, Lightbulb, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = {
  "ask-solly-ai": {
    title: "Ask Solly AI",
    subtitle: "AI Assistant for Scalable Learner Support",
    description:
      "Built a natural language processing-based learning assistant integrated with Docebo to reduce support overhead and recommend learning content.",
    image: "/ask-solly.PNG",
    tags: ["AI", "Learning Innovation", "Automation"],
    duration: "6 months",
    team: "Innovation pod of 5",
    challenge:
      "Learners were struggling to find relevant content and had to wait for manual responses to repeat questions.",
    solution:
      "Developed Ask Solly AI to provide 24/7 assistance, course guidance, and real-time responses using NLP.",
    outcomes: [
      "Reduced support tickets by 70%",
      "Increased engagement with course catalog",
      "Achieved 4.8/5 average satisfaction score"
    ],
    technologies: ["OpenAI", "React", "Node.js", "Docebo APIs"],
    responsibilities: [
      "Designed user flows and AI interaction model",
      "Trained assistant with learning content and FAQs",
      "Integrated Solly into LMS interface",
      "Monitored usage and improved based on feedback"
    ]
  },
  "lms-redesign": {
    title: "LMS Redesign & Custom Dashboards",
    subtitle: "Enhancing UX Across Learning Systems",
    description:
      "Redesigned Docebo LMS dashboards, pages, and navigation structure to improve user experience and engagement.",
    image: "/SoAc-landing-page.PNG",
    tags: ["Docebo", "UX Design", "LMS Customization"],
    duration: "4 months",
    team: "Solo project with stakeholder input",
    challenge:
      "The existing LMS layout was cluttered and unintuitive, leading to low course completion rates and learner frustration.",
    solution:
      "Custom-coded pages and dashboards, streamlined menus, and redesigned user pathways. Improved branding and role-based navigation.",
    outcomes: [
      "Improved learner satisfaction based on internal surveys",
      "40% increase in course discovery",
      "Reduced support tickets related to navigation issues"
    ],
    technologies: ["Docebo", "HTML/CSS", "JavaScript", "SCSS"],
    responsibilities: [
      "Redesigned LMS interface and menus for improved UX",
      "Developed custom-coded pages and dashboard widgets",
      "Implemented branding elements across domains",
      "Tested and iterated based on user feedback"
    ]
  },
  "ssl-health-check-automation": {
    title: "SSL Certificate Health Check Automation",
    subtitle: "Monitoring Infrastructure for Uptime Assurance",
    description: "Automated a health check for the Docebo LMS SSL certificate, ensuring uninterrupted access and preventing certificate expiration.",
    image: "/SSL-check.png",
    tags: ["Automation", "Monitoring", "DevOps"],
    duration: "2 weeks",
    team: "Solo project",
    challenge: "LMS access was previously disrupted by expired SSL certificates, creating risk for user trust and business continuity.",
    solution: "Built a scheduled script that monitors certificate status, alerts stakeholders in advance of expiration, and logs changes for audit purposes.",
    outcomes: [
      "Proactive alerts reduced downtime risk to near-zero",
      "Improved platform reliability and stakeholder confidence"
    ],
    technologies: ["Node.js", "SSL Checker API", "Email Alerts"],
    responsibilities: [
      "Developed monitoring logic for SSL status",
      "Automated notification system for renewals",
      "Integrated alerts with Slack and email",
      "Documented system for internal IT team"
    ]
  },
  "marketing-strategy-content": {
    title: "Academy Marketing Strategy & Content",
    subtitle: "Driving Adoption through Content and Community",
    description: "Created marketing content, newsletters, and campaigns to promote Solace Academy and increase course enrollments.",
    image: "/2025-feature-update-linkedin.PNG",
    tags: ["Marketing", "Engagement", "Learning Strategy"],
    duration: "Ongoing",
    team: "Marketing and academy team of 4",
    challenge: "Lack of awareness and engagement with the Academy's content limited the reach and impact of learning resources.",
    solution: "Developed and scheduled newsletters, created promotional assets, and coordinated with product marketing for campaign alignment.",
    outcomes: [
      "Boosted course sign-ups and completions",
      "Strengthened brand recognition of Solace Academy",
      "Established consistent learner engagement touchpoints"
    ],
    technologies: ["Canva", "Docebo Notifications", "Email Automation"],
    responsibilities: [
      "Wrote and distributed newsletters",
      "Designed marketing visuals and course previews",
      "Built email campaigns using LMS tools",
      "Collaborated with marketing for event alignment"
    ]
  },
  "erp-workshop-enrollment": {
    title: "ERP - Integrated Workshop Enrollment",
    subtitle: "Automated Learner Onboarding via ERP",
    description: "Integrated LMS with ERP system to automate user creation and enrollment into workshop sessions upon signup.",
    image: "/ERP-registration.PNG",
    tags: ["Integration", "Automation", "Docebo", "Boomi"],
    duration: "2 months",
    team: "Solo developer with ERP team support",
    challenge: "Manual user enrollment created delays and administrative overhead for recurring technical workshops.",
    solution: "Built integration that triggers on ERP workshop registration to create LMS users and auto-enroll them into the correct session.",
    outcomes: [
      "Eliminated manual enrollment process",
      "Reduced admin time by 80%",
      "Improved registration-to-access turnaround from days to minutes"
    ],
    technologies: ["Boomi", "REST APIs", "Docebo APIs", "Workday"],
    responsibilities: [
      "Designed and implemented Boomi workflows",
      "Mapped ERP data to LMS enrollment logic",
      "Tested data flow and error handling",
      "Documented integration for IT handover"
    ]
  },
  "credential-automation": {
    title: "Credential Automation",
    subtitle: "Badge Redesign & Automated Issuance via Accredible",
    description: "Redesigned all digital badges and certificates to reflect the Solace brand, then integrated Accredible for automated credential issuance based on LMS achievements.",
    image: "/New_Badge.png",
    tags: ["Design", "Credentialing", "Integration", "Automation"],
    duration: "2 months",
    team: "Solo project with vendor support",
    challenge: "Existing certificates were outdated and inconsistent, and manual badge delivery delayed learner recognition and was unsustainable at scale.",
    solution: "Created new branded templates, then integrated the LMS with Accredible using webhook and API automation for real-time credential issuance.",
    outcomes: [
      "Unified visual identity across all learning credentials",
      "Enabled real-time automated delivery of digital badges",
      "Improved credential visibility and learner motivation",
      "Reduced manual overhead to zero"
    ],
    technologies: ["Adobe Illustrator", "Accredible", "Docebo", "Webhook", "REST API"],
    responsibilities: [
      "Designed new visual templates for badges and certificates",
      "Coordinated stakeholder feedback and approvals",
      "Configured credential rules and Accredible integration",
      "Mapped badge designs to certification outcomes",
      "Tested and deployed end-to-end automation",
      "Trained support team on platform usage"
    ]
  },
  "topic-hierarchy-site": {
    title: "Topic Hierarchy Explainer Site",
    subtitle: "Interactive Guide for Learning Architecture",
    description: "Built a simple website to help learners and internal teams understand topic hierarchy and course categorization.",
    image: "/topic-tester.PNG",
    tags: ["UX", "Learning Architecture", "Internal Tools"],
    duration: "2 weeks",
    team: "Solo build",
    challenge: "Confusion around how learning content was structured led to learner drop-off and stakeholder misunderstandings.",
    solution: "Created a static site with visual and text explanations to demystify topic mapping and content organization.",
    outcomes: [
      "Reduced internal questions about course organization",
      "Improved learner navigation confidence",
      "Provided a shareable link for onboarding"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    responsibilities: [
      "Designed content structure and layout",
      "Built and deployed static site",
      "Gathered feedback and iterated on clarity"
    ]
  },
  "EDInt-path": {
    title: "Solace Certified Event Driven Integration Associate Path",
    subtitle: "For architects who want to validate their knowledge to event-enable an organization’s integration infrastructure with Solace Platform",
    description: "Created an e-learning Certification path for Solace’s ‘Integration Reimagined’ campaign",
    image: "/EDInt-path.png",
    tags: ["Course Development", "Certification", "Solace Platform"],
    duration: "3 months",
    team: "Instructional team of 3",
    challenge: "Solace launched a new product and needed a structured way to certify users quickly and effectively.",
    solution: "Designed a practitioner learning path, built an anchor course, and integrated assessments aligned with real-world use cases.",
    outcomes: [
      "Launched certification in sync with product release",
      "Drove early adoption among developer community",
      "Enabled structured training and proof of competency"
    ],
    technologies: ["Articulate Rise", "Docebo", "Accredible"],
    responsibilities: [
      "Mapped learning objectives to certification criteria",
      "Built course content and assessments",
      "Collaborated with product SMEs for accuracy",
      "Configured LMS rules for issuing credentials"
    ]
  },
  "agent-mesh-path": {
    title: "Agent Mesh Practitioner Path",
    subtitle: "Certification Path Design for Product Enablement",
    description: "Created an e-learning path and certification framework for Solace's Agent Mesh initiative.",
    image: "/sam-lp.jpeg",
    tags: ["Course Development", "Certification", "Solace Platform"],
    duration: "3 months",
    team: "Instructional team of 3",
    challenge: "Solace launched a new product and needed a structured way to certify users quickly and effectively.",
    solution: "Designed a practitioner learning path, built an anchor course, and integrated assessments aligned with real-world use cases.",
    outcomes: [
      "Launched certification in sync with product release",
      "Drove early adoption among developer community",
      "Enabled structured training and proof of competency"
    ],
    technologies: ["Articulate Rise", "Docebo", "Accredible"],
    responsibilities: [
      "Mapped learning objectives to certification criteria",
      "Built course content and assessments",
      "Collaborated with product SMEs for accuracy",
      "Configured LMS rules for issuing credentials"
    ]
  },
  "schema-registry-course": {
    title: "Schema Registry Foundations",
    subtitle: "For architects who want to validate their knowledge to event-enable an organization’s integration infrastructure with Solace Platform",
    description: "Created an e-learning Certification path for Solace’s ‘Integration Reimagined’ campaign",
    image: "/schema-registry.jpeg",
    tags: ["Course Development", "Certification", "Solace Platform"],
    duration: "3 months",
    team: "Instructional team of 3",
    challenge: "Solace launched a new product and needed a structured way to certify users quickly and effectively.",
    solution: "Designed a practitioner learning path, built an anchor course, and integrated assessments aligned with real-world use cases.",
    outcomes: [
      "Launched certification in sync with product release",
      "Drove early adoption among developer community",
      "Enabled structured training and proof of competency"
    ],
    technologies: ["Articulate Rise", "Docebo", "Accredible"],
    responsibilities: [
      "Mapped learning objectives to certification criteria",
      "Built course content and assessments",
      "Collaborated with product SMEs for accuracy",
      "Configured LMS rules for issuing credentials"
    ]
  },
  "DMR-course": {
    title: "Performance Tuning for DMR",
    subtitle: "For architects who want to validate their knowledge to event-enable an organization’s integration infrastructure with Solace Platform",
    description: "Created an e-learning Certification path for Solace’s ‘Integration Reimagined’ campaign",
    image: "/DMR-course.jpeg",
    tags: ["Course Development", "Certification", "Solace Platform"],
    duration: "3 months",
    team: "Instructional team of 3",
    challenge: "Solace launched a new product and needed a structured way to certify users quickly and effectively.",
    solution: "Designed a practitioner learning path, built an anchor course, and integrated assessments aligned with real-world use cases.",
    outcomes: [
      "Launched certification in sync with product release",
      "Drove early adoption among developer community",
      "Enabled structured training and proof of competency"
    ],
    technologies: ["Articulate Rise", "Docebo", "Accredible"],
    responsibilities: [
      "Mapped learning objectives to certification criteria",
      "Built course content and assessments",
      "Collaborated with product SMEs for accuracy",
      "Configured LMS rules for issuing credentials"
    ]
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
      <section className="relative pt-20 pb-2 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-5xl">
          <Link href="/#portfolio">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-sm rounded-full bg-transparent border-foreground">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">{project.title}</h1>

            <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center mt-8">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-2xl">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}` || `${process.env.NEXT_PUBLIC_BASE_PATH}/placeholder.svg`}
                  alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground text-balance">{project.subtitle}</p>
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