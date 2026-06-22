
import React from 'react'
import './index.css'
import "./ai.css"
import "animate.css"

import { motion } from "framer-motion"

const footer = () => {
  return (
    <motion.div

      initial={{
        opacity: 0,
        y: 40
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      viewport={{
        once: true
      }}

      transition={{
        duration: .8
      }}

      className='flex justify-center align-middle items-center  text-center  max-sm:pl-4.5 max-sm:mb-3.5  w-screen'
    >

      <motion.div

        whileHover={{
          scale: 1.02,
        }}

        transition={{
          type: "spring",
          stiffness: 250
        }}

        className='flex justify-center align-middle items-center w-full text-gray-400'
      >

        <motion.span
          animate={{
            opacity: [0.6, 1, 0.6],
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &copy;2026 Are_Tech. All rights reserved by Are_tech.
          Designed and developed by Ritesh
        </motion.span>

      </motion.div>

    </motion.div>
  )
}

export default footer