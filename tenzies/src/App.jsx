import React from "react"
import Die from "./Die.jsx"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import Countdown from "./Countdown.jsx"
export default function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rolls, setRolls] = React.useState(0)
    const [play, setPlay] = React.useState(false)
    const [count, setCount] = React.useState(true)

    function start(){
        setPlay(true)
    }
    
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        let randomNum = Math.ceil(Math.random() * 6)
        let dots = []
        /**Create same number of dots as randomNum */
        for(let i=0; i< randomNum; i++){
            dots.push(<div className="dot" key={nanoid()}></div>)
        }
       
        return {
            value: randomNum,
            isHeld: false,
            id: nanoid(),
            dots: dots
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        setRolls(prevRolls => prevRolls +1)
        if(!tenzies) {
            setCount(true)
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setRolls(0)
            setCount(false)
        }
        
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
   
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
            dots={die.dots}
        />
    ))
    
    return (
        <div className="main">
            {/** conditional rendering game/intro screens*/}
            { play && <div className="game">
                {tenzies && <Confetti />}
                <h1 className="title">Tenzies</h1>
                <div className="infos">
                    <div className="instructions">
                    <h3>Rolls</h3>
                    <h2 id="info-roll" >{rolls}</h2>
                    </div>
                    <div className="instructions time">
                    <h3>Time</h3>
                   <Countdown />
                    </div>
                </div>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button 
                    className="roll-dice" 
                    onClick={rollDice}
                >
                    {tenzies ? "New Game" : "Roll"}
                </button>
            </div>}
            {!play && <div className="intro">
                <img className="intro-img" src="/TENZIES.png"/>
                <p>Roll until all dice are the same.</p><p> Click each die to freeze it at its current value between rolls.</p>
                <button className="roll-dice" onClick={start}>Play</button>
            </div>}
            
        </div>
        
        
    )
}