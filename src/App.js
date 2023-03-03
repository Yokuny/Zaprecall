import React, { useState } from "react";
import styled from "styled-components";
import Displace from "./components/Displace";
import GameHeader from "./components/GameHeader";
import { AnCard, Cards } from "./components/AnCard";
import ZapFooter from "./components/ZapFooter";
import cards from "./data/mock";

const AppStyled = styled.div`
  width: min(100%, 375px);
  margin-bottom: ${(props) => (props.margin ? "101px" : "0px")};
`;
const App = () => {
  const [done, setDone] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [answerIcons, setAnswerIcons] = useState([]);
  const [congrats, setCongrats] = useState(0);
  const [margin, setMargin] = useState(false);
  if (!gameEnded) {
    if (done === cards.length) {
      setCongrats(1);
      answerIcons.forEach((icon) => {
        if (icon >= 2) {
          setCongrats(2);
        }
      });
      setGameEnded(true);
      setMargin(true);
    }
  }
  return (
    <Displace>
      <AppStyled margin={margin}>
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
      <ZapFooter done={done} amount={cards.length} icons={answerIcons} congrats={congrats} margin={margin} />
    </Displace>
  );
};
export default App;
