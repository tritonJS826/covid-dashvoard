import {
  casesDataType,
  period,
  casesNumber,
  listBlockPressedButtonType,
  mapPressedButtonType,
  chartType,
} from '../types';

export interface IGlobal {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
}

export interface ISummaryResponse {
  Countries: Array<ISummaryData>,
  Date: string
  Global: IGlobal,
  Message: string
}
export interface ISummaryData {
  country: string,
  countryCode: string,
  slug: string,
  date: string,
  newConfirmed: number,
  totalConfirmed: number,
  newDeaths: number,
  totalDeaths: number,
  newRecovered: number,
  totalRecovered: number
}
export interface IAppStore {
  casesData: casesDataType,
  period: period,
  casesNumber: casesNumber,
  listBlockPressedButtonType: listBlockPressedButtonType,
  mapPressedButtonType: mapPressedButtonType,
  chartType: chartType,
  currentRegion: string,
  summaryData: Array<ISummaryData>
}

export interface ICountryInformation {
  flag: string,
  name: string,
  population: number,
}
