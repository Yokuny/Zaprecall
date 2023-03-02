import React, { useState } from "react";
import styled from "styled-components";
import CardFace from "./CardFace";
import CardQuestion from "./CardQuestion";

export const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-bottom: calc(70px + 25px);

  li {
    width: 300px;
    height: auto;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;
export const AnCard = ({ done, cardNumber, question, answer }) => {
  const [openCard, setOpenCard] = useState(false);
  const getUserAnswer = (answer) => {
    if (answer === 1) {
      console.log("acertou");
    } else if (answer === 0) {
      console.log("quase acertou");
    } else if (answer === -1) {
      console.log("errou");
    }
    setOpenCard(false);
    done((prev) => prev + 1);
  };
  const cardToRender = openCard ? (
    <CardQuestion closeCard={getUserAnswer} question={question} answer={answer} />
  ) : (
    <CardFace openCard={setOpenCard} number={cardNumber} />
  );
  return <li>{cardToRender}</li>;
};
