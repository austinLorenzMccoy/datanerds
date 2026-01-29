"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Bot,
  User,
  Send,
  Plus,
  Copy,
  Check,
  Sparkles,
  Clock,
  ChevronDown,
  Zap,
} from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatSession {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
}

const quickPrompts = [
  "Explain gradient descent",
  "Debug my Python code",
  "SQL query help",
  "ML algorithm comparison",
  "Data cleaning tips",
  "Pandas vs NumPy",
]

const sampleResponse = `Great question! Gradient descent is an optimization algorithm used in machine learning to minimize a function by iteratively moving towards the minimum value.

**How it works:**
1. Start with random initial values for the parameters
2. Calculate the gradient (slope) of the loss function
3. Update parameters in the opposite direction of the gradient
4. Repeat until convergence

**Key concepts:**
- **Learning rate**: Controls the step size
- **Loss function**: Measures how wrong predictions are
- **Convergence**: When the algorithm reaches the minimum

\`\`\`python
# Simple gradient descent example
def gradient_descent(x, learning_rate=0.01, iterations=1000):
    for _ in range(iterations):
        gradient = 2 * x  # derivative of x^2
        x = x - learning_rate * gradient
    return x
\`\`\`

Would you like me to explain any specific part in more detail?`

export default function AIAssistantPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "Python loops help",
      messages: [],
      createdAt: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      title: "SQL JOIN explanation",
      messages: [],
      createdAt: new Date(Date.now() - 7200000),
    },
  ])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showHistory, setShowHistory] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: sampleResponse,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
    inputRef.current?.focus()
  }

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const startNewChat = () => {
    setCurrentSession(null)
    setMessages([])
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-4">
      {/* Chat History Sidebar */}
      <Card
        className={`bg-card border-border transition-all duration-300 ${
          showHistory ? "w-72" : "w-0 overflow-hidden border-0"
        } hidden lg:block`}
      >
        <div className="p-4 border-b border-border">
          <Button onClick={startNewChat} className="w-full gradient-hero text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>
        <ScrollArea className="h-[calc(100%-5rem)]">
          <div className="p-2 space-y-1">
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
              <Clock className="w-3 h-3" />
              Today
            </div>
            {sessions.map((session) => (
              <button
                key={session.id}
                type="button"
                onClick={() => setCurrentSession(session)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  currentSession?.id === session.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {session.title}
              </button>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* Main Chat Area */}
      <Card className="flex-1 flex flex-col bg-card border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ai-pink/20 to-accent/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-ai-pink" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground flex items-center gap-2">
                AI Study Assistant
                <Sparkles className="w-4 h-4 text-ai-pink" />
              </h1>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Powered by Groq - Lightning Fast
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setShowHistory(!showHistory)}
            aria-label="Toggle history"
          >
            <ChevronDown className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ai-pink/20 to-accent/20 flex items-center justify-center mb-6">
                <Bot className="w-10 h-10 text-ai-pink" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                How can I help you today?
              </h2>
              <p className="text-muted-foreground max-w-md mb-8">
                Ask me anything about data science, machine learning, Python, SQL, 
                or any other topic you're learning.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-lg">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleQuickPrompt(prompt)}
                    className="px-4 py-2 rounded-lg bg-secondary text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ai-pink/20 to-accent/20 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-ai-pink" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-foreground rounded-bl-sm"
                    }`}
                  >
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      {message.content.split("\n").map((line, i) => (
                        <p key={`${message.id}-line-${i}`} className="mb-2 last:mb-0">
                          {line.startsWith("```") ? (
                            <code className="block bg-background/50 p-2 rounded text-xs overflow-x-auto">
                              {line.replace(/```python|```/g, "")}
                            </code>
                          ) : line.startsWith("**") ? (
                            <strong>{line.replace(/\*\*/g, "")}</strong>
                          ) : line.startsWith("- ") ? (
                            <span className="block ml-2">{line}</span>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/20">
                      <span className="text-xs opacity-60">
                        {formatTime(message.timestamp)}
                      </span>
                      {message.role === "assistant" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs"
                          onClick={() => handleCopy(message.content, message.id)}
                        >
                          {copiedId === message.id ? (
                            <>
                              <Check className="w-3 h-3 mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 mr-1" />
                              Copy
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ai-pink/20 to-accent/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-ai-pink" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about data science..."
              className="flex-1 bg-secondary border-border"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="gradient-hero text-primary-foreground"
            >
              <Send className="w-4 h-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-2">
            AI can make mistakes. Verify important information.
          </p>
        </div>
      </Card>
    </div>
  )
}
