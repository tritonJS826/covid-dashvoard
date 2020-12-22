import React from 'react';
import styles from './style.module.scss';

interface Props {
  string: string;
  number: number;
}

const DeseaseListLine: React.FC<Props> = ({ string, number }) => (
  <div className={styles.DeseaseListLine}>
    {/* <div className={styles['DeseaseListLine-title']}>Global Deseases</div> */}
    {string}
    <div className={styles.line__yellow}>desease</div>
    {number}
  </div>
);

export default DeseaseListLine;
