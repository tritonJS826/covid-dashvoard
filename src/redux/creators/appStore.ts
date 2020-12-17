import {
  casesDataType,
  period,
  casesNumber,
  listBlockPressedButtonType,
  mapPressedButtonType,
  chartType,
} from '../../interfaces/types';

import { ISummaryData, ICountryFlags } from '../../interfaces/redux/appStore';

import {
  SET_CASES_DATA,
  SET_PERIOD,
  SET_CASES_NUMBER,
  SET_LIST_BLOCK_PRESSED_BUTTON_TYPE,
  SET_MAP_PRESSED_BUTTON_TYPE,
  SET_CHART_TYPE,
  SET_CURRENT_REGION,
  SET_SUMMARY_DATA,
  SET_COUNTRY_FLAGS,
} from '../types/action-types';

export const setCasesData = (payload: casesDataType) => ({
  type: SET_CASES_DATA,
  payload,
});

export const setPeriod = (payload: period) => ({
  type: SET_PERIOD,
  payload,
});

export const setCasesNumber = (payload: casesNumber) => ({
  type: SET_CASES_NUMBER,
  payload,
});

export const setListBlockPressedButtonType = (
  type: string,
  payload: listBlockPressedButtonType,
) => ({
  type: SET_LIST_BLOCK_PRESSED_BUTTON_TYPE,
  payload,
});

export const setMapPressedButtonType = (payload: mapPressedButtonType) => ({
  type: SET_MAP_PRESSED_BUTTON_TYPE,
  payload,
});

export const setChartType = (payload: chartType) => ({
  type: SET_CHART_TYPE,
  payload,
});

export const setCurrentRegion = (payload: string) => ({
  type: SET_CURRENT_REGION,
  payload,
});

export const setSummaryData = (payload: Array<ISummaryData>) => ({
  type: SET_SUMMARY_DATA,
  payload,
});

export const setCountryFlags = (payload: Array<ICountryFlags>) => ({
  type: SET_COUNTRY_FLAGS,
  payload,
});
