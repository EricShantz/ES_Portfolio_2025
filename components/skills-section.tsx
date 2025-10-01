import { Card } from "@/components/ui/card"
import { Database, Workflow, GraduationCap, Sparkles, Users, BarChart } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Database,
      title: "LMS Administration",
      skills: [
        "Docebo Platform",
        "User Management",
        "Course Configuration",
        "Reporting & Analytics",
        "Custom Branding",
      ],
    },
    {
      icon: Workflow,
      title: "Systems Integration",
      skills: [
        "Boomi Platform",
        "API Development",
        "Workflow Automation",
        "Data Synchronization",
        "Custom Integrations",
      ],
    },
    {
      icon: GraduationCap,
      title: "Instructional Design",
      skills: [
        "Course Development",
        "Hands-On Labs",
        "Video Production",
        "Interactive Simulations",
        "Assessment Design",
      ],
    },
    {
      icon: Sparkles,
      title: "Platform Innovation",
      skills: ["AI-Driven Tools", "UX Improvements", "Learning Analytics", "Automation", "Process Optimization"],
    },
    {
      icon: Users,
      title: "Community Engagement",
      skills: [
        "Learner Support",
        "Enrollment Campaigns",
        "Certification Programs",
        "User Adoption",
        "Change Management",
      ],
    },
    {
      icon: BarChart,
      title: "Technical Skills",
      skills: ["JavaScript/TypeScript", "REST APIs", "SQL", "HTML/CSS", "Data Analysis"],
    },
  ]

  return (
    <ScrollReveal direction="right">
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl">
                A comprehensive skill set spanning learning technology, systems integration, and instructional design.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
