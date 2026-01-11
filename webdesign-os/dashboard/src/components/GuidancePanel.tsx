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
      "Habe deine Brand-Infos bereit: Name, Tagline, Branche",
      "Überlege welche Seiten du brauchst (Home, About, Services, Contact...)",
      "Lege Inspiration-Bilder in webdesign-os/inspirations/ ab",
      "GSD Option erstellt detailliertes PROJECT.md für besseren Context"
    ],
    warnings: [
      "Je detaillierter deine Infos, desto besser das Ergebnis"
    ],
    success: "Projekt-Config erstellt. Content-Planung kann beginnen."
  },
  2: {
    tips: [
      "Denke an realistische Content-Mengen für jede Seite",
      "Features: Wie viele Services/Produkte zeigst du?",
      "Testimonials: Hast du echte Kundenstimmen?",
      "FAQs: Welche Fragen werden oft gestellt?"
    ],
    warnings: [
      "Zu viele Items pro Section können überladen wirken",
      "Lieber weniger, dafür hochwertiger Content"
    ],
    success: "Content-Plan fertig. Das Design System berücksichtigt diese Mengen."
  },
  3: {
    tips: [
      "UI UX Pro Max gibt Empfehlungen - du entscheidest final!",
      "Deine Inspiration-Bilder haben höchste Priorität",
      "Wähle max. 2 Fonts (Display + Body)",
      "OKLCH Farben für bessere Accessibility"
    ],
    warnings: [
      "Vermeide generische Fonts wie Inter für Headlines",
      "Nicht zu viele Farben - 1 Primary + 1 Accent reicht"
    ],
    success: "Design Tokens generiert. Alle Komponenten nutzen diese Tokens."
  },
  4: {
    tips: [
      "Gib pro Section ein Style-Bild an",
      "Das Bild zeigt das LAYOUT - nicht Component-Styles",
      "Design Excellence Check muss >= 7/10 sein",
      "shadcnblocks Components sind das Grundgerüst"
    ],
    warnings: [
      "Inspiration-Bilder = Layout, nicht Farben/Fonts",
      "Farben/Fonts kommen aus deinen Design Tokens"
    ],
    success: "Alle Seiten designed. Specs können erstellt werden."
  },
  5: {
    tips: [
      "Specs werden automatisch aus deinen Design-Entscheidungen generiert",
      "Review jede Spec auf Vollständigkeit",
      "Bei Unklarheiten: Nachfragen ist besser als raten"
    ],
    success: "Technische Specs fertig. Implementation kann starten."
  },
  6: {
    tips: [
      "Nutze /gsd:plan-phase für atomare Tasks",
      "Jeder Task läuft mit frischem Context (200k tokens)",
      "Design Excellence wird pro Section validiert"
    ],
    warnings: [
      "Bei Score < 7 wird die Section überarbeitet",
      "Lass den Build-Prozess komplett durchlaufen"
    ],
    success: "Alle Sections implementiert und validiert!"
  },
  7: {
    tips: [
      "Meta-Tags pro Seite definieren",
      "Schema Markup für bessere Rich Snippets",
      "Core Web Vitals im Blick behalten",
      "Interne Verlinkung nicht vergessen"
    ],
    success: "SEO-Optimierung abgeschlossen. Bereit für finale Checks."
  },
  8: {
    tips: [
      "Dieser Step ist optional",
      "Nutze ihn für Feinschliff nach User-Feedback",
      "Einzelne Sections können angepasst werden"
    ]
  },
  9: {
    tips: [
      "Alle Quality-Checks werden durchgeführt",
      "Lighthouse Score sollte 90+ sein",
      "Export generiert produktionsreifes Projekt"
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
