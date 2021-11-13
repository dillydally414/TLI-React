import { selectSpeedValue, selectTab1UpgradeValue, selectTabValue, store } from "../data";

export function buyUpgrade(
  upgrade: number,
): void {
  const tab: number = selectTabValue(store.getState());
  if (!canBuy(upgrade)) {
    return;
  }
  switch (tab) {
    case 1:
      buyUpgradeTab1(upgrade)
      return;
    case 2:
      return;
    case 3:
      return;
    default:
      return;
  }
}

function buyUpgradeTab1(upgrade: number): void {
  const speed: number = selectSpeedValue(store.getState());
  store.dispatch({
    type: 'update-speed',
    payload: speed - cost(upgrade),
  });
  store.dispatch({
    type: 'buy-upgrade',
    payload: upgrade,
  });
}

export function canBuy(
  upgrade: number,
): boolean {
  const tab: number = selectTabValue(store.getState());
  const speed: number = selectSpeedValue(store.getState());
  switch (tab) {
    case 1:
      return speed >= cost(upgrade);
    case 2:
      return false;
    case 3:
      return false;
    default:
      return false;
  }
}

export function cost(upgrade: number): number {
  const tab: number = selectTabValue(store.getState());
  switch (tab) {
    case 1:
      return costTab1(upgrade);
    case 2:
      return 0;
    case 3:
      return 0;
    default:
      return 0;
  }
}

function costTab1(upgrade: number): number {
  const upgrades: Array<number> = selectTab1UpgradeValue(store.getState());
  const costs: Array<number> = [
    upgrades[upgrade] * 10,
    upgrades[upgrade] * 100,
    upgrades[upgrade] * 1000,
  ];
  return costs[upgrade];
}