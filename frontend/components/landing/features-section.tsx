"use client"

import { Bot, Briefcase, Link2, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Bot,
    title: "AI Study Assistant",
    description:
      "Get instant help from our GPT-4 level AI tutor. Free, fast, and always available to help you learn.",
    color: "text-ai-pink",
    bgColor: "bg-ai-pink/10",
    borderColor: "border-ai-pink/20",
  },
  {
    icon: Briefcase,
    title: "Live Job Board",
    description:
      "Access 50+ curated data science jobs from 6 different APIs, updated daily with real opportunities.",
    color: "text-job-yellow",
    bgColor: "bg-job-yellow/10",
    borderColor: "border-job-yellow/20",
  },
  {
    icon: Link2,
    title: "Web3 Track",
    description:
      "Learn blockchain analytics and crypto data science with live market data and real-world projects.",
    color: "text-web3-cyan",
    bgColor: "bg-web3-cyan/10",
    borderColor: "border-web3-cyan/20",
  },
  {
    icon: Users,
    title: "Active Community",
    description:
      "Join 1,200+ learners, find mentors, share projects, and grow together in our supportive community.",
    color: "text-data-green",
    bgColor: "bg-data-green/10",
    borderColor: "border-data-green/20",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Why DataNerds is Different
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine cutting-edge AI, real job opportunities, and a supportive community 
            to give you everything you need to succeed in data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`group relative overflow-hidden border ${feature.borderColor} bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5`}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-card" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
