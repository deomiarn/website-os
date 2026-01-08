import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  try {
    const workflowPath = path.join(
      process.cwd(),
      "..",
      "config",
      "workflow-state.json"
    )

    const data = await fs.readFile(workflowPath, "utf-8")
    const workflow = JSON.parse(data)

    return NextResponse.json(workflow)
  } catch (error) {
    console.error("Error reading workflow state:", error)
    return NextResponse.json(null)
  }
}
