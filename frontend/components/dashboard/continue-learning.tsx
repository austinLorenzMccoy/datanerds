import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Database, Brain, BarChart3 } from "lucide-react"

const tracks = [
  {
    title: "SQL Fundamentals",
    icon: Database,
    progress: 80,
    completed: 12,
    total: 15,
    color: "text-primary",
    bgColor: "bg-primary/10",
    lastAccessed: "2 hours ago",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    progress: 22,
    completed: 5,
    total: 23,
    color: "text-accent",
    bgColor: "bg-accent/10",
    lastAccessed: "Yesterday",
  },
  {
    title: "Statistics",
    icon: BarChart3,
    progress: 50,
    completed: 6,
    total: 12,
    color: "text-data-green",
    bgColor: "bg-data-green/10",
    lastAccessed: "3 days ago",
  },
]

export function ContinueLearning() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Continue Learning</CardTitle>
        <Button variant="ghost" size="sm" asChild className="text-primary">
          <Link href="/tracks">
            View All
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {tracks.map((track) => (
          <Link
            key={track.title}
            href={`/tracks/${track.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="block p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-lg ${track.bgColor} flex items-center justify-center shrink-0`}
              >
                <track.icon className={`w-6 h-6 ${track.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-foreground truncate">
                    {track.title}
                  </h3>
                  <span className="text-xs text-muted-foreground shrink-0 ml-2">
                    {track.lastAccessed}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={track.progress} className="flex-1 h-2" />
                  <span className="text-sm text-muted-foreground shrink-0">
                    {track.completed}/{track.total}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
