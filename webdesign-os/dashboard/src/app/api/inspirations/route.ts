import { NextResponse } from "next/server"
import { readdirSync, existsSync, statSync } from "fs"
import { join } from "path"

const INSPIRATIONS_DIR = join(process.cwd(), "..", "inspirations")
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]

function getImagesFromDir(dirPath: string): string[] {
  if (!existsSync(dirPath)) return []

  try {
    const files = readdirSync(dirPath)
    return files
      .filter(file => IMAGE_EXTENSIONS.some(ext => file.toLowerCase().endsWith(ext)))
      .map(file => `/api/inspirations/image?path=${encodeURIComponent(join(dirPath, file))}`)
  } catch {
    return []
  }
}

function getSubdirectories(dirPath: string): string[] {
  if (!existsSync(dirPath)) return []

  try {
    const items = readdirSync(dirPath)
    return items.filter(item => {
      const fullPath = join(dirPath, item)
      return existsSync(fullPath) && statSync(fullPath).isDirectory()
    })
  } catch {
    return []
  }
}

export async function GET() {
  try {
    const result = {
      general: [] as string[],
      sections: {} as Record<string, string[]>,
      pages: {} as Record<string, string[]>,
      total: 0
    }

    // General inspirations (root level)
    const generalDir = join(INSPIRATIONS_DIR, "general")
    result.general = getImagesFromDir(generalDir)

    // Also check root for direct images
    result.general.push(...getImagesFromDir(INSPIRATIONS_DIR))

    // Sections
    const sectionsDir = join(INSPIRATIONS_DIR, "sections")
    if (existsSync(sectionsDir)) {
      const sectionDirs = getSubdirectories(sectionsDir)
      for (const section of sectionDirs) {
        const images = getImagesFromDir(join(sectionsDir, section))
        if (images.length > 0) {
          result.sections[section] = images
        }
      }
    }

    // Pages
    const pagesDir = join(INSPIRATIONS_DIR, "pages")
    if (existsSync(pagesDir)) {
      const pageDirs = getSubdirectories(pagesDir)
      for (const page of pageDirs) {
        const images = getImagesFromDir(join(pagesDir, page))
        if (images.length > 0) {
          result.pages[page] = images
        }
      }
    }

    // Calculate total
    result.total = result.general.length +
      Object.values(result.sections).reduce((sum, arr) => sum + arr.length, 0) +
      Object.values(result.pages).reduce((sum, arr) => sum + arr.length, 0)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Failed to read inspirations:", error)
    return NextResponse.json({
      general: [],
      sections: {},
      pages: {},
      total: 0
    })
  }
}
