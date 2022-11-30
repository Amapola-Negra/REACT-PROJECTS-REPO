import React from "react"
import uuid from 'react-uuid'
import {convert} from "./Utils.jsx"
export default function Question(props){
    //console.log(props.endQuiz)
    let answerItems = props.answers.map((answer) => {
        let styles = {
            backgroundColor: props.answerProvided === answer ? "#caf0f8" : "transparent"
        }
        let resultStyles = {
            backgroundColor: answer === props.correctAnswer
          ? "#e9edc9"
          : answer === props.answerProvided
          ? "#fcd5ce"
          : "transparent",
        }
        return (
            <div 
                key={uuid()}
                style={!props.endQuiz ? styles : resultStyles}
                className="answer-btn"
                onClick={()=>props.answerBtn(props.id, answer)}
            >
                {convert(answer)}
            </div>
            )
    })
   
    return (
        <div className="question-items">
            <h4>{props.question}</h4>
            <div className="answers">{answerItems}</div>
        </div>
        )
}