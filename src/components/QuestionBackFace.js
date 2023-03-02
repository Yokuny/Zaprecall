import styled from "styled-components";

const QuestionBackFaceStyle = styled.div`
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
  div {
    position: absolute;
    left: 0px;
    bottom: 10px;

    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  div > button > p {
    font-size: 12px;
    text-align: center;
    color: #ffffff;
  }
`;
const UserAnswer = styled.button`
  border: 0px transparent;
  width: 85.17px;
  height: 37.17px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    animation: balance 2s infinite, flicker 2s infinite;
  }
`;
const QuestionBackFace = ({ getUserAnswer, answer }) => (
  <QuestionBackFaceStyle>
    <p>{answer}</p>
    <div>
      <UserAnswer onClick={() => getUserAnswer(3)} color={"#FF3030"}>
        <p>Não lembrei</p>
      </UserAnswer>
      <UserAnswer onClick={() => getUserAnswer(2)} color={"#FF922E"}>
        <p>Quase não lembrei</p>
      </UserAnswer>
      <UserAnswer onClick={() => getUserAnswer(1)} color={"#2FBE34"}>
        <p>Zap!</p>
      </UserAnswer>
    </div>
  </QuestionBackFaceStyle>
);

export default QuestionBackFace;
