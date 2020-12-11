import React from 'react';
import styles from './style.module.scss';

const ChartPagination = () => (
  <div className={styles.ChartPagination}>
    <div className={styles['ChartPagination-arrow' + '' + 'ChartPagination-arrow__left']}><img /></div>
    <div className={styles['ChartPagination-title']}>Daily Cases</div>
    <div className={styles['ChartPagination-arrow' + ' ' + 'ChartPagination-arrow__right']}><img /></div>
  </div>
);

export default ChartPagination;
