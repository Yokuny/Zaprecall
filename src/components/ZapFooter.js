import styled from "styled-components";

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
const ZapFooter = ({ done, amount }) => (
  <Footer>
    <p>
      {done}/{amount} CONCLUÍDOS
    </p>
  </Footer>
);
export default ZapFooter;
