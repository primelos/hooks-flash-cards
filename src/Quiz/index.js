import React, { useState } from "react";
import "./index.css";
import isEmpty from "lodash/isEmpty";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import { carouselContext } from "../context";

function Quiz() {
  const [questionsList, setQuestionsList] = useState(getQuestionsList());
  const [isFlipped, setIsFlipped] = useState(false);
  const [index, setIndex] = useState(0)
  function handleFlip() {
    setIsFlipped(!isFlipped);
  }
  
  function getQuestionsList() {
    const storageQuestionsList = window.localStorage.getItem("questionsList");
    return storageQuestionsList ? JSON.parse(storageQuestionsList) : [];
  }

  function handleClickRight(){
    setIndex((index + 1) % questionsList.length)
  }
  function handleClickLeft(){
    index === 0 ? setIndex(questionsList.length - 1) : setIndex(index - 1)
  }

  function handleDeleteCard(){
    const newQuestionsList = questionsList.filter((_,i) => index !== i)
    if (index >= newQuestionsList.length || index < 0) setIndex(0)
    setQuestionsList(newQuestionsList)
    window.localStorage.setItem(
      'questionsList',
      JSON.stringify(newQuestionsList)
    )
  }
  

  const carouselContextValue = {
    handleFlip,
    isFlipped,
    questionsList,
    index,
    handleClickRight,
    handleClickLeft
  };

  return (
    <div>
      {!isEmpty(questionsList) ? (
        <div>
          <carouselContext.Provider value={carouselContextValue}>
            <Carousel />
          </carouselContext.Provider>
          <button className='delete-button' onClick={handleDeleteCard}>Delete</button>
        </div>
      ) : (
        <div className='flip-card front'>
          There are no questions available , please click{" "}
          <Link to="/form">here</Link> to add some
        </div>
      )}
    </div>
  );
}

export default Quiz;
