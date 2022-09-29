import React from "react"

export default function Countdown(props) {
  const { startingMinutes = 10, startingSeconds = 0 } = props
  const [mins, setMinutes] = React.useState(startingMinutes)
  const [secs, setSeconds] = React.useState(startingSeconds)
  let count = props.count
  React.useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(prevSecs => prevSecs - 1)
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval)
        } else {
          setMinutes(prevMins => prevMins - 1)
          setSeconds(59)
        }
      }
      /** I have to change this when I discover 
       the prop to pass in case the user ends 
       before the countdown
       
       */
      if(count === false){
        setMinutes(mins)
        setSeconds(secs)

      }
    }, 1000)
    return () => {
      clearInterval(sampleInterval)
    }
  })

  return (
        <p>
          {mins}:{secs < 10 ? `0${secs}` : secs}
        </p>
  )
}