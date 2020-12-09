import { INCREASE_STORE, DECREASE_STORE } from '../types/action-types';

export const increaseCounter = (payload: string) => ({
  type: INCREASE_STORE,
  payload,
});

export const decreaseCounter = (payload: string) => ({
  type: DECREASE_STORE,
  payload,
});
