import styled from "styled-components";
import Displace from "./components/Displace";
import GameHeader from "./components/GameHeader";
const AppStyled = styled.div`
  width: min(100%, 375px);
`;
const ButtonCard = styled.div`
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  gap: 25px;
`;
const App = () => {
  return (
    <Displace>
      <AppStyled>
        <GameHeader />
        <ButtonCard>Pergunta 1</ButtonCard>
        <ButtonCard>Pergunta 2</ButtonCard>
        <ButtonCard>Pergunta 3</ButtonCard>
      </AppStyled>
    </Displace>
  );
};
export default App;
