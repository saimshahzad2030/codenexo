import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import ContactHero from '@/components/ContactPage/ContactHero'
import ConsultationForm from '@/components/ContactPage/ConsultationForm'
import ContactInfo from '@/components/ContactPage/ContactInfo'
import WhyContact from '@/components/ContactPage/WhyContact'
import ContactFAQ from '@/components/ContactPage/ContactFAQ'
import { bitter } from '@/fonts/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - CodeNexo | Start Your Project Today',
  description: 'Get in touch with CodeNexo for AI automation, web development, and custom software solutions. We typically reply within 24 hours.',
}

const ContactPage = () => {
  return (
    <div className={`${bitter.className} antialiased`}>
      <Navbar />
      <ContactHero />
      <ConsultationForm />
      <WhyContact />
      <ContactInfo />
      <ContactFAQ />
      <Footer />
    </div>
  )
}

export default ContactPage
