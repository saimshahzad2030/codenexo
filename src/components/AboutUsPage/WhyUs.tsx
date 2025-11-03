import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='p-24 flex flex-row items-center justify-between w-full bg-black/30'>
        <div className='w-5/12 flex flex-col items-start'>
        <h1 className='text-6xl font-bold'>Why Choose Us</h1>
        <p className='mt-6 text-md font-light leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellusei luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum and dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ans ullamcorper mattis, pulvinar dapibus leo. </p>
        <div className='flex flex-col items-start w-full mt-6'>
            <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Brand Identity</p>
            </div>
             <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Web Design & UI</p>
            </div>
             <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Development & CMS</p>
            </div>
             <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Investment Radar</p>
            </div>
             <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Content writing</p>
            </div>
        </div>
        </div>
       <div className="w-6/12 flex flex-col items-start p-8 bg-black/90 shadow-[0_0_90px_rgba(150,150,150,0.1)] rounded-lg">
  <img src={'/why-us.jpg'} className="w-full" />
</div>


    </div>
  )
}

export default WhyUs