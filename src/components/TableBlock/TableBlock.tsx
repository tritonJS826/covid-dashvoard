import React from 'react';
import appstyles from '../App/style.module.scss';
import { casesDataType, casesNumberType } from '../../interfaces/types';

import List from '../List';
import { ISummaryData } from '../../interfaces/redux/appStore';

interface Props {
  casesData: casesDataType;
  casesNumber: casesNumberType;
  summaryData: Array<ISummaryData>;
  currentRegion: string;
  // eslint-disable-next-line no-unused-vars
  setCasesData: (type: casesDataType) => void;
  toggleCasesNumber: () => void;
}

const TableBlock: React.FC<Props> = ({
  casesData,
  casesNumber,
  summaryData,
  setCasesData,
  toggleCasesNumber,
}) => {
  const listData = () => summaryData.map((country) => ({
    id: country.CountryCode,
    country: country.Country,
    number: (function () {
      if (casesData === 'deathCasesData') {
        if (casesNumber === 'absolute') {
          return country.TotalDeaths;
        }
        return country.TotalDeaths / 1000000;
      }
      if (casesData === 'deseaseCasesData') {
        if (casesNumber === 'absolute') {
          return country.TotalConfirmed;
        }
        return country.TotalConfirmed / 1000000;
      }
      if (casesData === 'recoveryCasesData') {
        if (casesNumber === 'absolute') {
          return country.TotalRecovered;
        }
        return country.TotalRecovered / 1000000;
      }
      return casesData;
    }()),
  }));

  return (
    <div className={appstyles.app_component_block}>
      <div style={{ marginBottom: '5px' }}>
        <List
          title={casesData}
          subtitle={casesNumber}
          type={casesData}
          data={listData()}
        />
      </div>
      <div className={appstyles.app_buttons_wrapper}>
        <button type="button" className={appstyles.app_button} onClick={() => setCasesData('deathCasesData' as casesDataType)}>
          deaths
        </button>
        <button type="button" className={appstyles.app_button} onClick={() => setCasesData('recoveryCasesData' as casesDataType)}>
          recoveries
        </button>
        <button type="button" className={appstyles.app_button} onClick={() => setCasesData('deseaseCasesData' as casesDataType)}>
          deasease
        </button>
        <button type="button" className={appstyles.app_button} onClick={toggleCasesNumber}>
          {casesNumber}
        </button>
      </div>
    </div>
  );
};

export default TableBlock;
