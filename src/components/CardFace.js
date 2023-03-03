import styled from "styled-components";
import React, { useState } from "react";
import Start from "../assets/icon-start.svg";
import Correct from "../assets/icon-correct.svg";
import Near from "../assets/icon-near.svg";
import Erro from "../assets/icon-erro.svg";

const icon = [Start, Correct, Near, Erro];

const CardFaceStyle = styled.div`
  height: 65px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.color};
  text-decoration: ${(props) => props.line && "line-through"};

  &:hover {
    animation: balance 2s infinite;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
  img {
    height: 23px;
    cursor: pointer;
  }
`;

const CardFace = ({ finished, iconIndex, color, number, openCard }) => {
  const [dataTest, setDataTest] = useState("play-btn");
  const [done, setDone] = useState(false);
  if (!done) {
    if (iconIndex !== 0) {
      switch (iconIndex) {
        case 0:
          setDataTest("play-btn");
          break;
        case 1:
          setDataTest("zap-icon");
          break;
        case 2:
          setDataTest("partial-icon");
          break;
        case 3:
          setDataTest("no-icon");
          break;
        default:
          setDataTest("play-btn");
      }
      setDone(true);
    }
  }
  const functionActive = !finished ? () => openCard(true) : undefined;
  return (
    <CardFaceStyle color={color} line={finished}>
      <p data-test="flashcard-text">{`Pergunta ${number}`}</p>
      <img onClick={functionActive} src={icon[iconIndex]} data-test={dataTest} alt="imagem" />
    </CardFaceStyle>
  );
};
export default CardFace;
