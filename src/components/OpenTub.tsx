import React from "react";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import "./OpenTub.css";

const OpenTub: React.FC = () => {
  // Sate for sliding in frame
  const [slide, setSlide] = useState(false)
  // State for is in view
  const [inView, setInView] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 40) {setSlide(true)} else {setSlide(false)}

    const element: any = document.getElementById("TubWrapper")
    const rect = element.getBoundingClientRect()
    const isInMiddle = rect.top+150 < window.innerHeight / 2

    if (isInMiddle && window.scrollY < 1000) {
      setInView(true)
    } else {
      setInView(false)
    }
  }

  // Execute scrolling animations
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
    id="TubContainer"
    className="TubContainer" 
    animate={slide ? {y: -100, opacity: 100} : {y: 0, opacity: 0}} 
    transition={{duration: 0.2}}
    >
        <div className="H">
          Introducing the OM-1
        </div>
        <motion.div  
        className="TubWrapper" 
        id="TubWrapper"
        >
          <motion.div  className="BoxTub" animate={inView ? {rotate: 0} : {rotate: -90}} transition={{duration: 0.4}} />
          <motion.div  className="BoxLid" animate={inView ? {x: -300, y: 50, rotate: -25} : {y: 0}} transition={{duration: 0.3}} />
      </motion.div>
    </motion.div >
  )
}
export default OpenTub