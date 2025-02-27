
import React from 'react';
import { useState, useRef } from 'react';


import './Quiz.css'
import {data} from '../assets/data';

function Quiz() {
    let [index,setIndex] = useState(0);
    let [question , setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let[result, setResult] = useState(false);

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_arr = [option1,option2,option3,option4];

    const checkAnswer = (e,ans) =>{

        if(lock === false){
            if(question.ans === ans){
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1)
                
            }
            else{
                e.target.classList.add("wrong");
                setLock(true);
                option_arr[question.ans - 1].current.classList.add("correct");
        }
        
            
        }
    }

    let next = () => {
            if(lock === true){
                if(index === data.length - 1){
                    setResult(true);
                    return 0;
                }
                setIndex(++index);
                setQuestion(data[index]);
                setLock(false);
                option_arr.map((option) => {
                    option.current.classList.remove("wrong");
                    option.current.classList.remove("correct");
                    return null;
                })
            }
    }

   const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }
  return (
   
    <div className="container">
        <h1>Quiz-App</h1>
        <hr />
        {result? <></> : <>
            <h2> {index+1}. {question.question}
        </h2>
        <ul>
            <li ref = {option1} onClick={(e) => {checkAnswer(e,1)}}>{question.option1}</li>
            <li  ref = {option2} onClick={(e) => {checkAnswer(e,2)}}>{question.option2}</li>
            <li ref = {option3} onClick={(e) => {checkAnswer(e,3)}}>{question.option3}</li>
            <li ref = {option4} onClick={(e) => {checkAnswer(e,4)}}>{question.option4}</li>
            
        </ul>
        <button onClick={next}>Next</button>

       <div className="index">{index+1} of {data.length} questions</div>
        </>}
            {result ? <>

                <h2>You scored {score} out of {data.length}</h2>
            <button onClick={reset}>Reset</button>
 </> : <></> }
       
    </div>
    
  )
}

export default Quiz








// 🚀 React Quiz App Project 🚀

// I created a dynamic Quiz App in React to reinforce my skills with React hooks and state management. This app presents questions from a data source, tracks the user’s score, and provides instant feedback on answers.

//Key features include:

// ✅ Answer Validation: Highlights correct/incorrect answers instantly, enhancing the user’s learning experience.
// ✅ State Management: Uses useState and useRef for controlled states, including score, question index, and answer validation.
// ✅ Final Score Summary and Reset: After the last question, displays results and offers a reset option for a fresh start.

// This project deepened my React proficiency, especially with components and conditional rendering.
// #ReactJS #WebDevelopment #Frontend #LearningReact #JavaScript