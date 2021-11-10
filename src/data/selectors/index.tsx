import { GameState } from '..'

export const selectPointValue = (state: GameState): number => state.points;
export const selectTabValue = (state: GameState): number => state.tab;