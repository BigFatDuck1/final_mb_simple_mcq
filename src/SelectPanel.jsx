//import React from "react";
//import questions from "./questions.json";
import questions from "./med.json"; //TODO: Change this to based on which json is selected
/* eslint-disable react/prop-types */


function SelectPanel({ clickFunction }) {
    let questions_array = []; //Subject + Topic
    for (const id in questions) {
        questions_array.push(questions[id]);
    }

    return (
        <div>
            <h3>Select question</h3>
            <ol>
                {
                    questions_array.map((item) => {
                        let q_preview = 
                        <li className="question_preview_li" onClick={() => {clickFunction(item.questionID)}} key={`question_${item.questionID}_li`} >
                            <h4>{item.subject}</h4>
                            <p>{item.topic}</p>
                        </li>
                        return q_preview;
                    })
                }
            </ol>
        </div>
    )
}

export default SelectPanel;