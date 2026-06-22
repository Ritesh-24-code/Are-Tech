
import React from 'react'
import "./ai.css"
import "./index.css"
import "animate.css"

import Barbajs from "./assets/barba.png"
import Html from "./assets/html.png"
import Reactjs from "./assets/reactjs.png"
import json from "./assets/json.png"
import Tailwind from "./assets/tailwindcss.png"
import Css from "./assets/css.png"
import js from "./assets/js_5968292.png"
import Animatejs from "./assets/animate.png"
import Github from "./assets/github.png"

import { motion } from "framer-motion"

const skills = [
    Html,
    Css,
    Tailwind,
    js,
    json,
    Barbajs,
    Reactjs,
    Animatejs,
    Github,
]

const skills_bar = () => {

    const iconAnim = {
        hidden: {
            opacity: 0,
            scale: .6,
            y: 40,
        },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: .5,
                delay: i * .08,
            }
        })
    }

    return (
        <motion.div

            initial={{
                opacity: 0,
                y: 80
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

            className='grid justify-center align-middle items-center border-4 rounded-3xl border-gray-600 skills-grid my-10 p-3 mx-4 max-sm:mx-0  max-sm:max-w-[95vw] max-sm:p-0 '
        >

            {/* heading */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .2 }}
                className='text-white tracking-wide text-[1.7rem] font-semibold text-center p-2 max-sm:text-[1rem]'
            >
                Technologies & Tolls I Use
            </motion.div>

            <div className='flex justify-center align-middle items-center'>

                <div className='w-full max-sm:w-fit h-full skill-card flex max-sm:grid flex-wrap justify-evenly max-sm:justify-center max-sm:gap-10 items-center align-center gap-15 border-2 border-white rounded-3xl p-5'>

                    <div className='flex justify-center items-center align-middle gap-10 flex-wrap'>

                        {skills.slice(0, 4).map((img, i) => (
                            <motion.img
                                key={i}
                                src={img}
                                alt=""

                                variants={iconAnim}
                                custom={i}

                                initial="hidden"
                                whileInView="visible"

                                viewport={{
                                    once: true
                                }}

                                whileHover={{
                                    scale: 1.2,
                                    rotate: 8,
                                    y: -10,
                                }}

                                transition={{
                                    type: "spring",
                                    stiffness: 250
                                }}

                                className='skill_icon'
                            />
                        ))}

                    </div>

                    <div className='flex justify-center items-center align-middle gap-10 flex-wrap'>

                        {skills.slice(4).map((img, i) => (
                            <motion.img
                                key={i + 4}
                                src={img}
                                alt=""

                                variants={iconAnim}
                                custom={i + 4}

                                initial="hidden"
                                whileInView="visible"

                                viewport={{
                                    once: true
                                }}

                                whileHover={{
                                    scale: 1.2,
                                    rotate: -8,
                                    y: -10,
                                }}

                                transition={{
                                    type: "spring",
                                    stiffness: 250
                                }}

                                className='skill_icon'
                            />
                        ))}

                    </div>

                </div>

            </div>

        </motion.div>
    )
}

export default skills_bar