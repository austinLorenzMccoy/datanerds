"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Got my first data analyst job!",
    content:
      "DataNerds helped me transition from teaching to data science in 6 months. The structured tracks and AI tutor made all the difference.",
    name: "Sarah K.",
    role: "Data Analyst",
    company: "Tech Corp",
    initials: "SK",
    gradient: "from-primary to-accent",
  },
  {
    quote: "The Web3 track is amazing!",
    content:
      "As someone interested in crypto analytics, the Web3 track gave me real-world skills that landed me a job at a DeFi startup.",
    name: "Marcus J.",
    role: "Blockchain Analyst",
    company: "DeFi Labs",
    initials: "MJ",
    gradient: "from-web3-cyan to-primary",
  },
  {
    quote: "Best free resource out there.",
    content:
      "I tried many paid courses but DataNerds has been more valuable. The community support and live job board are game changers.",
    name: "Elena R.",
    role: "ML Engineer",
    company: "AI Startup",
    initials: "ER",
    gradient: "from-accent to-ai-pink",
  },
  {
    quote: "From zero to data scientist!",
    content:
      "Started with no coding experience. The Python track and AI assistant helped me understand concepts I struggled with for months.",
    name: "Jordan L.",
    role: "Jr. Data Scientist",
    company: "Analytics Co",
    initials: "JL",
    gradient: "from-data-green to-web3-cyan",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Real Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from our community members who have transformed their careers through DataNerds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="relative overflow-hidden bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {`"${testimonial.quote}"`}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className={`bg-gradient-to-br ${testimonial.gradient} text-primary-foreground text-sm font-medium`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-foreground font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
