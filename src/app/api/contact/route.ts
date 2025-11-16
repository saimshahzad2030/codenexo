import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Log the contact form submission
    console.log('=== Contact Form Submission ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Full Name:', data.fullName)
    console.log('Email:', data.email)
    console.log('Company:', data.company || 'N/A')
    console.log('Project Type:', data.projectType)
    console.log('Budget:', data.budget)
    console.log('Timeline:', data.timeline)
    console.log('Message:', data.message)
    console.log('Heard From:', data.heardFrom || 'N/A')
    console.log('Consent:', data.consent)
    console.log('================================')

    // TODO: In production, you would:
    // 1. Send email notification using a service like SendGrid, Resend, or Nodemailer
    // 2. Store submission in a database
    // 3. Send auto-response email to the user
    // 4. Integrate with CRM (e.g., HubSpot, Salesforce)
    
    // Example with email service (commented out):
    // await sendEmail({
    //   to: 'contact@codenexo.com',
    //   subject: `New Contact Form: ${data.projectType}`,
    //   html: generateEmailTemplate(data)
    // })

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
