"use client"
import React from 'react'
import CardSwap, { Card } from '../CardSwap'
import { bitter } from '@/fonts/fonts'
import BlurText from '../BlurText'

const AboutUsSection = () => {
  return (
    <div className={`flex flex-row items-center justify-between ${bitter.className} pl-8`}>
<BlurText
  text="With over 20 years of expertise and a global footprint, our teams collaborate seamlessly to consistently exceed expectations and deliver exceptional value to our diverse clients around the world."
  delay={150}
  animateBy="words"
  direction="top" 
  className="w-6/12 text-2xl mb-8"
/>
        <div className='relative w-5/12 h-[600px] overflow-hidden' >
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card className='p-8 '>
      <h3 className='font-bold text-3xl text-black'>Our Vision</h3>
      <p className='text-md'>
  At Codenexo, our vision is to empower businesses and individuals through cutting-edge digital solutions that inspire innovation, drive growth, and shape a smarter future. We strive to be a global leader in technology by delivering seamless experiences and creating meaningful impact across industries.
</p>
    </Card>
    <Card className='p-8 '>
      <h3 className='font-bold text-3xl text-black'>Our Vision</h3>
      <p className='text-md'>
  At Codenexo, our vision is to empower businesses and individuals through cutting-edge digital solutions that inspire innovation, drive growth, and shape a smarter future. We strive to be a global leader in technology by delivering seamless experiences and creating meaningful impact across industries.
</p>
    </Card>
    <Card className='p-8 '>
      <h3 className='font-bold text-3xl text-black'>Our Vision</h3>
      <p className='text-md'>
  At Codenexo, our vision is to empower businesses and individuals through cutting-edge digital solutions that inspire innovation, drive growth, and shape a smarter future. We strive to be a global leader in technology by delivering seamless experiences and creating meaningful impact across industries.
</p>
    </Card>
    <Card className='p-8 '>
      <h3 className='font-bold text-3xl text-black'>Our Vision</h3>
      <p className='text-md'>
  At Codenexo, our vision is to empower businesses and individuals through cutting-edge digital solutions that inspire innovation, drive growth, and shape a smarter future. We strive to be a global leader in technology by delivering seamless experiences and creating meaningful impact across industries.
</p>
    </Card>
  </CardSwap>
</div>
    </div>

  )
}

export default AboutUsSection