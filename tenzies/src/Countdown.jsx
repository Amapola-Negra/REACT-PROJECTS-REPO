import React from "react"

export default function Countdown(props) {
  const { startingMinutes = 3, startingSeconds = 0 } = props
  const [mins, setMinutes] = React.useState(startingMinutes)
  const [secs, setSeconds] = React.useState(startingSeconds)


  let newGame = props.newGame
  let tenzies = props.tenzies
  
  console.log("newGame " + newGame)
  console.log("tenzies " + tenzies)

  React.useEffect(() => {
    
     let myTimer = setTimeout(() => {
        if (secs > 0) {
            setSeconds(prevSecs => prevSecs - 1)
        }
        if (secs === 0) {
           if (mins === 0) {
                clearTimeout(myTimer)
            } else {
                setMinutes(prevMins => prevMins - 1)
                setSeconds(59)
            }
        }
            
      }, 1000);
    if(tenzies){
        clearTimeout(myTimer)
        setTimeout(() =>{
          setMinutes(3)
          setSeconds(0)
        }, 5000)
        
    }
    if(newGame){
      
      setTimeout(myTimer)
    }
    
    
  }, [mins, secs, tenzies, newGame])

  return (
    <div>
      <p>
        {mins}:{secs < 10 ? `0${secs}` : secs}
        
      </p>
      {/*<div> {(mins === 0 && secs === 0) && <div className="endTime">Better luck next time!!</div>}</div>*/}
      
    </div>
      
  )
}