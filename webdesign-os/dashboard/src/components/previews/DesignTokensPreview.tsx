"use client"

import { useState, useEffect } from "react"
import { Palette, Type, ChevronRight } from "lucide-react"

interface DesignTokensData {
  colors?: {
    primary?: string
    secondary?: string
    accent?: string
    background?: string
    foreground?: string
  }
  typography?: {
    fontFamily?: {
      display?: string
      body?: string
    }
  }
  animations?: {
    style?: string
  }
}

export function DesignTokensPreview() {
  const [data, setData] = useState<DesignTokensData | null>(null)
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const res = await fetch("/api/design-tokens")
        if (res.ok) {
          const json = await res.json()
          setData(json)
        }
      } catch (error) {
        console.error("Failed to load design tokens:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTokens()
    const interval = setInterval(fetchTokens, 5000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 animate-pulse">
        <div className="h-4 bg-zinc-700 rounded w-24 mb-3" />
        <div className="h-16 bg-zinc-700 rounded" />
      </div>
    )
  }

  if (!data || !data.colors) {
    return (
      <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
        <div className="flex items-center gap-2 text-zinc-500 mb-2">
          <Palette className="w-4 h-4" />
          <span className="text-sm font-medium">Design Tokens</span>
        </div>
        <p className="text-xs text-zinc-600">
          Noch nicht definiert. Führe <code className="text-zinc-500">/design-system</code> aus.
        </p>
      </div>
    )
  }

  const colorEntries = Object.entries(data.colors).filter(([_, value]) => value)

  return (
    <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full mb-3"
      >
        <div className="flex items-center gap-2 text-zinc-400">
          <Palette className="w-4 h-4" />
          <span className="text-sm font-medium">Design Tokens</span>
        </div>
        <ChevronRight className={`w-4 h-4 text-zinc-500 transition-transform ${expanded ? "rotate-90" : ""}`} />
      </button>

      {/* Color Swatches */}
      <div className="flex gap-2">
        {colorEntries.slice(0, 5).map(([name, value]) => (
          <div key={name} className="flex flex-col items-center gap-1">
            <div
              className="w-8 h-8 rounded-lg border border-zinc-600"
              style={{ backgroundColor: value }}
              title={`${name}: ${value}`}
            />
            <span className="text-[10px] text-zinc-500 capitalize">{name.slice(0, 3)}</span>
          </div>
        ))}
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-zinc-700 space-y-4">
          {/* Colors */}
          <div>
            <p className="text-xs text-zinc-500 mb-2">Farben</p>
            <div className="grid grid-cols-2 gap-2">
              {colorEntries.map(([name, value]) => (
                <div key={name} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded border border-zinc-600"
                    style={{ backgroundColor: value }}
                  />
                  <span className="text-xs text-zinc-400 capitalize">{name}</span>
                  <span className="text-[10px] text-zinc-600 font-mono">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          {data.typography?.fontFamily && (
            <div>
              <p className="text-xs text-zinc-500 mb-2">Typography</p>
              <div className="space-y-1">
                {data.typography.fontFamily.display && (
                  <div className="flex items-center gap-2">
                    <Type className="w-3 h-3 text-zinc-600" />
                    <span className="text-xs text-zinc-400">Display:</span>
                    <span className="text-xs text-zinc-300">{data.typography.fontFamily.display}</span>
                  </div>
                )}
                {data.typography.fontFamily.body && (
                  <div className="flex items-center gap-2">
                    <Type className="w-3 h-3 text-zinc-600" />
                    <span className="text-xs text-zinc-400">Body:</span>
                    <span className="text-xs text-zinc-300">{data.typography.fontFamily.body}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Animation Style */}
          {data.animations?.style && (
            <div>
              <p className="text-xs text-zinc-500 mb-1">Animations</p>
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded capitalize">
                {data.animations.style}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
