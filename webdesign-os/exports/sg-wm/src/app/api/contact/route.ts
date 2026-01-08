import { NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Basic validation
    if (!data.name || data.name.length < 2) {
      return NextResponse.json(
        { error: "Name ist zu kurz" },
        { status: 400 }
      )
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse" },
        { status: 400 }
      )
    }

    if (!data.subject) {
      return NextResponse.json(
        { error: "Betreff erforderlich" },
        { status: 400 }
      )
    }

    if (!data.message || data.message.length < 10) {
      return NextResponse.json(
        { error: "Nachricht ist zu kurz" },
        { status: 400 }
      )
    }

    // In production, send email via Resend or similar service
    // For now, just log and return success
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    })

    // TODO: Integrate with Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@sg-wm.ch',
    //   to: 'info@sg-wm.ch',
    //   subject: `Neue Anfrage: ${data.subject}`,
    //   html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p>...`
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    )
  }
}
