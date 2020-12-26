import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IMergedElement } from '../../interfaces/redux/appStore';

import {
  setChartData,
  setMergedCountryCovidData,
} from './appStore';

import { getCovidSummary, getCountryInfo, getChartData } from '../../helper/getFetch';

export const getChartDataByCode = (code:string):
ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
): Promise<void> => {
  try {
    const response = await getChartData(code);

    if (response) {
      dispatch(setChartData(response));
    } else {
      console.log(`chartDataError: ${response}`);
    }
  } catch (e) {
    console.log(e);
  }
};

export const mergeCountryInfoCovidSummary = ():
ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
): Promise<void> => {
  try {
    const covidSummary = await getCovidSummary();
    const countryInfo = await getCountryInfo();

    if (countryInfo && covidSummary) {
      const mergedData = countryInfo.map((country) => {
        const countryCode = country.alpha2Code;

        const covidData = covidSummary.find(
          (el) => el.CountryCode.toLocaleUpperCase() === countryCode.toLocaleUpperCase(),
        );

        const mergedElement: IMergedElement = {
          ...country,
          ...covidData,
        };
        return mergedElement;
      });
      dispatch(setMergedCountryCovidData(mergedData));
    } else {
      console.log(`countryInfo: ${countryInfo} && covidSummary: ${covidSummary}`);
    }
  } catch (e) {
    console.log(e);
  }
};
