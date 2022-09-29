import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "black"
    }
    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >  {/*Here we change the number for dots*/}
            <div className={`die-num face-${props.value}`}>
            {props.dots}
            </div>
            
        </div>
    )
}