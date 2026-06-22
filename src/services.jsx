

import React from 'react'
import "animate.css"
import "./index.css"
import "./ai.css"

import icon_1 from "./assets/icon_1.png"
import icon_2 from "./assets/icon2.png"
import icon_3 from "./assets/icon3.png"
import icon_4 from "./assets/icon4.png"

import { motion } from "framer-motion"

const services = () => {

    const cards = [
        {
            icon: icon_1,
            title: "Website",
            title2: "Development",
            para: "End-to-End web solutions",
            para2: "with modern technologies."
        },
        {
            icon: icon_2,
            title: "UI/UX",
            title2: "Design",
            para: "Intuitive interfaces and",
            para2: "users experiences."
        },
        {
            icon: icon_3,
            title: "Responsive",
            title2: "Design",
            para: "Pixel perfect on every device.",
            para2: ""
        },
        {
            icon: icon_4,
            title: "React",
            title2: "Application",
            para: "Dynamic web apps with",
            para2: "React."
        }
    ]

    return (
        <div className='grid align-middle items-center'>

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .7 }}
                className='grid p-3 justify-center align-middle items-center text-center'
            >
                <span className='name text-[1.5rem] font-semibold tracking-wider'>
                    Services
                </span>

                <span className='text-white font-semibold tracking-wide text-[2rem]'>
                    What I Offer
                </span>
            </motion.div>

            <div className='flex justify-evenly items-center align-middle w-full gap-5 flex-wrap'>

                {cards.map((item, i) => (
                    <motion.div
                        key={i}

                        initial={{
                            opacity: 0,
                            y: 80,
                            scale: .9
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}

                        viewport={{
                            once: true,
                            amount: .2
                        }}

                        transition={{
                            duration: .7,
                            delay: i * .15
                        }}

                        whileHover={{
                            y: -10,
                            scale: 1.03,
                        }}

                        className='service-card rounded-2xl border-2 border-gray-600 w-[300px] h-fit p-3 grid justify-start project-card align-middle items-center bg-[#020818] gap-4'
                    >

                        {/* Icon */}
                        <motion.div
                            whileHover={{
                                rotate: 10,
                                scale: 1.12,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 250
                            }}
                            className='border-gray-600 bg-gray-900 border-2 rounded-2xl w-fit h-fit'
                        >
                            <img
                                src={item.icon}
                                alt=""
                                className='w-15 h-15'
                            />
                        </motion.div>

                        {/* Title */}
                        <motion.div
                            whileHover={{
                                x: 5
                            }}
                            className='text-white text-[1.5rem] font-semibold tracking-wider text-start'
                        >
                            {item.title}
                            <br />
                            {item.title2}
                        </motion.div>

                        {/* Paragraph */}
                        <div className="para text-gray-500 tracking-wide text-[1rem] W-[10%]">
                            {item.para}
                            <br />
                            {item.para2}
                        </div>

                    </motion.div>
                ))}

            </div>
        </div>
    )
}

export default services