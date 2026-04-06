import React from 'react'
import profile from "../assets/KrishnaYadav.jpg";
import { HERO_CONTENT } from '../assets';
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-10 lg:mb-35 overflow-hidden">

      <div className="flex flex-wrap items-center relative z-10">
        
        {/* Left Section */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <motion.h1 
              variants={fadeUp}
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Krishna Yadav
            </motion.h1>

            <motion.span 
              variants={fadeUp}
              className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>

            <motion.p 
              variants={fadeUp}
              className="my-4 max-w-xl py-4 font-light tracking-tighter text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>

          </div>
        </motion.div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-5">
          <div className="flex justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >

              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-sm rounded-2xl shadow-2xl"
                src={profile}
                alt="Krishna Yadav"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero