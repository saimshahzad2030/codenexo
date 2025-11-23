import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

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
    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, and message are required.'
        },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()

    // Log submission details (retain existing logging style)
    console.log('=== Contact/Consultation Form Submission ===')
    console.log('Timestamp:', timestamp)
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

    // HubSpot integration (non-blocking)
    const token = process.env.HUBSPOT_ACCESS_TOKEN
    if (!token) {
      console.error('Missing HUBSPOT_ACCESS_TOKEN')
    } else {
      // Split name
      const [firstname, ...rest] = fullName.trim().split(' ')
      const lastname = rest.join(' ') || ''

      // Build enhanced message with custom fields appended
      const enhancedMessage = `${message}

--- Additional Details ---
Budget: ${budget || 'N/A'}
Location: ${location || 'N/A'}
WhatsApp: ${whatsApp || 'N/A'}
Lead Source: ${leadSource}
Submitted: ${timestamp}`

      // Use only standard HubSpot properties to avoid errors
      const hubspotBody = {
        properties: {
          email,
          firstname,
          lastname,
          company: companyName || 'N/A',
          phone: contactNo || whatsApp || '',
          message: enhancedMessage,
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
          } else {
            console.log('✓ HubSpot contact created/updated successfully')
          }
        } catch (err) {
          console.error('HubSpot request failed:', err)
        }
      }
    }

    // Send email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    const notifyTo = process.env.NOTIFY_TO_EMAIL
    const notifyFrom = process.env.NOTIFY_FROM_EMAIL

    if (resendApiKey && notifyTo && notifyFrom) {
      try {
        const resend = new Resend(resendApiKey)

        const emailHtml = `
          <h2>New Website Lead</h2>
          <p><strong>Lead Source:</strong> ${leadSource}</p>
          <hr />
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company Name:</strong> ${companyName || 'N/A'}</p>
          <p><strong>Contact No:</strong> ${contactNo || 'N/A'}</p>
          <p><strong>WhatsApp:</strong> ${whatsApp || 'N/A'}</p>
          <p><strong>Location:</strong> ${location || 'N/A'}</p>
          <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr />
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          ${file ? `<p><strong>File Uploaded:</strong> ${file.name} (${file.size} bytes)</p>` : ''}
        `

        await resend.emails.send({
          from: notifyFrom,
          to: notifyTo,
          subject: `New website lead – ${leadSource}`,
          html: emailHtml,
        })

        console.log('✓ Email notification sent successfully')
      } catch (err) {
        console.error('Email notification error:', err)
      }
    } else {
      console.warn('Resend email notification skipped: missing env vars')
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
