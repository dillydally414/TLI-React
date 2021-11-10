import { AnyAction } from "redux";

export function pointsReducer(state: number = 0, action: AnyAction): number {
  switch (action.type) {
    case 'update-points':
      return action.payload;
    default:
      return state;
  }
}