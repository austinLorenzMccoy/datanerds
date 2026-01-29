"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Lock,
  Check,
  Clock,
  Star,
  BookOpen,
  Code,
  Trophy,
  Zap,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Wallet,
  BarChart3,
  Database,
  Shield,
  TrendingUp,
  Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const trackInfo = {
  title: "Web3 & Blockchain Analytics",
  description:
    "Master blockchain data analysis, DeFi metrics, and on-chain analytics. Learn to extract insights from Ethereum, Bitcoin, and other chains.",
  difficulty: "Advanced",
  duration: "8 weeks",
  lessons: 32,
  projects: 6,
  rating: 4.9,
  students: 2847,
  icon: Wallet,
  color: "from-cyan-500 to-blue-600",
  prerequisites: ["Python Fundamentals", "SQL & Databases", "Statistics"],
};

const modules = [
  {
    id: 1,
    title: "Introduction to Blockchain Data",
    description: "Understand blockchain architecture and data structures",
    duration: "4 hours",
    lessons: [
      { title: "What is Blockchain Data?", duration: "15 min", completed: true },
      { title: "Blockchain Architecture Overview", duration: "20 min", completed: true },
      { title: "Understanding Transactions & Blocks", duration: "25 min", completed: true },
      { title: "Quiz: Blockchain Fundamentals", duration: "10 min", completed: false },
    ],
    unlocked: true,
    progress: 75,
  },
  {
    id: 2,
    title: "Ethereum Data Analysis",
    description: "Deep dive into Ethereum transactions, smart contracts, and gas analysis",
    duration: "6 hours",
    lessons: [
      { title: "Ethereum Data Model", duration: "30 min", completed: false },
      { title: "Analyzing Smart Contract Interactions", duration: "45 min", completed: false },
      { title: "Gas Analysis & Optimization", duration: "35 min", completed: false },
      { title: "ERC-20 & ERC-721 Token Analytics", duration: "40 min", completed: false },
      { title: "Project: Whale Wallet Tracker", duration: "90 min", completed: false },
    ],
    unlocked: true,
    progress: 0,
  },
  {
    id: 3,
    title: "DeFi Analytics",
    description: "Analyze decentralized finance protocols and metrics",
    duration: "8 hours",
    lessons: [
      { title: "Introduction to DeFi Protocols", duration: "25 min", completed: false },
      { title: "Liquidity Pool Analysis", duration: "40 min", completed: false },
      { title: "Yield Farming Metrics", duration: "35 min", completed: false },
      { title: "DEX Volume & Slippage Analysis", duration: "45 min", completed: false },
      { title: "Lending Protocol Metrics", duration: "40 min", completed: false },
      { title: "Project: DeFi Dashboard", duration: "120 min", completed: false },
    ],
    unlocked: false,
    progress: 0,
  },
  {
    id: 4,
    title: "NFT Market Analysis",
    description: "Track NFT collections, sales, and market trends",
    duration: "5 hours",
    lessons: [
      { title: "NFT Data Structures", duration: "20 min", completed: false },
      { title: "Collection Performance Metrics", duration: "30 min", completed: false },
      { title: "Wash Trading Detection", duration: "45 min", completed: false },
      { title: "Rarity Analysis & Floor Price Tracking", duration: "35 min", completed: false },
      { title: "Project: NFT Analytics Tool", duration: "90 min", completed: false },
    ],
    unlocked: false,
    progress: 0,
  },
  {
    id: 5,
    title: "On-Chain Data Sources",
    description: "Master blockchain data APIs and query tools",
    duration: "6 hours",
    lessons: [
      { title: "Introduction to Dune Analytics", duration: "30 min", completed: false },
      { title: "SQL for Blockchain Data", duration: "45 min", completed: false },
      { title: "The Graph Protocol", duration: "40 min", completed: false },
      { title: "Flipside Crypto & Footprint", duration: "35 min", completed: false },
      { title: "Building Custom Data Pipelines", duration: "50 min", completed: false },
      { title: "Project: Multi-Chain Dashboard", duration: "120 min", completed: false },
    ],
    unlocked: false,
    progress: 0,
  },
  {
    id: 6,
    title: "Capstone: Blockchain Intelligence Platform",
    description: "Build a complete blockchain analytics platform",
    duration: "10 hours",
    lessons: [
      { title: "Project Planning & Architecture", duration: "60 min", completed: false },
      { title: "Data Ingestion Pipeline", duration: "90 min", completed: false },
      { title: "Analytics Engine Development", duration: "120 min", completed: false },
      { title: "Dashboard & Visualization", duration: "90 min", completed: false },
      { title: "Deployment & Presentation", duration: "60 min", completed: false },
    ],
    unlocked: false,
    progress: 0,
  },
];

const skills = [
  { name: "Blockchain Fundamentals", level: 75 },
  { name: "Ethereum Analysis", level: 0 },
  { name: "DeFi Metrics", level: 0 },
  { name: "SQL for Web3", level: 0 },
  { name: "Data Visualization", level: 0 },
];

const tools = [
  { name: "Dune Analytics", icon: BarChart3 },
  { name: "The Graph", icon: Database },
  { name: "Etherscan API", icon: Shield },
  { name: "Python Web3", icon: Code },
];

export default function Web3TrackPage() {
  const [expandedModule, setExpandedModule] = useState<string>("1");

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.completed).length,
    0
  );
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link href="/tracks">
        <Button variant="ghost" className="gap-2 -ml-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Tracks
        </Button>
      </Link>

      {/* Track Header */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6 md:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <div>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-1">
                  {trackInfo.difficulty}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {trackInfo.title}
                </h1>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-2xl">
              {trackInfo.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {trackInfo.duration}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                {trackInfo.lessons} lessons
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Code className="h-4 w-4" />
                {trackInfo.projects} projects
              </span>
              <span className="flex items-center gap-1 text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                {trackInfo.rating}
              </span>
              <span className="text-muted-foreground">
                {trackInfo.students.toLocaleString()} students
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <Play className="h-4 w-4" />
                Continue Learning
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Trophy className="h-4 w-4" />
                View Certificate
              </Button>
            </div>
          </div>

          {/* Progress Card */}
          <Card className="lg:w-72 bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-5 space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground">{overallProgress}%</div>
                <p className="text-sm text-muted-foreground">Track Progress</p>
              </div>
              <Progress value={overallProgress} className="h-2" />
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-foreground">{completedLessons}</div>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">{totalLessons - completedLessons}</div>
                  <p className="text-xs text-muted-foreground">Remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Modules */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion
                type="single"
                collapsible
                value={expandedModule}
                onValueChange={setExpandedModule}
              >
                {modules.map((module) => (
                  <AccordionItem
                    key={module.id}
                    value={module.id.toString()}
                    className="border-border"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4 text-left w-full pr-4">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                            module.unlocked
                              ? module.progress === 100
                                ? "bg-green-500/20 text-green-400"
                                : "bg-primary/20 text-primary"
                              : "bg-secondary text-muted-foreground"
                          )}
                        >
                          {module.progress === 100 ? (
                            <Check className="h-5 w-5" />
                          ) : module.unlocked ? (
                            <span className="font-bold">{module.id}</span>
                          ) : (
                            <Lock className="h-4 w-4" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "font-semibold",
                                module.unlocked ? "text-foreground" : "text-muted-foreground"
                              )}
                            >
                              {module.title}
                            </span>
                            {!module.unlocked && (
                              <Badge variant="secondary" className="text-xs">
                                Locked
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                            <span>{module.lessons.length} lessons</span>
                            <span>{module.duration}</span>
                            {module.progress > 0 && module.progress < 100 && (
                              <span className="text-primary">{module.progress}% complete</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-14 space-y-2 pb-2">
                        <p className="text-sm text-muted-foreground mb-4">
                          {module.description}
                        </p>
                        {module.lessons.map((lesson, index) => (
                          <div
                            key={index}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-lg transition-colors",
                              module.unlocked
                                ? "hover:bg-secondary cursor-pointer"
                                : "opacity-50 cursor-not-allowed"
                            )}
                          >
                            <div
                              className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
                                lesson.completed
                                  ? "bg-green-500/20 text-green-400"
                                  : module.unlocked
                                  ? "bg-secondary text-muted-foreground"
                                  : "bg-secondary/50 text-muted-foreground/50"
                              )}
                            >
                              {lesson.completed ? (
                                <Check className="h-3 w-3" />
                              ) : (
                                <Play className="h-3 w-3" />
                              )}
                            </div>
                            <span
                              className={cn(
                                "flex-1 text-sm",
                                lesson.completed
                                  ? "text-muted-foreground line-through"
                                  : module.unlocked
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              )}
                            >
                              {lesson.title}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Skills Progress */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                Skills Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools You'll Learn */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Tools You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50"
                  >
                    <tool.icon className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm text-foreground">{tool.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Prerequisites</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {trackInfo.prerequisites.map((prereq) => (
                <div
                  key={prereq}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-foreground">{prereq}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Additional Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2 bg-transparent" asChild>
                <Link href="#">
                  <ExternalLink className="h-4 w-4" />
                  Ethereum Documentation
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 bg-transparent" asChild>
                <Link href="#">
                  <ExternalLink className="h-4 w-4" />
                  Dune Analytics Guide
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 bg-transparent" asChild>
                <Link href="#">
                  <ExternalLink className="h-4 w-4" />
                  Web3 Data Cheatsheet
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
