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
    animation: logo-animation 1s infinite, logo-flick 1s infinite;
  }
  @keyframes logo-flick {
    5% {
      filter: brightness(100%);
    }
    10% {
      filter: brightness(120%);
    }
    15% {
      filter: brightness(100%);
    }
  }
  h1 {
    color: white;
    font-size: 36px;
    letter-spacing: -0.012em;
    transform: rotate(0.58deg);
  }
  h1:hover {
    animation: logo-animation 1s infinite;
  }
  @keyframes logo-animation {
    0% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(4deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-4deg);
    }
  }
`;
const GameHeader = () => (
  <Header>
    <img src={zapRecallLogo} alt="logo" />
    <h1>ZapRecall</h1>
  </Header>
);
export default GameHeader;
