import React from "react";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import "./OM1.css";

const OM1: React.FC = () => {
  // Sate for sliding in frame
  const [slide, setSlide] = useState(false)
  // State for is in view
  const [fixView, setFixView] = useState(false)
  // State for placing OM1 in flex-start
  const [flexEnd, setFlexEnd] = useState(false)
  // State for animation progress
  const [progress, setProgress] = useState(0)

  // Handle scroll events
  const handleScroll = () => {
    // Slide in OM1
    if (window.scrollY > 300) {setSlide(true)} else {setSlide(false)}
    // Get container and wrapper bounding boxes
    const container: any = document.getElementById("OM1Container")?.getBoundingClientRect()
    const wrapper: any = document.getElementById("OM1Wrapper")?.getBoundingClientRect()
    // If container is in view frane, fix OM1 in place
    if ((container.top < 0) && (container.bottom > window.innerHeight)) { 
      setFixView(true)
      // Update animation scroll progress
      setProgress((wrapper.top - container.top) / (container.height - wrapper.height))
    } else {
      setFixView(false)
    }
    
    // If container is above view frame, place OM1 in flex-end
    if (container.top < 0) { setFlexEnd(true) } else { setFlexEnd(false) }
  }

  // Execute scrolling animations
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
    id="OM1Container"
    className="OM1Container"
    style={flexEnd ? {justifyContent: 'flex-end'} : {}}
    >
      <motion.div 
      className="OM1Wrapper" 
      id="OM1Wrapper" 
      style={fixView ? {position: 'fixed', top: '0%', bottom: '0%'} : {}}
      >
        <motion.div className="H" animate={slide ? {y: 0, opacity: 100} : {y: +100, opacity: 0}} transition={{duration: 0.1}}>
          Introducing the OM-1
        </motion.div>
        <div className="BoxWrapper" id="BoxWrapper">
          <motion.div  className="BoxTub" 
          animate={{rotate: 90 * progress}} transition={{duration: 0}}
          />
          <motion.div  className="BoxLid" 
          animate={{x: -300 * progress, y: 50 * progress, rotate: -25 * progress}} transition={{duration: 0}}
          />
        </div>
      </motion.div>
    </div >
  )
}
export default OM1