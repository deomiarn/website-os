import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import { existsSync } from "fs"
import path from "path"

export async function GET() {
  try {
    const configDir = path.join(process.cwd(), "..", "config")
    const planningDir = path.join(process.cwd(), "..", "..", ".planning")

    // Read workflow state
    const workflowPath = path.join(configDir, "workflow-state.json")
    const workflowData = await fs.readFile(workflowPath, "utf-8")
    const workflow = JSON.parse(workflowData)

    // Check GSD status
    const gsd = {
      enabled: false,
      projectExists: existsSync(path.join(planningDir, "PROJECT.md")),
      roadmapExists: existsSync(path.join(planningDir, "ROADMAP.md")),
      stateExists: existsSync(path.join(planningDir, "STATE.md"))
    }
    gsd.enabled = gsd.projectExists || gsd.roadmapExists

    // Read project info
    let project = null
    try {
      const projectPath = path.join(configDir, "project.json")
      if (existsSync(projectPath)) {
        const projectData = await fs.readFile(projectPath, "utf-8")
        const projectJson = JSON.parse(projectData)
        if (projectJson.name) {
          project = {
            name: projectJson.name,
            type: projectJson.type || "website",
            pagesCount: projectJson.pages?.length || 0
          }
        }
      }
    } catch {
      // Project not initialized yet
    }

    return NextResponse.json({
      ...workflow,
      gsd,
      project
    })
  } catch (error) {
    console.error("Error reading workflow state:", error)
    return NextResponse.json(null)
  }
}
