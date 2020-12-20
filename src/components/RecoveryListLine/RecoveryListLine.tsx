import React from 'react';
// import List from '../List/List';
import styles from './style.module.scss';
// import appstyle from '../App/style.module.scss';

//     Recovery cases:
// array1 TotalRecovered
// array2 NewRecovered = TotalRecovered for the last available date
// array3 (TotalRecovered / 100 000 global population) = TotalRecoveredfor the 100 thnds population
// array4 (NewRecovered / 100 000 global population) = NewRecovered for the 100 thnds population

interface Props {
  string: string;
  number: number;
}

const RecoveryListLine: React.FC<Props> = ({ string, number }) => (
  <div className={styles.recoverylistline}>
    {/* <div className={appstyles.app_caption}>
      <div className={appstyles.app_caption_title}>Global Recoveries</div>
      <div className={appstyles.app_caption_quantity__green}>1234567</div>
    </div> */}
    {string}
    <div className={styles.line__green}>death</div>
    {number}
  </div>
);

export default RecoveryListLine;
