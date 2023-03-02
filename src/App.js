import React, { useState } from "react";
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
  const [done, setDone] = useState(0);
  const [answerIcons, setAnswerIcons] = useState([]);
  return (
    <Displace>
      <AppStyled>
        <GameHeader />
        <Cards>
          {cards.map((card, index) => (
            <AnCard
              done={setDone}
              iconsArray={setAnswerIcons}
              cardNumber={index + 1}
              question={card.question}
              answer={card.answer}
              key={index}
            />
          ))}
        </Cards>
      </AppStyled>
      <ZapFooter done={done} amount={cards.length} icons={answerIcons} />
    </Displace>
  );
};
export default App;
