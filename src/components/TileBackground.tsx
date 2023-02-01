import React from "react";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

import "./TileBackground.css";

const TileBackground: React.FC = () => {
  // Set tile grid dimensions to fill screen based on window size
  const repeatX = Math.floor(window.innerWidth * 1.2 / 90)
  const repeatY = Math.floor(window.innerHeight * 0.9 / 35)
  const gridStyle = {
    gridTemplateColumns: `repeat(${repeatX}, 90px)`,
    gridTemplateRows: `repeat(${repeatY}, 35px)`,
  }

  // Convert x and y to array index
  const xyToIndex = (x: number, y: number) => {
    return x + y * repeatX
  }
  // Convert array index to x and y
  const indexToXY = (i: number) => {
    return [i % repeatX, Math.floor(i / repeatX)]
  }

  // Equation for sine wave
  const sinWave = (x: number, time: number) => {
    const amplitude = 5
    const frequency = 0.5
    const phase = time % repeatX

    return Math.floor(amplitude * Math.sin(frequency * x + phase))
  }

  // State for background animation
  const [styles, setStyles] = useState(Array(repeatX*repeatY).fill(false));

  // Effect to update background animation array
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const time = Date.now() / 1000
  //     // Array of numbers of length repeatX
  //     let yArray = Array(repeatX)
  //     for (let x = 0; x < repeatX; x++) {
  //       yArray[x] = sinWave(x, time)
  //     }
  //     // If coordinate is on sine wave, set style to true
  //     setStyles(styles.map((style, i) => {
  //       const x = indexToXY(i)[0]
  //       const y = indexToXY(i)[1]
  //       if (yArray[x] === y - Math.floor(repeatY / 2)){
  //         return true
  //       } else {
  //         return false
  //       }
  //     }))
  //   }, 200);
  //   return () => clearInterval(interval);
  // }, [styles]);
  useEffect(() => {
    const interval = setInterval(() => {
      setStyles(styles.map((style, j) => {
        if (Math.random() < 0.05) {
          return true
        } else {
          return false
        }
      }))
    }, 1000);
    return () => clearInterval(interval);
  }, [styles]);
  
  // Create tiles by going over styles array
  const tiles = styles.map((style, i) => 
      <motion.div
        className="Tile" 
        key={i}
        // style={{opacity: style}}
        animate={style ? {opacity: 0.8, textShadow: '0px 0px 4px #ffffffc1', fontSize: '1.5em'} : {opacity: 0.1, textShadow: '0px 0px 3px #ffffff0', fontSize: '1em'}} 
        transition={{duration: 2, ease: 'easeInOut'}}
      >
        On Mane
      </motion.div>
    )

  return (
    <div className="Container" style={gridStyle}>
      {tiles}
    </div>
  )
}
export default TileBackground
