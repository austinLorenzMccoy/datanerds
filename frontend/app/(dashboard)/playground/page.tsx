"use client";

import { useState } from "react";
import {
  Play,
  RotateCcw,
  Download,
  Share2,
  Settings,
  Copy,
  Check,
  Terminal,
  FileCode,
  ChevronDown,
  Maximize2,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const languages = [
  { id: "python", label: "Python 3.11", icon: "🐍" },
  { id: "r", label: "R 4.3", icon: "📊" },
  { id: "sql", label: "SQL", icon: "🗃️" },
  { id: "julia", label: "Julia 1.9", icon: "🔮" },
];

const templates = [
  { id: "blank", label: "Blank" },
  { id: "pandas", label: "Pandas Starter" },
  { id: "matplotlib", label: "Matplotlib Plot" },
  { id: "sklearn", label: "Scikit-learn ML" },
  { id: "pytorch", label: "PyTorch Neural Net" },
];

const defaultCode = `# Welcome to DataNerds Playground! 🚀
# Start coding your data science projects here

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create sample data
np.random.seed(42)
data = {
    'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    'Sales': np.random.randint(100, 500, 6),
    'Customers': np.random.randint(50, 200, 6)
}

df = pd.DataFrame(data)
print("📊 Sales Data Preview:")
print(df.to_string(index=False))

# Calculate statistics
print("\\n📈 Average Sales: $" + str(df['Sales'].mean()) + ".2f")
print("📈 Total Customers: " + str(df['Customers'].sum()))

# Create a simple visualization
plt.figure(figsize=(10, 5))
plt.bar(df['Month'], df['Sales'], color='#3B82F6', alpha=0.8)
plt.xlabel('Month')
plt.ylabel('Sales ($)')
plt.title('Monthly Sales Performance')
plt.show()
`;

const sampleOutput = `📊 Sales Data Preview:
Month  Sales  Customers
  Jan    102        156
  Feb    435         67
  Mar    297        123
  Apr    188         89
  May    395        145
  Jun    222        178

📈 Average Sales: $273.17
📈 Total Customers: 758

[Figure displayed: Bar chart showing monthly sales]`;

export default function PlaygroundPage() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [language, setLanguage] = useState("python");
  const [copied, setCopied] = useState(false);
  const [editorTheme, setEditorTheme] = useState<"dark" | "light">("dark");
  const [activeTab, setActiveTab] = useState("output");

  const handleRun = () => {
    setIsRunning(true);
    setActiveTab("output");
    // Simulate code execution
    setTimeout(() => {
      setOutput(sampleOutput);
      setIsRunning(false);
    }, 1500);
  };

  const handleReset = () => {
    setCode(defaultCode);
    setOutput("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Code Playground</h1>
          </div>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Beta
          </Badge>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Language Selector */}
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[140px] bg-secondary border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.id} value={lang.id}>
                  <span className="flex items-center gap-2">
                    <span>{lang.icon}</span>
                    {lang.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Template Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 bg-transparent">
                Templates
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {templates.map((template) => (
                <DropdownMenuItem key={template.id}>
                  {template.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="h-6 w-px bg-border hidden sm:block" />

          {/* Action Buttons */}
          <Button
            onClick={handleRun}
            disabled={isRunning}
            className="gap-2 bg-green-600 hover:bg-green-700 text-white"
          >
            {isRunning ? (
              <>
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Running...
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Run Code
              </>
            )}
          </Button>

          <Button variant="outline" onClick={handleReset} className="gap-2 bg-transparent">
            <RotateCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Reset</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setEditorTheme(editorTheme === "dark" ? "light" : "dark")}>
                {editorTheme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" />
                    Light Theme
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" />
                    Dark Theme
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Download className="h-4 w-4 mr-2" />
                Download Code
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 className="h-4 w-4 mr-2" />
                Share Snippet
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Editor and Output */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 min-h-0">
        {/* Code Editor */}
        <div className="flex flex-col min-h-0 rounded-lg border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b border-border">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted-foreground ml-2">main.py</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 gap-1.5 text-xs"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Maximize2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={cn(
                "w-full h-full p-4 font-mono text-sm resize-none focus:outline-none",
                editorTheme === "dark"
                  ? "bg-[#1a1a2e] text-green-400"
                  : "bg-white text-gray-800"
              )}
              spellCheck={false}
              style={{ minHeight: "300px" }}
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="flex flex-col min-h-0 rounded-lg border border-border overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b border-border">
              <TabsList className="bg-transparent h-auto p-0 gap-4">
                <TabsTrigger
                  value="output"
                  className="bg-transparent px-0 pb-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  <Terminal className="h-4 w-4 mr-2" />
                  Output
                </TabsTrigger>
                <TabsTrigger
                  value="visualizations"
                  className="bg-transparent px-0 pb-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Visualizations
                </TabsTrigger>
              </TabsList>
              {output && (
                <Button variant="ghost" size="sm" onClick={() => setOutput("")} className="h-7 text-xs">
                  Clear
                </Button>
              )}
            </div>

            <TabsContent value="output" className="flex-1 m-0 overflow-auto">
              <div
                className={cn(
                  "h-full p-4 font-mono text-sm whitespace-pre-wrap",
                  editorTheme === "dark"
                    ? "bg-[#0d0d1a] text-gray-300"
                    : "bg-gray-50 text-gray-800"
                )}
                style={{ minHeight: "300px" }}
              >
                {isRunning ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-4 w-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Executing code...
                  </div>
                ) : output ? (
                  output
                ) : (
                  <span className="text-muted-foreground">
                    {"// Output will appear here after running your code"}
                  </span>
                )}
              </div>
            </TabsContent>

            <TabsContent value="visualizations" className="flex-1 m-0 overflow-auto">
              <div
                className={cn(
                  "h-full p-4 flex items-center justify-center",
                  editorTheme === "dark" ? "bg-[#0d0d1a]" : "bg-gray-50"
                )}
                style={{ minHeight: "300px" }}
              >
                {output ? (
                  <div className="w-full max-w-lg">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-border">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <p className="text-sm text-muted-foreground">
                          Bar Chart: Monthly Sales Performance
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📈</div>
                    <p>Run code with matplotlib/seaborn to see visualizations</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 mt-4 bg-secondary rounded-lg text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Python 3.11</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span>•</span>
          <span>{code.split("\n").length} lines</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Pre-installed: pandas, numpy, matplotlib, sklearn, pytorch</span>
          <Badge variant="outline" className="text-green-400 border-green-400/30">
            Ready
          </Badge>
        </div>
      </div>
    </div>
  );
}
