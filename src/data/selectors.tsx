import { GameState } from '.'

export const selectTabValue = (state: GameState): number => state.tab;
export const selectPointValue = (state: GameState): number => state.points;
