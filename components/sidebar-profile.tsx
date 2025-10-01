"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Mail, Linkedin, FileText } from "lucide-react"
import Link from "next/link"

export function SidebarProfile() {
  return (
    <Card className="p-6 space-y-6">
      {/* Profile Image */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <img src="/professional-headshot.png" alt="Professional portrait" className="w-full h-full object-cover" />
      </div>

      {/* Name & Title */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <p className="text-lg font-medium text-primary">Learning Technology Lead</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Ottawa, Ontario</span>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        I build and manage innovative learning platforms that scale through LMS administration, systems integration, and
        AI-driven tools.
      </p>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 py-4 border-y">
        <div>
          <div className="text-2xl font-bold text-primary">5+</div>
          <div className="text-xs text-muted-foreground">Years Experience</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">50+</div>
          <div className="text-xs text-muted-foreground">Projects Delivered</div>
        </div>
      </div>

      {/* Core Expertise */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Core Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {["Docebo", "Boomi", "E-Learning", "AI Tools", "Analytics"].map((skill) => (
            <span key={skill} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2">
        <Button asChild className="w-full" size="sm">
          <Link href="#contact">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full bg-transparent" size="sm">
          <Link href="/resume.pdf" target="_blank">
            <FileText className="mr-2 h-4 w-4" />
            Download Resume
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full bg-transparent" size="sm">
          <Link href="https://linkedin.com/in/yourprofile" target="_blank">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Link>
        </Button>
      </div>
    </Card>
  )
}
