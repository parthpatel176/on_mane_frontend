import React from "react";

import "./CountdownPanel.css";

const CountdownPanel: React.FC = () => {

  const getCountdown = () => {
    const now = new Date().getTime()
    const timeLeft = dropTime - now
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
    return `${days}:${hours}:${minutes}:${seconds}`
  }

  const dropTime = new Date("Apr 1, 2023 00:00:00").getTime()
  const [countdown, setCountdown] = React.useState<string>(getCountdown())


  // Start interval to update countdown
  setInterval(() => {
    setCountdown(getCountdown())
  }, 1000)

  return (
    <div className="CountdownContainer">
      <div className="CountdownH2">
        <code>Time until next drop:</code>
      </div>
      <div className="CountdownH1">
        <code>{countdown}</code>
      </div>
    </div>
  );
}
export default CountdownPanel