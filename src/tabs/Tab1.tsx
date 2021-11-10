import { Button, Row, Col } from '../components';
import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { canBuy, buyUpgrade } from '../functions';
import { SubMenu } from 'rc-menu';
import { selectPointValue, store } from '../data';
import React from 'react';

const tabColor = "#00FF00";

const StyledP = styled.p`
  color: white;
  margin: 5rem;
`;

const SubTabButton = styled(Button)`
  && { 
    align-items: center;
    background: transparent;
    border-radius: 5px;
    border-color: ${tabColor};
    border-weight: 5px;
    display: flex;
    justify-content: center;
    width: 10rem;
    height: 5rem;
    font-size: 1rem;
    text-align: center;
    margin: 1rem;
    padding: auto;
    color: ${tabColor};
  }

  :hover {
    background: transparent;
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
`;

const UpgradeButton = styled(Button)`
  && { 
    align-items: center;
    background: transparent;
    border-radius: 5px;
    border-color: ${tabColor};
    border-weight: 5px;
    display: flex;
    justify-content: center;
    width: 10rem;
    height: 5rem;
    font-size: 1rem;
    text-align: center;
    margin: 1rem;
    padding: auto;
    color: ${tabColor};
  }

  :hover {
    background: transparent;
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
`;

function updatePoints(upgrades: Array<number>) {
  const points: number = selectPointValue(store.getState());
  let newPoints = points;
  for (let i = 0; i < upgrades.length; i++) {
    newPoints += (i + 1) * upgrades[i];
  }
  store.dispatch({
    type: 'update-points',
    payload: newPoints,
  });
}

function Tab1() {
  const points: number = useSelector(selectPointValue);
  const [subtab, setSubTab] = useState(1);
  const [upgrades, setUpgrades] = useState<Array<number>>([0, 0, 0]);
  setInterval(() => updatePoints(upgrades), 100);
  return (
    <div>
      <Row>
        <SubTabButton title="Upgrades" onClick={() => setSubTab(1)} />
        <SubTabButton title="Milestones" onClick={() => setSubTab(2)} />
      </Row>
      {subtab === 1 &&
        <Col>
          <Row><StyledP>{points}</StyledP></Row>
          <Row>
            <Button title="Upgrade 1"
              description={upgrades[0].toString()}
              style={canBuy(upgrades, 0) ? {} : {
                filter: "brightness(0.5)"
              }}
              onClick={() => { setUpgrades([upgrades[0] + 1, ...upgrades.slice(1)]); }} />
            <Button title="Upgrade 2"
              description={upgrades[1].toString()}
              style={canBuy(upgrades, 1) ? {} : {
                filter: "brightness(0.5)"
              }}
              onClick={() => { setUpgrades(buyUpgrade(upgrades, 1)) }} />
            <Button title="Upgrade 3"
              description={upgrades[2].toString()}
              style={canBuy(upgrades, 2) ? {} : {
                filter: "brightness(0.5)"
              }}
              onClick={() => { setUpgrades([...upgrades.slice(0, 2), upgrades[2] + 1]); }} />
          </Row>
        </Col>
      }
      {subtab === 2 &&
        <Row>
          <Button title="Milestone 1"
            description="milestone 1"
            onClick={() => { console.log("upgrade 1"); }} />
          <Button title="Milestone 2" onClick={() => { console.log("upgrade 2"); }} />
          <Button title="Milestone 3" onClick={() => { console.log("upgrade 3"); }} />
        </Row>}
    </div>
  );
}

export default Tab1;