import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

import "./ai.css"
import "animate.css"
const landing_para = () => {
    return (
        <div className='flex justify-center align-middle items-center w-fit  z-10'>
            <div className='grid justify-center align-middle items-center w-full gap-[5vh] m-10'>
                <div className='flex justify-center align-middle items-center w-fit'>
                    <h1 className='text-[3rem] font-bold tracking-wider max-[1010px]:text-[2.5rem] max-[1085px]:text-[2.5rem]  max-md:text-[2rem]'>
                        Hi,I'm <span className='name'>
                            Ritesh <br />
                        </span>
                        I Build Modern Web <br /> <span className='name'>
                            Experiences
                        </span>
                    </h1>
                </div>
                <div className=' text-gray-300 text-[1rem] '>
                    <span>
                        Frontend Developer at Are_Tech creating beautiful, <br />
                        responsive and interactive websites using <br /> modern technologies.
                    </span>
                </div>
                <div className=' flex justify-center  align-middle items-center gap-6 w-fit max-md:text-[1rem]'>
                    <div className=' w-fit text-white btn   btn-primary    cursor-none '>
                        <NavLink to="/projects" className=' w-fit cursor-none   '>
                            View&nbsp;Projects
                        </NavLink>
                    </div>
                    <div className=' w-fit text-white btn   btn-outline    cursor-none '>
                        <NavLink to="/#contact" className=' w-fit cursor-none   '>
                            Contact&nbsp;Me
                        </NavLink>
                    </div>
                </div>
                <div className='text-[2rem] flexc justify-center align-middle items-center w-fit  '>
                    <a href="https://github.com/Ritesh-24-code" className='cursor-none p-1'>
                        <FontAwesomeIcon icon={faGithub} className="text-[white] cursor-none hover:-translate-y-1 transition-all duration-300" />

                    </a>
                    <a href="https://www.instagram.com/aretech.official?igsh=MTU3N3VyMjY2bDB5Yg==" className='cursor-none  p-1'>
                        <FontAwesomeIcon icon={faInstagram} className="text-[#E4405F] cursor-none hover:-translate-y-1 transition-all duration-300" />

                    </a>
                    <a href="#" className='cursor-none  p-1'>
                        <FontAwesomeIcon icon={faYoutube} className="text-[#FF0000] cursor-none hover:-translate-y-1 transition-all duration-300" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default landing_para
