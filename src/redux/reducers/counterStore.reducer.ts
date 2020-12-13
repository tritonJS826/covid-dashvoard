import { INCREASE_STORE, DECREASE_STORE } from '../types/action-types';

import { ICounterStore } from '../../interfaces/redux/counterStore';

const initialState = {
  counter: 0,
};

const counterStore = (
  state: ICounterStore = initialState,
  { type, payload }: { type: string; payload: string },
) => {
  switch (type) {
    case INCREASE_STORE:
      console.log(payload);
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE_STORE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterStore;
