import "./index.css"
import "animate.css"
import "barba.js"
import Logo from "./assets/logo.png"
const name = () => {
    return (
        <div  className='flex justify-center align-middle items-center   animate__animated  animate__fadeInLeft'>
            <a href="#"  className='flex justify-center align-middle items-center  '>
                <div className='flex justify-center align-middle  items-end translate-y-2'>
                <img src={Logo} alt="" className='w-20 h-20 logo  max-[320px]:w-17 '  />
            </div>
            <div className=' name text-[1.5rem]  max-[365px]:text-[1.2rem] flex justify-center font-bold tracking-wider align-middle items-center  h-fit'>
                <span>Are Tech</span>
            </div>
            </a>
        </div>
    )
}

export default name
