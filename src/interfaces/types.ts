export type casesDataType = 'recoveryCasesData' | 'deseaseCasesData' | 'deathCasesData';
export type casesNumberType = 'absolute' | 'normalize100000';
export type periodType = 'allTime' | 'lastDay';
export type listBlockPressedButtonType = 'region' | 'province' | 'county';
export type mapPressedButtonType = 'cumulativeCases' | 'activeCAses' | 'incidentsRate' | 'case-fatalityRation' | 'testingRate';
export type chartType = 'logCases' | 'dailyCases' | 'dailyDases' | 'cumulativeCases' | 'cumulativeDeath';
export type lineType = casesDataType | 'plainListLine';
