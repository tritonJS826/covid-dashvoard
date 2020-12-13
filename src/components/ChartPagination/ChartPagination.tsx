import React from 'react';
import styles from './style.module.scss';

const ChartPagination = () => (
  <div className={styles.ChartPagination}>
    <div className={styles['ChartPagination-arrow ChartPagination-arrow__left']}><img alt="test" /></div>
    <div className={styles['ChartPagination-title']}>Daily Cases</div>
    <div className={styles['ChartPagination-arrow ChartPagination-arrow__right']}><img alt="test" /></div>
  </div>
);

export default ChartPagination;
