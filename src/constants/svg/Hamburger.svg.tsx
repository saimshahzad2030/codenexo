"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HamburgerSvg: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* SVG Button */}
      <button
        aria-label="Menu"
        onClick={() => setOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer group"
      >
        {/* Top line */}
        <motion.span
          initial={false}
          animate={open ? { rotate: 45, y: 8  } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-10 h-[4px] bg-white rounded origin-center"
        />
        {/* Middle line */}
        <motion.span
          initial={false}
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="block w-10 h-[4px] bg-white rounded my-2"
        />
        {/* Bottom line */}
        <motion.span
          initial={false}
          animate={open ? { rotate: -45, y: -16 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-10 h-[4px] bg-white rounded origin-center"
        />
      </button>

      {/* Dropdown Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute right-0 mt-2 w-40 bg-white/10 backdrop-blur-md  rounded-lg shadow-lg p-3 flex flex-col gap-3 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* You can replace these icons with actual links or SVGs */}
        <div className="flex flex-col space-y-2">
  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 p-2 rounded transition">
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10" />
</svg>
    <span className="text-sm">Home</span>
  </div>

  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 p-2 rounded transition">
   <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3v2.25M14.25 3v2.25M4.5 7.5h15m-12 4.5h9m-9 4.5h9" />
</svg>
    <span className="text-sm">Services</span>
  </div>

  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 p-2 rounded transition">
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20v-2a4 4 0 00-3-3.87M9 20v-2a4 4 0 013-3.87M12 4a4 4 0 100 8 4 4 0 000-8zM5.5 20v-2a4 4 0 013-3.87" />
</svg>

    <span className="text-sm">Team</span>
  </div>

  <div className="flex items-center gap-2 cursor-pointer text-white hover:text-black hover:bg-gray-100/50 dark:hover:bg-gray-800/50 p-2 rounded transition">
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10a8.38 8.38 0 01-.9 3.8l-2.4-2.4a5 5 0 00-7.07 7.07l2.4 2.4A8.38 8.38 0 0110 21a9 9 0 119-11z" />
</svg>
    <span className="text-sm">Contact</span>
  </div>

  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50 p-2 rounded transition">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className=" w-4 h-4" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
</svg>

    <span className="text-sm">About</span>
  </div>
</div>

      </motion.div>
    </div>
  );
};

export default HamburgerSvg;
