import React from "react";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

import "./TileBackground.css";

type TileBackgroundProps = {
  height: number
  width: number
}

const TileBackground: React.FC<TileBackgroundProps> = ({height, width}: TileBackgroundProps) => {

  // Function to generate random integer between min and max (inclusive)
  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Set tile grid dimensions to fill screen based on window size
  const repeatX = Math.floor(width * 1.1 / 90) - 1
  const repeatY = Math.floor(height / 35) - 1
  const gridStyle = {
    gridTemplateColumns: `repeat(${repeatX}, 90px)`,
    gridTemplateRows: `repeat(${repeatY}, 35px)`,
  }

  // Convert x and y to array index
  const xyToIndex = (x: number, y: number) => {
    return x + y * repeatX
  }

  // State for background animation
  const [styles, setStyles] = useState(Array(repeatX*repeatY).fill(false))

  // Set initial background animation frames
  const midX = Math.floor(repeatX / 2)
  const midY = Math.floor(repeatY / 2)
  let animationFrames: Array<Array<number>> = []

  // Create 10 frames
  for (let i = 0; i < 10; i++) {
    // Create random number of tiles to animate in each frame
    let frame: Array<number> = []
    for (let j = 0; j < randomInt(10, 20); j++) {
      let valid = false
      while (!valid) {
        const x = randomInt(0, repeatX - 1)
        const y = randomInt(0, repeatY - 1)
        if (Math.abs(x - midX) < 5 && Math.abs(y - midY) < 3) {
          continue
        }
        if (frame.includes(xyToIndex(x, y))) {
          continue
        }
        valid = true
        frame.push(xyToIndex(x, y))
      }
    }
    animationFrames.push(frame)
  }

  // Effect to update background animation array
  useEffect(() => {
    const interval = setInterval(() => {
      const frame = animationFrames[Math.floor(Math.random() * animationFrames.length)]
      setStyles(styles.map((style, i) => frame.includes(i) ? true : false))
    }, 500)
    return () => clearInterval(interval)
  }, [styles])

  // Create tiles by going over styles array
  const tiles = styles.map((style, i) => 
    <motion.div
    className="Tile" 
    key={i}
    animate={style ? {opacity: 0.6, textShadow: '0px 0px 4px #ffffffc1'} : {opacity: 0.1, textShadow: '0px 0px 3px #ffffff0'}} 
    transition={{duration: 1, ease: 'easeInOut'}}
    >
      On Mane
    </motion.div>
  )

  return (
    <div className="Container" id="Container1" style={gridStyle}>
      {tiles}
    </div>
  )
}
export default TileBackground
