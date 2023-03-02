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
`;

const QuestionBackFace = ({ answer }) => (
  <QuestionBackFaceStyle>
    <p>{answer}</p>
  </QuestionBackFaceStyle>
);

export default QuestionBackFace;
