import React, { useState } from "react";
import QuestionFace from "./QuestionFace.js";
import QuestionBackFace from "./QuestionBackFace.js";

const CardQuestion = ({ question, answer }) => {
  const [rotate, setRotate] = useState(false);

  const Face = rotate ? (
    <QuestionBackFace answer={answer} />
  ) : (
    <QuestionFace rotateState={setRotate} question={question} />
  );
  return <>{Face}</>;
};

export default CardQuestion;
