"use client"

import { useState } from "react"
import { Check, Circle, RefreshCw, Copy, CheckCheck, ArrowRight, Play, Lightbulb, Zap } from "lucide-react"

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

interface StepDetailProps {
  step: WorkflowStep
  nextStep?: WorkflowStep
  isActive?: boolean
}

interface BestAction {
  command: string
  label: string
  description: string
  badge?: string
}

interface StepInfo {
  title: string
  description: string
  whatToDo: string
  bestAction: BestAction
}

const stepDescriptions: Record<number, StepInfo> = {
  1: {
    title: "Projekt initialisieren",
    description: "Definiere dein Projekt durch eine tiefgreifende Analyse. Brand, Zielgruppe, Seiten und Features werden erfasst.",
    whatToDo: "Führe den Command aus. GSD stellt dir Fragen und erstellt ein detailliertes PROJECT.md.",
    bestAction: {
      command: "/gsd:new-project",
      label: "Projekt-Analyse starten",
      description: "Umfassende Analyse mit Context Engineering. Erstellt PROJECT.md mit detailliertem Briefing für alle folgenden Steps.",
      badge: "GSD"
    }
  },
  2: {
    title: "Content planen",
    description: "Plane wie viel Content pro Seite vorhanden sein wird. Anzahl Features, Testimonials, FAQ etc.",
    whatToDo: "Gehe durch jede Seite und definiere die Content-Mengen. Das beeinflusst das spätere Design.",
    bestAction: {
      command: "/content-plan",
      label: "Content-Planung starten",
      description: "Interaktive Planung pro Seite: Wie viele Features? Testimonials? FAQs? Team-Members?"
    }
  },
  3: {
    title: "Design System erstellen",
    description: "Wähle Farben, Fonts, Spacing und Component-Styles. AI-Empfehlungen basierend auf deiner Branche und Inspirations.",
    whatToDo: "Beantworte die Design-Fragen. Deine Inspiration-Bilder werden analysiert und fließen ein.",
    bestAction: {
      command: "/design-system",
      label: "Design System erstellen",
      description: "Interaktive Auswahl von Farben, Typography und Styles. UI UX Pro Max gibt Empfehlungen basierend auf deinen Inspirations.",
      badge: "UI UX Pro"
    }
  },
  4: {
    title: "Seiten gestalten",
    description: "Designe jede Seite Section für Section. Wähle Layouts basierend auf deinen Inspirations und shadcnblocks.",
    whatToDo: "Gehe durch jede Seite und definiere die Sections. Gib pro Section ein Style-Bild als Referenz an.",
    bestAction: {
      command: "/shape-pages",
      label: "Seiten gestalten",
      description: "Page by Page, Section by Section. Wähle aus shadcnblocks Components und gib Style-Bilder als Layout-Referenz an."
    }
  },
  5: {
    title: "Specs schreiben",
    description: "Technische Spezifikationen werden automatisch erstellt basierend auf deinen Design-Entscheidungen.",
    whatToDo: "Die Specs werden generiert. Review sie und bestätige oder passe an.",
    bestAction: {
      command: "/write-spec",
      label: "Specs generieren",
      description: "Erstellt technische Spezifikationen für alle Komponenten und Seiten. Basis für die Implementation."
    }
  },
  6: {
    title: "Implementieren",
    description: "Die Sections werden gebaut. Jede Section wird gegen Design Excellence Standards validiert.",
    whatToDo: "Die Implementation startet automatisch. Bei Fragen wirst du gefragt.",
    bestAction: {
      command: "/implement",
      label: "Implementation starten",
      description: "Baut alle Seiten und Sections nach Spezifikation. Design Excellence Check pro Section (Score >= 7/10)."
    }
  },
  7: {
    title: "SEO optimieren",
    description: "Meta-Tags, Schema Markup, Sitemaps und technisches SEO werden implementiert.",
    whatToDo: "Review die SEO-Empfehlungen pro Seite und bestätige.",
    bestAction: {
      command: "/seo",
      label: "SEO-Optimierung starten",
      description: "Meta-Tags, Schema Markup, Open Graph, Sitemaps, Internal Linking für alle Seiten."
    }
  },
  8: {
    title: "Verfeinern",
    description: "Optional: Mache Feinschliff an einzelnen Seiten oder Sections nach User-Feedback.",
    whatToDo: "Überspringe diesen Step wenn alles passt, oder verfeinere einzelne Seiten.",
    bestAction: {
      command: "/refine",
      label: "Seiten verfeinern",
      description: "Layout, Animationen oder Content einer Seite anpassen. Kann übersprungen werden."
    }
  },
  9: {
    title: "Verifizieren & Exportieren",
    description: "Finale Validierung aller Qualitäts-Checks und Export des Projekts.",
    whatToDo: "Alle Quality-Checks werden durchgeführt. Dann Export für Deployment.",
    bestAction: {
      command: "/verify",
      label: "Projekt verifizieren",
      description: "Design Review, Performance Audit (Lighthouse 90+), SEO Check, Responsive Tests. Dann Export."
    }
  }
}

function CopyButton({ command, large = false }: { command: string; large?: boolean }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!command) return
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  if (!command) return null

  return (
    <button
      onClick={handleCopy}
      className={`rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors flex items-center justify-center ${
        large ? "p-4" : "p-2"
      }`}
      title="Command kopieren"
    >
      {copied ? (
        <CheckCheck className={large ? "w-6 h-6" : "w-4 h-4"} />
      ) : (
        <Copy className={large ? "w-6 h-6" : "w-4 h-4"} />
      )}
    </button>
  )
}

export function StepDetail({ step, nextStep }: StepDetailProps) {
  const info = stepDescriptions[step.id] || {
    title: step.name,
    description: "",
    whatToDo: "",
    bestAction: { command: step.command, label: "Ausführen", description: "" }
  }

  const getStatusBadge = () => {
    switch (step.status) {
      case "completed":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
            <Check className="w-4 h-4" />
            Abgeschlossen
          </span>
        )
      case "in_progress":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
            <RefreshCw className="w-4 h-4 animate-spin" />
            In Bearbeitung
          </span>
        )
      case "locked":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-500/20 text-zinc-400 text-sm">
            <Circle className="w-4 h-4" />
            Gesperrt
          </span>
        )
      default:
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm">
            <Play className="w-4 h-4" />
            Bereit
          </span>
        )
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-zinc-500">Step {step.id}</span>
            {step.optional && (
              <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                Optional
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-white">{info.title}</h2>
        </div>
        {getStatusBadge()}
      </div>

      {/* Description */}
      <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
        <p className="text-zinc-300 leading-relaxed">{info.description}</p>
      </div>

      {/* What to do */}
      {step.status !== "completed" && step.status !== "locked" && (
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-blue-400 mb-1">Was ist zu tun?</p>
              <p className="text-sm text-zinc-300">{info.whatToDo}</p>
            </div>
          </div>
        </div>
      )}

      {/* Best Action - ONE clear command */}
      {step.status !== "locked" && step.status !== "completed" && (
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-amber-400" />
            <span className="font-medium text-white">{info.bestAction.label}</span>
            {info.bestAction.badge && (
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">
                {info.bestAction.badge}
              </span>
            )}
          </div>

          <p className="text-sm text-zinc-400 mb-4">{info.bestAction.description}</p>

          {/* Big Command Block */}
          <div className="flex items-center gap-3">
            <code className="flex-1 font-mono text-xl text-blue-400 bg-zinc-900 px-5 py-4 rounded-xl border border-zinc-700">
              {info.bestAction.command}
            </code>
            <CopyButton command={info.bestAction.command} large />
          </div>
        </div>
      )}

      {/* Summary (if completed) */}
      {step.status === "completed" && step.summary && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-sm text-emerald-400 font-medium mb-1">Zusammenfassung:</p>
          <p className="text-zinc-300">{step.summary}</p>
          {step.completedAt && (
            <p className="text-xs text-zinc-500 mt-2">
              Abgeschlossen: {new Date(step.completedAt).toLocaleString("de-DE")}
            </p>
          )}
        </div>
      )}

      {/* Pages Progress (if available) */}
      {step.pages && step.pages.length > 0 && step.status !== "locked" && (
        <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
          <p className="text-sm text-zinc-400 mb-3">Seiten-Fortschritt:</p>
          <div className="space-y-2">
            {step.pages.map((page, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-2 rounded-lg ${
                  page.status === "completed"
                    ? "bg-emerald-500/10"
                    : page.status === "in_progress"
                      ? "bg-blue-500/10"
                      : "bg-zinc-800"
                }`}
              >
                {page.status === "completed" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : page.status === "in_progress" ? (
                  <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
                ) : (
                  <Circle className="w-4 h-4 text-zinc-500" />
                )}
                <span className="text-sm text-zinc-300 capitalize">{page.name}</span>
                {page.sections !== undefined && (
                  <span className="text-xs text-zinc-500 ml-auto">{page.sections} Sections</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Step Preview */}
      {nextStep && step.status === "completed" && (
        <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
          <div className="flex items-center gap-2 text-zinc-400 mb-2">
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm">Nächster Schritt</span>
          </div>
          <p className="text-white font-medium">
            Step {nextStep.id}: {nextStep.name}
          </p>
          <code className="text-sm text-blue-400 font-mono mt-1 block">
            {nextStep.command}
          </code>
        </div>
      )}
    </div>
  )
}
