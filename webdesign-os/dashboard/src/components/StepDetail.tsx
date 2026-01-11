"use client"

import { useState } from "react"
import { Check, Circle, RefreshCw, Copy, CheckCheck, ArrowRight, Play, Lightbulb, Zap, RotateCcw, HelpCircle } from "lucide-react"

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

interface GSDAction {
  command: string
  label: string
  description: string
}

interface QuestionCategory {
  category: string
  questions: string[]
}

interface StepInfo {
  title: string
  description: string
  whatToDo: string
  gsdPhase?: number
  actions: GSDAction[]
  questionsPreview?: QuestionCategory[]
}

const stepDescriptions: Record<number, StepInfo> = {
  1: {
    title: "Projekt Setup",
    description: "Analysiere vorhandene Codebase, erstelle PROJECT.md und ROADMAP.md. GSD stellt Fragen zu Brand, Zielgruppe, bestehender Website etc.",
    whatToDo: "Führe die Commands der Reihe nach aus. Bei new-project wirst du zu allem befragt.",
    actions: [
      {
        command: "/gsd:map-codebase",
        label: "① Codebase analysieren",
        description: "Versteht die vorhandene Projektstruktur"
      },
      {
        command: "/gsd:new-project",
        label: "② Projekt definieren",
        description: "Interaktive Fragen zu allen Projektdetails"
      },
      {
        command: "/gsd:create-roadmap",
        label: "③ Roadmap erstellen",
        description: "Erstellt ROADMAP.md mit 8 Phasen"
      }
    ],
    questionsPreview: [
      {
        category: "Brand",
        questions: ["Name & Tagline", "Branche", "Werte & Tone"]
      },
      {
        category: "Website-Status",
        questions: ["Gibt es eine bestehende Website?", "Was behalten/ändern?", "Konkurrenten"]
      },
      {
        category: "Zielgruppe",
        questions: ["Primäre Zielgruppe", "Pain Points", "Ziele & Einwände"]
      },
      {
        category: "Seiten & Features",
        questions: ["Welche Seiten?", "Kontaktformular?", "Newsletter?", "Blog?"]
      },
      {
        category: "Design",
        questions: ["Style-Präferenz", "Mood/Stimmung", "Farb-Präferenzen"]
      },
      {
        category: "Content",
        questions: ["Echter Content vorhanden?", "Echte Bilder?", "Content-Quelle"]
      }
    ]
  },
  2: {
    title: "Content planen",
    description: "Plane Content-Mengen pro Seite. Wie viele Features, Testimonials, FAQs werden benötigt?",
    whatToDo: "Erst planen, dann ausführen. GSD erstellt atomare Tasks für diese Phase.",
    gsdPhase: 1,
    actions: [
      {
        command: "/gsd:plan-phase 1",
        label: "① Phase planen",
        description: "Erstellt PLAN.md mit atomaren Tasks"
      },
      {
        command: "/gsd:execute-plan",
        label: "② Phase ausführen",
        description: "Führt alle Tasks aus PLAN.md aus"
      }
    ]
  },
  3: {
    title: "Design System",
    description: "Erstelle Farben, Typography, Spacing basierend auf deinen Inspirations. UI UX Pro Max gibt Empfehlungen.",
    whatToDo: "Erst planen, dann ausführen. Deine Inspiration-Bilder fließen ein.",
    gsdPhase: 2,
    actions: [
      {
        command: "/gsd:plan-phase 2",
        label: "① Phase planen",
        description: "Erstellt PLAN.md mit atomaren Tasks"
      },
      {
        command: "/gsd:execute-plan",
        label: "② Phase ausführen",
        description: "Führt alle Tasks aus PLAN.md aus"
      }
    ]
  },
  4: {
    title: "Seiten gestalten",
    description: "Designe jede Seite Section für Section. Wähle aus shadcnblocks und gib Style-Bilder als Referenz.",
    whatToDo: "Erst planen, dann ausführen. Page by Page, Section by Section.",
    gsdPhase: 3,
    actions: [
      {
        command: "/gsd:plan-phase 3",
        label: "① Phase planen",
        description: "Erstellt PLAN.md mit atomaren Tasks"
      },
      {
        command: "/gsd:execute-plan",
        label: "② Phase ausführen",
        description: "Führt alle Tasks aus PLAN.md aus"
      }
    ]
  },
  5: {
    title: "Specs schreiben",
    description: "Technische Spezifikationen für alle Komponenten und Seiten erstellen.",
    whatToDo: "Erst planen, dann ausführen. Specs sind die Basis für Implementation.",
    gsdPhase: 4,
    actions: [
      {
        command: "/gsd:plan-phase 4",
        label: "① Phase planen",
        description: "Erstellt PLAN.md mit atomaren Tasks"
      },
      {
        command: "/gsd:execute-plan",
        label: "② Phase ausführen",
        description: "Führt alle Tasks aus PLAN.md aus"
      }
    ]
  },
  6: {
    title: "Implementieren",
    description: "Alle Seiten und Sections nach Spezifikation bauen. Design Excellence Check pro Section.",
    whatToDo: "Erst planen, dann ausführen. Jede Section wird validiert (Score >= 7/10).",
    gsdPhase: 5,
    actions: [
      {
        command: "/gsd:plan-phase 5",
        label: "① Phase planen",
        description: "Erstellt PLAN.md mit atomaren Tasks"
      },
      {
        command: "/gsd:execute-plan",
        label: "② Phase ausführen",
        description: "Führt alle Tasks aus PLAN.md aus"
      }
    ]
  },
  7: {
    title: "SEO optimieren",
    description: "Meta-Tags, Schema Markup, Sitemaps, Internal Linking für alle Seiten.",
    whatToDo: "Erst planen, dann ausführen. SEO-Optimierung pro Seite.",
    gsdPhase: 6,
    actions: [
      {
        command: "/gsd:plan-phase 6",
        label: "① Phase planen",
        description: "Erstellt PLAN.md mit atomaren Tasks"
      },
      {
        command: "/gsd:execute-plan",
        label: "② Phase ausführen",
        description: "Führt alle Tasks aus PLAN.md aus"
      }
    ]
  },
  8: {
    title: "Verfeinern",
    description: "Optional: Feinschliff an einzelnen Seiten oder Sections nach Feedback.",
    whatToDo: "Erst planen, dann ausführen. Kann übersprungen werden.",
    gsdPhase: 7,
    actions: [
      {
        command: "/gsd:plan-phase 7",
        label: "① Phase planen",
        description: "Erstellt PLAN.md mit atomaren Tasks"
      },
      {
        command: "/gsd:execute-plan",
        label: "② Phase ausführen",
        description: "Führt alle Tasks aus PLAN.md aus"
      }
    ]
  },
  9: {
    title: "Verifizieren & Export",
    description: "Finale Validierung und Export. Lighthouse 90+, Design Review, Responsive Tests.",
    whatToDo: "Erst planen, dann ausführen. Finaler Quality Check.",
    gsdPhase: 8,
    actions: [
      {
        command: "/gsd:plan-phase 8",
        label: "① Phase planen",
        description: "Erstellt PLAN.md mit atomaren Tasks"
      },
      {
        command: "/gsd:execute-plan",
        label: "② Phase ausführen",
        description: "Führt alle Tasks aus PLAN.md aus"
      }
    ]
  }
}

function CopyButton({ command }: { command: string }) {
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

  return (
    <button
      onClick={handleCopy}
      className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
      title="Command kopieren"
    >
      {copied ? <CheckCheck className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
    </button>
  )
}

export function StepDetail({ step, nextStep }: StepDetailProps) {
  const info = stepDescriptions[step.id] || {
    title: step.name,
    description: "",
    whatToDo: "",
    actions: []
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
            {info.gsdPhase && (
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">
                GSD Phase {info.gsdPhase}
              </span>
            )}
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

      {/* Questions Preview (for Step 1) */}
      {step.status !== "locked" && step.status !== "completed" && info.questionsPreview && (
        <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Was wird bei new-project gefragt?</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {info.questionsPreview.map((cat, index) => (
              <div key={index} className="p-3 rounded-lg bg-zinc-900/50">
                <p className="text-xs font-medium text-zinc-400 mb-2">{cat.category}</p>
                <ul className="space-y-1">
                  {cat.questions.map((q, qIndex) => (
                    <li key={qIndex} className="text-xs text-zinc-500">• {q}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GSD Actions - Sequential Commands */}
      {step.status !== "locked" && step.status !== "completed" && info.actions.length > 0 && (
        <div className="space-y-4">
          {info.actions.map((action, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="font-medium text-white">{action.label}</span>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full ml-auto">
                  GSD
                </span>
              </div>
              <p className="text-sm text-zinc-400 mb-3">{action.description}</p>
              <div className="flex items-center gap-3">
                <code className="flex-1 font-mono text-lg text-blue-400 bg-zinc-900 px-4 py-3 rounded-lg border border-zinc-700">
                  {action.command}
                </code>
                <CopyButton command={action.command} />
              </div>
            </div>
          ))}

          {/* Clear Context Reminder */}
          {info.gsdPhase && (
            <div className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
              <div className="flex items-center gap-2 text-zinc-500">
                <RotateCcw className="w-4 h-4" />
                <span className="text-sm">Nach Abschluss: <code className="text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">/clear</code> für frischen Context</span>
              </div>
            </div>
          )}
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
        </div>
      )}
    </div>
  )
}
