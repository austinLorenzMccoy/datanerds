"use client"

import { useEffect, useRef, useState } from "react"
import { Users, BookOpen, Briefcase, Award, Clock, Bot } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 1234,
    suffix: "",
    label: "Members",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookOpen,
    value: 450,
    suffix: "+",
    label: "Resources",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Briefcase,
    value: 50,
    suffix: "+",
    label: "Jobs",
    color: "text-job-yellow",
    bgColor: "bg-job-yellow/10",
  },
  {
    icon: Award,
    value: 9,
    suffix: "",
    label: "Tracks",
    color: "text-data-green",
    bgColor: "bg-data-green/10",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "AI Help",
    color: "text-ai-pink",
    bgColor: "bg-ai-pink/10",
  },
  {
    icon: Bot,
    value: 100,
    suffix: "%",
    label: "FREE",
    color: "text-web3-cyan",
    bgColor: "bg-web3-cyan/10",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className={`w-12 h-12 mx-auto rounded-lg ${stat.bgColor} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
