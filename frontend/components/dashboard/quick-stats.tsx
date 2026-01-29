"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Flame, Star, Target } from "lucide-react"

const stats = [
  {
    title: "Learning Progress",
    value: "45%",
    description: "12/27 lessons completed",
    icon: BarChart3,
    color: "text-primary",
    bgColor: "bg-primary/10",
    progress: 45,
  },
  {
    title: "Streak",
    value: "7",
    description: "Days in a row",
    icon: Flame,
    color: "text-code-orange",
    bgColor: "bg-code-orange/10",
    progress: null,
  },
  {
    title: "Points",
    value: "1,234",
    description: "Top 15% of learners",
    icon: Star,
    color: "text-job-yellow",
    bgColor: "bg-job-yellow/10",
    progress: null,
  },
  {
    title: "Next Badge",
    value: "50 pts",
    description: "SQL Master",
    icon: Target,
    color: "text-data-green",
    bgColor: "bg-data-green/10",
    progress: 70,
  },
]

export function QuickStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="bg-card border-border hover:border-primary/30 transition-colors"
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}
              >
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.title}</p>
              {stat.progress !== null ? (
                <Progress value={stat.progress} className="h-1.5 mt-2" />
              ) : (
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
