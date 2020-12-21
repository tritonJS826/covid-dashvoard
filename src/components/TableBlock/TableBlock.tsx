import React from 'react';
import appstyles from '../App/style.module.scss';
import styles from './style.module.scss';
import { casesDataType } from '../../interfaces/types';

import List from '../List';
import { countryData } from '../../interfaces/country';

const countries: Array<countryData> = [
  { id: 1, country: 'US', number: 10000 },
  { id: 2, country: 'Russia', number: 20000 },
  { id: 3, country: 'Brazil', number: 30000 },
  { id: 4, country: 'Canada', number: 50000 },
  { id: 5, country: 'Australia', number: 40000 },
  { id: 6, country: 'Brazil', number: 30000 },
  { id: 7, country: 'Canada', number: 50000 },
  { id: 8, country: 'Australia', number: 40000 },
  { id: 9, country: 'Brazil', number: 30000 },
  { id: 10, country: 'Canada', number: 50000 },
  { id: 11, country: 'Australia', number: 40000 },
  { id: 12, country: 'Brazil', number: 30000 },
  { id: 13, country: 'Canada', number: 50000 },
];

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
    // eslint-disable-next-line no-unused-vars
  setCasesData: (type: casesDataType) => void;
}

const TableBlock: React.FC<Props> = ({ casesData, setCasesData }) => (
  <div className={`${appstyles.app_component_block} ${styles.tableblock}`}>
    <List
      title={casesData}
      subtitle="subtitle"
      type={casesData}
      data={countries}
    />
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
      <button type="button" className={appstyles.app_button} onClick={() => {}}>
        results
      </button>
    </div>
  </div>
);

export default TableBlock;
