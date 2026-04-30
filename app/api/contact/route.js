import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Email sending via Zoho SMTP or any provider
    // Configure ZOHO_USER and ZOHO_PASS in Vercel env variables
    // For now returns success — integrate nodemailer after deploy
    console.log('Contact form submission:', { name, email, subject })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
