import { FETCH_POSTS } from '../types/action-types';

import { IAppStore } from '../../interfaces/redux/appStore';

const initialState = {
  casesData: [], // it's must be string
  period: '',
  casesNumber: '',
  listBlockPressedButtonType: '',
  mapPressedButtonType: '',
  chartType: '',
  currentRegion: '', // initial 'GLOBAL', (typeString)
  summaryData: [
    {
      country: '', // for global Global
      countryCode: '', // for global 'GLOBAL'
      slug: '', // for global ''
      date: '', // for global from first country
      newConfirmed: 0,
      totalConfirmed: 0,
      newDeaths: 0,
      totalDeaths: 0,
      newRecovered: 0,
      totalRecovered: 0,
    },
  ],
};

const appStore = (
  state: IAppStore = initialState,
  { type, payload }: { type: string, payload: string },
) => {
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};

export default appStore;
