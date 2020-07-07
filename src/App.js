import React from "react";
import "./App.css";
import QuizQuestionForm from './QuizForm'
import Quiz from './Quiz'
import { Route, Redirect, Link } from 'react-router-dom'
import Carousel from './Carousel'

function App() {
  return (
    
  <div className="App" >
    <header>
      <Link to='/quiz' className='link'>
        <h1>Quiz</h1>
        <Link to='/form'>
          <h1>Add Questions</h1>
        </Link>
      </Link>
    </header>
    <Route exact path='/' render={() =><Redirect to='/quiz' />} />
    <Route exact path='/quiz' component={Quiz}/>
    <Route exact path='/form' component={QuizQuestionForm} />

  </div>
  )
}
  
export default App;
