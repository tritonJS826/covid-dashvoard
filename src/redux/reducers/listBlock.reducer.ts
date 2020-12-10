import { SET_REGION_DATA, SET_PROVINCE_DATA, SET_COUNTRY_DATA } from '../types/action-types';

import { listBlockStore } from '../../interfaces/redux/listBlockStore';

const initialState = {
  region: [],
  province: [],
  country: [],
};

const counterStore = (
  state: listBlockStore = initialState,
  { type }: { type: string },
) => {
  switch (type) {
    case SET_REGION_DATA:
      return {
        ...state,
        counter: state.region,
      };
    case SET_PROVINCE_DATA:
      return {
        ...state,
        counter: state.province,
      };
    case SET_COUNTRY_DATA:
      return {
        ...state,
        counter: state.country,
      };
    default:
      return state;
  }
};

export default counterStore;
