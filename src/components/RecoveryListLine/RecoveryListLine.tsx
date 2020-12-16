import React from 'react';
import List from '../List/List';
import styles from './style.module.scss';

//     Recovery cases:
//     array1 TotalRecovered
//     array2 NewRecovered = TotalRecovered for the last available date
//     array3 (TotalRecovered / 100 000 global population) = TotalRecoveredfor the 100 thnds population
//     array4 (NewRecovered / 100 000 global population) = NewRecovered for the 100 thnds population

const RecoveryListLine = () => (
  <div className={styles.RecoveryListLine}>
    <div className={styles['recoverylistline-title']}>Global Recoveries</div>
    <List />
  </div>
);

export default RecoveryListLine;
