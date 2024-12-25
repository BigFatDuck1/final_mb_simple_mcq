//import React from "react";
import questions from "./questions.json";


function SelectPanel() {
    let questions_array = []; //Subject + Topic
    for (const id in questions) {
        questions_array.push(questions[id]);
    }
    console.log(questions_array);

    return (
        <div>
            <h3>Select question</h3>
            <ol>
                {
                    questions_array.map((item) => {
                        let q_preview = 
                        <li>
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