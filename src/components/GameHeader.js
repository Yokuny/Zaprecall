import styled from "styled-components";
import zapRecallLogo from "../assets/logo.png";
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 48px;
  img {
    height: 60px;
    margin-right: 23px;
    object-fit: contain;
  }
  img:hover {
    animation: balance 1s infinite, flicker 1s infinite;
  }
  h1 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    color: white;
    letter-spacing: -0.012em;
    transform: rotate(0.58deg);
  }
  h1:hover {
    animation: balance 1s infinite;
  }
`;
const GameHeader = () => (
  <Header>
    <img src={zapRecallLogo} alt="logo" />
    <h1>ZapRecall</h1>
  </Header>
);
export default GameHeader;
