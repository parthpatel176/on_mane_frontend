import React, { useEffect } from "react";

import "./CountdownPanel.css";

const CountdownPanel: React.FC = () => {

  // Calculate time until next drop and return as string
  const getCountdown = () => {
    const now = new Date().getTime()
    const timeLeft = dropTime - now
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString().padStart(2, '0')
    const milliseconds = Math.floor((timeLeft % (1000)) / 10).toString().padStart(2, '0')
    return `${days}:${hours}:${minutes}:${seconds}:${milliseconds}`
  }

  const dropTime = new Date("Apr 1, 2023 00:00:00:00").getTime()
  const [countdown, setCountdown] = React.useState<string>(getCountdown())

  useEffect(() => {
    // Start interval to update countdown
    setInterval(() => {
      setCountdown(getCountdown())
    }, 10)
  }, [])

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