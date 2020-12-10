import { GET_REGION_DATA, GET_PROVINCE_DATA, GET_COUNTRY_DATA } from '../types/action-types';

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
    case GET_REGION_DATA:
      return {
        ...state,
        counter: state.region,
      };
    case GET_PROVINCE_DATA:
      return {
        ...state,
        counter: state.province,
      };
    case GET_COUNTRY_DATA:
      return {
        ...state,
        counter: state.country,
      };
    default:
      return state;
  }
};

export default counterStore;
