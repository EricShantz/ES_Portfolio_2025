//Currently not being displayed, commented out in page.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Learning Technology Lead",
      company: "Solace",
      location: "Kanata, ON",
      period: "2026 - Present",
      description:
        "Lead learning technology initiatives including LMS administration, systems integration, and platform innovation.",
      achievements: [
        "Implemented enterprise Docebo LMS serving 10,000+ users",
        "Built 50+ Boomi integrations connecting learning systems with HRIS and CRM",
        "Developed AI-powered learning assistant (Ask Solly AI) reducing support tickets by 70%",
        "Created 100+ e-learning courses including hands-on labs and video content",
        "Increased course completion rates by 40% through UX improvements and automation",
      ],
      skills: ["Docebo", "Boomi", "AI/ML", "Instructional Design", "Project Management"],
    },
    {
      title: "Technical Curriculum Developer",
      company: "Solace",
      location: "Kanata, ON",
      period: "2024 – Present",
      description: "Designed and maintained technical training experiences that blend instructional design, platform development, and strategic automation.",
      achievements: [
        "Created and maintained a library of 30+ courses including certification pathways and product training",
        "Redesigned LMS dashboards, menus, and pages for improved usability and learner experience",
        "Automated enrollment, subscription, and credentialing workflows through ERP and Boomi integrations",
        "Produced branded video content for both internal training and external marketing campaigns",
        "Developed a stakeholder-aligned course development process to streamline builds and reduce scope creep",
        "Integrated and launched Accredible for automated badge delivery and credential tracking",
        "Collaborated across product, sales, and support teams to align learning initiatives with business goals"
      ],
      skills: [
        "Docebo LMS",
        "Articulate 360",
        "Boomi",
        "Instructional Design",
        "Video Production",
        "Automation",
        "Platform UX",
        "Digital Credentialing"
      ]
    },
    {
      title: "eLearning Developer",
      company: "CSIS",
      location: "Ottawa, ON",
      period: "2024 – Present",
      description: "Designed and produced custom e-learning content for internal training initiatives across multiple departments.",
      achievements: [
        "Developed 17+ Storyline-based courses used across departments to streamline onboarding and training",
        "Built a custom content library of graphics, templates, and assets to accelerate production timelines",
        "Reduced video buffering times by 76% through optimized encoding and delivery techniques",
        "Created 24 reusable slide templates that improved team-wide authoring efficiency",
        "Collaborated with SMEs and LMS admins to ensure seamless deployment and technical accuracy"
      ],
      skills: ["Articulate Storyline", "Video Editing", "Graphic Design", "LMS Support", "Template Design"]
    },
    {
      title: "Junior Full Stack Developer",
      company: "Salesfloor",
      location: "Montreal, QC",
      period: "2022 – 2023",
      description: "Built and maintained interactive features across a large-scale retail web platform as part of an agile development team.",
      achievements: [
        "Contributed 50+ pull requests with new features, bug fixes, and UI improvements",
        "Boosted online interactions by 113% through collaborative frontend and UX enhancements",
        "Reviewed team code for quality and consistency, reducing bugs and merge conflicts",
        "Created technical documentation that improved team efficiency and onboarding",
        "Proposed solutions based on software requirement analysis and user experience reviews"
      ],
      skills: ["JavaScript", "Node.js", "React", "Git", "UX Collaboration", "Agile Development"]
    },
    {
      title: "Multimedia Specialist / Web Developer",
      company: "CBSA",
      location: "Ottawa, ON",
      period: "2021 – 2022",
      description: "Created digital training tools and dashboards for internal agency use in both English and French.",
      achievements: [
        "Developed multiple SCORM-compliant e-learning courses using Adapt Framework",
        "Built internal dashboards for document and training video access across departments",
        "Ensured accessibility and bilingual compliance in multimedia and e-learning products",
        "Troubleshot LMS issues and resolved content versioning challenges"
      ],
      skills: ["Adapt Framework", "Web Development", "SCORM", "LMS Troubleshooting", "Bilingual Content"]
    }



  ]

  return (
    <ScrollReveal direction="left">
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl">
                Professional journey in learning technology, instructional design, and software development.
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            <span>
                              {exp.company} • {exp.location}
                            </span>
                          </div>
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{exp.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
