export type GameState = {
  speed: number,
  tab: number,
  tab1: Tab1State,
}

export type Tab1State = {
  upgrades: Array<number>,
}