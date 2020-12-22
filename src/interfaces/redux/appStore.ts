import {
  casesDataType,
  periodType,
  casesNumberType,
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
  Country: string,
  CountryCode: string,
  Slug: string,
  Date: string,
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
}
export interface IAppStore {
  casesData: casesDataType,
  period: periodType,
  casesNumber: casesNumberType,
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
  latlng: [number, number],
  alpha2Code: string,
}

export interface ICurrentChartData {
  month: string,
  value: number,
}
