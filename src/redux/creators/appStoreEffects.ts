import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  ISummaryData, ISummaryResponse, ICountryInformation,
} from '../../interfaces/redux/appStore';

import {
  setSummaryData,
  setCountryInfo,
} from './appStore';

export const getCovidSummary = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
): Promise<void> => {
  const responseRaw = await fetch('https://api.covid19api.com/summary');

  if (responseRaw.ok) {
    const response: ISummaryResponse = await responseRaw.json();

    const summaryData: Array<ISummaryData> = response.Countries;
    const {
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
    } = response.Global;
    const date = response.Date;

    const global: ISummaryData = {
      country: 'GLOBAL',
      countryCode: '',
      slug: '',
      newConfirmed: NewConfirmed,
      totalConfirmed: TotalConfirmed,
      newDeaths: NewDeaths,
      totalDeaths: TotalDeaths,
      newRecovered: NewRecovered,
      totalRecovered: TotalRecovered,
      date,
    };

    dispatch(setSummaryData([...summaryData, global]));
  } else {
    console.log('fetchError');
  }
};

export const getCountryFlags = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
): Promise<void> => {
  const responseRaw = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag');
  if (responseRaw.ok) {
    const response: Array<ICountryInformation> = await responseRaw.json();

    dispatch(setCountryInfo([...response]));
  } else {
    console.log('fetchError');
  }
};
