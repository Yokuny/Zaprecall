import React, { useState } from "react";
import QuestionFace from "./QuestionFace.js";
import QuestionBackFace from "./QuestionBackFace.js";

const CardQuestion = ({ closeCard, question, answer }) => {
  const [rotate, setRotate] = useState(false);

  const Face = rotate ? (
    <QuestionBackFace getUserAnswer={closeCard} answer={answer} />
  ) : (
    <QuestionFace rotateState={setRotate} question={question} />
  );
  return <>{Face}</>;
};

export default CardQuestion;
