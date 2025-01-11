/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'
//import questions from "./questions.json";
import med_q from "./med.json";

import QuestionPanel from './QuestionPanel'
import SelectPanel from './SelectPanel'

let questions = med_q;

function App() {
  const [submit, setSubmit] = useState(false); //Whether the submit button is pressed (answer submitted)
  const [answer, setAnswer] = useState(""); //The answer selected by user i.e. A, B, C, D, E
  const [questionID, setQuestionID] = useState(1); //The current question ID
  const [right_wrong, setCorrectIncorrect] = useState(""); //Whether the answer is correct or incorrect

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
    let checkboxes = document.querySelectorAll('.answer_options_input');
    checkboxes.forEach((item) => item != element ? item.checked = false : null);
    //Check the selected option
    if (element.checked == true) {
      element.checked = true;
    }
    else if (element.checked == false) {
      element.checked = false;
    }
  }

  
  function selectPanelClick(id) {
    //Updates question panel
    setQuestionID(id);
    //Uncheck all checkboxes
    let checkboxes = document.querySelectorAll('.answer_options_input');
    checkboxes.forEach((item) => item.checked = false);
    setAnswer("");
    //Reset submit button
    setSubmit(false);
  }

  let current_question = questions[questionID];

  return (
    <div className='overall_box'>
      <div className="header">
        <h3>Simple Best Answer</h3>
      </div>
      <div className="main_container">
      <div className="select_panel">
        <SelectPanel clickFunction={selectPanelClick} />
      </div>
      <div className="question_panel">
        <QuestionPanel
          question={current_question.question}
          a={current_question.a}
          b={current_question.b}
          c={current_question.c}
          d={current_question.d}
          e={current_question.e}
          correct={current_question.correct}
          explanation={current_question.explanation}
          showAnswer={submit}
          userAnswer={answer}
          checkboxFunc={onCheckboxChange}
          setCorrectIncorrectFunc={setCorrectIncorrect}
          correctIncorrectState={right_wrong}
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
