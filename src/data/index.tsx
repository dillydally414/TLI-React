import { createStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { speedReducer, tabReducer, tab1Reducer } from './reducers';
import { GameState, Tab1State } from './types';

/*
this.game = {
        color: 0,
        tab: 1,
        sinceLastSave: 0,
        progress: [],
        speed: 0,
        push: 0,
        fuelQuality: 0,
        fuel: 1000,
        fuelCapacity: 1000,
        gasBrick: false
    }
*/

const gameReducer = combineReducers({
  speed: speedReducer,
  tab: tabReducer,
  tab1: tab1Reducer,
});

export const store = createStore(gameReducer);

export * from './selectors';
export * from './reducers';