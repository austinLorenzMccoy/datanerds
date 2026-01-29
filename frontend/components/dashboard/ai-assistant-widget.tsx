"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, ArrowRight, Sparkles } from "lucide-react"

const quickPrompts = [
  "Explain gradient descent",
  "Debug my Python code",
  "SQL query help",
  "ML algorithm comparison",
]

export function AIAssistantWidget() {
  return (
    <Card className="bg-card border-border overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ai-pink/20 to-accent/20 flex items-center justify-center shrink-0">
              <Bot className="w-7 h-7 text-ai-pink" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-foreground">
                  AI Study Assistant
                </h3>
                <Sparkles className="w-4 h-4 text-ai-pink" />
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Get instant help with any data science question. Powered by Groq for lightning-fast responses.
              </p>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <Link
                    key={prompt}
                    href={`/ai-assistant?q=${encodeURIComponent(prompt)}`}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {prompt}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Button asChild className="gradient-hero text-primary-foreground shrink-0">
            <Link href="/ai-assistant">
              Chat Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
