import React from 'react'
import ElectricBorder from '../ElectricBorder'
import { FaFacebook, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import TeamCard from './TeamCard';
export const teamData = [
  {
    role: "CEO",
    name: "Mubashir Babar",
    image: "/uifaces-human-avatar.jpg",
    experience: "4+ Years Experience",
    description:
      "Visionary leader focused on building high-impact products, scaling talented engineering teams, and driving innovation across AI, Web, and Mobile platforms.",
    socials: {
      facebook: "https://facebook.com/yourprofile",
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
      website: "https://yourwebsite.com"
    },
    skills: ["Leadership", "System Design", "Product Strategy", "AI", "Mobile & Web"]
  },
  {
    role: "Co-Founder / Bitcoin Developer",
    name: "Hamza Khan",
    image: "/uifaces-popular-avatar (3).jpg",

    experience: "2+ Years Experience",
    description:
      "Blockchain enthusiast and Bitcoin developer focused on decentralized apps, smart contracts and secure crypto-based payment systems.",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      website: "https://"
    },
    skills: ["Bitcoin", "Blockchain", "Smart Contracts", "Web3", "Node.js"]
  },
  {
    role: "Python / Django Developer",
    name: "Waqar Ahmed Khan",
    image: "/uifaces-popular-avatar (3).jpg",
    experience: "3+ Years Experience",
    description:
      "Backend engineer specializing in Python, Django, REST APIs, and scalable backend architecture with strong focus on security and data-driven systems.",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      website: "https://"
    },
    skills: ["Python", "Django", "PostgreSQL", "DRF", "Docker", "AWS"]
  },
  {
    role: "Full Stack MERN / Next.js Developer",
    name: "Saim Shahzad",
    image: "/uifaces-popular-avatar (1).jpg",
    experience: "3+ Years Experience",
    description:
      "Full stack engineer building modern, fast and scalable applications using React, Next.js, Node.js and MongoDB — delivering seamless frontend and backend solutions.",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      website: "https://"
    },
    skills: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "API Development"]
  }
];

// const TeamSection = () => {
//   return (
// <div className='flex flex-col items-center w-full p-12'>
//     <div className='grid grid-cols-3 w-full gap-4'>
//            {teamData.map((data,index)=>(
//             <ElectricBorder
//   color="#f0ed35ff"
//   speed={1}
//   chaos={0.2}
//   thickness={5}
//   style={{ borderRadius: 16,padding:'20px' }}
// >
//   <div className='flex flex-col items-start w-full'>
//     <p className=' w-auto  text-white text-xs bg-[#B2BEB5]/10 p-2 px-6   rounded-full border-white '>{data.role}</p>  
//        <h1 className='mt-2 font-bold text-2xl'>{data.name}</h1>
//         <p className='text-xs text-gray-400 mt-2'>
//    {data.description}

//     </p>
//     {/* <div className='flex flex-row items-center  w-full justify-center mt-4'>
         
//          <Image alt='sdsad' loading="lazy" src={data.image} width={128} height={128} className="rounded-full" />

//     </div> */}
//     <div className="flex flex-wrap items-center w-full justify-start mt-4">
//   {data.skills.map((d, i) => (
//     <p
//       key={i}
//       className="w-auto text-white text-xs bg-[#B2BEB5]/10 p-1 px-2 rounded-full border border-gray-700 m-1"
//     >
//       {d}
//     </p>
//   ))}
// </div>
   
    

// <div className="flex flex-row items-center gap-3 mt-4">
//   <Link
//     href="https://facebook.com/yourprofile"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition"
//   >
//     <FaFacebook className="text-blue-500 text-xl" />
//   </Link>

//   <Link
//     href="https://linkedin.com/in/yourprofile"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition"
//   >
//     <FaLinkedin className="text-blue-400 text-xl" />
//   </Link>

//   <Link
//     href="https://github.com/yourprofile"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition"
//   >
//     <FaGithub className="text-white text-xl" />
//   </Link>

//   <Link
//     href="https://yourwebsite.com"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition"
//   >
//     <FaGlobe className="text-green-400 text-xl" />
//   </Link>
// </div>
//   </div>
// </ElectricBorder>

// //   <div className='flex flex-col items-start w-full border border-[#f0ed35ff] rounded-xl p-8'>
// //     <p className=' w-auto  text-white text-xs bg-[#B2BEB5]/10 p-2 px-6   rounded-full border-white '>{data.role}</p>  
// //        <h1 className='mt-2 font-bold text-2xl'>{data.name}</h1>
// //         <p className='text-xs text-gray-400 mt-2'>
// //    {data.description}

// //     </p>
// //     <div className='flex flex-row items-center  w-full justify-center mt-4'>
         
// //          <img src={data.image} className='w-32 h-auto rounded-full'/>
// //     </div>
// //     <div className="flex flex-wrap items-center w-full justify-start mt-4">
// //   {data.skills.map((d, i) => (
// //     <p
// //       key={i}
// //       className="w-auto text-white text-xs bg-[#B2BEB5]/10 p-1 px-2 rounded-full border border-gray-700 m-1"
// //     >
// //       {d}
// //     </p>
// //   ))}
// // </div>
   
    

// // <div className="flex flex-row items-center gap-3 mt-4">
// //   <Link
// //     href="https://facebook.com/yourprofile"
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition"
// //   >
// //     <FaFacebook className="text-blue-500 text-xl" />
// //   </Link>

// //   <Link
// //     href="https://linkedin.com/in/yourprofile"
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition"
// //   >
// //     <FaLinkedin className="text-blue-400 text-xl" />
// //   </Link>

// //   <Link
// //     href="https://github.com/yourprofile"
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition"
// //   >
// //     <FaGithub className="text-white text-xl" />
// //   </Link>

// //   <Link
// //     href="https://yourwebsite.com"
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition"
// //   >
// //     <FaGlobe className="text-green-400 text-xl" />
// //   </Link>
// // </div>
// //   </div> 
//            ))}
  
//     </div>
// </div>
//   )
// }
export default function TeamSection( ) {
  return (
    <div className='flex flex-col items-center w-full p-12'> 
    <h1 className='text-4xl font-bold mb-8 mt-2'>Our Team</h1>
    <div className="grid grid-cols-3 w-full gap-4 will-change-transform">
      {teamData.map((data, index) => (
        <TeamCard key={index} data={data} />
      ))}
    </div>
    </div>
  );
}
// export default TeamSection