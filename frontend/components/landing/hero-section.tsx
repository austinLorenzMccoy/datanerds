"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronDown, Users, Briefcase, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [target, duration])

  return <span>{count.toLocaleString()}</span>
}

function FloatingParticle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <div
      className="absolute rounded-full bg-primary/20 animate-float"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: 0,
        animationDelay: `${delay}s`,
        animationDuration: `${4 + Math.random() * 2}s`,
      }}
    />
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_p4pAmlKHBYL3wg8WLNQGYLN8C1EQ36eqjw&s)',
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingParticle
            key={`particle-${i}-${Math.random()}`}
            delay={i * 0.3}
            x={Math.random() * 100}
            size={4 + Math.random() * 8}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Benefit badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
            100% Free
          </Badge>
          <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-accent/10 text-accent border-accent/20">
            AI-Powered
          </Badge>
          <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-data-green/10 text-data-green border-data-green/20">
            Job Ready
          </Badge>
          <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-web3-cyan/10 text-web3-cyan border-web3-cyan/20">
            Web3
          </Badge>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Master Data Science{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Without Breaking the Bank
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Join 1,200+ aspiring data scientists learning, building, and growing together. 
          Free AI tutoring, real job opportunities, and cutting-edge Web3 curriculum.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            asChild
            className="gradient-hero text-primary-foreground text-lg px-8 py-6 glow-blue hover:scale-105 transition-transform"
          >
            <Link href="/signup">
              Start Learning Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-lg px-8 py-6 border-border hover:bg-secondary bg-transparent"
          >
            <Link href="#tracks">
              View Tracks
              <ChevronDown className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Stats counter */}
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">
              <AnimatedCounter target={1234} />
            </span>
            <span>Members</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-job-yellow" />
            <span className="text-foreground font-semibold">
              <AnimatedCounter target={50} />+
            </span>
            <span>Jobs</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-data-green" />
            <span className="text-foreground font-semibold">9</span>
            <span>Tracks</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
