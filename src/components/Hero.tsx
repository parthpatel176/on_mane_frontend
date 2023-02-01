import React from "react";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import "./Hero.css";
import { stateStore } from '../pages/Home';
import TileBackground from "./TileBackground";

const Hero: React.FC = () => {
  // State for navbar from imported state store
  const popOutNav = stateStore((state: any) => state.popOutNav)

  // // State for glow style
  // const [glow, setGlow] = useState(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setGlow(!glow)
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [glow]);


  return (
    <div className="HeroContainer">
      <TileBackground />
      <motion.div className="HeroWrapper">
        <motion.div className="HeroTitle">
          On Mane
        </motion.div>
      </motion.div>
    </div>
  );
}
export default Hero