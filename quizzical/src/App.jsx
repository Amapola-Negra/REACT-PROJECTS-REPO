import React from "react"
import Question from "./Question.jsx"
import uuid from 'react-uuid'
import {convert, shuffle} from "./Utils.jsx"
export default function App(){
    /**I have to return:
         * question
         ** answers
         *button check answers  
         
    ** I have to count the correct answers and display at the end before the button
    ** The button has to change to "Play Again"
    
         */
        
    const [questions, setQuestions] = React.useState ([])
    const [correctCount, setCorrectCount] = React.useState(0)
    const [endQuiz, setEndQuiz] = React.useState(false)
    const [newGame, setNewGame] = React.useState(false)
    const [start, setStart] = React.useState(false)
    /**First we get all the data */
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5")
            .then(response => response.json())
            .then(data => {                                                       
                setQuestions(data.results.map(item =>{
                    let answers = item.incorrect_answers
                    answers.push(item.correct_answer)
                    shuffle(answers)
                    return {
                        key: uuid(),
                        id: uuid(),
                        question: convert(item.question),
                        correctAnswer: item.correct_answer,
                        answers: answers,
                        answerProvided: "",
                        answered: false,
                        correct: false,
                            
                    }
                }))
            })
    },[newGame])
    //This is the button for all the answers
    function answerBtn(id, answer){
       setQuestions(prevQuestions =>
            prevQuestions.map((question)=>{
                if(question.id === id){
                    return{
                        ...question,
                        answered: true,
                        correct: answer === question.correctAnswer,
                        answerProvided: answer,
                        }
                }
                return question
            })
        )
    }
    /** Once we have answered all the questions we check if they are correct */
    function checkAnswers(){
      const result =  questions.filter(question => question.correct === true)
      setCorrectCount(prevCount => prevCount + result.length)
      setEndQuiz(true)
    } 
     //console.log(correctCount)
     //console.log(endQuiz)
     /**We prepare the scene for a new game */
     function playAgain(){
         //console.log("Play!!!")
         setNewGame(true)
         setEndQuiz(false)
         setCorrectCount(0)
         setQuestions([])
     }
     /**This button triguers the game and hide the introduction */
     function startGame(){
         setStart(true)
     }
    const questionsHtml = questions.map((item) =>(
            <Question
                {...item}
                answerBtn={answerBtn}
                endQuiz={endQuiz}
            />
    ))
    
    return (
        <div className="container">
            {!start && <div className="introduction">
                <img src="QUIZZICAL4.png"></img>
                <button onClick={startGame}>Play</button>
            </div>}
            {start && <div className="game">
                {questionsHtml}
                {endQuiz && <div className="checking">
                    <h3>You scored {correctCount}/5 correct answers</h3>
                    <button onClick={playAgain}>Play again</button>
                </div>}
                {!endQuiz && <button onClick={checkAnswers}>Check Answers</button>}
            </div>}
        </div>
        )
}