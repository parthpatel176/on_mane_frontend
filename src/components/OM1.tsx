import React from "react";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { create } from 'zustand';
import { useStateStore } from '../pages/Home';

import "./OM1.css";

const OM1: React.FC = () => {
  // State for placing OM1 in flex-start
  const [flexEnd, setFlexEnd] = useState(false)
  // State for animation progress
  const [progress, setProgress] = useState(0)
  // // States for locking scroll on animation
  const tubAnimScrollLock = useStateStore(state => state.tubAnimScrollLock)
  const enableTubAnimScrollLock = useStateStore(state => state.enableTubAnimScrollLock)
  const disableTubAnimScrollLock = useStateStore(state => state.disableTubAnimScrollLock)
  // States for title animation
  const [titleAnim, setTitleAnim] = useState({y: 200, opacity: 0})

  // Handle scroll events
  const handleScroll = () => {    
    // Get container and wrapper bounding boxes
    const container: any = document.getElementById("OM1Container")?.getBoundingClientRect()
    const wrapper: any = document.getElementById("OM1Wrapper")?.getBoundingClientRect()
     // If container is in view frane, fix OM1 in place
    if ((container.top <= 0) && (container.bottom > window.innerHeight)) { 
      enableTubAnimScrollLock()
    } else {
      disableTubAnimScrollLock()
    }
    if (container.top > 0) {
      setTitleAnim({
        y: 200 * (container.top / window.innerHeight),
        opacity: 1 - (container.top / window.innerHeight * 1.5),
        // scale: 1 - (container.top / window.innerHeight)
      })
    } else {
      setTitleAnim({
        y: 0,
        opacity: 1,
        // scale: 1
      })
    }
    // If container is above view frame, place OM1 in flex-end
    if (container.top < -100) { setFlexEnd(true) } else { setFlexEnd(false) }
    // Update animation scroll progress
    setProgress((wrapper.top - container.top) / (container.height - wrapper.height))
  }

  // Execute scrolling animations
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="OM1Container" id="OM1Container" style={flexEnd ? {justifyContent: 'flex-end'} : {}}>
      <motion.div className="OM1Wrapper" id="OM1Wrapper" style={tubAnimScrollLock ? {position: 'fixed'} : {position: 'relative'}}>
        <motion.div className="H" animate={titleAnim} transition={{duration: 0}}>
          Introducing the OM-1
        </motion.div>
        <div className="BoxWrapper" id="BoxWrapper">
          <motion.div  className="BoxTub" 
          animate={{rotate: 90 * progress}} transition={{duration: 0}}
          />
          <motion.div  className="BoxLid" 
          animate={{x: -400 * progress, rotate: -85 * progress}} transition={{duration: 0}}
          />
        </div>
      </motion.div>
    </div >
  )
}
export default OM1