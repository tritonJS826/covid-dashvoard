import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IMergedElement } from '../../interfaces/redux/appStore';

import {
  setMergedCountryCovidData,
} from './appStore';

import { getCovidSummary, getCountryInfo } from '../../helper/getFetch';

// export const getCovidSummary = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
//   dispatch: ThunkDispatch<{}, {}, AnyAction>,
// ): Promise<void> => {
//   try {
//     const responseRaw = await fetch('https://api.covid19api.com/summary');

//     if (responseRaw.ok) {
//       const response: ISummaryResponse = await responseRaw.json();

//       const summaryData: Array<ISummaryData> = response.Countries;
//       const {
//         NewConfirmed,
//         TotalConfirmed,
//         NewDeaths,
//         TotalDeaths,
//         NewRecovered,
//         TotalRecovered,
//       } = response.Global;
//       const date = response.Date;

//       const global: ISummaryData = {
//         Country: 'GLOBAL',
//         CountryCode: '',
//         Slug: '',
//         NewConfirmed,
//         TotalConfirmed,
//         NewDeaths,
//         TotalDeaths,
//         NewRecovered,
//         TotalRecovered,
//         date,
//       };

//       dispatch(setSummaryData([...summaryData, global]));
//     } else {
//       console.log('serverError');
//     }
//   } catch (e) {
//     console.log('fetchError');
//   }
// };

// export const getCountryInfo = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
//   dispatch: ThunkDispatch<{}, {}, AnyAction>,
// ): Promise<void> => {
//   const responseRaw = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag;latlng;alpha2Code');
//   if (responseRaw.ok) {
//     const response: Array<ICountryInformation> = await responseRaw.json();

//     dispatch(setCountryInfo(response));
//   } else {
//     console.log('fetchError');
//   }
// };
export const asd = () => {};

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
      console.log('helper', mergedData);
      dispatch(setMergedCountryCovidData(mergedData));
    } else {
      console.log(`countryInfo: ${countryInfo} && covidSummary: ${covidSummary}`);
    }
  } catch (e) {
    console.log(e);
  }
};
