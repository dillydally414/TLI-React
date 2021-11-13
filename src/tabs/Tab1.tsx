import { Button, Row, Col } from '../components';
import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { canBuy, buyUpgrade } from '../functions';
import { SubMenu } from 'rc-menu';
import { selectSpeedValue, selectTab1UpgradeValue, store } from '../data';
import React from 'react';
import { cost } from '../functions/upgrades';

const interval: number = 50;
setInterval(updateSpeed, interval);
const tabColor: string = "#00FF00";

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
    border-radius: 1rem;
    border-color: ${tabColor};
    border-weight: 1rem;
    display: flex;
    justify-content: center;
    width: 10rem;
    height: 10rem;
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

const Milestone = styled(UpgradeButton)`
  && {
    cursor: default;
  }

  :hover {
    color: ${tabColor};
    border-color: ${tabColor};
  }
`

function updateSpeed(): void {
  const speed: number = selectSpeedValue(store.getState());
  const upgrades: Array<number> = selectTab1UpgradeValue(store.getState());
  let newSpeed: number = speed;
  for (let i = 0; i < upgrades.length; i++) {
    newSpeed += (interval / 1000) * ((i + 1) * upgrades[i]);
  }
  store.dispatch({
    type: 'update-speed',
    payload: newSpeed,
  });
}

function Tab1() {
  const speed: number = useSelector(selectSpeedValue);
  const [subtab, setSubTab] = useState(1);
  const upgrades: Array<number> = useSelector(selectTab1UpgradeValue);
  return (
    <div>
      <Row>
        <SubTabButton title="Upgrades" onClick={() => setSubTab(1)} />
        <SubTabButton title="Milestones" onClick={() => setSubTab(2)} />
      </Row>
      {subtab === 1 &&
        <Col>
          <Row><StyledP>{speed.toFixed(2)}</StyledP></Row>
          <Row>
            <UpgradeButton title="Upgrade 1"
              description={upgrades[0].toString()}
              cost={cost(0)}
              style={canBuy(0) ? {} : {
                filter: "brightness(0.5)",
                cursor: "default",
              }}
              onClick={() => buyUpgrade(0)}
            />
            <UpgradeButton title="Upgrade 2"
              description={upgrades[1].toString()}
              cost={cost(1)}
              style={canBuy(1) ? {} : {
                filter: "brightness(0.5)",
                cursor: "default",
              }}
              onClick={() => buyUpgrade(1)} />
            <UpgradeButton title="Upgrade 3"
              description={upgrades[2].toString()}
              cost={cost(2)}
              style={canBuy(2) ? {} : {
                filter: "brightness(0.5)",
                cursor: "default",
              }}
              onClick={() => buyUpgrade(2)} />
          </Row>
        </Col>
      }
      {subtab === 2 &&
        <Row>
          <Milestone title="Milestone 1"
            description="milestone 1" />
          <Milestone title="Milestone 2" />
          <Milestone title="Milestone 3" />
        </Row>}
    </div>
  );
}

export default Tab1;