"use client"

import { useState, useEffect } from "react"
import { Image, FolderOpen, ChevronRight } from "lucide-react"

interface InspirationsData {
  general: string[]
  sections: Record<string, string[]>
  pages: Record<string, string[]>
  total: number
}

export function InspirationsPreview() {
  const [data, setData] = useState<InspirationsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const fetchInspirations = async () => {
      try {
        const res = await fetch("/api/inspirations")
        if (res.ok) {
          const json = await res.json()
          setData(json)
        }
      } catch (error) {
        console.error("Failed to load inspirations:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchInspirations()
    const interval = setInterval(fetchInspirations, 5000)
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

  if (!data || data.total === 0) {
    return (
      <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
        <div className="flex items-center gap-2 text-zinc-500 mb-2">
          <Image className="w-4 h-4" />
          <span className="text-sm font-medium">Inspirations</span>
        </div>
        <p className="text-xs text-zinc-600">
          Keine Bilder gefunden. Lege Bilder in <code className="text-zinc-500">webdesign-os/inspirations/</code> ab.
        </p>
      </div>
    )
  }

  const allImages = [
    ...data.general,
    ...Object.values(data.sections).flat(),
    ...Object.values(data.pages).flat()
  ].slice(0, 6)

  return (
    <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full mb-3"
      >
        <div className="flex items-center gap-2 text-zinc-400">
          <Image className="w-4 h-4" />
          <span className="text-sm font-medium">Inspirations</span>
          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
            {data.total}
          </span>
        </div>
        <ChevronRight className={`w-4 h-4 text-zinc-500 transition-transform ${expanded ? "rotate-90" : ""}`} />
      </button>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-3 gap-2">
        {allImages.map((src, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg bg-zinc-900 border border-zinc-700 overflow-hidden"
          >
            <img
              src={src}
              alt={`Inspiration ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none"
              }}
            />
          </div>
        ))}
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-zinc-700 space-y-3">
          {data.general.length > 0 && (
            <div className="flex items-center gap-2 text-xs">
              <FolderOpen className="w-3 h-3 text-zinc-500" />
              <span className="text-zinc-400">general/</span>
              <span className="text-zinc-600">{data.general.length} Bilder</span>
            </div>
          )}
          {Object.entries(data.sections).map(([section, images]) => (
            <div key={section} className="flex items-center gap-2 text-xs">
              <FolderOpen className="w-3 h-3 text-zinc-500" />
              <span className="text-zinc-400">sections/{section}/</span>
              <span className="text-zinc-600">{images.length} Bilder</span>
            </div>
          ))}
          {Object.entries(data.pages).map(([page, images]) => (
            <div key={page} className="flex items-center gap-2 text-xs">
              <FolderOpen className="w-3 h-3 text-zinc-500" />
              <span className="text-zinc-400">pages/{page}/</span>
              <span className="text-zinc-600">{images.length} Bilder</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
