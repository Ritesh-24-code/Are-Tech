import React from 'react'
import "./index.css"
import "animate.css"
import "./ai.css"

import Mail from "./assets/mail.png"
import Git from "./assets/git.png"

import { motion } from "framer-motion"

const contact = () => {
    return (
        <div>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 60
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
                className="up"
            >

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .2 }}
                    className='grid justify-center items-center align-middle text-center gap-2'
                >

                    <span className='name text-[1.3rem] font-bold'>
                        Contact me
                    </span>

                    <span className='text-white text-[1.5rem] font-semibold tracking-wider'>
                        Let's Work Together
                    </span>

                    <span className='text-gray-400 text-[1rem] max-sm:w-[95vw]'>
                        Have a project in mind or want to collaborate?
                        Feel free to reach me.
                    </span>

                </motion.div>

                <div className="down flex-wrap flex justify-evenly items-center align-middle p-5 max-md:gap-5">

                    {/* EMAIL */}
                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -80
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            delay: .3,
                            duration: .7
                        }}

                        whileHover={{
                            y: -8,
                            scale: 1.03
                        }}

                        className='flex justify-center items-center align-middle'
                    >

                        <motion.div
                            whileHover={{
                                rotate: 12,
                                scale: 1.15
                            }}
                        >
                            <img
                                src={Mail}
                                alt=""
                                className='w-15 h-15'
                            />
                        </motion.div>

                        <div className='grid justify-start align-middle items-center'>

                            <motion.span
                                whileHover={{ x: 5 }}
                                className='text-white text-[1.5rem] max-sm:text-[1rem] font-semibold tracking-wide'
                            >
                                Email
                            </motion.span>

                            <span className='text-gray-400 tracking-wide font-medium max-sm:text-[0.8rem]'>
                                ssjr.cdt.402@gmail.com
                            </span>

                        </div>

                    </motion.div>

                    {/* GITHUB */}
                    <motion.a
                        href="https://github.com/Ritesh-24-code"

                        initial={{
                            opacity: 0,
                            x: 80
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            delay: .5,
                            duration: .7
                        }}

                        whileHover={{
                            y: -8,
                            scale: 1.03
                        }}
                    >

                        <div className='flex justify-center items-center align-middle'>

                            <motion.div
                                whileHover={{
                                    rotate: -12,
                                    scale: 1.15
                                }}
                            >
                                <img
                                    src={Git}
                                    alt=""
                                    className='w-15 h-15'
                                />
                            </motion.div>

                            <div className='grid justify-start align-middle items-center'>

                                <motion.span
                                    whileHover={{
                                        x: 5
                                    }}
                                    className='text-white text-[1.5rem] max-sm:text-[1rem] font-semibold tracking-wide'
                                >
                                    Github
                                </motion.span>

                                <span className='text-gray-400 tracking-wide font-medium max-sm:text-[0.8rem]'>
                                    github.com/Ritesh-24-code
                                </span>

                            </div>

                        </div>

                    </motion.a>

                </div>

            </motion.div>

        </div>
    )
}

export default contact