import styled from "styled-components";
import Sad from "../assets/icon-sad.svg";
import Happy from "../assets/icon-party.svg";
const CongratulationsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: 16px;
    display: flex;
    align-items: center;
  }
  div > img {
    margin-right: 12px;
  }
  div > p {
    font-weight: 700;
    font-size: 18px;
    color: #333333;
  }
`;
const Msg = styled.p`
  width: 222px;
  text-align: center;
  margin-bottom: 14px;
`;
const Congratulations = ({ mood }) => (
  <CongratulationsStyle data-test="finish-text">
    <div>
      <img src={mood ? Happy : Sad} alt="" />
      <p>{mood ? "Parabéns!" : "Putz..."} </p>
    </div>
    <Msg>{mood ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltam alguns... Mas não desanime!"} </Msg>
  </CongratulationsStyle>
);
export default Congratulations;
