"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  FileText,
  Video,
  BookOpen,
  Code,
  Download,
  ExternalLink,
  Clock,
  Star,
  Grid3X3,
  List,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const resourceTypes = [
  { id: "all", label: "All Resources", icon: Grid3X3 },
  { id: "pdf", label: "PDFs & Guides", icon: FileText },
  { id: "video", label: "Video Tutorials", icon: Video },
  { id: "notebook", label: "Notebooks", icon: BookOpen },
  { id: "code", label: "Code Snippets", icon: Code },
];

const resources = [
  {
    id: 1,
    title: "Complete Python for Data Science Cheatsheet",
    type: "pdf",
    track: "Python",
    duration: "15 min read",
    rating: 4.9,
    downloads: 12453,
    thumbnail: "/api/placeholder/300/200",
    author: "DataNerds Team",
    tags: ["Python", "Pandas", "NumPy"],
    featured: true,
  },
  {
    id: 2,
    title: "Machine Learning Model Evaluation Guide",
    type: "video",
    track: "Machine Learning",
    duration: "45 min",
    rating: 4.8,
    downloads: 8234,
    thumbnail: "/api/placeholder/300/200",
    author: "Dr. Sarah Chen",
    tags: ["ML", "Evaluation", "Metrics"],
    featured: true,
  },
  {
    id: 3,
    title: "SQL Query Optimization Masterclass",
    type: "video",
    track: "SQL & Databases",
    duration: "1h 20min",
    rating: 4.7,
    downloads: 6789,
    thumbnail: "/api/placeholder/300/200",
    author: "James Rodriguez",
    tags: ["SQL", "Performance", "Indexing"],
    featured: false,
  },
  {
    id: 4,
    title: "Deep Learning with PyTorch Notebook",
    type: "notebook",
    track: "Deep Learning",
    duration: "2h hands-on",
    rating: 4.9,
    downloads: 9876,
    thumbnail: "/api/placeholder/300/200",
    author: "AI Research Lab",
    tags: ["PyTorch", "Neural Networks", "CNN"],
    featured: true,
  },
  {
    id: 5,
    title: "Data Visualization Best Practices",
    type: "pdf",
    track: "Visualization",
    duration: "20 min read",
    rating: 4.6,
    downloads: 5432,
    thumbnail: "/api/placeholder/300/200",
    author: "Design Team",
    tags: ["Matplotlib", "Seaborn", "Charts"],
    featured: false,
  },
  {
    id: 6,
    title: "Feature Engineering Techniques",
    type: "code",
    track: "Machine Learning",
    duration: "30 min",
    rating: 4.8,
    downloads: 7654,
    thumbnail: "/api/placeholder/300/200",
    author: "ML Engineers",
    tags: ["Features", "Preprocessing", "Sklearn"],
    featured: false,
  },
  {
    id: 7,
    title: "Time Series Forecasting Complete Guide",
    type: "notebook",
    track: "Statistics",
    duration: "1h 45min",
    rating: 4.7,
    downloads: 4321,
    thumbnail: "/api/placeholder/300/200",
    author: "Stats Team",
    tags: ["Time Series", "ARIMA", "Prophet"],
    featured: false,
  },
  {
    id: 8,
    title: "NLP Fundamentals Video Course",
    type: "video",
    track: "NLP",
    duration: "2h 30min",
    rating: 4.9,
    downloads: 11234,
    thumbnail: "/api/placeholder/300/200",
    author: "NLP Research",
    tags: ["NLP", "Transformers", "BERT"],
    featured: true,
  },
];

function getTypeIcon(type: string) {
  switch (type) {
    case "pdf":
      return FileText;
    case "video":
      return Video;
    case "notebook":
      return BookOpen;
    case "code":
      return Code;
    default:
      return FileText;
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "pdf":
      return "bg-red-500/20 text-red-400";
    case "video":
      return "bg-blue-500/20 text-blue-400";
    case "notebook":
      return "bg-green-500/20 text-green-400";
    case "code":
      return "bg-orange-500/20 text-orange-400";
    default:
      return "bg-gray-500/20 text-gray-400";
  }
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesType =
      selectedType === "all" || resource.type === selectedType;
    return matchesSearch && matchesType;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    if (sortBy === "popular") return b.downloads - a.downloads;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "newest") return b.id - a.id;
    return 0;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Resources</h1>
        <p className="text-muted-foreground mt-1">
          Explore our curated library of learning materials
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary border-border"
          />
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Sort: {sortBy === "popular" ? "Most Popular" : sortBy === "rating" ? "Highest Rated" : "Newest"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("popular")}>
                Most Popular
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("rating")}>
                Highest Rated
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("newest")}>
                Newest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2 transition-colors",
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "p-2 transition-colors",
                viewMode === "list"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Type Tabs */}
      <Tabs value={selectedType} onValueChange={setSelectedType}>
        <TabsList className="bg-secondary border border-border h-auto flex-wrap justify-start gap-1 p-1">
          {resourceTypes.map((type) => (
            <TabsTrigger
              key={type.id}
              value={type.id}
              className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <type.icon className="h-4 w-4" />
              {type.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Featured Section */}
      {selectedType === "all" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources
              .filter((r) => r.featured)
              .slice(0, 4)
              .map((resource) => {
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <Card
                    key={resource.id}
                    className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TypeIcon className="h-12 w-12 text-primary/50" />
                      </div>
                      <Badge className="absolute top-2 left-2 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(resource.type)}>
                          {resource.type.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {resource.track}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {resource.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {resource.downloads.toLocaleString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      )}

      {/* All Resources */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            {selectedType === "all" ? "All Resources" : resourceTypes.find(t => t.id === selectedType)?.label}
          </h2>
          <span className="text-sm text-muted-foreground">
            {sortedResources.length} resources
          </span>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedResources.map((resource) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <Card
                  key={resource.id}
                  className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-secondary to-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TypeIcon className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(resource.type)}>
                        {resource.type.toUpperCase()}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{resource.author}</p>
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {resource.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {resource.rating}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {sortedResources.map((resource) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <Card
                  key={resource.id}
                  className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all cursor-pointer"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-secondary to-muted flex items-center justify-center flex-shrink-0">
                      <TypeIcon className="h-8 w-8 text-muted-foreground/50" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={getTypeColor(resource.type)}>
                          {resource.type.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {resource.track}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{resource.author}</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {resource.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {resource.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {resource.downloads.toLocaleString()}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
