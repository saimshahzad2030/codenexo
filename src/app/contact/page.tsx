import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import ContactHero from '@/components/ContactPage/ContactHero'
import ContactForm from '@/components/ContactPage/ContactForm'
import ContactInfo from '@/components/ContactPage/ContactInfo'
import WhyContact from '@/components/ContactPage/WhyContact'
import ContactFAQ from '@/components/ContactPage/ContactFAQ'
import { bitter } from '@/fonts/fonts'

const ContactPage = () => {
  return (
    <div className={`${bitter.className} antialiased`}>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <WhyContact />
      <ContactInfo />
      <ContactFAQ />
      <Footer />
    </div>
  )
}

export default ContactPage
