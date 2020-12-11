import React from 'react';
import List from '../List/List';
import styles from './style.module.scss';

const DeseaseListLine = () => (
  <div className={styles.DeseaseListLine}>
    <div className={styles['DeseaseListLine-title']}>Global Deseases</div>
    <List />
  </div>
);

export default DeseaseListLine;
