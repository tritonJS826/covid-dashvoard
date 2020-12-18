import {
  casesDataType,
  period,
  casesNumber,
  listBlockPressedButtonType,
  mapPressedButtonType,
  chartType,
} from '../../interfaces/types';

import { IAppStore } from '../../interfaces/redux/appStore';

import {
  SET_CASES_DATA,
  SET_PERIOD,
  SET_CASES_NUMBER,
  SET_LIST_BLOCK_PRESSED_BUTTON_TYPE,
  SET_MAP_PRESSED_BUTTON_TYPE,
  SET_CHART_TYPE,
  SET_CURRENT_REGION,
  SET_SUMMARY_DATA,
  SET_COUNTRY_INFO,
} from '../types/action-types';

const initialState = {
  casesData: 'deathCasesData' as casesDataType,
  period: 'allTime' as period,
  casesNumber: 'absolute' as casesNumber,
  listBlockPressedButtonType: 'region' as listBlockPressedButtonType,
  mapPressedButtonType: 'cumulativeCases' as mapPressedButtonType,
  chartType: 'logCases' as chartType,
  currentRegion: 'GLOBAL',
  summaryData: [],
  countryInformation: [],
};

const appStore = (
  state: IAppStore = initialState,
  { type, payload }: {
    type: string,
    payload: casesDataType
    | period
    | casesNumber
    | listBlockPressedButtonType
    | mapPressedButtonType
    | chartType
    | IAppStore
    | string
   },
) => {
  switch (type) {
    case SET_CASES_DATA:
      return {
        ...state,
        casesData: payload,
      };
    case SET_PERIOD:
      return {
        ...state,
        period: payload,
      };
    case SET_CASES_NUMBER:
      return {
        ...state,
        casesNumber: payload,
      };
    case SET_LIST_BLOCK_PRESSED_BUTTON_TYPE:
      return {
        ...state,
        listBlockPressedButtonType: payload,
      };
    case SET_MAP_PRESSED_BUTTON_TYPE:
      return {
        ...state,
        mapPressedButtonType: payload,
      };
    case SET_CHART_TYPE:
      return {
        ...state,
        chartType: payload,
      };
    case SET_CURRENT_REGION:
      return {
        ...state,
        currentRegion: payload,
      };
    case SET_SUMMARY_DATA:
      return {
        ...state,
        summaryData: payload,
      };
    case SET_COUNTRY_INFO:
      return {
        ...state,
        countryInformation: payload,
      };
    default:
      return state;
  }
};

export default appStore;
