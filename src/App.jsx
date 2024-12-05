import { useState } from 'react'
import './App.css'

import QuestionPanel from './QuestionPanel'
import SelectPanel from './SelectPanel'

function App() {
  const [submit, setSubmit] = useState(false);

  let submit_button_classes = ['submit_button submitted'];

  function handleSubmit() {
    if (submit == false) {
      setSubmit(true);
      submit_button_classes = ['submit_button submitted'];
    }
    if (submit == true) {
      setSubmit(false);
      submit_button_classes = ['submit_button'];
    }
}


  return (
    <div className='overall_box'>
      <div className="header">
        Header
      </div>
      <div className="main_container">
      <SelectPanel className="select_panel" />
      <div className="question_pan">
      <QuestionPanel
        question="What is the capital of France?"
        a="Paris"
        b="London"
        c="New York"
        d="Berlin"
        e="Beijing" 
        correct="a"
        explanation="Paris is the capital of France."
        showAnswer={true}
        />
        <button className={submit_button_classes} id="submit_button" onClick={handleSubmit} >Submit</button>
      </div>
      </div>
    </div>
  )
}

export default App
