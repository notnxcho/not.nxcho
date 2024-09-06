import { useState, useEffect } from 'react'

const TimeBox = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/Montevideo'
      }).replace(":", "."))
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="time-box">
      <span>MONTEVIDEO, URUGUAY</span>
      <div className="wrap">
        <div className="line"></div>
        <span>{time}</span>
      </div>
    </div>
  )
}

export default TimeBox