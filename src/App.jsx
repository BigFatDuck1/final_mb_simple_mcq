/* eslint-disable react/prop-types */

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
      <div className="select_panel">
        <SelectPanel />
      </div>
      <div className="question_panel">
        <QuestionPanel
          question="What is the capital of France?"
          a="Paris"
          b="London"
          c="New York"
          d="Berlin"
          e="Beijing" 
          correct="A"
          explanation="Paris is the capital of France."
          showAnswer={submit}
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

export default App;
