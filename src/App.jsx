/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'
import questions from "./questions.json";

import QuestionPanel from './QuestionPanel'
import SelectPanel from './SelectPanel'

function App() {
  const [submit, setSubmit] = useState(false); //Whether the submit button is pressed (answer submitted)
  const [answer, setAnswer] = useState(""); //The answer selected by user i.e. A, B, C, D, E

  async function fetchJSON() {
    const request = new Request("./questions.json");
    const response = await fetch(request);
    const question_json = await response.json();
    console.log(question_json);
  }
  fetchJSON();
  console.log(questions);


  function handleSubmit() {
    if (submit == false) {
      setSubmit(true);
    }
    else if (submit == true) {
      setSubmit(false);
    }
  }

  function onCheckboxChange(element) {
    //Set state
    setAnswer(element.id);
    //Uncheck all other options
    let checkboxes = document.querySelectorAll('.answer_option');
    checkboxes.forEach((item) => item != element ? item.checked = false : null);
    //Check the selected option
    if (element.checked == true) {
      element.checked = true;
    }
    else if (element.checked == false) {
      element.checked = false;
    }
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
          userAnswer={answer}
          checkboxFunc={onCheckboxChange}
          />
          <SubmitButton id="submit_button" click_function={handleSubmit} submit_state={submit} />
      </div>
      <h1>{answer.id}</h1>
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
    <button className={css_class} id={id} onClick={click_function} >{submit_state ? "Reset" : "Submit"}</button>
  )
}

export default App;
