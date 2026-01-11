import { NextRequest, NextResponse } from "next/server"
import { readFileSync, existsSync } from "fs"
import path from "path"

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const imagePath = searchParams.get("path")

  if (!imagePath) {
    return new NextResponse("Missing path parameter", { status: 400 })
  }

  // Security: Ensure path is within the inspirations directory
  const inspirationsDir = path.join(process.cwd(), "..", "inspirations")
  const resolvedPath = path.resolve(imagePath)

  if (!resolvedPath.startsWith(inspirationsDir)) {
    return new NextResponse("Invalid path", { status: 403 })
  }

  if (!existsSync(resolvedPath)) {
    return new NextResponse("File not found", { status: 404 })
  }

  try {
    const ext = path.extname(resolvedPath).toLowerCase()
    const contentType = MIME_TYPES[ext] || "application/octet-stream"
    const fileBuffer = readFileSync(resolvedPath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600"
      }
    })
  } catch (error) {
    console.error("Error serving image:", error)
    return new NextResponse("Error reading file", { status: 500 })
  }
}
