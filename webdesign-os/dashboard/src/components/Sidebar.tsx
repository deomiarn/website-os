"use client"

import { Check, Circle, RefreshCw, Layers, FileText, FolderOpen } from "lucide-react"
import { ProgressRing } from "./ProgressRing"

interface WorkflowStep {
  id: number
  name: string
  command: string
  status: "pending" | "locked" | "in_progress" | "completed"
  summary: string | null
  optional?: boolean
}

interface GSDStatus {
  enabled: boolean
  projectExists: boolean
  roadmapExists: boolean
}

interface SidebarProps {
  steps: WorkflowStep[]
  currentStep: number
  gsd?: GSDStatus
  onStepClick: (stepId: number) => void
  selectedStep: number
}

export function Sidebar({ steps, currentStep, gsd, onStepClick, selectedStep }: SidebarProps) {
  const completedSteps = steps.filter(s => s.status === "completed").length
  const totalSteps = steps.filter(s => !s.optional).length
  const progress = Math.round((completedSteps / totalSteps) * 100)

  const getStepIcon = (step: WorkflowStep) => {
    switch (step.status) {
      case "completed":
        return <Check className="w-4 h-4 text-emerald-400" />
      case "in_progress":
        return <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
      case "locked":
        return <Circle className="w-4 h-4 text-zinc-600" />
      default:
        return <Circle className="w-4 h-4 text-zinc-400" />
    }
  }

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col z-40">
      {/* Header */}
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white">WebDesign-OS</h1>
            <p className="text-xs text-zinc-500">Workflow Dashboard</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-zinc-400">Fortschritt</span>
          <span className="text-sm font-medium text-white">{progress}%</span>
        </div>
        <div className="flex items-center gap-4">
          <ProgressRing progress={progress} size={48} />
          <div className="text-xs text-zinc-500">
            <p>{completedSteps} von {totalSteps} Steps</p>
            <p>abgeschlossen</p>
          </div>
        </div>
      </div>

      {/* GSD Status */}
      {gsd?.enabled && (
        <div className="px-6 py-3 border-b border-zinc-800 bg-purple-500/10">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">GSD Mode</span>
          </div>
          <div className="mt-1 text-xs text-zinc-500">
            {gsd.projectExists && <span className="block">PROJECT.md</span>}
            {gsd.roadmapExists && <span className="block">ROADMAP.md</span>}
          </div>
        </div>
      )}

      {/* Steps Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3 px-2">
          Workflow Steps
        </p>
        <ul className="space-y-1">
          {steps.map((step) => {
            const isSelected = selectedStep === step.id
            const isClickable = step.status !== "locked"

            return (
              <li key={step.id}>
                <button
                  onClick={() => isClickable && onStepClick(step.id)}
                  disabled={!isClickable}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all
                    ${isSelected
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : isClickable
                        ? "hover:bg-zinc-800 text-zinc-300"
                        : "text-zinc-600 cursor-not-allowed"
                    }
                  `}
                >
                  <span className="flex-shrink-0">
                    {getStepIcon(step)}
                  </span>
                  <span className="flex-1 text-sm truncate">
                    {step.id}. {step.name}
                  </span>
                  {step.optional && (
                    <span className="text-[10px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded">
                      opt
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <FileText className="w-3 h-3" />
          <span>Auto-refresh aktiv</span>
        </div>
      </div>
    </aside>
  )
}
