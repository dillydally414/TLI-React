import { AnyAction } from "redux";

export function tabReducer(state: number = 1, action: AnyAction): number {
  switch (action.type) {
    case 'update-tab':
      return action.payload;
    default:
      return state;
  }
}