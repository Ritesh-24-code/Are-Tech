import React, { useEffect, useRef } from 'react'
import "./index.css"
const hr = () => {
      const paraRef = useRef(null)
              const videoRef = useRef(null)
            
              useEffect(() => {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible')
                        observer.unobserve(entry.target) // animate once
                      }
                    })
                  },
                  { threshold: 0.5 }
                )
            
                if (paraRef.current) observer.observe(paraRef.current)
                if (videoRef.current) observer.observe(videoRef.current)
            
                return () => observer.disconnect()
              }, [])
  return (
    <div className=' py-5 flex justify-center items-center align-middle fade-in-section fade-in-delay' ref={paraRef} >
      <hr className="bg-gray-700 border-0 h-[3px] text-gray-500 w-[100vw]  rounded-full "/>
    </div>
  )
}

export default hr
