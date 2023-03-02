import styled from "styled-components";
import Correct from "../assets/icon-correct.svg";
import Near from "../assets/icon-near.svg";
import Erro from "../assets/icon-erro.svg";
const icon = [Correct, Near, Erro];

const Footer = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  height: 70px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  p {
    font-size: 18px;
    color: #333333;
  }
`;
const IconArange = styled.div`
  display: flex;
  margin-top: 6px;
  gap: 5px;
`;
const ZapFooter = ({ done, icons, amount }) => (
  <Footer>
    <p>
      {done}/{amount} CONCLUÍDOS
    </p>
    <IconArange>
      {icons.map((iconNumber) => (
        <img src={icon[iconNumber]} alt="" />
      ))}
    </IconArange>
  </Footer>
);
export default ZapFooter;
