import styled from "styled-components";
import CardQuestion from "./CardQuestion";
import PlayIcon from "../assets/play.svg";
import RotateIcon from "../assets/rotate.svg";
export const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-bottom: calc(70px + 25px);
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px;
    width: 300px;
    height: 65px;
    box-sizing: border-box;

    background: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    cursor: pointer;
  }
  li:hover {
    animation: balance 2s infinite;
  }
  li p {
    font-size: 16px;
    font-weight: 700;
  }
  li img {
    height: 23px;
  }
`;
export const AnCard = ({ question }) => (
  <li>
    <p>{question}</p>
    <img src={PlayIcon} alt="imagem" />
    <CardQuestion>
      <p>O que é JSX?</p>
      <img src={RotateIcon} alt="jsx" />
    </CardQuestion>
  </li>
);
