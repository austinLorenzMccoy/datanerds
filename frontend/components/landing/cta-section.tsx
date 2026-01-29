import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  "No credit card required",
  "No hidden fees",
  "Cancel anytime",
  "Forever free tier",
]

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join 1,200+ aspiring data scientists learning, building, and growing together. 
            100% free. Forever.
          </p>

          <Button
            size="lg"
            asChild
            className="gradient-hero text-primary-foreground text-lg px-10 py-6 glow-blue hover:scale-105 transition-transform mb-8"
          >
            <Link href="/signup">
              Create Free Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-data-green" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
