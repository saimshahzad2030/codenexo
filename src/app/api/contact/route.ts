import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Parse FormData for file uploads & fields
    const formData = await request.formData()

    // Extract all form fields (ensure empty string fallback)
    const fullName = formData.get('fullName')?.toString() ?? ''
    const email = formData.get('email')?.toString() ?? ''
    const companyName = formData.get('companyName')?.toString() ?? ''
    const contactNo = formData.get('contactNo')?.toString() ?? ''
    const whatsApp = formData.get('whatsApp')?.toString() ?? ''
    const location = formData.get('location')?.toString() ?? ''
    const budget = formData.get('budget')?.toString() ?? ''
    const message = formData.get('message')?.toString() ?? ''
    const file = formData.get('file') as File | null
    const leadSource = formData.get('leadSource')?.toString() ?? 'Website form'

    // Basic validation (minimal, keep existing UI expectations)
    if (!fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name and email are required.'
        },
        { status: 400 }
      )
    }

    // Log submission details (retain existing logging style)
    console.log('=== Contact/Consultation Form Submission ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Lead Source:', leadSource)
    console.log('Full Name:', fullName)
    console.log('Email:', email)
    console.log('Company Name:', companyName || 'N/A')
    console.log('Contact No:', contactNo || 'N/A')
    console.log('WhatsApp:', whatsApp || 'N/A')
    console.log('Location:', location || 'N/A')
    console.log('Budget:', budget || 'N/A')
    console.log('Message:', message || 'N/A')
    console.log('File:', file ? `${file.name} (${file.size} bytes)` : 'No file uploaded')
    console.log('================================')

    // TODO (unchanged): integrate email service, DB persistence, file storage, etc.

    // HubSpot integration (non-blocking)
    const token = process.env.HUBSPOT_ACCESS_TOKEN
    if (!token) {
      console.error('Missing HUBSPOT_ACCESS_TOKEN')
    } else {
      // Split name
      const [firstname, ...rest] = fullName.trim().split(' ')
      const lastname = rest.join(' ') || ''

      const hubspotBody = {
        properties: {
          email,
          firstname,
          lastname,
          company: companyName,
          phone: contactNo || whatsApp,
          message,
          project_budget: budget,
          whatsapp: whatsApp,
          location,
          lead_source: leadSource,
        },
      }

      // Only attempt if we have an email
      if (email) {
        try {
          const hsRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(hubspotBody),
          })
          if (!hsRes.ok) {
            const text = await hsRes.text()
            console.error('HubSpot error:', text)
          }
        } catch (err) {
          console.error('HubSpot request failed:', err)
        }
      }
    }

    // Keep existing success response shape
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again.'
      },
      { status: 500 }
    )
  }
}
