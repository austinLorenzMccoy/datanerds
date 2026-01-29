"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Flame } from "lucide-react"

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 18) return "Good afternoon"
  return "Good evening"
}

export function GreetingBanner() {
  const greeting = getGreeting()
  const userName = "Alex"
  const streak = 7

  return (
    <Card className="relative overflow-hidden border-border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-foreground">
                {greeting}, {userName}!
              </h1>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-code-orange/10 text-code-orange">
                <Flame className="w-4 h-4" />
                <span className="text-sm font-medium">{streak} Day Streak</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              {"You're on fire! Complete one more lesson today to maintain your streak."}
            </p>
          </div>
          <Button asChild className="gradient-hero text-primary-foreground shrink-0">
            <Link href="/tracks">
              Continue Learning
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl translate-y-1/2" />
    </Card>
  )
}
