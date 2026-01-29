import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, LayoutDashboard, BookOpen, Briefcase, Users, Bot, Zap } from "lucide-react"

const quickLinks = [
  { title: "Tracks", href: "/tracks", icon: BookOpen },
  { title: "Resources", href: "/resources", icon: BookOpen },
  { title: "Jobs", href: "/jobs", icon: Briefcase },
  { title: "Community", href: "/community/leaderboard", icon: Users },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Background effects */}
      <div className="fixed inset-0 grid-overlay pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
            <Zap className="w-7 h-7 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">DataNerds</span>
        </Link>

        {/* 404 Number */}
        <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 animate-pulse">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          This page seems to have vanished into the void... Like a poorly trained model!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button asChild size="lg" className="gradient-hero text-primary-foreground">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent">
            <Link href="/dashboard">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              View Dashboard
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">{link.title}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Assistant suggestion */}
        <div className="mt-8 p-4 rounded-xl bg-ai-pink/10 border border-ai-pink/20">
          <div className="flex items-center justify-center gap-2 text-ai-pink mb-2">
            <Bot className="w-5 h-5" />
            <span className="font-medium">Need help?</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Our AI assistant can help you find what you're looking for.
          </p>
          <Button asChild variant="outline" size="sm" className="bg-transparent border-ai-pink/30 text-ai-pink hover:bg-ai-pink/10">
            <Link href="/ai-assistant">
              Ask AI Assistant
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
