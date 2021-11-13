import {  selectSpeedValue, selectTabValue, store } from "../data";

export function changeTab(newTab: number): void {
  const currTab: number = selectTabValue(store.getState());
  const speed: number = selectSpeedValue(store.getState());
  switch (newTab) {
    case 1:
      break;
    case 2:
      if (speed >= 100 && currTab === 1) break;
      return;
    case 3:
      if (speed >= 100 && currTab === 2) break;
      return;
    default:
      return;
  }
  store.dispatch({
    type: 'update-tab',
    payload: newTab
  });
}