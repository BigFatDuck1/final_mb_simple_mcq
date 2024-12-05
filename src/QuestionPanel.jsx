import react from 'react';
import { useState } from 'react';

function QuestionPanel({ question, a,b,c,d,e, correct, explanation, showAnswer }) {

    // const [showAnswer, setShowAnswer] = useState(false);

    if (showAnswer == false) {
        return (
            <div>
                <h2>{question}</h2>
                <ol type="A">
                    <li>{a}</li>
                    <li>{b}</li>
                    <li>{c}</li>
                    <li>{d}</li>
                    <li>{e}</li>
                </ol>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>{question}</h2>
                <ol type="A">
                    <li>{a}</li>
                    <li>{b}</li>
                    <li>{c}</li>
                    <li>{d}</li>
                    <li>{e}</li>
                </ol>
                <p>{explanation}</p>
            </div>
        )
    }

}

export default QuestionPanel;