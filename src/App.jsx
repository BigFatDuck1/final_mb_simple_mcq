import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overall_box'>
      <div className="header">
        Header
      </div>
      <div className="main_container">
        <div className="question_panel">
          Mock Question
        </div>
        <div className="select_panel">
          Select question
        </div>
      </div>
    </div>
  )
}

export default App
