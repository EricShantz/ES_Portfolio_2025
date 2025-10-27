import { Card } from "@/components/ui/card"
import { Award, Users, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: "Technical Expertise",
      description: "Expert in LMS administration, integrations, and automation",
    },
    {
      icon: Zap,
      title: "Platform Innovation",
      description: "Driving adoption of AI-driven learning tools and UX improvements",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Increasing enrollment, completions, and certification rates",
    }
  ]

  return (
    <ScrollReveal direction="right">
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl bg-background">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m a Learning Technology professional with expertise in building and managing scalable learning platforms that deliver measurable results.
                  My work sits at the intersection of instructional design, technical implementation, and strategic problem-solving.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With hands-on experience in LMS administration, multi-platform systems integration, and custom
                  e-learning development, I've helped organizations transform their learning ecosystems through
                  automation, AI-powered tools, and data-driven decision making.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I design learning environments that are engaging, effective, and built to scale.
                  From developing interactive programs and AI-based tools to producing marketing content and maintaining course libraries,
                  I combine technical skill with a strong focus on how people actually learn.
                </p>
              </div>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <highlight.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
