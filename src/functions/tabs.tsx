import { selectTabValue, selectPointValue, store } from "../data";

export function changeTab(newTab: number): void {
  const currTab: number = selectTabValue(store.getState());
  const points: number = selectPointValue(store.getState());
  switch (newTab) {
    case 1:
      break;
    case 2:
      if (points >= 100 && currTab === 1) break;
      return;
    case 3:
      if (points >= 100 && currTab === 2) break;
      return;
    default:
      return;
  }
  store.dispatch({
    type: 'update-tab',
    payload: newTab
  });
}