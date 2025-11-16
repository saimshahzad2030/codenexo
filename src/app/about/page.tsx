import CreativeTeam from '@/components/AboutUsPage/CreativeTeam'
import History from '@/components/AboutUsPage/History'
import Landing from '@/components/AboutUsPage/Landing'
import WhyUs from '@/components/AboutUsPage/WhyUs'
import Navbar from '@/components/Navbar/Navbar'
import TeamSection from '@/components/TeamSection/TeamSection'
import { bitter } from '@/fonts/fonts'
import React from 'react'

const page = () => {
  return (
    <div className={`${bitter.className}`}>
       <Navbar/>
        <Landing/>
        <History/>
        <WhyUs/>
        <TeamSection/>
        </div>
  )
}

export default page