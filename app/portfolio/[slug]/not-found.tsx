import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <FileQuestion className="h-24 w-24 text-muted-foreground mx-auto" />
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="text-lg text-muted-foreground max-w-md">
          The portfolio project you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/#portfolio">
          <Button size="lg">Back to Portfolio</Button>
        </Link>
      </div>
    </div>
  )
}
