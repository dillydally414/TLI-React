import { createStore } from '@reduxjs/toolkit'
import { AnyAction } from 'redux';

export type GameState = {
  points: number,
  tab: number,
  subTab: number,
}

const initialState: GameState = {
  points: 0,
  tab: 1,
  subTab: 0,
};

function gameReducer(state: GameState = initialState, action: AnyAction): GameState {
  switch (action.type) {
    case 'update-points':
      return {
        ...state,
        points: action.payload
      };
    case 'update-tab':
      return {
        ...state,
        tab: action.payload,
      };;
    default:
      return state;
  }
}

export const store = createStore(gameReducer);

store.subscribe(() => console.log(store.getState()));

export {
  selectTabValue,
  selectPointValue,
} from './selectors'