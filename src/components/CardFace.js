import styled from "styled-components";

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
  const functionActive = !finished ? () => openCard(true) : undefined;
  return (
    <CardFaceStyle color={color} line={finished}>
      <p data-test="flashcard-text">{`Pergunta ${number}`}</p>
      <img onClick={functionActive} src={icon[iconIndex]} alt="imagem" />
    </CardFaceStyle>
  );
};
export default CardFace;
