import React from "react"

export default function Timer(props){

const [mins, setMinutes] = React.useState(0)
  const [secs, setSeconds] = React.useState(0)


  let newGame = props.newGame
  let tenzies = props.tenzies
  
  console.log("newGame " + newGame)
  console.log("tenzies " + tenzies)

  React.useEffect(() => {
    
     let myTimer = setTimeout(() => {
        if (secs < 59) {
            setSeconds(prevSecs => prevSecs + 1)
        }
        if (secs === 59){
            setSeconds(0)
            setMinutes(prevMins => prevMins + 1)
        }
            
      }, 1000);
    if(tenzies){
        clearTimeout(myTimer)
        setTimeout(() =>{
          setMinutes(0)
          setSeconds(0)
        }, 5000)
        
    }
    if(newGame){
      
      setTimeout(myTimer)
    }
    
    
  }, [mins, secs, tenzies, newGame])

  return (
      <p>
        {mins}:{secs < 10 ? `0${secs}` : secs}
        
      </p>
      
  )
}