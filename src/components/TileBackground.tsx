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

  // State for background animation
  const [styles, setStyles] = useState(Array(repeatX*repeatY).fill(false));

  // Effect to update background animation array
  useEffect(() => {
    const interval = setInterval(() => {
      setStyles(styles.map(() => 
        {if (Math.random() < 0.02) {
          return true
        } else {
          return false
        }}
        ))
    }, 2000);
    return () => clearInterval(interval);
  }, [styles]);
  
  // Create tiles by going over styles array
  const tiles = styles.map( (style, i) => 
      <motion.div
        className="Tile" 
        key={i}
        animate={style ? {opacity: 0.8, textShadow: '0px 0px 4px #ffffffc1'} : {opacity: 0.1, textShadow: '0px 0px 3px #ffffff0'}} 
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
