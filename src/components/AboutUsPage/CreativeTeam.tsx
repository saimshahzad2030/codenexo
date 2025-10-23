import React from 'react'

const CreativeTeam = () => {
  return (
 <div className='p-24 flex flex-col items-center  w-full bg-black/30'>
      <h1 className='font-bold text-6xl'>Creative Member</h1>
      <p className='mt-2 font-light text-lg'>Our Team Members are essential part of our growth</p>
      <div className='grid grid-cols-3 gap-4 w-full mt-6'>
        <div className='flex flex-col items-center w-full bg-black/40 rounded-md p-4'>
            <img src={'/new-team-01.png'}/>
            <p className='mt-6 font-bold text-lg'>Saim Shahzad</p>
           <p className='text-sm font-light mt-2'>Mern Stack Developer</p>
        </div>
        <div className='flex flex-col items-center w-full bg-black/40 rounded-md p-4'>
            <img src={'/new-team-01.png'}/>
             <p className='mt-6 font-bold text-lg'>Waqar Ahmed Khan</p>
            <p className='text-sm font-light mt-2'>Django Developer</p>
        </div>
        <div className='flex flex-col items-center w-full bg-black/40 rounded-md p-4'>
            <img src={'/new-team-01.png'}/>
            <p className='mt-6 font-bold text-lg'>Lorem Ipsum</p>
            <p className='text-sm font-light mt-2'>Lorem Ipsum Developer</p>
        </div>
      </div>

    </div>
  )
}

export default CreativeTeam