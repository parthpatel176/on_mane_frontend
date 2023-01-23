import React from "react";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import "./OpenTub.css";

const OpenTub: React.FC = () => {
  // Sate for sliding in frame
  const [slide, setSlide] = useState(false)
  // State for opening tub
  const [open, setOpen] = useState(false)

  const scrollEffects = () => {
    if (window.scrollY > 40) {setSlide(true)} else {setSlide(false)}
    if (window.scrollY > 450) {setOpen(true)} else {setOpen(false)}
    if (window.scrollY > 1100) {setOpen(false)}
  }

  // Execute scrolling animations
  useEffect(() => {
    window.addEventListener('scroll', scrollEffects)
  }, [])

  return (
    <motion.div className="TubContainer" animate={slide ? {y: -100, opacity: 100} : {y: 0, opacity: 0}} transition={{duration: 0.2}} >
        <div className="H">
          Introducing the OM-1
        </div>
        <motion.div  className="TubWrapper">
          <motion.div  className="BoxTub" animate={open ? {rotate: 0} : {rotate: -90}} transition={{duration: 0.4}} />
          <motion.div  className="BoxLid" animate={open? {x: -300, y: 50, rotate: -25} : {y: 0}} transition={{duration: 0.3}} />
      </motion.div>
    </motion.div >
  )
}
export default OpenTub