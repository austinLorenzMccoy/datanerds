'use client';

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bookmark, MapPin, DollarSign, Clock } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Junior Data Analyst",
    company: "Tech Startup Inc.",
    logo: "TS",
    location: "Remote",
    salary: "$60k-80k",
    posted: "2h ago",
    skills: ["Python", "SQL", "Tableau"],
    isNew: true,
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Analytics Corp",
    logo: "AC",
    location: "New York, NY",
    salary: "$90k-120k",
    posted: "5h ago",
    skills: ["Python", "ML", "TensorFlow"],
    isNew: true,
  },
  {
    id: 3,
    title: "ML Engineer",
    company: "AI Solutions",
    logo: "AI",
    location: "San Francisco, CA",
    salary: "$120k-150k",
    posted: "1d ago",
    skills: ["Python", "PyTorch", "AWS"],
    isNew: false,
  },
]

export function LatestJobs() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Latest Jobs</CardTitle>
        <Button variant="ghost" size="sm" asChild className="text-primary">
          <Link href="/jobs">
            View All Jobs
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            className="block p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm shrink-0">
                  {job.logo}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground truncate">
                      {job.title}
                    </h3>
                    {job.isNew && (
                      <Badge className="bg-data-green/10 text-data-green border-data-green/20 text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {job.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.posted}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault()
                  // Handle bookmark
                }}
                aria-label="Bookmark job"
              >
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
