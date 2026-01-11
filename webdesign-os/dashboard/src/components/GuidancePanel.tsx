"use client"

import { Sparkles, AlertCircle, CheckCircle2, Info } from "lucide-react"

interface GuidancePanelProps {
  stepId: number
  status: "pending" | "locked" | "in_progress" | "completed"
}

interface GuidanceContent {
  tips: string[]
  warnings?: string[]
  success?: string
}

const guidanceContent: Record<number, GuidanceContent> = {
  1: {
    tips: [
      "Lege Inspiration-Bilder in webdesign-os/inspirations/ ab BEVOR du startest",
      "map-codebase analysiert ~7 Aspekte deines Projekts (Stack, Architecture, etc.)",
      "new-project stellt Fragen bis alles klar ist - nimm dir Zeit",
      "create-roadmap nutzt WEBDESIGN-WORKFLOW.md für die 8 Phasen"
    ],
    warnings: [
      "Je detaillierter deine Antworten bei new-project, desto besser das Ergebnis"
    ],
    success: "PROJECT.md + ROADMAP.md erstellt. Phase 1 kann beginnen."
  },
  2: {
    tips: [
      "plan-phase 1 erstellt atomare Tasks für Content-Planung",
      "execute-plan läuft in frischem Subagent (200k tokens)",
      "Output: content-inventory.json mit allen Content-Definitionen"
    ],
    warnings: [
      "Zu viele Items pro Section können überladen wirken",
      "Nach execute-plan: /clear für frischen Context"
    ],
    success: "content-inventory.json erstellt. Phase 2 (Design System) kann starten."
  },
  3: {
    tips: [
      "Phase 2 analysiert deine Inspiration-Bilder automatisch",
      "Extrahiert Farben, Typography, Spacing",
      "Output: design-tokens.json mit OKLCH Farben"
    ],
    warnings: [
      "Vermeide generische Fonts wie Inter für Headlines",
      "Nach execute-plan: /clear für frischen Context"
    ],
    success: "design-tokens.json erstellt. Phase 3 (Shape Pages) kann starten."
  },
  4: {
    tips: [
      "Phase 3 definiert jede Seite Section für Section",
      "shadcnblocks Components werden pro Section gewählt",
      "Optional: Style-Referenz-Bild pro Section"
    ],
    warnings: [
      "Inspiration-Bilder = Layout, nicht Farben/Fonts",
      "Nach execute-plan: /clear für frischen Context"
    ],
    success: "page-shapes/*.json erstellt. Phase 4 (Specs) kann starten."
  },
  5: {
    tips: [
      "Phase 4 erstellt technische Specs pro Seite",
      "Component Props, Responsive, Animations",
      "Output: specs/*.md mit Implementierungs-Details"
    ],
    warnings: [
      "Nach execute-plan: /clear für frischen Context"
    ],
    success: "specs/*.md erstellt. Phase 5 (Implement) kann starten."
  },
  6: {
    tips: [
      "Phase 5 baut jede Seite nach Spec",
      "Design Excellence Check pro Section (>= 7/10)",
      "Bei Score < 7: Section wird überarbeitet"
    ],
    warnings: [
      "Längste Phase - kann mehrere execute-plan Durchläufe brauchen",
      "Nach execute-plan: /clear für frischen Context"
    ],
    success: "Alle Seiten implementiert und validiert!"
  },
  7: {
    tips: [
      "Phase 6 optimiert SEO pro Seite",
      "Meta-Tags, Schema Markup, Sitemap",
      "Output: SEO-optimierte Seiten"
    ],
    warnings: [
      "Nach execute-plan: /clear für frischen Context"
    ],
    success: "SEO-Optimierung abgeschlossen. Phase 7 oder 8 als nächstes."
  },
  8: {
    tips: [
      "Phase 7 ist OPTIONAL",
      "Nutze für Feinschliff nach Feedback",
      "Kann übersprungen werden"
    ],
    success: "Refinements abgeschlossen."
  },
  9: {
    tips: [
      "Phase 8 ist der finale Quality Check",
      "Lighthouse Score >= 90 in allen Kategorien",
      "Responsive Tests auf allen Viewports"
    ],
    success: "Projekt verifiziert und exportiert. Bereit für Deployment!"
  }
}

export function GuidancePanel({ stepId, status }: GuidancePanelProps) {
  const content = guidanceContent[stepId]
  if (!content) return null

  if (status === "locked") {
    return (
      <div className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
        <div className="flex items-center gap-2 text-zinc-500">
          <Info className="w-4 h-4" />
          <span className="text-sm">Vorherigen Schritt abschließen um fortzufahren</span>
        </div>
      </div>
    )
  }

  if (status === "completed" && content.success) {
    return (
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
          <p className="text-emerald-300">{content.success}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Tips */}
      <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-400">Tipps</span>
        </div>
        <ul className="space-y-2">
          {content.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-zinc-300">
              <span className="text-zinc-600 mt-1">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Warnings */}
      {content.warnings && content.warnings.length > 0 && (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">Beachte</span>
          </div>
          <ul className="space-y-2">
            {content.warnings.map((warning, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-amber-200">
                <span className="text-amber-400 mt-1">!</span>
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
