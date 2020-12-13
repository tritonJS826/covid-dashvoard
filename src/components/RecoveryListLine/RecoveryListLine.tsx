import React from 'react';
import List from '../List/List';
import styles from './style.module.scss';

const RecoveryListLine = () => (
  <div className={styles.RecoveryListLine}>
    <div className={styles['RecoveryListLine-title']}>Global Recoveries</div>
    <List />
  </div>
);

export default RecoveryListLine;
