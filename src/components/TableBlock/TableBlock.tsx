import React from 'react';
// import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';
import { casesDataType, casesNumberType } from '../../interfaces/types';

import List from '../List';
// import { countryData } from '../../interfaces/country';
import { IMergedElement } from '../../interfaces/redux/appStore';

// { /* https://api.covid19api.com/summary
//     Global:
//     array1 TotalConfirmed
//     array2 TotalDeaths
//     array3 TotalRecovered
//     array4 NewConfirmed = TotalConfirmed cases for the last available date
//     array5 NewDeaths = TotalDeaths for the last available date
//     array6 NewRecovered = TotalRecovered for the last available date
//     array7 (TotalConfirmed / 100 000 global population) = TotalConfirmed for the 100thnds popul
//     array8 (TotalDeaths / 100 000 global population) = TotalDeathsfor the 100 thnds population
//     array9 (TotalRecovered  / 100 000 global population) = TotalRecovered  for the 100thnds popul
//     array10 (NewConfirmed / 100 000 global population) = NewConfirmed for the 100thnds popul
//     array11 (NewDeaths / 100 000 global population) = NewDeaths for the 100 thnds population
//     array12 (NewRecovered / 100 000 global population) = NewRecovered for the 100thnds popultn
//     Countries:
//     Similar 12 arrays by country.
//   */ }

interface Props {
  casesData: casesDataType;
  casesNumber: casesNumberType;
  data: Array<IMergedElement>;
  currentRegion: string;
  // eslint-disable-next-line no-unused-vars
  setCasesData: (type: casesDataType) => void;
  toggleCasesNumber: () => void;
}

// const getKeyByCasesDataType = (type: casesDataType):
// 'TotalRecovered' | 'TotalConfirmed' | 'TotalDeaths' => {
//   if (type === 'recoveryCasesData') return 'TotalRecovered';
//   if (type === 'deseaseCasesData') return 'TotalConfirmed';
//   return 'TotalDeaths';
// };

const TableBlock: React.FC<Props> = ({
  casesData,
  casesNumber,
  data,
  // currentRegion,
  setCasesData,
  toggleCasesNumber,
}) => {
  const listData = (
    casesDataParam: casesDataType,
    casesNumberParam: casesNumberType,
    dataParam: IMergedElement[],
    // currentRegionParam,
  ) => dataParam.map((country: IMergedElement, i:number) => {
    const getNumberByCase = (countryData: IMergedElement, cases: casesDataType) => { // helper
      if (cases === 'deathCasesData') return country.TotalDeaths;
      if (cases === 'deseaseCasesData') return country.TotalConfirmed;
      return country.TotalRecovered;
    };

    const tryNormalize = (amount: number | undefined) => {
      if (!amount) return 0;
      // if (casesNumberParam === 'normalize100000') return (amount / country.population) * 100000;
      if (casesNumberParam === 'absolute') return amount;
      return Math.round((amount / country.population) * 100000 * 1000) / 1000;
    };

    console.log('try', tryNormalize(getNumberByCase(country, casesDataParam)));
    return {
      id: i,
      country: country.name,
      number: tryNormalize(getNumberByCase(country, casesDataParam)),
    };
  });

  return (
    <div className={appstyles.app_component_block}>
      {console.log('ListBlock', listData(casesData, casesNumber, data)[0])}
      {data && (
        <List
          title={casesData}
          subtitle={casesNumber}
          type={casesData}
          data={listData(casesData, casesNumber, data)}
        />
      )}
      <div className={appstyles.app_buttons_wrapper}>
        <button type="button" className={appstyles.app_button} onClick={() => setCasesData('deathCasesData' as casesDataType)}>
          deaths
        </button>
        <button type="button" className={appstyles.app_button} onClick={() => setCasesData('recoveryCasesData' as casesDataType)}>
          recoveries
        </button>
        <button type="button" className={appstyles.app_button} onClick={() => setCasesData('deseaseCasesData' as casesDataType)}>
          test
        </button>
        <button type="button" className={appstyles.app_button} onClick={toggleCasesNumber}>
          {casesNumber}
        </button>
      </div>
    </div>
  );
};

export default TableBlock;
