import React, { useState, useEffect } from "react";
import "./index.css";
import isEmpty from "lodash.isempty";

function QuizQuestionForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [questionEntity, setQuestionEntity] = useState({})
  let handleSubmit = (e) => {
    e.preventDefault()
    if(!question || !answer) return
    setQuestionEntity({question, answer})
    setQuestion('')
    setAnswer('')
  }

  function getQuestionsList() {
    const storedQuestionsList = window.localStorage.getItem('questionsList')
    if (storedQuestionsList)
      return [...JSON.parse(storedQuestionsList), questionEntity]
    return [questionEntity]
  }

  function setLocalStorage(){
    if (!questionEntity || isEmpty(questionEntity)) return
    const questionsList = getQuestionsList()
    window.localStorage.setItem('questionsList', JSON.stringify(questionsList))
  }

  useEffect(
    setLocalStorage
  ,[questionEntity])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question-input">Question</label>
        <input
          id="question-input"
          type="text"
          className="display-block"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <label htmlFor="question-input">Answer</label>
        <textarea
          id="answer-input"
          rows="4"
          cols="50"
          className="display-block"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default QuizQuestionForm;
