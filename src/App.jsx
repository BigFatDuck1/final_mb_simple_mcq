import { useState } from 'react'
import './App.css'

import QuestionPanel from './QuestionPanel'
import SelectPanel from './SelectPanel'

function App() {
  const [submit, setSubmit] = useState(false);

  function handleSubmit() {
    if (submit == false) {
      setSubmit(true);
    }
    else if (submit == true) {
      setSubmit(false);
    }
    console.log(submit)
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
        <SubmitButton id="submit_button" click_function={handleSubmit} submit_state={submit} />
      </div>
      </div>
    </div>
  )
}

function SubmitButton( { click_function, id, submit_state }) {
    
  let css_class = "";

  if (submit_state == true) {
    css_class = "submit_button submitted";
  }
  else {
    css_class = "submit_button";
  }

  return (
    <button className={css_class} id={id} onClick={click_function} >Submit</button>
  )
}

export default App
