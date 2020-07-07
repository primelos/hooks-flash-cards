import React, { useContext } from "react";
import Arrow from "react-arrow";
import ReactCardFlip from "react-card-flip";
import { carouselContext } from "../context";
import get from "lodash/get";
import "./index.css";

function Carousel() {
  const { isFlipped, handleFlip, index, questionsList, handleClickRight, handleClickLeft } = useContext(
    carouselContext
  );
  return (
    <div>
      <Arrow
        className="arrow arrow-left"
        direction="left"
        shaftWidth={10}
        shaftLength={10}
        headWidth={30}
        headLength={15}
        fill="teal"
        stroke="teal"
        strokeWidth={2}
        onClick={handleClickLeft}
      />
      <ReactCardFlip isFlipped={isFlipped}>
        <div key="front" className="flip-card front" onClick={handleFlip}>
          {get(questionsList[index], "question", "Question should be here")}
        </div>
        <div key="back" className="flip-card back" onClick={handleFlip}>
          {get(questionsList[index], "answer", "Answer should be here")}
        </div>
      </ReactCardFlip>
      <Arrow
        className="arrow arrow-right"
        direction="right"
        shaftWidth={10}
        shaftLength={10}
        headWidth={30}
        headLength={15}
        fill="teal"
        stroke="teal"
        strokeWidth={2}
        onClick={handleClickRight}
      />
    </div>
  );
}

export default Carousel;
