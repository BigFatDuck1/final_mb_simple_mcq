//import { useState } from 'react';
/* eslint-disable react/prop-types */



function QuestionPanel({ question, a,b,c,d,e, correct, explanation, showAnswer }) {

    // const [showAnswer, setShowAnswer] = useState(false);

    let list_of_options = [a,b,c,d,e];
    return (
        <div>
            <h2>{question}</h2>
            <ol type="A">
                {
                    list_of_options.map((item) => {
                        let i = 0;
                        let new_option =  
                        <li key={i} >
                            <input type="checkbox" name="checkbox" />
                            {item}
                        </li>; //TODO: add key properly
                        return new_option;
                    })
                }
            </ol>
            {
                showAnswer ? 
                <div>
                <h5>Correct Answer: {correct}</h5>
                <p>{explanation}</p> 
                </div>
                : 
                <div></div>
                
            }
        </div>
    )
}

export default QuestionPanel;