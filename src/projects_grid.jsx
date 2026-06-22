import React from 'react'
import "./index.css"
import "./ai.css"
import "animate.css"

import Gym from "./assets/gym.JPG"
import Bank from "./assets/banking.JPG"
import Shop from "./assets/e_commerce.JPG"
import School from "./assets/school.JPG"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const ProjectsGrid = () => {

    const projects = [
        {
            img: Shop,
            title: "E-Commerce Website",
            tech: "HTML,CSS,JS",
            link: "https://shopkart-brown.vercel.app/"
        },
        {
            img: Gym,
            title: "Gym Website",
            tech: "HTML,CSS,JS",
            link: "https://levelupfitnessspotgym.vercel.app/"
        },
        {
            img: Bank,
            title: "Banking Website",
            tech: "HTML,CSS,JS",
            link: "https://digital-banking-zeta.vercel.app/"
        },
        {
            img: School,
            title: "School Website",
            tech: "HTML,CSS,JS",
            link: "https://high-school-irg9.vercel.app/"
        }
    ]

    const card = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: i * 0.15,
            }
        })
    }

    return (
        <div className='grid justify-center w-full items-center p-5 my-3'>

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .7 }}
                className='name text-center text-[2rem] font-bold tracking-widest'
            >
                FEATURED PROJECTS
            </motion.div>

            {/* Cards */}
            <div className='projects_grid flex justify-evenly items-start w-full flex-wrap max-sm:justify-center py-10 gap-5 my-5'>

                {projects.map((project, i) => (

                    <motion.div
                        key={i}
                        custom={i}
                        variants={card}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{
                            y: -10,
                            scale: 1.03,
                        }}
                        className='projects-card border-2 border-gray-600 hover:scale-102 transition-all bg-gray-700 rounded-3xl p-4 w-fit max-sm:w-[95%]'
                    >

                        {/* Image */}
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                            }}
                            transition={{
                                duration: .4
                            }}
                            className='bg-gray-800 rounded-3xl p-1 flex justify-center items-center'
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className='w-[300px] max-lg:w-[280px] max-sm:w-full h-[190px] rounded-3xl object-cover'
                            />
                        </motion.div>

                        {/* Title */}
                        <div className='text-center py-4'>

                            <motion.span
                                whileHover={{
                                    x: 5
                                }}
                                className=' text-[1.3rem] text-white font-semibold  grid justify-start align-middle items-center'
                            >
                                {project.title}
                            </motion.span>

                            <span className='text-[0.9rem] text-gray-400 tracking-widest grid justify-start align-middle items-center'>
                                {project.tech}
                            </span>

                        </div>

                        {/* Button */}
                        <div className='pb-2'>
                            <motion.a
                                whileTap={{ scale: .95 }}
                                whileHover={{
                                    x: 8
                                }}
                                href={project.link}
                                className='btn btn-primary'
                            >
                                OPEN
                            </motion.a>
                        </div>

                    </motion.div>

                ))}

            </div>

            {/* View All Button */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .8 }}
                className='flex justify-center items-center'
            >
                <motion.div
                    whileHover={{
                        scale: 1.05
                    }}
                >
                    <Link
                        to="/projects"
                        className='btn btn-primary'
                    >
                        View All Projects
                    </Link>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default ProjectsGrid

