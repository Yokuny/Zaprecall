import styled from "styled-components";
import Displace from "./components/Displace";
import GameHeader from "./components/GameHeader";
import { AnCard, Cards } from "./components/AnCard";
import ZapFooter from "./components/ZapFooter";
import cards from "./data/mock";

const AppStyled = styled.div`
  width: min(100%, 375px);
`;

const App = () => {
  return (
    <Displace>
      <AppStyled>
        <GameHeader />
        <Cards>
          {cards.map((card) => (
            <AnCard question={card.question} answer={card.answer} />
          ))}
        </Cards>
      </AppStyled>
      <ZapFooter amount={cards.length} />
    </Displace>
  );
};
export default App;
