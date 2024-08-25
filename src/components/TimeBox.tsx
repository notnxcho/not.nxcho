const TimeBox = () => {
  return (
    <div className="time-box">
        <span>MONTEVIDEO, URUGUAY</span>
        <div className="wrap">
            <div className="line"></div>
            <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Montevideo' }).replace(":", ".")}</span>
        </div>
    </div>
  )
}

export default TimeBox