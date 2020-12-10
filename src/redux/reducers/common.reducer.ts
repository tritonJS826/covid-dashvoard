import { SET_REGION_DATA } from '../types/action-types';

import { commonData } from '../../interfaces/redux/commonData';

const initialState = {
  currentCountry: 'country',
  arrayCountries: [{}, {}],
  totalConfirmed: 0,
  totalDeaths: 0,
  totalRecovered: 0,
};

const counterStore = (
  state: commonData = initialState,
  { type }: { type: string },
) => {
  switch (type) {
    case SET_REGION_DATA:
      return {
        ...state,
        currentCountry: state.currentCountry,
      };
    default:
      return state;
  }
};

export default counterStore;
