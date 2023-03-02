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
export const AnCard = ({ cardNumber, question, answer }) => {
  const [openCard, setOpenCard] = useState(false);
  const cardToRender = openCard ? (
    <CardQuestion question={question} answer={answer} />
  ) : (
    <CardFace number={cardNumber} />
  );
  return <li onClick={() => setOpenCard(true)}>{cardToRender}</li>;
};
