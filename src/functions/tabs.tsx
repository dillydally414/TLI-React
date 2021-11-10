import { selectTabValue, selectPointValue, store } from "../data";

export function changeTab(newTab: number): void {
  const currTab: number = selectTabValue(store.getState());
  const points: number = selectPointValue(store.getState());
  switch (newTab) {
    case 1:
      return;
    case 2:
      if (points >= 100) break;
      return;
    case 3:
      if (points >= 100) break;
      return;
    default:
      return;
  }
  store.dispatch({
    type: 'update-tab',
    payload: newTab
  });
}