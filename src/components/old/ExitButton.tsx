import React from "react";
import './ExitButton.css';

interface ExitButtonProps {
  onClick: () => void
}

const ExitButton: React.FC<ExitButtonProps> = ({onClick}) => {
  return (
    <div className="ExitButtonContainer" onClick={onClick}>
        <div className="VerticalLine" />
        <div className="HorizontalLine" />
      </div>
  )
}
export default ExitButton