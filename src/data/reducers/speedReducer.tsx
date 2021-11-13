import { AnyAction } from "redux";

export function speedReducer(state: number = 0, action: AnyAction): number {
  switch (action.type) {
    case 'update-speed':
      return action.payload;
    default:
      return state;
  }
}