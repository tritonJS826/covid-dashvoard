import React from 'react';
import appstyles from '../App/style.module.scss';

import { casesDataType } from '../../interfaces/types';

interface Props {
  // eslint-disable-next-line
  setCasesData: (type: casesDataType) => void
}

const ChartPagination: React.FC<Props> = ({ setCasesData }) => (
  <div className={appstyles.app_buttons_wrapper}>
    <button type="button" className={appstyles.app_button} onClick={() => setCasesData('deathCasesData')}>death</button>
    <button type="button" className={appstyles.app_button} onClick={() => setCasesData('deseaseCasesData')}>desease</button>
    <button type="button" className={appstyles.app_button} onClick={() => setCasesData('recoveryCasesData')}>recovered</button>
  </div>
);

export default ChartPagination;
