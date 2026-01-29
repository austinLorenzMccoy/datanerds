"use client";

import { useState } from "react";
import {
  Trophy,
  Users,
  MessageSquare,
  Star,
  TrendingUp,
  Award,
  Crown,
  Medal,
  Target,
  Calendar,
  ChevronRight,
  Flame,
  Zap,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const leaderboardData = [
  {
    rank: 1,
    name: "Sarah Chen",
    avatar: "/api/placeholder/40/40",
    xp: 48750,
    streak: 67,
    badges: 24,
    level: 42,
    change: "up",
  },
  {
    rank: 2,
    name: "Alex Kumar",
    avatar: "/api/placeholder/40/40",
    xp: 46200,
    streak: 45,
    badges: 21,
    level: 40,
    change: "up",
  },
  {
    rank: 3,
    name: "Maria Garcia",
    avatar: "/api/placeholder/40/40",
    xp: 44100,
    streak: 52,
    badges: 19,
    level: 38,
    change: "down",
  },
  {
    rank: 4,
    name: "James Wilson",
    avatar: "/api/placeholder/40/40",
    xp: 42500,
    streak: 38,
    badges: 18,
    level: 37,
    change: "same",
  },
  {
    rank: 5,
    name: "Emma Thompson",
    avatar: "/api/placeholder/40/40",
    xp: 40800,
    streak: 29,
    badges: 17,
    level: 35,
    change: "up",
  },
  {
    rank: 6,
    name: "David Lee",
    avatar: "/api/placeholder/40/40",
    xp: 38900,
    streak: 41,
    badges: 16,
    level: 34,
    change: "down",
  },
  {
    rank: 7,
    name: "Lisa Park",
    avatar: "/api/placeholder/40/40",
    xp: 37200,
    streak: 33,
    badges: 15,
    level: 32,
    change: "up",
  },
  {
    rank: 8,
    name: "Michael Brown",
    avatar: "/api/placeholder/40/40",
    xp: 35600,
    streak: 27,
    badges: 14,
    level: 31,
    change: "same",
  },
];

const mentors = [
  {
    name: "Dr. Emily Watson",
    role: "Senior Data Scientist @ Google",
    avatar: "/api/placeholder/60/60",
    specialties: ["Machine Learning", "Deep Learning"],
    rating: 4.9,
    sessions: 156,
    available: true,
  },
  {
    name: "Prof. John Mitchell",
    role: "AI Research Lead @ MIT",
    avatar: "/api/placeholder/60/60",
    specialties: ["NLP", "Transformers"],
    rating: 4.8,
    sessions: 98,
    available: true,
  },
  {
    name: "Angela Rodriguez",
    role: "Data Engineering Manager @ Netflix",
    avatar: "/api/placeholder/60/60",
    specialties: ["Data Engineering", "Big Data"],
    rating: 4.9,
    sessions: 134,
    available: false,
  },
  {
    name: "Chris Taylor",
    role: "ML Engineer @ OpenAI",
    avatar: "/api/placeholder/60/60",
    specialties: ["LLMs", "AI Safety"],
    rating: 5.0,
    sessions: 87,
    available: true,
  },
];

const upcomingEvents = [
  {
    title: "Weekly Python Challenge",
    date: "Today, 6:00 PM",
    participants: 234,
    type: "challenge",
  },
  {
    title: "ML Office Hours with Dr. Watson",
    date: "Tomorrow, 2:00 PM",
    participants: 89,
    type: "mentorship",
  },
  {
    title: "Data Viz Competition",
    date: "Saturday, 10:00 AM",
    participants: 156,
    type: "competition",
  },
  {
    title: "SQL Study Group",
    date: "Sunday, 4:00 PM",
    participants: 45,
    type: "study",
  },
];

const achievements = [
  { name: "First Steps", icon: Target, description: "Complete your first lesson", unlocked: true },
  { name: "Week Warrior", icon: Flame, description: "7-day learning streak", unlocked: true },
  { name: "Code Master", icon: Zap, description: "Solve 50 coding challenges", unlocked: true },
  { name: "Knowledge Seeker", icon: BookOpen, description: "Complete 10 courses", unlocked: false },
  { name: "Top 10", icon: Trophy, description: "Reach top 10 on leaderboard", unlocked: false },
  { name: "Mentor Star", icon: Star, description: "Help 25 other learners", unlocked: false },
];

function getRankIcon(rank: number) {
  if (rank === 1) return <Crown className="h-5 w-5 text-yellow-400" />;
  if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
  if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
  return <span className="text-muted-foreground font-mono">{rank}</span>;
}

export default function CommunityPage() {
  const [leaderboardPeriod, setLeaderboardPeriod] = useState("weekly");

  // Current user stats (for context)
  const currentUser = {
    rank: 127,
    xp: 12450,
    streak: 14,
    level: 18,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground mt-1">
            Connect, compete, and learn together
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Users className="h-4 w-4" />
            Find Study Partners
          </Button>
          <Button className="gap-2 bg-primary">
            <MessageSquare className="h-4 w-4" />
            Join Discord
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-500/20">
                <Trophy className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">#{currentUser.rank}</p>
                <p className="text-sm text-muted-foreground">Your Rank</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{currentUser.xp.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total XP</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Flame className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{currentUser.streak}</p>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Lv. {currentUser.level}</p>
                <p className="text-sm text-muted-foreground">Current Level</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaderboard */}
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  Leaderboard
                </CardTitle>
                <Tabs value={leaderboardPeriod} onValueChange={setLeaderboardPeriod}>
                  <TabsList className="bg-secondary">
                    <TabsTrigger value="weekly" className="text-xs">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly" className="text-xs">Monthly</TabsTrigger>
                    <TabsTrigger value="alltime" className="text-xs">All Time</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboardData.map((user) => (
                  <div
                    key={user.rank}
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-lg transition-colors",
                      user.rank <= 3
                        ? "bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20"
                        : "hover:bg-secondary"
                    )}
                  >
                    <div className="w-8 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    <Avatar className="h-10 w-10 border-2 border-border">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-secondary text-foreground">
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground truncate">{user.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          Lv. {user.level}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Flame className="h-3 w-3 text-orange-400" />
                          {user.streak} days
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-accent" />
                          {user.badges} badges
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-foreground">{user.xp.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">XP</div>
                    </div>
                    <div className="w-6">
                      {user.change === "up" && (
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      )}
                      {user.change === "down" && (
                        <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-muted-foreground">
                View Full Leaderboard
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-foreground text-lg">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                >
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full mt-2",
                      event.type === "challenge" && "bg-orange-400",
                      event.type === "mentorship" && "bg-green-400",
                      event.type === "competition" && "bg-yellow-400",
                      event.type === "study" && "bg-blue-400"
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {event.participants} participants
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-muted-foreground text-sm">
                View All Events
              </Button>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-foreground text-lg">
                <Award className="h-5 w-5 text-accent" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col items-center p-3 rounded-lg text-center transition-all",
                      achievement.unlocked
                        ? "bg-accent/20 border border-accent/30"
                        : "bg-secondary/50 opacity-50"
                    )}
                    title={achievement.description}
                  >
                    <achievement.icon
                      className={cn(
                        "h-6 w-6 mb-1",
                        achievement.unlocked ? "text-accent" : "text-muted-foreground"
                      )}
                    />
                    <span className="text-xs font-medium text-foreground truncate w-full">
                      {achievement.name}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-muted-foreground text-sm">
                View All Badges
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mentorship Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Users className="h-5 w-5 text-green-400" />
              Featured Mentors
            </CardTitle>
            <Button variant="outline" size="sm">
              Become a Mentor
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentors.map((mentor, index) => (
              <Card
                key={index}
                className="bg-secondary/50 border-border hover:border-primary/50 transition-all cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <div className="relative inline-block mb-3">
                    <Avatar className="h-16 w-16 border-2 border-border">
                      <AvatarImage src={mentor.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-secondary text-foreground">
                        {mentor.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    {mentor.available && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-card" />
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground">{mentor.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                    {mentor.role}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {mentor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {mentor.rating}
                    </span>
                    <span>{mentor.sessions} sessions</span>
                  </div>
                  <Button
                    className="w-full mt-3"
                    variant={mentor.available ? "default" : "secondary"}
                    disabled={!mentor.available}
                    size="sm"
                  >
                    {mentor.available ? "Book Session" : "Unavailable"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
