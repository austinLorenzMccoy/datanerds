"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Search,
  MapPin,
  DollarSign,
  Clock,
  Bookmark,
  BookmarkCheck,
  Building2,
  ExternalLink,
  Filter,
} from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Junior Data Analyst",
    company: "TechCorp Inc.",
    logo: "TC",
    location: "Remote",
    salary: "$60k-$80k",
    type: "Full-time",
    experience: "Entry Level",
    posted: "2 hours ago",
    description:
      "We're looking for a talented junior data analyst to join our growing team. You'll work with large datasets and create actionable insights.",
    skills: ["Python", "SQL", "Tableau", "Statistics"],
    isNew: true,
    isSaved: false,
    applicants: 12,
    views: 234,
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "AI Analytics Corp",
    logo: "AI",
    location: "New York, NY",
    salary: "$90k-$120k",
    type: "Full-time",
    experience: "Mid Level",
    posted: "5 hours ago",
    description:
      "Join our data science team to build ML models that power our recommendation engine. Strong Python and ML experience required.",
    skills: ["Python", "Machine Learning", "TensorFlow", "AWS"],
    isNew: true,
    isSaved: true,
    applicants: 34,
    views: 567,
  },
  {
    id: 3,
    title: "ML Engineer",
    company: "DeepMind Labs",
    logo: "DM",
    location: "San Francisco, CA",
    salary: "$120k-$150k",
    type: "Full-time",
    experience: "Senior",
    posted: "1 day ago",
    description:
      "Build and deploy production ML systems at scale. Experience with PyTorch and cloud infrastructure required.",
    skills: ["Python", "PyTorch", "Kubernetes", "GCP"],
    isNew: false,
    isSaved: false,
    applicants: 56,
    views: 890,
  },
  {
    id: 4,
    title: "Data Engineering Intern",
    company: "DataFlow Startup",
    logo: "DF",
    location: "Remote",
    salary: "$25/hr",
    type: "Internship",
    experience: "Entry Level",
    posted: "2 days ago",
    description:
      "Summer internship opportunity to work on data pipelines and ETL processes. Great learning opportunity!",
    skills: ["Python", "SQL", "Apache Spark", "Airflow"],
    isNew: false,
    isSaved: false,
    applicants: 78,
    views: 1234,
  },
  {
    id: 5,
    title: "Business Intelligence Analyst",
    company: "Enterprise Solutions",
    logo: "ES",
    location: "Chicago, IL",
    salary: "$70k-$90k",
    type: "Full-time",
    experience: "Mid Level",
    posted: "3 days ago",
    description:
      "Create dashboards and reports for executive leadership. Strong SQL and visualization skills required.",
    skills: ["SQL", "Tableau", "Power BI", "Excel"],
    isNew: false,
    isSaved: true,
    applicants: 45,
    views: 678,
  },
  {
    id: 6,
    title: "Blockchain Data Analyst",
    company: "CryptoMetrics",
    logo: "CM",
    location: "Remote",
    salary: "$80k-$110k",
    type: "Full-time",
    experience: "Mid Level",
    posted: "4 days ago",
    description:
      "Analyze on-chain data to provide insights for DeFi protocols. Web3 experience preferred.",
    skills: ["Python", "SQL", "Web3", "DeFi"],
    isNew: false,
    isSaved: false,
    applicants: 23,
    views: 456,
  },
]

const skillFilters = ["Python", "SQL", "Machine Learning", "Tableau", "Web3", "AWS"]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [savedJobs, setSavedJobs] = useState<number[]>(
    jobs.filter((j) => j.isSaved).map((j) => j.id)
  )
  const [typeFilter, setTypeFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const toggleSave = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    )
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) => job.skills.includes(skill))
    const matchesType = typeFilter === "all" || job.type === typeFilter
    const matchesLocation =
      locationFilter === "all" ||
      (locationFilter === "remote" && job.location === "Remote") ||
      (locationFilter === "onsite" && job.location !== "Remote")
    return matchesSearch && matchesSkills && matchesType && matchesLocation
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Job Opportunities</h1>
        <p className="text-muted-foreground">
          Find your next data science role from {jobs.length}+ curated positions
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search jobs, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary border-border h-12"
          />
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filters:</span>
          </div>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-36 bg-transparent">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
            </SelectContent>
          </Select>

          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-36 bg-transparent">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Anywhere</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="onsite">On-site</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Skill Filters */}
        <div className="flex flex-wrap gap-2">
          {skillFilters.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSkill(skill)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedSkills.includes(skill)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredJobs.length} jobs found
        </p>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            className="bg-card border-border hover:border-primary/30 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                  {job.logo}
                </div>

                {/* Job Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-foreground">
                          {job.title}
                        </h3>
                        {job.isNew && (
                          <Badge className="bg-data-green/10 text-data-green border-data-green/20">
                            New
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleSave(job.id)}
                      className={
                        savedJobs.includes(job.id)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }
                      aria-label={savedJobs.includes(job.id) ? "Unsave job" : "Save job"}
                    >
                      {savedJobs.includes(job.id) ? (
                        <BookmarkCheck className="w-5 h-5" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </Button>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </span>
                    <Badge variant="secondary" className="bg-secondary text-muted-foreground">
                      {job.type}
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary text-muted-foreground">
                      {job.experience}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{job.applicants} applicants</span>
                      <span>{job.views} views</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="bg-transparent">
                        <Link href={`/jobs/${job.id}`}>
                          View Details
                        </Link>
                      </Button>
                      <Button size="sm" className="gradient-hero text-primary-foreground">
                        Quick Apply
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      {filteredJobs.length > 0 && (
        <div className="text-center">
          <Button variant="outline" size="lg" className="bg-transparent">
            Load More Jobs
          </Button>
        </div>
      )}
    </div>
  )
}
