import styled from "styled-components";
import Rotate from "../assets/icon-rotate.svg";

const QuestionFaceStyle = styled.div`
  height: 131px;
  padding: 18px 15px;
  box-sizing: border-box;
  border-radius: 5px;

  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

  position: relative;
  p {
    font-size: 18px;
    color: #333333;
  }
  img {
    width: 30px;
    height: 20px;

    position: absolute;
    bottom: 5px;
    right: 15px;
    cursor: pointer;
  }
`;

const QuestionFace = ({ rotateState, question }) => (
  <QuestionFaceStyle>
    <p>{question}</p>
    <img onClick={() => rotateState(true)} src={Rotate} alt="imagem" data-test="turn-btn" />
  </QuestionFaceStyle>
);
export default QuestionFace;
