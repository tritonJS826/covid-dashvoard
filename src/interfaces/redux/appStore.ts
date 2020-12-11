import {
  casesData,
  period,
  casesNumber,
  listBlockPressedButtonType,
  mapPressedButtonType,
  chartType,
} from '../types';

export interface ISummaryData {
    country: string, // for global Global
    countryCode: string, // for global 'GLOBAL'
    slug: string, // for global ''
    date: string, // for global from first country
    newConfirmed: number,
    totalConfirmed: number,
    newDeaths: number,
    totalDeaths: number,
    newRecovered: number,
    totalRecovered: number
}
export interface IAppStore {
    casesData: casesData, // it's must be string
    period: period,
    casesNumber: casesNumber,
    listBlockPressedButtonType: listBlockPressedButtonType,
    mapPressedButtonType: mapPressedButtonType,
    chartType: chartType,
    currentRegion: string, // initial 'GLOBAL', (typeString)
    summaryData: Array<ISummaryData>
}
