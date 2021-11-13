import { GameState, Tab1State } from '../types'

export const selectSpeedValue = (state: GameState): number => state.speed;
export const selectTabValue = (state: GameState): number => state.tab;
export const selectTab1Value = (state: GameState): Tab1State => state.tab1;
export const selectTab1UpgradeValue = (state: GameState): Array<number> => selectTab1Value(state).upgrades;