import { AnyAction } from "redux";
import { Tab1State } from "../types";

const initialState: Tab1State = {
  upgrades: [0, 0, 0],
}
export function tab1Reducer(state: Tab1State = initialState, action: AnyAction): Tab1State {
  switch (action.type) {
    case 'buy-upgrade':
      return {
        ...state,
        upgrades: [
          ...state.upgrades.slice(0, action.payload),
          state.upgrades[action.payload] + 1,
          ...state.upgrades.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
}