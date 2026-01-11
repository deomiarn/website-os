"use client"

import { useEffect, useState } from "react"
import { RefreshCw, Settings } from "lucide-react"
import { Sidebar } from "@/components/Sidebar"
import { StepDetail } from "@/components/StepDetail"
import { GuidancePanel } from "@/components/GuidancePanel"
import { InspirationsPreview } from "@/components/previews/InspirationsPreview"
import { DesignTokensPreview } from "@/components/previews/DesignTokensPreview"

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

interface GSDStatus {
  enabled: boolean
  projectExists: boolean
  roadmapExists: boolean
  stateExists: boolean
}

interface ProjectInfo {
  name: string
  type: string
  pagesCount: number
}

interface WorkflowState {
  currentStep: number
  steps: WorkflowStep[]
  gsd?: GSDStatus
  project?: ProjectInfo | null
}

export default function Dashboard() {
  const [workflow, setWorkflow] = useState<WorkflowState | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  const loadWorkflow = async () => {
    try {
      const res = await fetch("/api/workflow")
      const data = await res.json()
      setWorkflow(data)
      // Auto-select current step if nothing selected
      if (data && selectedStep === null) {
        setSelectedStep(data.currentStep)
      }
    } catch (error) {
      console.error("Failed to load workflow:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWorkflow()
    const interval = setInterval(loadWorkflow, 3000)
    return () => clearInterval(interval)
  }, [])

  // Update selected step when current step changes
  useEffect(() => {
    if (workflow && workflow.currentStep !== selectedStep) {
      setSelectedStep(workflow.currentStep)
    }
  }, [workflow?.currentStep])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="w-8 h-8 animate-spin text-zinc-500" />
          <span className="text-zinc-500 text-sm">Dashboard laden...</span>
        </div>
      </div>
    )
  }

  if (!workflow) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-white mb-4">WebDesign-OS</h1>
          <p className="text-zinc-400 mb-6">
            Workflow nicht gefunden. Starte mit dem ersten Schritt:
          </p>
          <code className="bg-zinc-800 text-blue-400 px-4 py-2 rounded-lg font-mono text-sm">
            /init-project
          </code>
          <p className="text-zinc-600 text-sm mt-4">
            Oder nutze <code className="text-zinc-500">/gsd:new-project</code> für tiefere Projekt-Analyse
          </p>
        </div>
      </div>
    )
  }

  const currentStepData = workflow.steps.find(s => s.id === selectedStep) || workflow.steps[0]
  const gsd = workflow.gsd || { enabled: false, projectExists: false, roadmapExists: false, stateExists: false }

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Sidebar */}
      <Sidebar
        steps={workflow.steps}
        currentStep={workflow.currentStep}
        gsd={gsd}
        onStepClick={setSelectedStep}
        selectedStep={selectedStep || workflow.currentStep}
      />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {workflow.project?.name || "WebDesign-OS"}
            </h1>
            <p className="text-zinc-500 text-sm mt-1">
              {workflow.project?.type || "Website"} Projekt
              {workflow.project?.pagesCount ? ` - ${workflow.project.pagesCount} Seiten` : ""}
            </p>
          </div>
          <button className="p-2 rounded-lg bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </header>

        {/* Step Detail */}
        <div className="mb-8">
          <StepDetail
            step={currentStepData}
            isActive={workflow.currentStep === currentStepData.id}
          />
        </div>

        {/* Guidance Panel */}
        <div className="mb-8">
          <GuidancePanel stepId={currentStepData.id} status={currentStepData.status} />
        </div>

        {/* Preview Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Show Inspirations Preview for steps 1-4 */}
          {currentStepData.id <= 4 && (
            <InspirationsPreview />
          )}

          {/* Show Design Tokens Preview for steps 3-9 */}
          {currentStepData.id >= 3 && (
            <DesignTokensPreview />
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-zinc-800">
          <div className="flex items-center justify-between text-xs text-zinc-600">
            <span>Dashboard aktualisiert automatisch alle 3 Sekunden</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Verbunden
            </span>
          </div>
        </footer>
      </main>
    </div>
  )
}
