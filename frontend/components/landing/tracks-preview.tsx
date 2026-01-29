"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Brain, BarChart3, Link2, Settings, Code, PieChart, Workflow, Sparkles } from "lucide-react"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const tracks = [
  {
    icon: Database,
    title: "SQL Fundamentals",
    items: 15,
    level: "Beginner",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    items: 23,
    level: "Intermediate",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: BarChart3,
    title: "Statistics",
    items: 12,
    level: "Beginner",
    color: "text-data-green",
    bgColor: "bg-data-green/10",
  },
  {
    icon: Link2,
    title: "Web3 Analytics",
    items: 18,
    level: "Advanced",
    color: "text-web3-cyan",
    bgColor: "bg-web3-cyan/10",
    badge: "NEW",
  },
  {
    icon: Settings,
    title: "MLOps",
    items: 16,
    level: "Advanced",
    color: "text-code-orange",
    bgColor: "bg-code-orange/10",
  },
  {
    icon: Code,
    title: "Python Basics",
    items: 20,
    level: "Beginner",
    color: "text-job-yellow",
    bgColor: "bg-job-yellow/10",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    items: 14,
    level: "Beginner",
    color: "text-ai-pink",
    bgColor: "bg-ai-pink/10",
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    items: 18,
    level: "Intermediate",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Deep Learning",
    items: 22,
    level: "Advanced",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export function TracksPreview() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="tracks" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              9 Complete Learning Tracks
            </h2>
            <p className="text-muted-foreground">
              Structured paths from beginner to advanced, covering all aspects of data science.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0 bg-transparent">
            <Link href="/tracks">
              View All Tracks
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Carousel controls */}
        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:bg-secondary transition-colors -ml-5 hidden lg:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg hover:bg-secondary transition-colors -mr-5 hidden lg:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Track cards carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tracks.map((track) => (
              <Card
                key={track.title}
                className="flex-shrink-0 w-64 snap-start bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${track.bgColor} flex items-center justify-center`}>
                      <track.icon className={`w-6 h-6 ${track.color}`} />
                    </div>
                    {track.badge && (
                      <Badge className="bg-data-green text-data-green-foreground text-xs">
                        {track.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {track.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{track.items} items</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{track.level}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
