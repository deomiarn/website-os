"use client"

import { useEffect } from "react"
import { Container } from "@/components/layout/container"

interface CalEmbedProps {
  calLink?: string
}

export function CalEmbed({ calLink = "team/erstgespraech" }: CalEmbedProps) {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script")
    script.src = "https://app.cal.com/embed/embed.js"
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      // @ts-expect-error Cal is loaded from external script
      if (window.Cal) {
        // @ts-expect-error Cal is loaded from external script
        window.Cal("init", { origin: "https://app.cal.com" })
        // @ts-expect-error Cal is loaded from external script
        window.Cal("inline", {
          elementOrSelector: "#cal-embed",
          calLink: calLink,
          config: {
            theme: "light",
          },
        })
      }
    }

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [calLink])

  return (
    <section className="py-section-md">
      <Container>
        <div
          id="cal-embed"
          className="min-h-[600px] overflow-hidden rounded-lg border border-border bg-card"
        >
          {/* Cal.com will inject the calendar here */}
          <div className="flex h-[600px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-accent border-t-transparent" />
              <p className="mt-4 text-sm text-muted-foreground">
                Kalender wird geladen...
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
