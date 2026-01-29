"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Database,
  Brain,
  BarChart3,
  Link2,
  Settings,
  Code,
  PieChart,
  Workflow,
  Sparkles,
  Clock,
  BookOpen,
  ArrowRight,
} from "lucide-react"

const tracks = [
  {
    id: "sql-fundamentals",
    icon: Database,
    title: "SQL Fundamentals",
    description:
      "Learn database querying from scratch to advanced analytics. Master SELECT, JOINs, window functions, and query optimization.",
    items: 15,
    hours: 20,
    level: "Beginner",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    progress: 80,
    completed: 12,
    topics: ["SELECT, WHERE, JOINs", "Window Functions", "Query Optimization"],
  },
  {
    id: "machine-learning",
    icon: Brain,
    title: "Machine Learning",
    description:
      "From basic algorithms to advanced neural networks. Learn supervised, unsupervised learning, and model evaluation techniques.",
    items: 23,
    hours: 40,
    level: "Intermediate",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    progress: 22,
    completed: 5,
    topics: ["Regression & Classification", "Neural Networks", "Model Evaluation"],
  },
  {
    id: "statistics",
    icon: BarChart3,
    title: "Statistics",
    description:
      "Build a strong foundation in statistical analysis. Probability, hypothesis testing, regression, and Bayesian methods.",
    items: 12,
    hours: 15,
    level: "Beginner",
    color: "text-data-green",
    bgColor: "bg-data-green/10",
    borderColor: "border-data-green/20",
    progress: 50,
    completed: 6,
    topics: ["Probability Theory", "Hypothesis Testing", "Regression Analysis"],
  },
  {
    id: "web3-analytics",
    icon: Link2,
    title: "Web3 Analytics",
    description:
      "Master blockchain analytics and crypto data science. On-chain analysis, DeFi metrics, and NFT market analysis.",
    items: 18,
    hours: 30,
    level: "Advanced",
    color: "text-web3-cyan",
    bgColor: "bg-web3-cyan/10",
    borderColor: "border-web3-cyan/20",
    progress: 0,
    completed: 0,
    topics: ["On-Chain Analysis", "DeFi Metrics", "NFT Analytics"],
    badge: "NEW",
  },
  {
    id: "mlops",
    icon: Settings,
    title: "MLOps",
    description:
      "Deploy and maintain ML models in production. CI/CD, monitoring, A/B testing, and infrastructure management.",
    items: 16,
    hours: 25,
    level: "Advanced",
    color: "text-code-orange",
    bgColor: "bg-code-orange/10",
    borderColor: "border-code-orange/20",
    progress: 0,
    completed: 0,
    topics: ["Model Deployment", "Monitoring", "Infrastructure"],
  },
  {
    id: "python-basics",
    icon: Code,
    title: "Python Basics",
    description:
      "Start your programming journey with Python. Variables, functions, data structures, and object-oriented programming.",
    items: 20,
    hours: 25,
    level: "Beginner",
    color: "text-job-yellow",
    bgColor: "bg-job-yellow/10",
    borderColor: "border-job-yellow/20",
    progress: 100,
    completed: 20,
    topics: ["Syntax & Variables", "Functions & Classes", "Data Structures"],
  },
  {
    id: "data-visualization",
    icon: PieChart,
    title: "Data Visualization",
    description:
      "Tell stories with data through compelling visuals. Matplotlib, Seaborn, Plotly, and dashboard creation.",
    items: 14,
    hours: 18,
    level: "Beginner",
    color: "text-ai-pink",
    bgColor: "bg-ai-pink/10",
    borderColor: "border-ai-pink/20",
    progress: 35,
    completed: 5,
    topics: ["Matplotlib & Seaborn", "Interactive Charts", "Dashboards"],
  },
  {
    id: "data-engineering",
    icon: Workflow,
    title: "Data Engineering",
    description:
      "Build robust data pipelines and infrastructure. ETL, data warehousing, Apache Spark, and workflow orchestration.",
    items: 18,
    hours: 30,
    level: "Intermediate",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    progress: 0,
    completed: 0,
    topics: ["ETL Pipelines", "Data Warehousing", "Apache Spark"],
  },
  {
    id: "deep-learning",
    icon: Sparkles,
    title: "Deep Learning",
    description:
      "Advanced neural network architectures. CNNs, RNNs, Transformers, GANs, and cutting-edge research papers.",
    items: 22,
    hours: 45,
    level: "Advanced",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    progress: 0,
    completed: 0,
    topics: ["CNNs & RNNs", "Transformers", "Generative Models"],
  },
]

const filters = ["All", "Beginner", "Intermediate", "Advanced", "In Progress", "Completed"]

export default function TracksPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredTracks = tracks.filter((track) => {
    if (activeFilter === "All") return true
    if (activeFilter === "In Progress") return track.progress > 0 && track.progress < 100
    if (activeFilter === "Completed") return track.progress === 100
    return track.level === activeFilter
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Learning Tracks</h1>
        <p className="text-muted-foreground">
          Master data science with our comprehensive learning paths
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? "gradient-hero text-primary-foreground"
                : "bg-transparent"
            }
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTracks.map((track) => (
          <Card
            key={track.id}
            className={`bg-card border ${track.borderColor} hover:border-primary/50 transition-all duration-300 hover:-translate-y-1`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-xl ${track.bgColor} flex items-center justify-center`}
                >
                  <track.icon className={`w-7 h-7 ${track.color}`} />
                </div>
                {track.badge && (
                  <Badge className="bg-data-green text-primary-foreground">
                    {track.badge}
                  </Badge>
                )}
                {track.progress === 100 && (
                  <Badge className="bg-data-green/10 text-data-green border-data-green/20">
                    Completed
                  </Badge>
                )}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {track.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {track.description}
              </p>

              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {track.items} Resources
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {track.hours} hours
                </span>
              </div>

              {/* Progress */}
              {track.progress > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground font-medium">
                      {track.completed}/{track.items} ({track.progress}%)
                    </span>
                  </div>
                  <Progress value={track.progress} className="h-2" />
                </div>
              )}

              {/* Topics */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Topics covered:</p>
                <ul className="space-y-1">
                  {track.topics.map((topic) => (
                    <li
                      key={topic}
                      className="text-sm text-foreground flex items-center gap-2"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${track.bgColor}`} />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button asChild className="w-full gradient-hero text-primary-foreground">
                <Link href={`/tracks/${track.id}`}>
                  {track.progress > 0 && track.progress < 100
                    ? "Continue Learning"
                    : track.progress === 100
                      ? "Review Track"
                      : "Start Learning"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
