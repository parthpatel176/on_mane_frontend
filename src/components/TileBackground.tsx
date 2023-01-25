import React from "react";
import { useEffect, useState } from "react";

import "./TileBackground.css";

const TileBackground: React.FC = () => {

  const repeatX = Math.floor(window.innerWidth * 1.2 / 90)
  const repeatY = Math.floor(window.innerHeight * 0.9 / 35)

  const gridStyle = {
    gridTemplateColumns: `repeat(${repeatX}, 90px)`,
    gridTemplateRows: `repeat(${repeatY}, 35px)`
  }

  let tiles = []
  
  for (let i = 0; i < repeatX*repeatY; i++) {
    tiles.push(<div className="Tile">On Mane</div>)
  }


  


  

  return (
    <div className="Container" style={gridStyle}>
      {tiles}
    </div>
  )
}
export default TileBackground