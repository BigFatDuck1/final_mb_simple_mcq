//import { useState } from 'react';
/* eslint-disable react/prop-types */



function QuestionPanel({ question, a,b,c,d,e, correct, explanation, showAnswer, userAnswer, checkboxFunc }) {

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
            <h2>{question}</h2>
            <ol type="A">
                {
                    list_of_options.map((item) => {
                        let new_option =   
                        <li key={`option_${object_of_options[item]}`} >
                            <input 
                                type="checkbox" 
                                name={`option_${object_of_options[item]}`} 
                                id={`option_${object_of_options[item]}`} 
                                onChange={() => checkboxFunc(document.getElementById(`option_${object_of_options[item]}`))}
                                className="answer_option"
                                />
                            <label htmlFor={`option_${object_of_options[item]}`} className="option_label">{item}</label>
                        </li>; 
                        return new_option;
                    })
                }
            </ol>
            {
                showAnswer ? 
                <div>
                <h5>{userAnswer.slice(-1)} is {userAnswer == `option_${correct}` ? "correct!" : "incorrect!"}</h5>
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