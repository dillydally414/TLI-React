export function buyUpgrade(
  upgrades: Array<number>,
  buying: number,
): Array<number> {
  if (!canBuy(upgrades, buying)) {
    return upgrades;
  } else {
    return [...upgrades.slice(0, buying), 
      upgrades[buying] + 1, 
      ...upgrades.slice(buying + 1)];
  }
}

export function canBuy(
  upgrades: Array<number>,
  buying: number,
): boolean {
  return upgrades[buying] < 3;
}