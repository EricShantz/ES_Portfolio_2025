import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BlogSection() {
  const posts = [
    {
      title: "The Future of AI in Learning Technology",
      excerpt:
        "Exploring how artificial intelligence is transforming the learning experience and what it means for L&D professionals.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Innovation",
      image: "/ai-learning.png",
    },
    {
      title: "Building Scalable LMS Integrations with Boomi",
      excerpt:
        "A practical guide to designing and implementing robust system integrations for enterprise learning platforms.",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Integration",
      image: "/system-integration-architecture.jpg",
    },
    {
      title: "Measuring Learning Impact: Beyond Completion Rates",
      excerpt:
        "How to use analytics and data-driven insights to demonstrate the true business value of learning programs.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Analytics",
      image: "/data-analytics-dashboard.png",
    },
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
              <Button variant="outline" asChild>
                <Link href="#blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
