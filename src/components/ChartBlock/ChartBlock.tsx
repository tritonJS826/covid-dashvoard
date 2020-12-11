import React from 'react';
import Chart from '../Chart';
import ChartPagination from '../ChartPagination';
import styles from './style.module.scss';

const ChartBlock = () => (
  <div className={styles.ChartBlock}>
    <Chart />
    <ChartPagination />
  </div>
);

export default ChartBlock;
