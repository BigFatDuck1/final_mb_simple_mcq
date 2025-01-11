//import { useState } from 'react';
/* eslint-disable react/prop-types */



function QuestionPanel({ question, a,b,c,d,e, correct, explanation, showAnswer, userAnswer, checkboxFunc, setCorrectIncorrectFunc, correctIncorrectState }) {

    // const [showAnswer, setShowAnswer] = useState(false);
    let list_of_options = [a,b,c,d,e];
    let indices = ["A", "B", "C", "D", "E"];
    let object_of_options = {};
    let i = 0;
    list_of_options.forEach((item) => {
        object_of_options[item] = indices[i];
        i++;
    })
    return (
        <div>
            <h4>{question}</h4>
            <ol className="answer_options">
                {
                    list_of_options.map((item) => {
                        let new_option =   
                        <li key={`option_${object_of_options[item]}`} className="answer_options_li" >
                            <input 
                                type="checkbox" 
                                name={`option_${object_of_options[item]}`} 
                                id={`option_${object_of_options[item]}`} 
                                onChange={() => checkboxFunc(document.getElementById(`option_${object_of_options[item]}`))}
                                className="answer_options_input"
                                />
                            <p className="abcde_label">{object_of_options[item]}.</p>
                            <label htmlFor={`option_${object_of_options[item]}`} className="option_label">{item}</label>
                        </li>; 
                        return new_option;
                    })
                }
            </ol>
            {
                showAnswer ? 
                <div>
                <h5 className={correctIncorrectState}>{userAnswer.slice(-1)} is {userAnswer == `option_${correct}` ? "CORRECT!" : "incorrect."}</h5>
                {   //Updates state
                    userAnswer == `option_${correct}` ? 
                    setCorrectIncorrectFunc("correct") 
                    : 
                    setCorrectIncorrectFunc("incorrect")
                }
                <h5>The correct answer is {correct}</h5>
                <p>{explanation}</p> 
                </div>
                : 
                <></>
                
            }
        </div>
    )
}

export default QuestionPanel;