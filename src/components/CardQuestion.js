import React, { useState } from "react";
import QuestionFace from "./QuestionFace.js";
import QuestionBackFace from "./QuestionBackFace.js";

const CardQuestion = ({ closeCard, question, answer }) => {
  const [rotate, setRotate] = useState(false);

  const Face = rotate ? (
    <QuestionBackFace getUserAnswer={closeCard} answer={answer} data-test="flashcard-text" />
  ) : (
    <QuestionFace rotateState={setRotate} question={question} data-test="flashcard-text" />
  );
  return <>{Face}</>;
};

export default CardQuestion;
