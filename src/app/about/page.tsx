import History from '@/components/AboutUsPage/History'
import Landing from '@/components/AboutUsPage/Landing'
import WhyUs from '@/components/AboutUsPage/WhyUs'
import Navbar from '@/components/Navbar/Navbar'
import TeamSection from '@/components/TeamSection/TeamSection'
import Footer from '@/components/Footer/Footer'
import { bitter } from '@/fonts/fonts'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - CodeNexo | Expert Software Development Team',
  description: 'Meet the CodeNexo team. We build AI-powered automation, full-stack applications, and custom software with deep technical expertise and transparent collaboration.',
}

const page = () => {
  return (
    <div className={`${bitter.className}`}>
       <Navbar/>
        <Landing/>
        <History/>
        <WhyUs/>
        <TeamSection/>
        <Footer/>
        </div>
  )
}

export default page