import React from "react";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import "./Hero.css";
import { stateStore } from '../pages/Home';
import TileBackground from "./TileBackground";

const Hero: React.FC = () => {
  // State for navbar from imported state store
  const popOutNav = stateStore((state: any) => state.popOutNav)

  return (
    <div className="HeroContainer">
      <div className="HeroWrapper" >
        <TileBackground />
        <motion.div className="HeroTitle" animate={popOutNav ? {y: -100, opacity: 0} : {y: 0}} transition={{duration: 0.1}}>
          On Mane
        </motion.div>
        <motion.div className="HeroSubtitle" animate={popOutNav ? {y: -100, opacity: 0} : {y: 0}} transition={{duration: 0.1}}>
          OM-1
        </motion.div>
      </div>
    </div>
  );
}
export default Hero