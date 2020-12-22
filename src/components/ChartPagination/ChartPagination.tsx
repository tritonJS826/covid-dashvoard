import React from 'react';
import appstyles from '../App/style.module.scss';

import { casesDataType, casesNumberType } from '../../interfaces/types';

interface Props {
  casesData: casesDataType;
  casesNumber: casesNumberType
}

const ChartPagination: React.FC<Props> = ({ casesData, casesNumber }) => (
  <div className={appstyles.app_buttons_wrapper}>
    <button type="button" className={appstyles.app_button}>{casesData}</button>
    <button type="button" className={appstyles.app_button}>{casesNumber}</button>
  </div>
);

export default ChartPagination;
