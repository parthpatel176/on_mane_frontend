import React from "react";

import "./Hero.css";
import TileBackground from "./TileBackground";

const Hero: React.FC = () => {

  return (
    <div className="HeroContainer" id="HeroContainer">
      <TileBackground 
      height={window.outerHeight * 0.7} 
      width={window.innerWidth}
      />
      <div className="HeroTitle">
        On Mane
      </div>
    </div>
  );
}
export default Hero