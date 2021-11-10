import { Button, Row, Col } from './components';
import { Tab1 } from './tabs';
import styled from 'styled-components';
import { store, selectTabValue } from './data';
import { changeTab } from './functions';

const green = "#00FF00";
const yellow = "#FFFF00";
const red = "#FF0000";
const dimGreen = "#117f0f";
const dimYellow = "#7f7f1f";
const dimRed = "#810906";

const Background = styled.div`
  background-color: black;
  display: flow-root;
  width: 100%;
  height: 100%;
`;

const RoundTabButton = styled(Button)`
  && {
    border-radius: 5rem;
    border-style: solid;
    border-color: transparent;
    height: 2rem;
    width: 2rem;
  }
`;

const GreenTabButton = styled(RoundTabButton)`
  background-color: ${props => props.color || "green"};
`;

const YellowTabButton = styled(RoundTabButton)`
  background-color: ${props => props.color || "yellow"};
`;

const RedTabButton = styled(RoundTabButton)`
  background-color: ${props => props.color || "red"};
`;

const OutlinedCol = styled(Col)`
  && {
    border-radius: 1rem;
    border-style: solid;
    border-color: ${yellow};
    background-color: transparent;
    width: 2.75rem;
    margin-top: 1rem;
  }
`;

function App() {
  const currentTab: number = selectTabValue(store.getState());
  return (
    <Background>
      <OutlinedCol>
        <RedTabButton
          color={currentTab === 3 ? red : dimRed}
          onClick={() => changeTab(3)}
        />
        <YellowTabButton
          color={currentTab === 2 ? yellow : dimYellow}
          onClick={() => changeTab(2)}
        />
        <GreenTabButton
          color={currentTab === 1 ? green : dimGreen}
          onClick={() => changeTab(1)}
        />
      </OutlinedCol>
      {currentTab === 1 && <Tab1/>}
    </Background>
  );
}

export default App;