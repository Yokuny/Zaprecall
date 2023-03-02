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
  const [finished, setFinished] = useState(false);
  const [color, setColor] = useState("#000");
  const [icon, setIcon] = useState(0);

  const getUserAnswer = (answer) => {
    if (answer === 1) {
      setIcon(1);
      setColor("#2FBE34");
    } else if (answer === 2) {
      setIcon(2);
      setColor("#FF922E");
    } else if (answer === 3) {
      setIcon(3);
      setColor("#FF3030");
    }
    setOpenCard(false);
    done((prev) => prev + 1);
    setFinished(true);
  };
  const cardToRender = openCard ? (
    <CardQuestion closeCard={getUserAnswer} question={question} answer={answer} />
  ) : (
    <CardFace finished={finished} iconIndex={icon} color={color} openCard={setOpenCard} number={cardNumber} />
  );
  return <li>{cardToRender}</li>;
};
