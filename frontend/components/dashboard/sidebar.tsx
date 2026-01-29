"use client"

import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Zap,
  LayoutDashboard,
  BookOpen,
  Briefcase,
  Bot,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  FileText,
  Code,
  Bookmark,
  Send,
  Trophy,
  UserPlus,
  FolderOpen,
  Moon,
  Sun,
  Home,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarProps {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
]

const learningItems = [
  { title: "Tracks", href: "/tracks", icon: GraduationCap },
  { title: "Resources", href: "/resources", icon: FileText },
  { title: "Playground", href: "/playground", icon: Code },
]

const jobsItems = [
  { title: "Browse Jobs", href: "/jobs", icon: Briefcase },
  { title: "Applications", href: "/jobs/applications", icon: Send },
  { title: "Saved", href: "/jobs/saved", icon: Bookmark },
]

const communityItems = [
  { title: "Leaderboard", href: "/community/leaderboard", icon: Trophy },
  { title: "Mentorship", href: "/community/mentorship", icon: UserPlus },
  { title: "Projects", href: "/community/projects", icon: FolderOpen },
]

export function DashboardSidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "learning",
    "jobs",
    "community",
  ])
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    )
  }

  const NavLink = ({
    item,
    isNested = false,
  }: {
    item: { title: string; href: string; icon: React.ElementType }
    isNested?: boolean
  }) => {
    const isActive = pathname === item.href

    const linkContent = (
      <Link
        href={item.href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          isNested && !isCollapsed ? "ml-4" : ""
        } ${
          isActive
            ? "bg-primary/10 text-primary border-l-2 border-primary"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        }`}
      >
        <item.icon className="w-5 h-5 shrink-0" />
        {!isCollapsed && <span className="text-sm">{item.title}</span>}
      </Link>
    )

    if (isCollapsed) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
          <TooltipContent side="right" sideOffset={10}>
            {item.title}
          </TooltipContent>
        </Tooltip>
      )
    }

    return linkContent
  }

  const SectionHeader = ({
    title,
    section,
    icon: Icon,
  }: {
    title: string
    section: string
    icon: React.ElementType
  }) => {
    if (isCollapsed) {
      return (
        <div className="px-3 py-2">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
      )
    }

    return (
      <button
        type="button"
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span>{title}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            expandedSections.includes(section) ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>
    )
  }

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-40 ${
          isCollapsed ? "w-16" : "w-60"
        } hidden lg:flex`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-3 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <span className="text-lg font-bold text-sidebar-foreground">
                DataNerds
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-muted-foreground hover:text-foreground"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          {/* Home Link */}
          <NavLink item={{ title: "Home", href: "/", icon: Home }} />
          
          {/* Main Nav */}
          {mainNavItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}

          {/* AI Assistant */}
          <NavLink item={{ title: "AI Assistant", href: "/ai-assistant", icon: Bot }} />

          {/* Learning Section */}
          <div className="pt-4">
            <SectionHeader title="Learning" section="learning" icon={BookOpen} />
            {(isCollapsed || expandedSections.includes("learning")) && (
              <div className="space-y-1 mt-1">
                {learningItems.map((item) => (
                  <NavLink key={item.href} item={item} isNested />
                ))}
              </div>
            )}
          </div>

          {/* Jobs Section */}
          <div className="pt-2">
            <SectionHeader title="Jobs" section="jobs" icon={Briefcase} />
            {(isCollapsed || expandedSections.includes("jobs")) && (
              <div className="space-y-1 mt-1">
                {jobsItems.map((item) => (
                  <NavLink key={item.href} item={item} isNested />
                ))}
              </div>
            )}
          </div>

          {/* Community Section */}
          <div className="pt-2">
            <SectionHeader title="Community" section="community" icon={Users} />
            {(isCollapsed || expandedSections.includes("community")) && (
              <div className="space-y-1 mt-1">
                {communityItems.map((item) => (
                  <NavLink key={item.href} item={item} isNested />
                ))}
              </div>
            )}
          </div>

          {/* My Progress */}
          <div className="pt-2">
            <NavLink
              item={{ title: "My Progress", href: "/progress", icon: BarChart3 }}
            />
          </div>
        </nav>

        {/* Footer */}
        <div className="p-2 border-t border-sidebar-border space-y-1">
          <NavLink item={{ title: "Settings", href: "/settings", icon: Settings }} />

          {/* Theme Toggle */}
          {isCollapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors w-full"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10}>
                Toggle Theme
              </TooltipContent>
            </Tooltip>
          ) : (
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors w-full"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span className="text-sm">Toggle Theme</span>
            </button>
          )}

          {/* Logout */}
          {isCollapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors w-full"
                  aria-label="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10}>
                Logout
              </TooltipContent>
            </Tooltip>
          ) : (
            <button
              type="button"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors w-full"
              aria-label="Logout"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          )}
        </div>
      </aside>
    </TooltipProvider>
  )
}
