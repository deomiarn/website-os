"use client"

import { useEffect, useState } from "react"
import { Check, Circle, ArrowRight, Pencil, RefreshCw, ChevronDown, ChevronUp, FileText, Copy, CheckCheck } from "lucide-react"

interface PageProgress {
  name: string
  status: "pending" | "in_progress" | "completed"
  sections?: number
  details?: string
}

interface WorkflowStep {
  id: number
  name: string
  command: string
  status: "pending" | "locked" | "in_progress" | "completed"
  summary: string | null
  completedAt: string | null
  pages?: PageProgress[]
  optional?: boolean
}

interface WorkflowState {
  currentStep: number
  steps: WorkflowStep[]
}

export default function Dashboard() {
  const [workflow, setWorkflow] = useState<WorkflowState | null>(null)
  const [loading, setLoading] = useState(true)

  const loadWorkflow = async () => {
    try {
      const res = await fetch("/api/workflow")
      const data = await res.json()
      setWorkflow(data)
    } catch (error) {
      console.error("Failed to load workflow:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWorkflow()
    const interval = setInterval(loadWorkflow, 2000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!workflow) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">WebDesign-OS</h1>
          <p className="text-muted-foreground">
            Workflow nicht gefunden. Führe <code className="bg-muted px-2 py-1 rounded">/init-project</code> aus.
          </p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-2">WebDesign-OS</h1>
          <p className="text-muted-foreground">Workflow Dashboard</p>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-4">
          {workflow.steps.map((step, index) => (
            <WorkflowStepCard
              key={step.id}
              step={step}
              isActive={workflow.currentStep === step.id}
              isLast={index === workflow.steps.length - 1}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Führe die Commands in Claude Code CLI aus</p>
          <p className="mt-1">Dashboard aktualisiert automatisch</p>
        </div>
      </div>
    </main>
  )
}

function WorkflowStepCard({
  step,
  isActive,
  isLast,
}: {
  step: WorkflowStep
  isActive: boolean
  isLast: boolean
}) {
  const [expanded, setExpanded] = useState(isActive)
  const hasPages = step.pages && step.pages.length > 0

  const getStatusIcon = () => {
    switch (step.status) {
      case "completed":
        return <Check className="w-5 h-5 text-success" />
      case "in_progress":
        return <RefreshCw className="w-5 h-5 text-primary animate-spin" />
      case "locked":
        return <Circle className="w-5 h-5 text-muted-foreground opacity-50" />
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />
    }
  }

  const getStatusBorder = () => {
    if (step.status === "completed") return "border-success/50"
    if (isActive) return "border-primary"
    return "border-border"
  }

  const getPageProgress = () => {
    if (!step.pages || step.pages.length === 0) return null
    const completed = step.pages.filter(p => p.status === "completed").length
    const total = step.pages.length
    return { completed, total, percentage: Math.round((completed / total) * 100) }
  }

  const pageProgress = getPageProgress()

  return (
    <div className="relative">
      {/* Connector Line */}
      {!isLast && (
        <div
          className={`absolute left-6 top-14 w-0.5 h-8 ${
            step.status === "completed" ? "bg-success/50" : "bg-border"
          }`}
        />
      )}

      {/* Card */}
      <div
        className={`border rounded-xl p-4 transition-all ${getStatusBorder()} ${
          step.status === "locked" ? "opacity-50" : ""
        }`}
      >
        <div className="flex items-start gap-4">
          {/* Status Icon */}
          <div className="mt-1">{getStatusIcon()}</div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">
                  Step {step.id}: {step.name}
                </h3>
                {step.optional && (
                  <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">
                    Optional
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {step.status === "completed" && (
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Pencil className="w-4 h-4" />
                  </button>
                )}
                {hasPages && step.status !== "locked" && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>

            {/* Page Progress Bar */}
            {pageProgress && step.status !== "locked" && (
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>{pageProgress.completed}/{pageProgress.total} Seiten</span>
                  <span>{pageProgress.percentage}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${pageProgress.percentage}%` }}
                  />
                </div>
              </div>
            )}

            {step.status === "completed" && step.summary ? (
              <p className="text-sm text-muted-foreground">{step.summary}</p>
            ) : step.status !== "locked" ? (
              <div className="flex items-center gap-2 mt-2">
                <CopyableCommand command={step.command} />
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  In CLI ausführen
                </span>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Vorheriger Schritt muss abgeschlossen werden
              </p>
            )}

            {/* Expanded Pages List */}
            {expanded && hasPages && step.status !== "locked" && (
              <div className="mt-4 space-y-2 border-t pt-4">
                {step.pages!.map((page, index) => (
                  <PageProgressItem key={index} page={page} stepCommand={step.command} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CopyableCommand({
  command,
  size = "default"
}: {
  command: string
  size?: "default" | "sm"
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const isSmall = size === "sm"

  return (
    <div className="flex items-center gap-2">
      <code className={`bg-muted px-2 py-1 rounded font-mono ${isSmall ? "text-xs" : "text-sm"}`}>
        {command}
      </code>
      <button
        onClick={handleCopy}
        className={`text-muted-foreground hover:text-foreground transition-colors ${isSmall ? "p-1" : "p-1.5"}`}
        title="Command kopieren"
      >
        {copied ? (
          <CheckCheck className={`text-success ${isSmall ? "w-3 h-3" : "w-4 h-4"}`} />
        ) : (
          <Copy className={isSmall ? "w-3 h-3" : "w-4 h-4"} />
        )}
      </button>
    </div>
  )
}

function PageProgressItem({
  page,
  stepCommand
}: {
  page: PageProgress
  stepCommand: string
}) {
  const getPageStatusIcon = () => {
    switch (page.status) {
      case "completed":
        return <Check className="w-4 h-4 text-success" />
      case "in_progress":
        return <RefreshCw className="w-4 h-4 text-primary animate-spin" />
      default:
        return <Circle className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getPageStatusClass = () => {
    switch (page.status) {
      case "completed":
        return "bg-success/10 border-success/30"
      case "in_progress":
        return "bg-primary/10 border-primary/30"
      default:
        return "bg-muted/50 border-border"
    }
  }

  return (
    <div className={`flex items-center gap-3 p-2 rounded-lg border ${getPageStatusClass()}`}>
      {getPageStatusIcon()}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <FileText className="w-3 h-3 text-muted-foreground" />
          <span className="font-medium text-sm capitalize">{page.name}</span>
          {page.sections !== undefined && page.sections > 0 && (
            <span className="text-xs text-muted-foreground">
              {page.sections} Sections
            </span>
          )}
        </div>
        {page.details && (
          <p className="text-xs text-muted-foreground mt-0.5">{page.details}</p>
        )}
      </div>
      {page.status === "pending" && (
        <CopyableCommand command={`${stepCommand} ${page.name}`} size="sm" />
      )}
    </div>
  )
}
