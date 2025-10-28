import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BlogSection() {
  const posts = [
    {
      title: "LMS In 2025: Top Trends Transforming The Future Of Education",
      excerpt:
        "The educational landscape is undergoing a revolutionary transformation, fueled by rapid technological advancements. As we approach 2026, Learning Management Systems (LMSs) are positioned to become the backbone of modern education, reshaping how content is delivered, monitored, and interacted with.",
      date: " August 18, 2025",
      readTime: "4 min read",
      category: "LMS",
      image: "/lms-in-2025.jpg",
      link: "https://elearningindustry.com/lms-top-trends-transforming-the-future-of-education"
    },
    {
      title: "Future of eLearning: 2025 Trends That Actually Matter to L&D Leaders",
      excerpt:
        "As we look toward 2026 and beyond, what really matters for L&D leaders is not the volume of new tools, but the value they add—measured by performance, retention, and ROI.",
      date: "September 9, 2025",
      readTime: "6 min read",
      category: "E-Learning",
      image: "/future-of-elearning.png",
      link: "https://elmlearning.com/blog/future-of-elearning/"
    },
    {
      title: "How agentic AI can drive workforce transformation",
      excerpt:
        "EdTech enterprises are creating a skill-oriented economy by promoting targeted learning and facilitating lifelong learning for employees. The integration of agentic AI into existing platforms maximizes career-focused vocational qualifications, as well as workforce learning and development programmes and establishes a new social contract in talent development.",
      date: "May 9, 2025",
      readTime: "8 min read",
      category: "AI in EdTech",
      image: "/ed-tech.png",
      link: "https://www.weforum.org/stories/2025/05/see-why-edtech-needs-agentic-ai-for-workforce-transformation/"
    }
  ]

  return (
    <ScrollReveal direction="right">
      <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Latest Insights</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Thoughts on learning technology, platform innovation, and industry trends.
                </p>
              </div>
              {/* <Button variant="outline" asChild>
                <Link href="#blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button> */}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={index} href={`${post.link}`} target="_blank" className="block h-full">
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={`/ES_Portfolio_2025/${post.image}` || "/ES_Portfolio_2025/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group/btn p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
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
