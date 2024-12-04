import { useState } from 'react'
import './App.css'

import QuestionPanel from './QuestionPanel'
import SelectPanel from './SelectPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overall_box'>
      <div className="header">
        Header
      </div>
      <div className="main_container">
      <SelectPanel className="select_panel" />
      <QuestionPanel
        question="What is the capital of France?"
        a="Paris"
        b="London"
        c="New York"
        d="Berlin"
        e="Beijing" 
        className="question_panel" />
      </div>
    </div>
  )
}

export default App
