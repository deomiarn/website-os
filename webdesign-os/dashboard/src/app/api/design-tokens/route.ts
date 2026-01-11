import { NextResponse } from "next/server"
import { readFileSync, existsSync } from "fs"
import { join } from "path"

const DESIGN_TOKENS_PATH = join(process.cwd(), "..", "config", "design-tokens.json")

export async function GET() {
  try {
    if (!existsSync(DESIGN_TOKENS_PATH)) {
      return NextResponse.json({})
    }

    const content = readFileSync(DESIGN_TOKENS_PATH, "utf-8")
    const tokens = JSON.parse(content)

    // Extract relevant data for preview
    const result = {
      colors: tokens.colors?.light || tokens.colors || {},
      typography: tokens.typography || {},
      spacing: tokens.spacing || {},
      animations: tokens.animations || {},
      components: tokens.components || {}
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Failed to read design tokens:", error)
    return NextResponse.json({})
  }
}
