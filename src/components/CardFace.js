import PlayIcon from "../assets/play.svg";
import styled from "styled-components";

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

const CardFace = ({ openCard, number }) => (
  <CardFaceStyle>
    <p>{`Pergunta ${number}`}</p>
    <img onClick={() => openCard(true)} src={PlayIcon} alt="imagem" />
  </CardFaceStyle>
);
export default CardFace;
