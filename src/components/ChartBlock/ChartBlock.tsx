import React from 'react';
import Chart from '../Chart';
import ChartPagination from '../ChartPagination';
import styles from './style.module.scss';
import appstyles from '../App/style.module.scss';

const ChartBlock = () => (
  <div className={`${appstyles.app_component_block} ${styles.chartblock}`}>
    <Chart />
    <ChartPagination />
  </div>
);

export default ChartBlock;
