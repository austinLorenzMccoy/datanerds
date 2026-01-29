import { GreetingBanner } from "@/components/dashboard/greeting-banner"
import { QuickStats } from "@/components/dashboard/quick-stats"
import { ContinueLearning } from "@/components/dashboard/continue-learning"
import { LatestJobs } from "@/components/dashboard/latest-jobs"
import { AIAssistantWidget } from "@/components/dashboard/ai-assistant-widget"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <GreetingBanner />
      <QuickStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContinueLearning />
        <LatestJobs />
      </div>
      <AIAssistantWidget />
    </div>
  )
}
