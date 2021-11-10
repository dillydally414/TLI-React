import { createStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { pointsReducer, tabReducer } from '.';

export type GameState = {
  points: number,
  tab: number,
}

const gameReducer = combineReducers({
  points: pointsReducer,
  tab: tabReducer,
});

export const store = createStore(gameReducer);

export * from './selectors/'
export * from './reducers/';