import "./index.css"
import "animate.css"
import Para from "./landing_para.jsx"
import Image from "./landing_image.jsx"
const landing_page = () => {
    return (
        <div className='flex justify-evenly items-bottom h-[120vh] max-lg:my-20 align-middle       max-md:grid  max-md:justify-start'>
            <div className='animate__animated animate__fadeInLeft  flex justify-center align-middle items-center '> 
                <Para />
            </div>
            <div className='animate__animated animate__fadeInRight   flex justify-center align-middle items-center    max-sm:w-full max-sm:translate-x-5   '>
                <Image />
            </div>
        </div>
    )
}

export default landing_page
