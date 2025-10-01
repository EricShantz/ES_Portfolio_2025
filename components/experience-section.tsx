import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Learning Technology Lead",
      company: "Tech Company",
      location: "Ottawa, ON",
      period: "2021 - Present",
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
      company: "Education Technology Firm",
      location: "Ottawa, ON",
      period: "2018 - 2021",
      description: "Designed and developed technical training programs for software and IT professionals.",
      achievements: [
        "Developed 30+ technical courses covering cloud computing, DevOps, and software development",
        "Built interactive lab environments for hands-on practice",
        "Produced professional video content with 90%+ completion rates",
        "Collaborated with SMEs to ensure technical accuracy and relevance",
        "Implemented learning analytics to track and improve course effectiveness",
      ],
      skills: ["Course Development", "Video Production", "Lab Design", "Technical Writing"],
    },
    {
      title: "Instructional Designer",
      company: "Corporate Training Department",
      location: "Ottawa, ON",
      period: "2015 - 2018",
      description: "Created engaging learning experiences for corporate training programs.",
      achievements: [
        "Designed 50+ courses across various business topics",
        "Implemented SCORM-compliant e-learning modules",
        "Conducted needs analysis and learner assessments",
        "Managed LMS administration and user support",
        "Achieved 95% learner satisfaction scores",
      ],
      skills: ["ADDIE Model", "SCORM", "LMS Administration", "Needs Analysis"],
    },
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
                Professional journey in learning technology, instructional design, and platform innovation.
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
