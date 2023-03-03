import styled from "styled-components";
import Congratulations from "./Congratulations.js";
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
  height: ${(props) => (props.margin ? "171px" : "70px")};
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
const ZapFooter = ({ done, amount, icons, congrats, margin }) => {
  return (
    <Footer margin={margin}>
      {congrats > 0 ? (
        congrats === 1 ? (
          <Congratulations mood={true} />
        ) : (
          <Congratulations mood={false} />
        )
      ) : (
        ""
      )}
      <p>
        {done}/{amount} CONCLUÍDOS
      </p>
      <IconArange>
        {icons.map((iconNumber, index) => (
          <img key={`icon${index}`} src={icon[iconNumber]} alt="" />
        ))}
      </IconArange>
    </Footer>
  );
};
export default ZapFooter;
